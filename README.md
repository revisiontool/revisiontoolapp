This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


Project is made using NextJs along with TailwindCSS. It can be run just like a standard NextJs app. It is currently deployed on Vercel at http://revision-tool-new.vercel.app/ Any further changes shall require a separate deployment.

Components and pages have separate directories and files to make the codebase easier to understand.

Data is stored statically and doesn’t use any database. Data for Math and Economics is stored in MathData.js and EconomicsData.js. Below is an example of a single question data format stored. However, please refer to other questions to fully understand the structure of a single question. If you want to change the questions, then make changes to corresponding question in those files.

new QuestionModel({id: "1.1", // Unique ID for the question. Format shall remain same.
bigQuestionNo: 1, // Question No for main Question
smallQuestionNo: 1, // Question No for the sub questions in the main question
question: "Define an arithmetic series?", // Sub Question
type: "text", // It supports 'image' if image is used for display
options: [
new OptionsModel({
value: "A", // Option
optionText: // Value attached to the option
"A series with a common difference between any two terms",
}),
new OptionsModel({
value: "B",
optionText:
"A series with a common difference between two consecutive terms",
}),
new OptionsModel({
value: "C",
optionText:
"A series with a common difference between the first and second term",
}),
new OptionsModel({
value: "D",
optionText:
"A series with a common ratio between two consecutive terms"
})
],
correct: "B", // Correct answer
planningScreen: new PlanningScreenModel({
heading: 'Arithmetic Series',
question: 'Define an arithmetic series?',
answer: "A series with a common difference between two consecutive terms",
typeScreen: "text"
}), // Data to be displayed on the planning Screen
answerScreen: null, // Data to be displayed on the answer screen
boxQuestion: 'Define an arithmetic series?', // Question that shows up on Box for sub question
boxDisplay: "Guiding Question Prompt 1.1", // head tag for the sub question
headQuestion: 'In an arithmetic sequence, the first term is 10 and second term is 6.', // main question
headDisplay: "Official Question", // head tag for main question
tags: ["Crafting the Perfect Response"], // other tags on this question, can be multiple
learningObjectives: [], // Learning Objectives related to this question
mark: 6, // Total marks for the whole question
sub_marks: 0, // marks for this particular sub question
difficulty: 2, // Difficulty level
date: "2019-05-01", // Release date of question
estimatedTime: 2, // Estimate time to do the question
}),



App uses a caching mechanism with Redux-Persist to maintain and recover Redux state. Therefore, progress saved for users is not universal and is device-dependent.

App uses Auth0 for authentication and it is in testing mode and can allow up to 7000 authenticated users.

All 3rd party apps use revisiontooldev@gmail.com 

Further understanding of code can only be acquired by reading through the code.
