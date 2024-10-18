// OptionsModel.ts
class OptionsModel {
    value: string;
    optionText: string;

    constructor({ value = 'A', optionText }: { value?: string, optionText: string }) {
        this.value = value;
        this.optionText = optionText;
    }
}

// PlanningScreenModel.ts
class PlanningScreenModel {
    heading: string;
    question: string;
    answer: string;

    constructor({ heading, question, answer }: { heading: string, question: string, answer: string }) {
        this.heading = heading;
        this.question = question;
        this.answer = answer;
    }
}

// AnswerScreenModel.ts
class AnswerScreenModel {
    heading: string;
    question: string;
    answer: string;
    mark: number;
    typeScreen: string;

    constructor({ heading, question, answer, mark, typeScreen }: { heading: string, question: string, answer: string, mark: number, typeScreen: string }) {
        this.heading = heading;
        this.question = question;
        this.answer = answer;
        this.mark = mark;
        this.typeScreen = typeScreen;
    }
}

// QuestionModel.ts
// Tags scrapped
class QuestionModel {
    id: string;
    bigQuestionNo: number;
    smallQuestionNo: number;
    question: string;
    type: string;
    options: OptionsModel[];
    correct: string;
    planningScreen: PlanningScreenModel;
    answerScreen: AnswerScreenModel;
    boxQuestion: string;
    boxDisplay: string;
    headQuestion: string;
    headDisplay: string;
    tags: string[];
    learningObjectives: number[];
    mark: number;
    sub_marks: number;
    difficulty: number;
    date: string;
    estimatedTime: number;

    constructor({
        id,
        bigQuestionNo,
        smallQuestionNo,
        question,
        type = "text",
        options,
        correct,
        planningScreen,
        answerScreen,
        boxQuestion,
        boxDisplay,
        headQuestion,
        headDisplay,
        tags,
        learningObjectives,
        sub_marks,
        mark,
        difficulty,
        date,
        estimatedTime
    }: {
        id: string,
        bigQuestionNo: number,
        smallQuestionNo: number,
        question: string,
        type?: string,
        options: OptionsModel[],
        correct: string,
        planningScreen: PlanningScreenModel,
        answerScreen: AnswerScreenModel,
        boxQuestion: string,
        boxDisplay: string,
        headQuestion: string,
        headDisplay: string,
        tags: string[],
        learningObjectives: number[],
        sub_marks: number,
        mark: number,
        difficulty: number,
        date: string,
        estimatedTime: number
    }) {
        this.id = id;
        this.bigQuestionNo = bigQuestionNo;
        this.smallQuestionNo = smallQuestionNo;
        this.question = question;
        this.type = type;
        this.options = options;
        this.correct = correct;
        this.planningScreen = planningScreen;
        this.answerScreen = answerScreen;
        this.boxQuestion = boxQuestion;
        this.boxDisplay = boxDisplay;
        this.headQuestion = headQuestion;
        this.headDisplay = headDisplay;
        this.tags = tags;
        this.sub_marks = sub_marks
        this.learningObjectives = learningObjectives;
        this.mark = mark;
        this.difficulty = difficulty;
        this.date = date;
        this.estimatedTime = estimatedTime;
    }
}

export {QuestionModel, OptionsModel, PlanningScreenModel, AnswerScreenModel}