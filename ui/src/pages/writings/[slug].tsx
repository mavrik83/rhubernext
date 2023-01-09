import React, { useEffect } from 'react';
import { useRemark } from 'react-remark';
import ReactMarkdown from 'react-markdown';
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getAllArticles } from '../../utils/articleUtils';
import { ArticleInfo } from '../../types/articles';
import { default as vsDarkPlus } from '../../utils/vsc-dark-plus-custom';

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
                <title>{article.meta.title}</title>
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
                <ReactMarkdown
                    className='prose prose-neutral text-neutral-200 leading-relaxed prose-headings:text-neutral-200 prose-headings:font-light prose-h1:hidden prose-strong:text-neutral-200 prose-strong:font-medium prose-pre:p-0'
                    children={article.content}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(
                                className || '',
                            );
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(
                                        /\n$/,
                                        '',
                                    )}
                                    style={vsDarkPlus as any}
                                    language={match[1]}
                                    PreTag='div'
                                    {...props}
                                />
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                />
                {/* <div className='prose prose-neutral text-neutral-200 leading-relaxed prose-headings:text-neutral-200 prose-headings:font-light prose-h1:hidden prose-strong:text-neutral-200 prose-strong:font-medium'>
                    {reactContent}
                </div> */}
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
