/* eslint-disable consistent-return */
import React from 'react';
import { AiFillCode } from 'react-icons/ai';
import { GiBookshelf, GiHelicopter, GiUsaFlag } from 'react-icons/gi';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { useInView } from 'react-intersection-observer';
import { classNames } from '../../utils/classNames';
import { useNavState } from '../../utils/zustand/navState';

const expItems = [
    {
        company: 'Remine Inc.',
        title: 'Software Engineer',
        date: 'July 2021 - Present',
        description:
            'Working primarily with TypeScript, React, Express, and PostgreSQL contributing to a real estate data platform. I am currently working on our SSO gateway and data pipelines for metrics and reporting.',
        icon: AiFillCode,
        lineColor: 'border-orange-800',
        iconColor: 'bg-orange-800',
    },
    {
        company: 'Souper Bowl of Caring',
        title: 'Software Engineer',
        date: 'April 2021 - Present',
        description:
            'Non-profit orginization platform to facilitate food donations and campaigns for local food banks. Worked with TypeScript, Next.js, and GraphQL. Built out a new donations page and form UI flow for the website.',
        icon: AiFillCode,
        lineColor: 'border-orange-700',
        iconColor: 'bg-gradient-to-b from-orange-800 to-orange-700',
    },
    {
        company: 'American University',
        title: 'Bachelor of Arts, Philosophy',
        date: 'Jan 2018 - Jan 2020',
        description:
            'I entered the university as a philosophy major because I wanted to learn how to think better. The thinking tools I gained in philosophy have been invaluable in my career as a software engineer.',
        icon: GiBookshelf,
        lineColor: 'border-orange-600',
        iconColor: 'bg-gradient-to-b from-orange-700 to-orange-600',
    },
    {
        company: 'Metro Aviation',
        title: 'Helicopter Mechanic',
        date: 'May 2013 - March 2018',
        description:
            'I was a Site Mechanic for EMS helicopters. My responsibilities included maintaining our aircraft, troubleshooting electircal and mechanical issues, and performing routine inspections. I also worked on the maintenance of the ground support equipment and administrative tasks for the site.',
        icon: GiHelicopter,
        lineColor: 'border-orange-500',
        iconColor: 'bg-gradient-to-b from-orange-600 to-orange-500',
    },
    {
        company: 'US Army',
        title: 'Helicopter Mechanic',
        date: 'November 2001 - December 2011',
        description:
            'I broke stuff and fixed stuff. Then I grew up a little bit and fixed stuff better and broke stuff less. Seriously though, I grew up in the Army and learned to be a leader, a team player, and a problem solver.',
        icon: GiUsaFlag,
        lineColor: 'border-orange-400',
        iconColor: 'bg-gradient-to-b from-orange-500 to-orange-400',
    },
];

const Experience = () => {
    const { ref: experienceRef, inView } = useInView({
        threshold: 0.4,
    });

    const toggleCurrent = useNavState((state) => state.toggleCurrent);

    React.useEffect(() => {
        toggleCurrent('experience', inView);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    return (
        <div
            ref={experienceRef}
            id='experience'
            className='mt-10 min-h-screen-3/4'
        >
            <h2 className='text-3xl tracking-tight text-neutral-200 sm:text-4xl'>
                Experience
            </h2>
            <ol className='ml-5 mt-12'>
                {expItems.map((item) => (
                    <li
                        key={item.company}
                        className={classNames(item.lineColor, 'border-l-2')}
                    >
                        <div className='md:flex flex-start'>
                            <div
                                className={classNames(
                                    item.iconColor,
                                    'w-8 h-8 flex items-center justify-center rounded-full -ml-[1.1rem]',
                                )}
                            >
                                <item.icon className='text-neutral-200 w-6 h-6 rounded-full' />
                            </div>
                            <div className='block p-6 rounded-lg shadow-sm shadow-orange-700 sm:shadow-none bg-neutral-900 max-w-md ml-6 sm:mb-10'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-orange-600 text-2xl'>
                                        {item.company}
                                    </p>
                                    <p className='text-neutral-200 text-base sm:text-xl'>
                                        {item.date}
                                    </p>
                                </div>
                                <p className='text-neutral-200 text-lg sm:mb-4'>
                                    {item.title}
                                </p>
                                <p className='text-neutral-200 sm:mb-6'>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
            <div className='py-12 px-4 mx-auto sm:px-6 md:flex md:flex-col md:py-24 md:px-30 md:max-w-screen-md lg:px-40 opacity-30 hover:opacity-60 hover:scale-110 transition-all transform ease-in-out duration-[3000ms]'>
                <blockquote className='mt-6 md:flex md:flex-grow md:flex-col pointer-events-none'>
                    <div className='relative text-lg text-neutral-200 md:flex-grow'>
                        <RiDoubleQuotesL className='absolute top-0 left-0 h-12 w-12 -translate-x-3 -translate-y-2 transform text-orange-600 opacity-50' />
                        <p className='relative italic'>
                            Man is born free, and he is everywhere in chains.
                            Those who think themselves the masters of others are
                            indeed greater slaves than they.
                        </p>
                    </div>
                    <footer className='mt-8'>
                        <div className='flex flex-row-reverse sm:flex-row'>
                            <div className='mr-10 sm:ml-10'>
                                <div className='text-neutral-200'>
                                    Jean-Jacques Rousseau
                                </div>
                            </div>
                        </div>
                    </footer>
                </blockquote>
            </div>
        </div>
    );
};

export default Experience;
