import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { getAllArticles } from '../utils/articleUtils';
import { ArticleInfo, ArticleMeta } from '../types/articles';
import {
    HeroSection,
    About,
    ArticlePreview,
    Skills,
    Experience,
} from '../components/main';

type Props = {
    latestArticles: ArticleInfo[];
};

const Home: NextPage<Props> = ({ latestArticles }: Props) => {
    const articles: ArticleMeta[] = latestArticles.map((article) => {
        const {
            title,
            synopsis,
            date,
            slug,
            timeToRead,
            category,
            author,
            inProgress,
        } = article.meta;
        return {
            title,
            synopsis,
            date,
            slug,
            timeToRead,
            category,
            author,
            inProgress,
        };
    });

    return (
        <div>
            <Head>
                <title>Ryan Huber</title>
                <meta name='description' content='Hire me!' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <HeroSection />
            <ArticlePreview articles={articles} />
            <About />
            <Skills />
            <Experience />
        </div>
    );
};

export const getStaticProps = async () => {
    const latestArticles = getAllArticles().slice(0, 3);

    return {
        props: { latestArticles },
    };
};

export default Home;
