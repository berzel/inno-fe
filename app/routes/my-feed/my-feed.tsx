import AppLayout from "~/layouts/AppLayout";
import TrendingStories from "~/components/trending-stories";
import TopStories from "~/components/top-stories";
import FeaturedStories from "~/components/featured-stories";
import CallToAction from "~/components/call-to-action";
import FinanceStories from "~/components/finance-stories";
import Tagline from "~/components/tagline";
import type {Route} from "../../../.react-router/types/app/+types/root";
import HomepageProvider from "~/routes/home/home-provider";
import useAuth from "~/hooks/useAuth";
import {useEffect, useRef, useState} from "react";
import axios from "~/lib/axios";
import type {Article} from "~/types";
import {Link} from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

function FeedPage() {
    const {user} = useAuth();
    const loaded = useRef(false);
    const [items, setItems] = useState<Article[]>([])

    useEffect(() => {
        loaded.current = true
    }, []);

    useEffect(() => {
        if (user && loaded.current) {
           (async () => {
               const articles = await axios.get('/articles?personalized_feed=1').then(r => r.data)
               setItems(articles.data)
           })()
        }
    }, [user, loaded.current]);

    return (
        <>
            <h1 className="mt-4 mb-8 font-bold text-xl">
                My Feed
            </h1>
            <ul className="space-y-4">
                {
                    items.map(item => (
                        <li key={item.title}>
                            <Link to={'#'}>
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default function MyFeed() {
    return (
        <AppLayout>
            <FeedPage/>
        </AppLayout>
    );
}
