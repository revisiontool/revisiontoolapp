import React, { useEffect } from "react";
import MainQuestionTool from "../components/toolcomponents/mainQuestionTool";
import {math_data} from '../static_data/MathData'
import { MATH } from "../redux/reducers/reducers";


import { useUser } from "@auth0/nextjs-auth0/client";
import {getSession, withPageAuthRequired} from "@auth0/nextjs-auth0";
import checkUserInFirebase from "../functions/checkFirebase";


const Math = () => {
    

    const { isLoading, user, error } = useUser()
    


    if (isLoading) {
        return <div>Loading...</div>
    }


    return (
        <div>
            <MainQuestionTool subject={MATH} data={math_data}/>
        </div>
    );
};

export const getServerSideProps = withPageAuthRequired({
    // returnTo
    getServerSideProps: async ctx => {
        const session = getSession(ctx.req, ctx.res)

        return {
            props: {},
        }
    }
})

export default Math;
