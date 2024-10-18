// Returns a dictionary of all learning objectives and their total number of occurrences in the question Set
const getTotalLearningObjectivesDict = (questionSet) => {
    var planningLearningObjectivesDict = {};
    var answerLearningObjectivesDict = {};
    for (var i = 0; i < questionSet.length; i++) {
        var current_question = questionSet[i];
        // Add to appropriate dict (planning or answer)
        var currentDict = current_question.planningScreen === null ? answerLearningObjectivesDict : planningLearningObjectivesDict
        for (var j = 0; j < current_question.learningObjectives.length; j++) {
            var currentLearningObjective = current_question.learningObjectives[j];
            if (currentLearningObjective in currentDict) {
                currentDict[currentLearningObjective] += 1;
            } else {
                currentDict[currentLearningObjective] = 1;
            }
        }
    }
    
    return {
        "planning" : planningLearningObjectivesDict,
        "answer" : answerLearningObjectivesDict
    };
}




export default getTotalLearningObjectivesDict;