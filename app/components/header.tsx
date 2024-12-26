import Logo from "~/components/logo";
import {Link} from "react-router";
import useCategories from "~/hooks/useCategories";
import TopCategories from "~/components/top-categories";

export default function Header() {
    const {categories} = useCategories();

    return (
        <nav className="flex justify-between items-center relative">
            <div className="basis-[20%]">
                <Logo/>
            </div>

            <button className="lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 37 20" fill="none">
                    <path d="M1 1L36 0.999997" stroke="#072009" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="1.75" y1="9.25" x2="35.25" y2="9.25" stroke="#072009" strokeWidth="1.5"
                          strokeLinecap="round"/>
                    <path d="M1 19L36 19" stroke="#072009" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </button>

            <div
                className="hidden basis-[80%] lg:flex justify-between absolute lg:static z-10 top-[100%] border lg:border-0 left-0 right-0 bg-[#F2EEE5] p-4 rounded-md shadow-md lg:shadow-none">

                <TopCategories />

                <ul className="basis-[50%] hidden lg:flex justify-end items-center lg:space-x-4">
                    <li className="flex">
                        <Link to="#" className="hover:text-[#E9C46A] inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="h-6 w-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                        </Link>
                    </li>
                    <li className="flex">
                        <button className="hover:text-[#E9C46A] inline-block px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 className="w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <Link to="/login"
                              className="rounded-full border border-[#072009] px-4 py-1 hover:bg-[#072009] hover:text-[#E9C46A] flex">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/register"
                              className="rounded-full border border-[#072009] px-4 py-1 hover:bg-[#072009] hover:text-[#E9C46A] flex">
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
