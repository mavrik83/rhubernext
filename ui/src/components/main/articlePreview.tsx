import Link from 'next/link';
import React from 'react';
import { TbCalendarTime } from 'react-icons/tb';
import { useInView } from 'react-intersection-observer';
import { ArticleMeta } from '../../types/articles';
import { capitalizeFirstWord } from '../../utils/utils';
import { useNavState } from '../../utils/zustand/navState';
import { FancyQuote } from '../reusable/quote';
import { SectionTitle } from '../reusable/sectionTitle';

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
        <div ref={latestRef} id='latest' className='my-10 min-h-screen-3/4'>
            <SectionTitle text='Latest Writings' />
            <Link href='/writings'>
                <p className='text-teal-500 cursor-pointer w-fit'>More...</p>
            </Link>
            <div className='grid gap-16 mt-9 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12'>
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
                                        <TbCalendarTime className='flex-shrink-0 h-4 w-4 text-teal-500' />
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
            <FancyQuote quoteId={3} />
        </div>
    );
};

export default ArticlePreview;
