import {Link} from "react-router";

export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="space-y-12">
                <div className="border-b border-opacity-10 border-[#072009] py-4">
                    <h1 className="font-semibold text-2xl">Create an account</h1>
                    <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="space-y-6">
                    <div>
                        <label className="space-y-2 block">
                            <div className="font-medium">Name</div>
                            <input type="text" placeholder="John Doe"
                                   className="bg-transparent border border-[#072009] rounded-md p-4 w-full lg:w-[25rem]"/>
                        </label>
                    </div>

                    <div>
                        <label className="space-y-2 block">
                            <div className="font-medium">Email</div>
                            <input type="text" placeholder="you@example.com"
                                   className="bg-transparent border border-[#072009] rounded-md p-4 w-full lg:w-[25rem]"/>
                        </label>
                    </div>

                    <div>
                        <label className="space-y-2 block">
                            <div className="font-medium">Password</div>
                            <input type="password" placeholder="********"
                                   className="bg-transparent border border-[#072009] rounded-md p-4 w-full lg:w-[25rem]"/>
                        </label>
                    </div>

                    <div>
                        <button className="block w-full bg-[#072009] text-white rounded-md p-4 font-medium mt-12">
                            Register
                        </button>
                    </div>
                </div>

                <div className="text-center">
                    Already have an account? <br/> <Link to="/login" className="font-medium hover:underline">Login
                    now</Link>
                </div>
            </div>
        </div>
    )
}
