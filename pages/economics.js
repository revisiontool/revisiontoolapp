import React, { useEffect } from "react";
import MainQuestionTool from "../components/toolcomponents/mainQuestionTool";
import { economics_data } from '../static_data/EconomicsData'
import { ECONOMICS } from "../redux/reducers/reducers";

import { useUser } from "@auth0/nextjs-auth0/client";
import {getSession, withPageAuthRequired} from "@auth0/nextjs-auth0";
import checkUserInFirebase from "../functions/checkFirebase";

const Economics = () => {

    const { isLoading, user, error } = useUser()
    

    if (isLoading) {
        return <div>Loading...</div>
    }


    return (
        <div>
            <MainQuestionTool subject={ECONOMICS} data={economics_data} />
        </div>
    );
};



export default Economics;

export const getServerSideProps = withPageAuthRequired({
    // returnTo
    getServerSideProps: async ctx => {
        const session = getSession(ctx.req, ctx.res)

        return {
            props: {},
        }
    }
})
