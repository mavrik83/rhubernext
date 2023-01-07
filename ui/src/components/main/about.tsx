/* eslint-disable consistent-return */
import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import profilePic from '../../../public/rjhuber_profile.png';
import { useNavState } from '../../utils/zustand/navState';
import { FancyQuote } from '../reusable/quote';
import { SectionTitle } from '../reusable/sectionTitle';

const blurbs = [
    {
        name: 'Soldier',
        description:
            'The Army taught me many things. Notably, the importance of teamwork, leadership, and the value of focus and discipline. Leadership development and the ability to adapt to changing circumstances were central to my time in the Army.',
    },
    {
        name: 'Helicopter Mechanic',
        description:
            "What can I say? Even pilots need heros. I was a helicopter mechanic for 16 years; 10 in the Army and 6 in the civilian sector. Attention to detail and solid troubleshooting skills are essential. You can't just pull over and call AAA when you're 1000 feet in the air.",
    },
    {
        name: 'Philosopher',
        description:
            "Critical thinking. Logic. Reasoning. Problem solving. These are some of the skills that I've developed through philosophy. I've learned to think clearly and to communicate my ideas effectively. The intersection of philosophy and technology is a focus of my writings here.",
    },
    {
        name: 'Software Engineer',
        description:
            'So I gave up an awesome job as helicopter mechanic and then a cushy seat as a philosopher to become a software engineer. I love it. I love the challenge of solving problems. I love the satisfaction of building something that works. I love the feeling of accomplishment when I finish a project. I love knowing that I can make a difference in the world.',
    },
];

const About = () => {
    const { ref: aboutRef, inView } = useInView({
        threshold: 0.4,
    });

    const toggleCurrent = useNavState((state) => state.toggleCurrent);

    React.useEffect(() => {
        toggleCurrent('about', inView);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    return (
        <div
            ref={aboutRef}
            id='about'
            className='bg-neutral-900 my-10 min-h-screen-3/4'
        >
            <SectionTitle text='About' />
            <section className='relative mt-12'>
                <div className='aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16'>
                    <Image
                        src={profilePic}
                        layout='fill'
                        alt='Ryan Huber standing in front of modern art'
                        className='h-full w-full rounded-lg object-cover object-top lg:h-full lg:w-full'
                    />
                </div>

                <div className='mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-16'>
                    <div className='lg:col-start-2'>
                        <p className='mt-4 text-4xl tracking-tight text-orange-600'>
                            I&apos;m Ryan Huber
                        </p>
                        <p className='mt-4 text-neutral-200'>
                            If you haven&apos;t noticed, I&apos;m an advocate
                            for the principal of parsimony. I believe that the
                            simplest solution is often the best solution.
                            I&apos;m a software engineer with a passion for
                            building simple, elegant, and maintainable software.
                            I&apos;m also a husband, father, and a lifelong
                            learner.
                        </p>

                        <dl className='mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2'>
                            {blurbs.map((blurb) => (
                                <div key={blurb.name}>
                                    <dt className='text-lg text-orange-600'>
                                        {blurb.name}
                                    </dt>
                                    <dd className='mt-2 text-neutral-200'>
                                        {blurb.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>
            <FancyQuote quoteId={4} />
        </div>
    );
};

export default About;
