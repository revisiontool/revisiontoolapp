
import { useSelector } from "react-redux";
import { ECONOMICS, MATH } from "../../redux/reducers/reducers";
import ContinueTestComponent from "./continuetestcomponent"
import TestComponent from "./testcomponent";


function Continue(){

    const state = useSelector((state) => state);

    
    let econ_answered = Object.keys(state.subjects.economics.answer_record).length;
    let math_answered = Object.keys(state.subjects.math.answer_record).length;

    // let math_progress =  Math.floor((state.subjects.math.questions_answered / math_data.length) * 100)
    // let math_correct_answers = state.subjects.math.correct_answers

    // console.log(state.subjects.math.correct_answers)


    return(
        <div className="md:py-15 lg:py-20 py-10 px-10">
            <div className="mx-auto flex flex-col text-center">
                <span className=" xl:text-lg md:text-base lg:text-sm text-xs">Master Your Exam with The Revision Tool </span>
                    <span className="mt-3 xl:text-5xl md:text-4xl lg:text-3xl sm:text-2xl text-xl font-bold text-custom_black-500">Start <span className="text-custom_blue-500">Practicing for Exam</span> Success Now </span>
                    <h1 className="mt-3 max-w-lg md:max-w-none mx-auto xl:text-lg md:text-base lg:text-sm text-xs text-custom_black-500">Choose the topic you want to focus on and start practicing, you&apos;ll get step-by-step guidance
                        and targeted practice to help you master even the most challenging topics. Simply select your curriculum, subject, and subtopic to get started.
                    </h1>
            </div>

            <div className="flex md:flex-row flex-col mt-4 gap-4 md:max-w-none max-w-lg md:mx-0 mx-auto">
                { math_answered !== 0 && <ContinueTestComponent subject={MATH}/> }
                { 
                    math_answered === 0 && 
                    <div className='w-1/2 h-1/2'>
                        <TestComponent 
                        subject={"math"} 
                        heading={"Master IB Math with The Revision Tool"}
                        displayText={"From algebra to calculus, The Revision Tool offers comprehensive practice for IB Math students. Our cutting-edge technology and expert guidance will help you achieve your full potential. Start practicing today!"}
                        />
                    </div>
                }
                { econ_answered !== 0 && <ContinueTestComponent subject={ECONOMICS}/>}
                {
                    econ_answered === 0 &&
                    <div className='w-1/2 h-1/2'>
                        <TestComponent 
                            subject={"economics"} 
                            heading={"Excel in Economics with The Revision Tool"}
                            displayText={"Whether you're studying micro or macro economics, The Revision Tool has you covered. Our targeted practice and feedback will help you understand even the most complex economic concepts. Start practicing today!"}/>
                    </div>
                }

            </div>
        </div>
    )
}
export default Continue;