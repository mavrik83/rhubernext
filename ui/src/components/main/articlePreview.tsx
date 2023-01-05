/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable consistent-return */
import Link from 'next/link';
import React from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { TbCalendarTime } from 'react-icons/tb';
import { useInView } from 'react-intersection-observer';
import { ArticleMeta } from '../../types/articles';
import { capitalizeFirstWord } from '../../utils/utils';
import { useNavState } from '../../utils/zustand/navState';

interface Props {
    articles: ArticleMeta[];
}

const ArticlePreview = ({ articles }: Props) => {
    const { ref: latestRef, inView } = useInView({
        threshold: 0.4,
    });

    const toggleCurrent = useNavState((state) => state.toggleCurrent);

    React.useEffect(() => {
        toggleCurrent('latest', inView);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    return (
        <div ref={latestRef} id='latest' className='mt-10 min-h-screen-3/4'>
            <h2 className='text-3xl tracking-tight text-neutral-200 sm:text-4xl'>
                Latest Writings :
            </h2>

            <div className='grid gap-16 mt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12'>
                {articles.map((article) => (
                    <Link href={`/writings/${article.slug}`} key={article.slug}>
                        <a className='shadow-sm shadow-orange-700 sm:shadow-none sm:border border-neutral-500 rounded-md bg-inherit hover:bg-neutral-800 hover:border-neutral-800 transition-all duration-300'>
                            <div className='m-4 block'>
                                <p className='inline-block mb-2'>
                                    <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-light bg-orange-600 bg-opacity-50'>
                                        {capitalizeFirstWord(article.category)}
                                    </span>
                                </p>
                                <p className='text-xl font-normal text-neutral-200'>
                                    {article.title}
                                </p>
                                <p className='mt-3 text-base text-neutral-200 hidden md:block'>
                                    {article.synopsis}
                                </p>
                            </div>
                            <div className='mt-4 flex items-center'>
                                <div>
                                    <div className='flex m-4 space-x-1 text-sm text-neutral-200'>
                                        <TbCalendarTime className='flex-shrink-0 h-4 w-4 text-orange-600' />
                                        <time dateTime={article.date}>
                                            {article.date}
                                        </time>
                                        <span aria-hidden='true'>&middot;</span>
                                        <span>
                                            {article.timeToRead} minute read
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
            <div className='py-12 px-4 mx-auto sm:px-6 md:flex md:flex-col md:py-24 md:px-30 md:max-w-screen-md lg:px-40 opacity-30 hover:opacity-60 hover:scale-110 transition-all transform ease-in-out duration-[3000ms]'>
                <blockquote className='mt-6 md:flex md:flex-grow md:flex-col pointer-events-none'>
                    <div className='relative text-lg text-neutral-200 md:flex-grow'>
                        <RiDoubleQuotesL className='absolute top-0 left-0 h-12 w-12 -translate-x-3 -translate-y-2 transform text-orange-600 opacity-50' />
                        <p className='relative italic'>
                            If a thing can be done adequately by means of one,
                            it is superfluous to do it by means of several; for
                            we observe that nature does not employ two
                            instruments where one suffices.
                        </p>
                    </div>
                    <footer className='mt-8'>
                        <div className='flex flex-row-reverse sm:flex-row'>
                            <div className='mr-10 sm:ml-10'>
                                <div className='text-neutral-200'>
                                    Thomas Aquinas
                                </div>
                            </div>
                        </div>
                    </footer>
                </blockquote>
            </div>
        </div>
    );
};

export default ArticlePreview;
