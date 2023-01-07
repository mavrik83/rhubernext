/* eslint-disable consistent-return */
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavState } from '../../utils/zustand/navState';
import { FancyQuote } from '../reusable/quote';

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
        <div ref={homeRef} id='home' className='mb-10 min-h-screen'>
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
                <FancyQuote quoteId={1} />
                <FancyQuote quoteId={2} />
            </div>
        </div>
    );
};

export default HeroSection;
