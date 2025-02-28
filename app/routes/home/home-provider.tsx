import {type PropsWithChildren, useEffect, useState} from "react";
import type {Article, HomepageProps} from "~/types";
import HomepageContext, {defaultContext} from "~/routes/home/home-context";
import axios from "~/lib/axios";

const HomepageProvider = ({ children }: PropsWithChildren) => {
    const [homeProps, setHomeProps] = useState<HomepageProps>(() => defaultContext());

    useEffect(() => {
        (async function() {
            const articles = await axios.get('/articles').then(r => r.data)

            // Just selecting some random items from the result otherwise should populate from dedicated api calls
            setHomeProps({
                trendingStories: articles.data.filter((_: Article, i: number) => i < 5),
                topStories: articles.data.filter((_: Article, i: number) => i >= 5),
            })
        })()
    }, []);

    return (
        <HomepageContext.Provider  value={homeProps}>
            {children}
        </HomepageContext.Provider>
    )
}

export default HomepageProvider;
