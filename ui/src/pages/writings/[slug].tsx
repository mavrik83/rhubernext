import React, { useEffect } from 'react';
import { useRemark } from 'react-remark';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getAllArticles } from '../../utils/articleUtils';
import { ArticleInfo } from '../../types/articles';

interface Props {
    article: ArticleInfo;
}

const Article: NextPage<Props> = ({ article }: Props) => {
    const [reactContent, setReactContent] = useRemark();

    useEffect(() => {
        setReactContent(article.content);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Head>
                <title>Ryan Huber</title>
                <meta name='description' content='Hire me!' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <article className='max-w-2xl px-6 py-24 mx-auto space-y-12 text-neutral-200'>
                <div className='w-full mx-auto space-y-4 text-center'>
                    <p className='text-xs tracking-wider uppercase'>
                        {article.meta.category}
                    </p>
                    <h1 className='text-4xl leading-tight md:text-5xl'>
                        {article.meta.title}
                    </h1>
                    <p className='text-sm text-neutral-200'>{`by ${article.meta.author}`}</p>
                </div>
                <div className='prose prose-neutral text-neutral-200 leading-relaxed prose-headings:text-neutral-200 prose-headings:font-light prose-h1:hidden prose-strong:text-neutral-200 prose-strong:font-medium'>
                    {reactContent}
                </div>
            </article>
        </div>
    );
};

export const getStaticPaths = async () => {
    const allArticles = getAllArticles();

    return {
        paths: allArticles.map((article) => ({
            params: { slug: article.meta.slug },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const allArticles = getAllArticles();
    const article = allArticles.find((art) => art.meta.slug === params?.slug);

    return {
        props: { article },
    };
};

export default Article;
