/* eslint-disable consistent-return */
import React from 'react';
import { Popover } from '@headlessui/react';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../utils/skillsArray';
import { useNavState } from '../../utils/zustand/navState';
import { FancyQuote } from '../reusable/quote';
import { SectionTitle } from '../reusable/sectionTitle';

const Skills = () => {
    const { ref: skillsRef, inView } = useInView({
        threshold: 0.4,
    });

    const toggleCurrent = useNavState((state) => state.toggleCurrent);

    React.useEffect(() => {
        toggleCurrent('skills', inView);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    return (
        <div ref={skillsRef} id='skills' className='my-10 min-h-screen-3/4'>
            <SectionTitle text='Skills' />
            <span className='mr-3 inline-flex items-center rounded-full bg-orange-600 px-2.5 py-0.5 text-xs font-light text-neutral-200 bg-opacity-50'>
                Confidence
            </span>
            <span className='ml-3 inline-flex items-center rounded-full bg-teal-600 px-2.5 py-0.5 text-xs font-light text-neutral-200 bg-opacity-50'>
                Interest
            </span>
            <div className='container mt-4 mx-auto grid grid-cols-2 xl:grid-cols-3 gap-6'>
                {skills
                    .sort((a, b) => b.confidence - a.confidence)
                    .sort((a, b) => b.interest - a.interest)
                    .map((icon) => (
                        <Popover
                            key={icon.title}
                            className='relative shadow-sm shadow-orange-700 sm:shadow-none sm:border border-neutral-500 hover:bg-neutral-800 hover:border-neutral-800 transition-all duration-300 rounded-lg p-2'
                        >
                            <div
                                key={icon.title}
                                className='flex items-center justify-center '
                            >
                                <icon.icon className='w-14 h-auto text-neutral-200' />
                                <div className='ml-4'>
                                    <div className='my-4'>
                                        <div className='bg-neutral-700 w-20 md:w-30 lg:w-40 h-1 rounded-full overflow-hidden self-center'>
                                            <div
                                                className='bg-orange-600 h-full rounded-full opacity-50'
                                                style={{
                                                    width: `${
                                                        icon.confidence * 10
                                                    }%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className='my-4'>
                                        <div className='bg-neutral-700 w-20 md:w-30 lg:w-40 h-1 rounded-full overflow-hidden self-center '>
                                            <div
                                                className='bg-teal-600 h-full rounded-full opacity-50'
                                                style={{
                                                    width: `${
                                                        icon.interest * 10
                                                    }%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Popover.Button className='absolute inset-0 outline-none' />
                            <Popover.Panel className='absolute z-10 md:max-w-fit bg-neutral-900 rounded-lg p-2 border border-neutral-500'>
                                <div>
                                    <div className='mt-2 text-center sm:mt-3'>
                                        <div className='text-lg leading-6 text-neutral-200'>
                                            {icon.title}
                                        </div>
                                        <div className='mt-2'>
                                            <p className='text-sm text-neutral-200'>
                                                {icon.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Popover>
                    ))}
            </div>
            <FancyQuote quoteId={5} />
        </div>
    );
};

export default Skills;
