import {Link, Navigate} from "react-router";
import React, {useContext} from "react";
import useRegister from "~/hooks/useRegister";
import AuthContext from "~/components/auth-context";
import AuthLayout from "~/layouts/AuthLayout";

export default function Register() {
    const {loggedIn} = useContext(AuthContext);
    const {data, error, submitting, handleSubmit, handleChange} = useRegister();


    return (
        <AuthLayout>
            {
                loggedIn ? (
                    <Navigate to={'/'} />
                ) : (
                    <div className="min-h-screen flex items-center justify-center">
                        <div className="space-y-12">
                            <div className="border-b border-opacity-10 border-[#072009] py-4">
                                <h1 className="font-semibold text-2xl">Create an account</h1>
                                <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.</p>
                            </div>

                            {
                                error && (
                                    <div className="border-red-500 text-red-500 p-3 rounded-md border">
                                        {error.message}
                                    </div>
                                )
                            }

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="space-y-2 block">
                                        <div className="font-medium">Name</div>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            value={data.name}
                                            onChange={handleChange('name')}
                                            className="bg-transparent border border-[#072009] rounded-md p-4 w-full lg:w-[25rem]"
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label className="space-y-2 block">
                                        <div className="font-medium">Email</div>
                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            value={data.email}
                                            onChange={handleChange('email')}
                                            className="bg-transparent border border-[#072009] rounded-md p-4 w-full lg:w-[25rem]"
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label className="space-y-2 block">
                                        <div className="font-medium">Password</div>
                                        <input
                                            type="password"
                                            placeholder="********"
                                            value={data.password}
                                            onChange={handleChange('password')}
                                            className="bg-transparent border border-[#072009] rounded-md p-4 w-full lg:w-[25rem]"
                                        />
                                    </label>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="block w-full bg-[#072009] text-white rounded-md p-4 font-medium mt-12">
                                        Register
                                    </button>
                                </div>
                            </form>

                            <div className="text-center">
                                Already have an account? <br/> <Link to="/login"
                                                                     className="font-medium hover:underline">Login
                                now</Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </AuthLayout>
    )
}
