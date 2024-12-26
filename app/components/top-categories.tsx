import {Link} from "react-router";
import {useEffect, useState} from "react";
import type {Category} from "~/types";
import axios from "~/lib/axios";

export default function TopCategories() {
    const [categories, setCategories] = useState<Array<Category>>([]);

    useEffect(() => {
        (async () => {
            const categories = await axios.get('/categories/top').then(r => r.data.data);
            setCategories(categories);
        })()
    }, [])

    return (
        <ul className="basis-[50%] lg:flex lg:space-x-4">
            {
                categories.filter((_, i) => i < 3).map(category => (
                    <li key={category.slug}>
                        <Link to="#"
                              className="rounded-full lg:border border-[#072009] lg:px-4 py-1 lg:hover:bg-[#072009] hover:text-[#E9C46A] flex">
                            {category.name}
                        </Link>
                    </li>
                ))
            }
            <li className="relative group">
                <button
                    className="rounded-full lg:border border-[#072009] lg:px-4 py-1 lg:hover:bg-[#072009] hover:text-[#E9C46A] flex items-center">
                              <span>
                                More
                              </span>
                    <span className="-mr-2 ml-2 h-5 w-5">
                                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"/>
                                </svg>
                              </span>
                </button>
                <div className="hidden group-hover:block absolute top-0 bg-transparent mt-8">
                    <div
                        className="pt-0.5 before:absolute before:block before:h-3 before:w-3 before:border-l before:mt-0.5 before:border-t before:bg-[#F2EEE5] before:z-10 before:border-[#072009] before:rounded before:rotate-45 before:left-4">
                        <ul className="border border-[#072009] mt-2 rounded-2xl shadow-xl py-2 bg-[#F2EEE5] min-w-[12rem] overflow-hidden">
                            {
                                categories.filter((_, i) => i >= 3).map(category => (
                                    <li key={category.slug}>
                                        <Link to="#"
                                              className="block px-2 hover:bg-[#072009] hover:text-[#E9C46A]">
                                            {category.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    )
}
