export type Article = {
    title: string,
    slug: string
}

export type ArticleSummaryProps =  {
    article: Article,
    variant?: 'main'|'featured',
}

export type HomepageProps = {
    trendingStories: Article[],
    topStories: Article[],
}
