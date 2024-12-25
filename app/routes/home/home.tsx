import AppLayout from "~/layouts/AppLayout";
import TrendingStories from "~/components/trending-stories";
import TopStories from "~/components/top-stories";
import FeaturedStories from "~/components/featured-stories";
import CallToAction from "~/components/call-to-action";
import FinanceStories from "~/components/finance-stories";
import Tagline from "~/components/tagline";
import type {Route} from "../../../.react-router/types/app/+types/root";
import HomepageProvider from "~/routes/home/home-provider";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
    return (
        <AppLayout>
          <HomepageProvider>
              <Tagline />
              <TrendingStories />
              <TopStories />
              <FeaturedStories />
              <FinanceStories />
              <FeaturedStories />
              <CallToAction />
          </HomepageProvider>
        </AppLayout>
    );
}
