import {Link} from "react-router";

interface ArticleSummaryProps  {
    variant?: 'main'|'featured'
}

export default function ArticleSummary({variant}:ArticleSummaryProps) {
    if (variant) {
        return (
            <>
                <Link to="#">
                    <h2 className="font-serif text-xl lg:text-3xl">
                        Zim Govt Drops USD Tax By 75% In Over A Year: Were Domestic Remittance Volumes Declining?
                    </h2>
                </Link>
                <div className="mt-4 lg:mt-8 lg:flex justify-between">
                    <ul className="flex space-x-2">
                        <li>
                            <Link to="#"
                               className="text-[#E9C46A] border border-transparent hover:border-[#072009] hover:text-[#072009] bg-[#072009] hover:bg-[#E9C46A] rounded-full px-3 py-1 text-sm">
                                Finance
                            </Link>
                        </li>
                    </ul>
                    <div className="mt-4 lg:mt-0 flex space-x-4 font-serif opacity-50">
                        <a href="#">John Doe</a>
                        <div
                            className="mr-1 relative pl-4 before:absolute before:content-[''] before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#072009] before:bg-opacity-75 before:-skew-x-12">09
                            / 10 / 2023
                        </div>
                    </div>
                </div>
                <Link to="#" className="flex-grow bg-gray-200 mt-4 lg:mt-8 rounded-md overflow-hidden">
                    <img className="w-full h-full object-cover object-center aspect-video"
                         src="https://placehold.co/200x3000/png" alt="Media"/>
                </Link>
            </>
        )
    }

    return (
        <>
            <a href="#">
                <h2 className="font-serif">
                    Zim Govt Drops USD Tax By 75% In Over A Year: Were Domestic Remittance Volumes Declining?
                </h2>
            </a>
            <div className="mt-4 lg:mt-8 flex items-center justify-between">
                <ul className="flex space-x-2">
                    <li>
                        <a href="#"
                           className="text-[#E9C46A] border border-transparent hover:border-[#072009] hover:text-[#072009] bg-[#072009] hover:bg-[#E9C46A] rounded-full px-3 py-1 text-sm">
                            Finance
                        </a>
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
            <a href="#" className="flex-grow bg-gray-200 mt-4 lg:mt-8 rounded-md overflow-hidden">
                <img className="w-full h-full object-cover object-center aspect-video"
                     src="https://placehold.co/1200x900/png" alt="Media"/>
            </a>
        </>
    )
}
