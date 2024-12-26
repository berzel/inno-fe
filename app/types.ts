export type Article = {
    title: string,
    slug: string,
    category: Category,
}

export type Category = {
    name: string,
    slug: string
}

export type ArticleSummaryProps =  {
    article: Article,
    variant?: 'main'|'featured'|'mini',
}

export type HomepageProps = {
    trendingStories: Article[],
    topStories: Article[],
}
