import AppLayout from "~/layouts/AppLayout";
import type {Route} from "../../../.react-router/types/app/+types/root";
import React, {useEffect, useRef} from "react";
import useAuth from "~/hooks/useAuth";
import {Navigate} from "react-router";
import useProfile from "~/hooks/useProfile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

function ProfilePage() {
    const {loggedIn, user} = useAuth();
    const isLoading = useRef(true);
    const {data, error, submitting, handleSubmit, handleChange} = useProfile();


    useEffect(() => {
        isLoading.current = false;
    }, [loggedIn]);

    if (isLoading.current) {
        return (
            <div>
                Loading...
            </div>
        )
    }


    return (
        <>
            {
                !loggedIn ? (
                    <Navigate to={'/login'} />
                ) : (
                    <div className=" max-w-[30rem] space-y-12">
                        <h1 className="text-2xl font-bold mt-4 lg:mt-16">Profile</h1>

                        <form onSubmit={handleSubmit} className="space-y-6 py-6">
                            <div>
                                <label className="space-y-2 block">
                                    <div className="font-medium">Name</div>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        value={data?.name ?? ''}
                                        onChange={handleChange('name')}
                                        className="block bg-transparent border border-[#072009] rounded-md p-4 w-full"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="space-y-2 block">
                                    <div className="font-medium">Email</div>
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        value={data?.email ?? ''}
                                        onChange={handleChange('email')}
                                        className="block bg-transparent border border-[#072009] rounded-md p-4 w-full"
                                    />
                                </label>
                            </div>

                            {/*TODO: Convert this to autocomplete search*/}
                            <div>
                                <label className="space-y-2 block">
                                    <div className="font-medium">Preferred Sources</div>
                                    <input
                                        type="text"
                                        placeholder="the-guardian,new-york-times"
                                        value={data?.preferred_sources}
                                        onChange={handleChange('preferred_sources')}
                                        className="block bg-transparent border border-[#072009] rounded-md p-4 w-full"
                                    />
                                </label>
                            </div>

                            {/*TODO: Convert this to autocomplete search*/}
                            <div>
                                <label className="space-y-2 block">
                                    <div className="font-medium">Preferred Categories</div>
                                    <input
                                        type="text"
                                        placeholder="sport,football,business"
                                        value={data?.preferred_categories}
                                        onChange={handleChange('preferred_categories')}
                                        className="block bg-transparent border border-[#072009] rounded-md p-4 w-full"
                                    />
                                </label>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="block w-full bg-[#072009] text-white rounded-md p-4 font-medium mt-12">
                                    Update Profile
                                </button>
                            </div>
                        </form>
                    </div>
                )
            }
        </>
    )
}

export default function Profile() {
    return (
        <AppLayout>
            <ProfilePage/>
        </AppLayout>
    );
}
