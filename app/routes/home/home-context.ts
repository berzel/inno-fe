import type {Article, HomepageProps} from "~/types";
import {createContext} from "react";

export const defaultContext = () : HomepageProps => {
    let trendingStories : Article[] = [];
    let topStories : Article[] = [];

    return { trendingStories, topStories }
}

 const HomepageContext = createContext(defaultContext());

export default HomepageContext
