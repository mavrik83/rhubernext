/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, PropsWithChildren, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Dialog, Transition } from '@headlessui/react';
import { HiXMark, HiBars3 } from 'react-icons/hi2';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import Link from 'next/link';
import logo from '../../../public/knowledgeTonicLogo2.png';
import { classNames } from '../../utils/classNames';
import { NavState, useNavState } from '../../utils/zustand/navState';

const scrollTo = (id: string, behavior: 'smooth' | 'auto') => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior, block: 'start' });
    }
};

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navState = useNavState((state) => state.navState);
    const { pathname, push } = useRouter();

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNavClick = (item: NavState) => {
        if (pathname !== '/') {
            push('/').then(() =>
                scrollTo(item.id, isMobile ? 'auto' : 'smooth'),
            );
        }
        scrollTo(item.id, isMobile ? 'auto' : 'smooth');
        setSidebarOpen(false);
    };

    return (
        <div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                    as='div'
                    className='relative z-40 md:hidden'
                    onClose={setSidebarOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter='transition-opacity ease-linear duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='transition-opacity ease-linear duration-300'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-neutral-800 bg-opacity-50' />
                    </Transition.Child>

                    <div className='fixed inset-0 z-40 flex'>
                        <Transition.Child
                            as={Fragment}
                            enter='transition ease-in-out duration-300 transform'
                            enterFrom='-translate-x-full'
                            enterTo='translate-x-0'
                            leave='transition ease-in-out duration-300 transform'
                            leaveFrom='translate-x-0'
                            leaveTo='-translate-x-full'
                        >
                            <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-neutral-800'>
                                <Transition.Child
                                    as={Fragment}
                                    enter='ease-in-out duration-300'
                                    enterFrom='opacity-0'
                                    enterTo='opacity-100'
                                    leave='ease-in-out duration-300'
                                    leaveFrom='opacity-100'
                                    leaveTo='opacity-0'
                                >
                                    <div className='absolute top-0 right-0 -mr-12 pt-2'>
                                        <button
                                            type='button'
                                            className='ml-1 flex h-10 w-10 items-center justify-center rounded-full '
                                            onClick={() =>
                                                setSidebarOpen(false)
                                            }
                                        >
                                            <span className='sr-only'>
                                                Close sidebar
                                            </span>
                                            <HiXMark
                                                className='h-6 w-6 text-orange-600'
                                                aria-hidden='true'
                                            />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className='h-0 flex-1 overflow-y-auto pt-5 pb-4 bg-neutral-900'>
                                    <div className='flex flex-shrink-0 items-center px-4'>
                                        <Image
                                            src={logo}
                                            alt='Knowledge Tonic Logo'
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <nav className='mt-5 space-y-1 px-2'>
                                        {navState.map((item) => {
                                            if (item.name === 'Writings') {
                                                return (
                                                    <Link
                                                        href={item.href}
                                                        key={item.id}
                                                        scroll
                                                    >
                                                        <a
                                                            onClick={() =>
                                                                setSidebarOpen(
                                                                    false,
                                                                )
                                                            }
                                                            className={classNames(
                                                                pathname ===
                                                                    item.href
                                                                    ? 'bg-neutral-800 text-neutral-200'
                                                                    : 'text-neutral-200 hover:bg-neutral-700',
                                                                'group flex items-center px-2 py-2 text-base rounded-md w-full',
                                                            )}
                                                        >
                                                            <item.icon
                                                                className={classNames(
                                                                    pathname !==
                                                                        item.href
                                                                        ? 'text-orange-600'
                                                                        : 'text-orange-600 group-hover:text-orange-600',
                                                                    'mr-4 flex-shrink-0 h-6 w-6',
                                                                )}
                                                                aria-hidden='true'
                                                            />
                                                            {item.name}
                                                        </a>
                                                    </Link>
                                                );
                                            }
                                            return (
                                                <button
                                                    type='button'
                                                    key={item.id}
                                                    onClick={() =>
                                                        handleNavClick(item)
                                                    }
                                                    className={classNames(
                                                        item.current &&
                                                            pathname ===
                                                                item.href
                                                            ? 'bg-neutral-800 text-neutral-200'
                                                            : 'text-neutral-200 hover:bg-neutral-700',
                                                        'group flex items-center px-2 py-2 text-base rounded-md w-full',
                                                    )}
                                                >
                                                    <item.icon
                                                        className={classNames(
                                                            item.current &&
                                                                pathname ===
                                                                    item.href
                                                                ? 'text-orange-600'
                                                                : 'text-orange-600 group-hover:text-orange-600',
                                                            'mr-4 flex-shrink-0 h-6 w-6',
                                                        )}
                                                        aria-hidden='true'
                                                    />
                                                    {item.name}
                                                </button>
                                            );
                                        })}
                                    </nav>
                                </div>
                                <div className='flex flex-shrink-0 bg-neutral-900 p-4'>
                                    <div className='group block w-full flex-shrink-0'>
                                        <div className='flex items-center mb-3'>
                                            <a href='https://www.linkedin.com/in/mavrik83/'>
                                                <SiLinkedin className='text-2xl text-teal-500 mr-3' />
                                            </a>
                                            <a href='https://www.github.com/mavrik83'>
                                                <SiGithub className='text-2xl text-teal-500 mx-3' />
                                            </a>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='text-sm text-neutral-200'>
                                                Made with{' '}
                                                <span className='text-orange-600'>
                                                    ❤️
                                                </span>{' '}
                                                in NY
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        <div className='w-14 flex-shrink-0'>
                            {/* Force sidebar to shrink to fit close icon */}
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className='hidden md:fixed md:inset-y-0 md:flex md:w-44 md:flex-col'>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className='flex min-h-0 flex-1 flex-col bg-neutral-900'>
                    <div className='flex flex-1 flex-col overflow-y-auto pt-5 pb-4'>
                        <div className='flex flex-shrink-0 items-center px-4'>
                            <Image
                                src={logo}
                                alt='Knowledge Tonic Logo'
                                width={40}
                                height={40}
                            />
                        </div>
                        <nav className='mt-5 flex-1 space-y-1 px-2'>
                            {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
                            {navState.map((item) => {
                                if (item.name === 'Writings') {
                                    return (
                                        <Link
                                            href={item.href}
                                            key={item.id}
                                            scroll
                                        >
                                            <a
                                                className={classNames(
                                                    pathname === item.href
                                                        ? 'bg-neutral-800 text-neutral-200'
                                                        : 'text-neutral-200 hover:bg-neutral-700 hover:text-neutral-200',
                                                    'group flex flex-grow items-center px-2 py-2 text-sm rounded-md hover:cursor-pointer w-full',
                                                )}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                        pathname !== item.href
                                                            ? 'text-orange-600'
                                                            : 'text-orange-600 group-hover:text-orange-600',
                                                        'mr-3 flex-shrink-0 h-6 w-6',
                                                    )}
                                                    aria-hidden='true'
                                                />
                                                {item.name}
                                            </a>
                                        </Link>
                                    );
                                }
                                return (
                                    <button
                                        type='button'
                                        key={item.name}
                                        onClick={() => handleNavClick(item)}
                                        className={classNames(
                                            item.current &&
                                                pathname === item.href
                                                ? 'bg-neutral-800 text-neutral-200'
                                                : 'text-neutral-200 hover:bg-neutral-700 hover:text-neutral-200',
                                            'group flex flex-grow items-center px-2 py-2 text-sm rounded-md hover:cursor-pointer w-full',
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current &&
                                                    pathname === item.href
                                                    ? 'text-orange-600'
                                                    : 'text-orange-600 group-hover:text-orange-600',
                                                'mr-3 flex-shrink-0 h-6 w-6',
                                            )}
                                            aria-hidden='true'
                                        />
                                        {item.name}
                                    </button>
                                );
                            })}
                        </nav>
                        <div className='flex flex-shrink-0 bg-neutral-900 p-4'>
                            <div className='group block w-full flex-shrink-0'>
                                <div className='flex items-center mb-3'>
                                    <a href='https://www.linkedin.com/in/mavrik83/'>
                                        <SiLinkedin className='text-2xl text-teal-500 mr-3' />
                                    </a>
                                    <a href='https://www.github.com/mavrik83'>
                                        <SiGithub className='text-2xl text-teal-500 mx-3' />
                                    </a>
                                </div>
                                <div className='flex items-center '>
                                    <p className='text-sm text-neutral-200'>
                                        Made with{' '}
                                        <span className='text-orange-600'>
                                            ❤️
                                        </span>{' '}
                                        in NY
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-1 flex-col md:pl-48'>
                <div className='sticky top-0 z-10 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden'>
                    <button
                        type='button'
                        className='-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-neutral-200 hover:text-neutral-800'
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className='sr-only'>Open sidebar</span>
                        <HiBars3
                            className='h-7 w-7 text-orange-600 bg-neutral-900 rounded-md p-0.5'
                            aria-hidden='true'
                        />
                    </button>
                </div>
                <main className='flex-1'>
                    <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
                        {/* Replace with your content */}
                        <div>{children}</div>
                        {/* /End replace */}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
