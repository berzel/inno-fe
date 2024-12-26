import {Link} from "react-router";
import type {ArticleSummaryProps} from "~/types";

export default function ArticleSummary({variant, article} : ArticleSummaryProps) {
    return (
        <>
            <Link to={`/articles/${article.slug}`}>
                <h2 className={`font-serif ${variant === 'main' ? 'text-xl lg:text-3xl':''}`}>
                    {article.title}
                </h2>
            </Link>
            <div className="mt-4 lg:mt-8 flex items-center justify-between">
                <ul className="flex space-x-2">
                    <li>
                        <Link to="#"
                           className="text-[#E9C46A] border border-transparent hover:border-[#072009] hover:text-[#072009] bg-[#072009] hover:bg-[#E9C46A] rounded-full px-3 py-1 text-sm">
                            {article.category.name}
                        </Link>
                    </li>
                </ul>
                <div className="flex space-x-4 font-serif opacity-50 text-sm ">
                    <a href="#">John Doe</a>
                    <div
                        className="mr-1 relative pl-4 before:absolute before:content-[''] before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#072009] before:bg-opacity-75 before:-skew-x-12">09
                        / 10 / 2023
                    </div>
                </div>
            </div>

            {
                variant !== 'mini' && (
                    <Link to="#" className="flex-grow bg-gray-200 mt-4 lg:mt-8 rounded-md overflow-hidden">
                        <img className="w-full h-full object-cover object-center aspect-video"
                             src="https://placehold.co/1200x900/png" alt="Media"/>
                    </Link>
                )
            }
        </>
    )
}
