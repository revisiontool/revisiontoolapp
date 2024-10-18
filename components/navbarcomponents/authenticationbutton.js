import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

const AuthenticationButton = ( { text, blue } ) => {
    const router = useRouter();
    const { isLoading, user, error } = useUser();

    useEffect(() => {
        // If user is logged in and current page is not '/navigation', redirect to '/navigation'
        if (user && router.pathname !== '/navigation') {
            router.push('/navigation');
        }
    }, [user, router]);

    const handleLogin = () => router.push('/api/auth/login');

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className='flex flex-col'>  
            <div className='flex flex-row items-center h-full'>
                <button onClick={handleLogin} className={`rounded-md ${blue ? "bg-custom_blue-500" : "bg-custom_green-400"}  px-2 py-1 text-xs font-semibold text-white sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-9 lg:py-4 lg:text-sm xl:px-6 xl:py-3 xl:text-base`} >{text}</button>
            </div>    
        </div>
    );
};

export default AuthenticationButton;
