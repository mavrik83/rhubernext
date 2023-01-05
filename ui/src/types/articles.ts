export interface ArticleMeta {
    title: string;
    slug: string;
    synopsis: string;
    date: string;
    category: string;
    timeToRead: number;
    author: string;
}

export interface ArticleInfo {
    meta: ArticleMeta;
    content: string;
}
