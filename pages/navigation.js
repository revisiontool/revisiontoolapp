import React, { useEffect, useState } from "react";
import Sidebar from "../components/navpagecomponents/sidebar";
import Done from "../components/navpagecomponents/done";
import Curriculum from "../components/navpagecomponents/curriculum";
import { ProSidebarProvider } from "react-pro-sidebar";
import Revtool from "../components/navpagecomponents/revtool";
import Start from "../components/navpagecomponents/start";
import Continue from "../components/navpagecomponents/continue";

import { useUser } from "@auth0/nextjs-auth0/client";
import {getSession, withPageAuthRequired} from "@auth0/nextjs-auth0";

// Check if userid exists in firebase. if no, test_percentage = 0, 
// Add stuff to UserInfo when user starts 
const Navigation = () => {

    const [test_percentage, set_test_percentage] = useState(5);

    const { isLoading, user} = useUser();

    const continuePageData = {
      progress : test_percentage,
      correctAns : 63
    }
    
    console.log(test_percentage)
    const donePageData = {
      topic : "IBDP Economics",
      prevSessionScore : 40,
      answeredCorrectly : 50,
      subtopics : {
        "Sequences" : 30,
        "Series" : 50,
        "Probability" : 75,
        "Statistics" : 80
      },
      scoreComment : "Overall, you did well in this question set, scoring 84%.",
      timeSpentComment : "On average, you spent 2 minutes and 30 seconds on each question.",
      answeredCorrectlyComment : "You answered 75% of the questions correctly on the first try.",
    }

    return (
        <ProSidebarProvider>
            <div className="flex flex-row">
                <Sidebar />
                <div>
                    {/* <Done pageData={donePageData}/> */}
                    {test_percentage == 100 && <Done pageData= {donePageData} />}
                    {test_percentage < 100 && test_percentage > 0 && (
                        <Continue/>
                    )}
                    {test_percentage == 0 && (
                        <>
                            <Revtool />
                            <Start />
                        </>
                    )}
                    <Curriculum />
                </div>
            </div>
        </ProSidebarProvider>
        );
    }


// Below code is for client side protection, we will see which is better

export const getServerSideProps = withPageAuthRequired({
    // returnTo
    getServerSideProps: async ctx => {
        const session = getSession(ctx.req, ctx.res)
        return {
            props: {},
        }
    }
})


export default Navigation