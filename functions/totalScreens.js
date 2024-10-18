// Returns a dictionary of all learning objectives and their total number of occurrences in the question Set
const getTotalScreens = (questionSet) => {
    var totalAnswerScreen = {};
    var totalPlanningScreen = {};
    for (var i = 0; i < questionSet.length; i++) {
        var current_question = questionSet[i];
        if (totalAnswerScreen[current_question.bigQuestionNo] === undefined){
            totalAnswerScreen[current_question.bigQuestionNo] = 0;
            totalPlanningScreen[current_question.bigQuestionNo] = 0;
        }
        if (current_question.planningScreen){
            totalPlanningScreen[current_question.bigQuestionNo]++;
        }
        else {
            totalAnswerScreen[current_question.bigQuestionNo]++;
        }
    }
    return {
        "planning" : totalPlanningScreen,
        "answer" : totalAnswerScreen
    };
}


export default getTotalScreens;