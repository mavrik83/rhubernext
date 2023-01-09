import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { ArticleInfo } from '../types/articles';

const articleDirectory = join(process.cwd(), '_articles');

export function getArticleSlugs() {
    return fs.readdirSync(articleDirectory);
}

export function getArticleBySlug(slug: string): ArticleInfo {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(articleDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        meta: {
            title: data.title,
            slug: realSlug,
            synopsis: data.synopsis,
            date: data.date,
            timeToRead: data.timeToRead,
            category: data.category,
            author: data.author,
            inProgress: data.inProgress,
        },
        content,
    };
}

export function getAllArticles() {
    const slugs = getArticleSlugs().filter((slug) => slug !== '_template.md');
    const articles = slugs
        .map((slug) => getArticleBySlug(slug))
        .filter((article) => !article.meta.inProgress)
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));
    return articles;
}
