import ArticleSummary from "~/components/article-summary";
import type {Article} from "~/types";
import {useContext} from "react";
import HomepageContext from "~/routes/home/home-context";


export default function TopStories() {
    const {topStories} = useContext(HomepageContext);

    return (
        topStories.length > 0 && (
            <section className="mt-4 lg:mt-8">
                <div className="flex justify-between items-center">
                    <h2 className="font-serif text-2xl lg:text-5xl">
                        Top Stories
                    </h2>
                    <a href="#"
                       className="rounded-full border border-[#072009] px-4 py-1 hover:bg-[#072009] hover:text-[#E9C46A] flex text-sm lg:text-base">
                        View All
                    </a>
                </div>
                <div className="lg:flex flex-row-reverse border-y border-y-[#072009] mt-4 lg:mt-8">
                    <div className="basis-[66.666%] ">
                        <div
                            className="lg:border-l lg:border-b border-[#072009] flex flex-col p-0 lg:p-4 pr-0 lg:pr-0 mt-4 lg:mt-0">
                            <ArticleSummary article={topStories[0]} variant="main"/>
                        </div>

                        <div
                            className="basis-[50%]  mt-8 lg:mt-0 lg:flex flex-wrap lg:[&_>:nth-child(n+3)]:border-t lg:[&_>:nth-child(even)]:pr-0 space-y-8 lg:space-y-0 [&_>*]:border-t lg:[&_>*]:border-t-0 [&_>*]:border-opacity-10 lg:[&_>*]:border-opacity-100  [&_>*]:pt-4">
                            {
                                topStories.filter((_, i) => i !== 0).map(topStory => (
                                    <div key={topStory.slug}
                                         className="basis-[50%] lg:border-l border-[#072009] p-0 lg:p-4 flex flex-col">
                                        <ArticleSummary article={topStory}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="basis-[33.333%]">
                        <div
                            className="bg-[#E9C46A] rounded-md overflow-hidden mt-8 lg:mt-4 lg:mr-4 px-4 [&_>*+*]:border-t [&_>*+*]:border-[#072009] [&_>*+*]:border-opacity-20 mb-4">
                            <div className="basis-[50%] py-6 flex flex-col">
                                <a href="#">
                                    <h2 className="font-serif">
                                        Zim Govt Drops USD Tax By 75% In Over A Year: Were Domestic Remittance Volumes
                                        Declining?
                                    </h2>
                                </a>
                                <div className="mt-8">
                                    <ul className="flex space-x-2">
                                        <li>
                                            <a href="#"
                                               className="text-[#E9C46A] border border-transparent hover:border-[#072009] hover:text-[#072009] bg-[#072009] hover:bg-[#E9C46A] rounded-full px-3 py-1 text-sm">
                                                Finance
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="flex space-x-4 font-serif opacity-50 text-sm mt-4">
                                        <a href="#">Valentine Muhamba</a>
                                        <div
                                            className="mr-1 relative pl-4 before:absolute before:content-[''] before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#072009] before:bg-opacity-75 before:-skew-x-12">09
                                            / 10 / 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-[50%] py-6 flex flex-col">
                                <a href="#">
                                    <h2 className="font-serif">
                                        Zim Govt Drops USD Tax By 75% In Over A Year: Were Domestic Remittance Volumes
                                        Declining?
                                    </h2>
                                </a>
                                <div className="mt-8">
                                    <ul className="flex space-x-2">
                                        <li>
                                            <a href="#"
                                               className="text-[#E9C46A] border border-transparent hover:border-[#072009] hover:text-[#072009] bg-[#072009] hover:bg-[#E9C46A] rounded-full px-3 py-1 text-sm">
                                                Finance
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="flex space-x-4 font-serif opacity-50 text-sm mt-4">
                                        <a href="#">Valentine Muhamba</a>
                                        <div
                                            className="mr-1 relative pl-4 before:absolute before:content-[''] before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#072009] before:bg-opacity-75 before:-skew-x-12">09
                                            / 10 / 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-[50%] py-6 flex flex-col">
                                <a href="#">
                                    <h2 className="font-serif">
                                        Zim Govt Drops USD Tax By 75% In Over A Year: Were Domestic Remittance Volumes
                                        Declining?
                                    </h2>
                                </a>
                                <div className="mt-8">
                                    <ul className="flex space-x-2">
                                        <li>
                                            <a href="#"
                                               className="text-[#E9C46A] border border-transparent hover:border-[#072009] hover:text-[#072009] bg-[#072009] hover:bg-[#E9C46A] rounded-full px-3 py-1 text-sm">
                                                Finance
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="flex space-x-4 font-serif opacity-50 text-sm mt-4">
                                        <a href="#">Valentine Muhamba</a>
                                        <div
                                            className="mr-1 relative pl-4 before:absolute before:content-[''] before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#072009] before:bg-opacity-75 before:-skew-x-12">09
                                            / 10 / 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-[50%] py-6 flex flex-col">
                                <a href="#">
                                    <h2 className="font-serif">
                                        Zim Govt Drops USD Tax By 75% In Over A Year: Were Domestic Remittance Volumes
                                        Declining?
                                    </h2>
                                </a>
                                <div className="mt-8">
                                    <ul className="flex space-x-2">
                                        <li>
                                            <a href="#"
                                               className="text-[#E9C46A] border border-transparent hover:border-[#072009] hover:text-[#072009] bg-[#072009] hover:bg-[#E9C46A] rounded-full px-3 py-1 text-sm">
                                                Finance
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="flex space-x-4 font-serif opacity-50 text-sm mt-4">
                                        <a href="#">Valentine Muhamba</a>
                                        <div
                                            className="mr-1 relative pl-4 before:absolute before:content-[''] before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#072009] before:bg-opacity-75 before:-skew-x-12">09
                                            / 10 / 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-[50%] py-6 flex flex-col">
                                <a href="#">
                                    <h2 className="font-serif">
                                        Zim Govt Drops USD Tax By 75% In Over A Year: Were Domestic Remittance Volumes
                                        Declining?
                                    </h2>
                                </a>
                                <div className="mt-8">
                                    <ul className="flex space-x-2">
                                        <li>
                                            <a href="#"
                                               className="text-[#E9C46A] border border-transparent hover:border-[#072009] hover:text-[#072009] bg-[#072009] hover:bg-[#E9C46A] rounded-full px-3 py-1 text-sm">
                                                Finance
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="flex space-x-4 font-serif opacity-50 text-sm mt-4">
                                        <a href="#">Valentine Muhamba</a>
                                        <div
                                            className="mr-1 relative pl-4 before:absolute before:content-[''] before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#072009] before:bg-opacity-75 before:-skew-x-12">09
                                            / 10 / 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-[50%] py-6 flex flex-col">
                                <a href="#">
                                    <h2 className="font-serif">
                                        Zim Govt Drops USD Tax By 75% In Over A Year: Were Domestic Remittance Volumes
                                        Declining?
                                    </h2>
                                </a>
                                <div className="mt-8">
                                    <ul className="flex space-x-2">
                                        <li>
                                            <a href="#"
                                               className="text-[#E9C46A] border border-transparent hover:border-[#072009] hover:text-[#072009] bg-[#072009] hover:bg-[#E9C46A] rounded-full px-3 py-1 text-sm">
                                                Finance
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="flex space-x-4 font-serif opacity-50 text-sm mt-4">
                                        <a href="#">Valentine Muhamba</a>
                                        <div
                                            className="mr-1 relative pl-4 before:absolute before:content-[''] before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#072009] before:bg-opacity-75 before:-skew-x-12">09
                                            / 10 / 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-[50%] py-6 flex flex-col">
                                <a href="#">
                                    <h2 className="font-serif">
                                        Zim Govt Drops USD Tax By 75% In Over A Year: Were Domestic Remittance Volumes
                                        Declining?
                                    </h2>
                                </a>
                                <div className="mt-8">
                                    <ul className="flex space-x-2">
                                        <li>
                                            <a href="#"
                                               className="text-[#E9C46A] border border-transparent hover:border-[#072009] hover:text-[#072009] bg-[#072009] hover:bg-[#E9C46A] rounded-full px-3 py-1 text-sm">
                                                Finance
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="flex space-x-4 font-serif opacity-50 text-sm mt-4">
                                        <a href="#">Valentine Muhamba</a>
                                        <div
                                            className="mr-1 relative pl-4 before:absolute before:content-[''] before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#072009] before:bg-opacity-75 before:-skew-x-12">09
                                            / 10 / 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    )
}
