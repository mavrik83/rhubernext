/* eslint-disable consistent-return */
import React from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { useInView } from 'react-intersection-observer';
import { useNavState } from '../../utils/zustand/navState';

const HeroSection = () => {
    const { ref: homeRef, inView } = useInView({
        threshold: 0.4,
    });

    const toggleCurrent = useNavState((state) => state.toggleCurrent);

    React.useEffect(() => {
        toggleCurrent('home', inView);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    return (
        <div ref={homeRef} id='home' className='min-h-screen'>
            <div className='mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <p className='mt-1 text-2xl font-normal tracking-tight sm:text-3xl lg:text-4xl text-orange-600'>
                        Welcome
                    </p>
                    <p className='mt-5 text-4xl font-normal tracking-tight sm:text-5xl lg:text-6xl'>
                        I&apos;m Ryan Huber
                    </p>
                    <p className='mx-auto mt-5 mb-5 max-w-xl text-2xl'>
                        Full Stack{' '}
                        <span className='text-orange-600'>Engineer</span>
                    </p>
                </div>
                <div className='pt-12 px-4 mx-auto sm:px-6 md:flex md:flex-col md:pt-16 md:px-30 md:max-w-screen-md lg:px-40 opacity-30 hover:opacity-60 hover:scale-110 transition-all transform ease-in-out duration-[3000ms]'>
                    <blockquote className='mt-6 md:flex md:flex-grow md:flex-col pointer-events-none'>
                        <div className='relative text-lg text-neutral-200 md:flex-grow'>
                            <RiDoubleQuotesL className='absolute top-0 left-0 h-12 w-12 -translate-x-3 -translate-y-2 transform text-orange-600 opacity-50' />
                            <p className='relative italic'>
                                We may assume the superiority ceteris paribus
                                [all things being equal] of the demonstration
                                which derives from fewer postulates or
                                hypotheses.
                            </p>
                        </div>
                        <footer className='mt-8'>
                            <div className='flex flex-row-reverse sm:flex-row'>
                                <div className='mr-10 sm:ml-10'>
                                    <div className='text-neutral-200'>
                                        Aristotle
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </blockquote>
                </div>
                <div className='pt-12 px-4 mx-auto sm:px-6 md:flex md:flex-col md:pt-16 md:px-30 md:max-w-screen-md lg:px-40 opacity-30 hover:opacity-60 hover:scale-110 transition-all transform ease-in-out duration-[3000ms]'>
                    <blockquote className='mt-6 md:flex md:flex-grow md:flex-col pointer-events-none'>
                        <div className='relative text-lg text-neutral-200 md:flex-grow'>
                            <RiDoubleQuotesL className='absolute top-0 left-0 h-12 w-12 -translate-x-3 -translate-y-2 transform text-orange-600 opacity-50' />
                            <p className='relative italic'>
                                Rule I: We are to admit no more causes of
                                natural things than such as are both true and
                                sufficient to explain their appearances.
                            </p>
                        </div>
                        <footer className='mt-8'>
                            <div className='flex flex-row-reverse sm:flex-row'>
                                <div className='mr-10 sm:ml-10'>
                                    <div className='text-neutral-200'>
                                        Sir Isaac Newton
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
