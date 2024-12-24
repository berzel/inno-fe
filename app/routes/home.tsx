import type {Route} from "./+types/home";
import AppLayout from "~/layouts/AppLayout";
import TrendingStories from "~/components/trending-stories";
import TopStories from "~/components/top-stories";
import FeaturedStories from "~/components/featured-stories";
import CallToAction from "~/components/call-to-action";
import FinanceStories from "~/components/finance-stories";
import Tagline from "~/components/tagline";
import {createContext} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
    return { message: "Hello, world!" };
}

export async function clientLoader({ serverLoader } : Route.ClientLoaderArgs) {
    return await serverLoader();
}

export const HomepageContext = createContext({
    message: ''
});

export default function Home({loaderData}: Route.ComponentProps) {
    return (
      <AppLayout>
          <HomepageContext.Provider value={loaderData}>
              <Tagline />
              <TrendingStories />
              <TopStories />
              <FeaturedStories />
              <FinanceStories />
              <FeaturedStories />
              <CallToAction />
          </HomepageContext.Provider>
      </AppLayout>
    );
}
