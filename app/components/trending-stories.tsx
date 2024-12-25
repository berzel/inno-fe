import ArticleSummary from "~/components/article-summary";
import {useContext} from "react";
import HomepageContext from "~/routes/home/home-context";

export default function TrendingStories() {
    const { trendingStories } = useContext(HomepageContext);

    return (
        trendingStories.length > 0 && (
            <section className="lg:flex border-y border-y-[#072009] lg:max-h-screen mt-4 lg:mt-8">
                <div className="basis-[50%]">
                    <div className="h-full flex flex-col p-4 pl-0 pr-0 lg:pr-4">
                        <ArticleSummary variant="main" article={trendingStories[0]}/>
                    </div>
                </div>

                <div
                    className="basis-[50%] pb-8 lg:pb-0 lg:flex flex-wrap lg:[&_>:nth-child(n+3)]:border-t lg:[&_>:nth-child(even)]:pr-0 space-y-8 lg:space-y-0 [&_>*]:border-t lg:[&_>*]:border-t-0 [&_>*]:border-opacity-10 lg:[&_>*]:border-opacity-100  [&_>*]:pt-4">
                    {
                        trendingStories.filter((_, i) => i !== 0).map(article => (
                            <div key={article.slug}
                                 className="basis-[50%] lg:border-l border-[#072009] p-0 lg:p-4 flex flex-col">
                                <ArticleSummary article={article}/>
                            </div>
                        ))
                    }
                </div>
            </section>
        )
    )
}
