/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbCalendarTime } from 'react-icons/tb';
import { ArticleInfo, ArticleMeta } from '../../types/articles';
import { getAllArticles } from '../../utils/articleUtils';
import { capitalizeFirstWord } from '../../utils/utils';

interface Props {
    allArticles: ArticleInfo[];
}

const randomInteger = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const Writings: NextPage<Props> = ({ allArticles }: Props) => {
    const articles: ArticleMeta[] = allArticles.map((article) => {
        const { title, synopsis, date, slug, timeToRead, category, author } =
            article.meta;
        return { title, synopsis, date, slug, timeToRead, category, author };
    });

    return (
        <div className='min-h-fit my-5'>
            <Head>
                <title>Ryan Huber</title>
                <meta name='description' content='Hire me!' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='mx-auto'>
                <div className='bg-neutral-o00'>
                    <div className='flex items-center justify-center overflow-y-hidden'>
                        <div className='2xl:mx-auto 2xl:container xl:py-24 lg:py-12 py-8 xl:px-20 px-6 flex lg:flex-row flex-col-reverse items-strech justify-center'>
                            <div className='lg:w-5/12 flex items-center lg:items-start justify-center flex-col'>
                                <h1 className='xl:text-5xl lg:text-4xl md:text-5xl lg:mt-0 mt-8 text-4xl text-neutral-200 lg:text-left text-center'>
                                    My Writings
                                </h1>
                                <p className='text-base leading-5 mt-5 text-neutral-200 md:w-8/12 lg:w-11/12 lg:text-left text-center'>
                                    Just a collection of my writings. I write
                                    about things that I find interesting and I
                                    hope you&apos;ll find them as interesting as
                                    I do. <br /> <br /> (These images are
                                    randomly generated at build time, so
                                    don&apos;t take them too seriously.)
                                </p>
                            </div>
                            <div className='lg:w-5/12 lg:ml-10 h-full w-full'>
                                <Image
                                    src='https://source.unsplash.com/random/500×500/?writing,philosophy,technology,mechanic'
                                    className='w-full block h-80 lg:h-full object-cover object-center rounded-tr-3xl rounded-bl-3xl'
                                    alt='hero-pic'
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid gap-16 mt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12'>
                    {articles.map((article) => (
                        <Link
                            href={`/writings/${article.slug}`}
                            key={article.slug}
                            scroll={true}
                        >
                            <a className='border-2 border-orange-600 border-opacity-50 rounded-md bg-inherit hover:bg-neutral-800 hover:border-neutral-800 transition-all duration-300'>
                                <div className='flex-shrink-0'>
                                    <Image
                                        className='h-20 w-auto object-cover rounded-t-md'
                                        src={`https://source.unsplash.com/random/400×400/?${
                                            article.category
                                        },${article.synopsis
                                            .split(' ')
                                            [
                                                randomInteger(1, 20)
                                            ].toLowerCase()}`}
                                        alt='Random unsplash image'
                                        width={400}
                                        height={250}
                                        placeholder='empty'
                                    />
                                </div>
                                <div className='m-4 block'>
                                    <p className='inline-block mb-2'>
                                        <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-light bg-orange-600 bg-opacity-50'>
                                            {capitalizeFirstWord(
                                                article.category,
                                            )}
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
                                            <span aria-hidden='true'>
                                                &middot;
                                            </span>
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
            </div>
        </div>
    );
};

export const getStaticProps = async () => {
    const allArticles = getAllArticles();

    return {
        props: { allArticles },
    };
};

export default Writings;
