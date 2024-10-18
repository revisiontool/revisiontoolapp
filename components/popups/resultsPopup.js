import AnswerScreen from "../toolcomponents/answerScreen";
import { useSelector } from "react-redux";
import PlanningScreen from "../toolcomponents/planningScreen";
import { db } from "../../firebase.config";
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";

function ResultsPopup({ subject }) {
  const state = useSelector((state) => state);


  const router = useRouter();

  return (
    <div className="my-20 flex min-h-full flex-col items-center gap-8 px-5 ">
      <div className="h-1/12 flex flex-col items-center">
        <p className="bg-white text-center text-2xl font-bold tracking-wide text-custom_black-500">
          Congratulations on completing the{" "}
          <span className="text-custom_green-400">IBDP {subject}</span> question set!
        </p>
        <p className="font-semilight text-custom_black-500 opacity-80">
          Review here your answers.
        </p>
      </div>
      <div className="flex w-full flex-row gap-4">
        <AnswerScreen
          className="h-96"
          heading="Answer Screen"
          content_list={state.subjects[subject].answer_screen}
          subject={subject}
        />
        <PlanningScreen
          className="h-96"
          heading="Planning Screen"
          content_list={state.subjects[subject].planning_screen}
          subject={subject}
        />
      </div>
      <button
        onClick={() => {
          router.push("/report");
        }}
        className="mt-8 w-60 rounded-md bg-custom_blue-500 p-4 font-semibold text-white"
      >
        See Your Predicted Grade
      </button>
    </div>
  );
}

// export const getServerSideProps = withPageAuthRequired({
//     // returnTo
//     getServerSideProps: async ctx => {
//         const session = getSession(ctx.req, ctx.res)
//         console.log(session)

//         return {
//             props: {},
//         }
//     }
// })

export default ResultsPopup;
