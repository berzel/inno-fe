export type Article = {
    slug: string
}

export type ArticleSummaryProps =  {
    article?: Article,
    variant?: 'main'|'featured',
}
