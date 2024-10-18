
import {
  AnswerScreenModel,
  OptionsModel,
  PlanningScreenModel,
  QuestionModel,
} from "../models/questionModel";


const economics_data = [
  //  1.1
  new QuestionModel({
    id: "1.1", // You may need to set this dynamically
    bigQuestionNo: 1, 
    smallQuestionNo: 1, 
    question: "What is the ideal structure for your essay response?",
    type: "text",
    options: [
      new OptionsModel({
        value: "A",
        optionText:
          "Definition of key terms, explanation of how monetary policy works and how these measures can help overcome a recessionary gap, including a diagram with explanation.",
      }),
      new OptionsModel({
        value: "B",
        optionText:
          "Introduction, explanation of how supply side policies work, examples of expansionary monetary policy measures, explanation of how these measures can help overcome arecessionary gap, and evaluation",
      }),
      new OptionsModel({
        value: "C",
        optionText:
          "Definition of key terms, explanation of how fiscal policy works, examples of expansionary monetary policy measures, explanation of how these measures can help overcome arecessionary gap, and real world examples.",
      }),
    ],
    correct: "A",
    planningScreen: new PlanningScreenModel ({
      heading: 'STRUCTURE OF THE ESSAY RESPONSE',
      question: 'What is the ideal structure for your essay response/10 marker?',
      answer: "Definition of key terms, explanation of how monetary policy works and how these measures can help overcome a recessionary gap, including a diagram with explanation.",
      typeScreen: "text"
    }),
    answerScreen: null,
    boxQuestion: 'What is the ideal structure for your essay response?',
    boxDisplay: "Guiding Question Prompt 1.1", 
    headQuestion: 'Analyse how monetary policy can be used to overcome a recessionary gap.',
    headDisplay: "Official Question",
    tags: ["Deconstruction & Mapping"],
    learningObjectives: [],
    mark: 10,
    sub_marks: 0,
    difficulty: 2, // You can change this to a string if your model expects a string
    date: "2019-05-01",
    estimatedTime: 2,
  }),
  //  1.2
  new QuestionModel({
    id: "1.2", // ID from the original object
    bigQuestionNo: 1, // Derived from title "Q1.2"
    smallQuestionNo: 2, // Derived from title "Q1.2"
    question: "Analyse how monetary policy can be used to overcome a recessionary gap. What key terms need to be defined in the response?", // Combined headQuestion and boxQuestion
    type: "text",
    options: [
      new OptionsModel({
        value: "A",
        optionText: "Fiscal policy and inflation",
      }),
      new OptionsModel({
        value: "B",
        optionText: "Monetary policy and recessionary gap",
      }),
      new OptionsModel({
        value: "C",
        optionText: "Aggregate demand and supply",
      }),
      new OptionsModel({
        value: "D",
        optionText: "Unemployment and economic growth",
      }),
    ],
    correct: "B",
    planningScreen: new PlanningScreenModel({
      heading: "PARAGRAPH 1", // heading from planningScreen
      question: "What key terms need to be defined in the response?", // question from planningScreen
      answer: "Monetary policy and recessionary gap", // answer from planningScreen
      typeScreen: "text"
    }),
    answerScreen: null,
    boxQuestion: "What key terms need to be defined in the response?",
    boxDisplay: "Guiding Question Prompt 1.2",
    headQuestion: "Analyse how monetary policy can be used to overcome a recessionary gap.",
    headDisplay: "Official Question",
    tags: ["Deconstruction & Mapping"],
    learningObjectives: [],
    mark: 10,
    sub_marks: 0, // No sub_marks provided in the original object
    difficulty: 1,
    date: "2019-05-01",
    estimatedTime: 2,
}),
new QuestionModel({
  id: "1.3", // ID from the original object
  bigQuestionNo: 1, // Derived from title "Q1.3"
  smallQuestionNo: 3, // Derived from title "Q1.3"
  question: "Analyse how monetary policy can be used to overcome a recessionary gap. Define monetary policy:", // Combined headQuestion and boxQuestion
  type: "text",
  options: [
    new OptionsModel({
      value: "A",
      optionText: "Monetary policy is the control of interest rates and money supply by the central bank to influence the level of AD within the economy and achieve macroeconomic objectives",
    }),
    new OptionsModel({
      value: "B",
      optionText: "Monetary policy is Control of interest rates and money supply by the government",
    }),
    new OptionsModel({
      value: "C",
      optionText: "Monetary policy is the Control of revenue and expenditure by the central bank",
    }),
    new OptionsModel({
      value: "D",
      optionText: "Monetary policy is the Control of revenue and expenditure by the government",
    }),
  ],
  correct: "A",
  planningScreen: null,
  answerScreen: new AnswerScreenModel({
    heading: "PARAGRAPH 1", // heading from answerScreen
    question: "Define monetary policy:", // question from answerScreen
    mark: 1, // mark from the original object
    answer: "Monetary policy is the control of interest rates and money supply by the central bank to influence the level of AD within the economy and achieve macroeconomic objectives.", // answer from answerScreen
    typeScreen: "text"
  }),
  boxQuestion: "Define monetary policy:",
  boxDisplay: "Guiding Question Prompt 1.3",
  headQuestion: "Analyse how monetary policy can be used to overcome a recessionary gap.",
  headDisplay: "Official Question",
  tags: ["Crafting the perfect response"],
  learningObjectives: ["1.1"],
  mark: 10,
  sub_marks: 1, // No sub_marks provided in the original object
  difficulty: 3,
  date: "2019-05-01",
  estimatedTime: 2,
}),
new QuestionModel({
  id: "1.4", // ID from the original object
  bigQuestionNo: 1, // Derived from title "Q1.4"
  smallQuestionNo: 4, // Derived from title "Q1.4"
  question: "Analyse how monetary policy can be used to overcome a recessionary gap. Define recessionary gap:", // Combined headQuestion and boxQuestion
  type: "text",
  options: [
    new OptionsModel({
      value: "A",
      optionText: "A recessionary gap occurs when the actual output of an economy is below the full employment level of output/potential output.",
    }),
    new OptionsModel({
      value: "B",
      optionText: "A recessionary gap occurs when the actual output is above full employment level of output",
    }),
    new OptionsModel({
      value: "C",
      optionText: "A recessionary gap occurs when the real GDP is equal to potential GDP",
    }),
    new OptionsModel({
      value: "D",
      optionText: "A recessionary gap occurs when the economy is producing outside the PPC.",
    }),
  ],
  correct: "A",
  planningScreen: null,
  answerScreen: new AnswerScreenModel({
    typeScreen: "text",
    heading: "", // heading from answerScreen
    question: "Define recessionary gap:", // question from answerScreen
    mark: 1, // mark from the original object
    answer: "A recessionary gap occurs when the actual output of an economy is below the full employment level of output/potential output.", // answer from answerScreen
  }),
  boxQuestion: "Define recessionary gap:",
  boxDisplay: "Guiding Question Prompt 1.4",
  headQuestion: "Analyse how monetary policy can be used to overcome a recessionary gap.",
  headDisplay: "Official Question",
  tags: ["Crafting the perfect response"],
  learningObjectives: ["1.7"],
  mark: 10,
  sub_marks: 1, // No sub_marks provided in the original object
  difficulty: 1,
  date: "2019-05-01",
  estimatedTime: 2,
}),

new QuestionModel({
  id: "1.5", // ID from the original object
  bigQuestionNo: 1, // Derived from title "Q1.5"
  smallQuestionNo: 5, // Derived from title "Q1.5"
  question: "Analyse how monetary policy can be used to overcome a recessionary gap. How does monetary policy help close a recessionary gap?", // Combined headQuestion and boxQuestion
  type: "text",
  options: [
    new OptionsModel({
      value: "A",
      optionText: "By increasing government spending",
    }),
    new OptionsModel({
      value: "B",
      optionText: "By decreasing taxes",
    }),
    new OptionsModel({
      value: "C",
      optionText: "By increasing interest rates",
    }),
    new OptionsModel({
      value: "D",
      optionText: "By increasing money supply and decreasing interest rates",
    }),
  ],
  correct: "D",
  planningScreen: new PlanningScreenModel({
    typeScreen: "text",
    heading: "PARAGRAPH 2", // heading from planningScreen as it is not available in answerScreen
    question: "How does monetary policy help close a recessionary gap?", // question from planningScreen as it is not available in answerScreen
    answer: "By increasing money supply and decreasing interest rates", // answer from planningScreen as it is not available in answerScreen
  
  }),
  answerScreen: null,
  boxQuestion: "How does monetary policy help close a recessionary gap?",
  boxDisplay: "Guiding Question Prompt 1.5",
  headQuestion: "Analyse how monetary policy can be used to overcome a recessionary gap.",
  headDisplay: "Official Question",
  tags: ["Deconstruction & Mapping"],
  learningObjectives: ["1.7"],
  mark: 10,
  sub_marks: 0, // No sub_marks provided in the original object
  difficulty: 1,
  date: "2019-05-01",
  estimatedTime: 2,
}),

new QuestionModel({
  id: "1.6", // ID from the original object
  bigQuestionNo: 1, // Derived from title "Q1.6"
  smallQuestionNo: 6, // Derived from title "Q1.6"
  question: "Analyse how monetary policy can be used to overcome a recessionary gap. Explain how increasing money and lowering interest rates can help close a recessionary gap?", // Combined headQuestion and boxQuestion
  type: "text",
  options: [
    new OptionsModel({
      value: "A",
      optionText: "Since the economy is experiencing a recessionary gap due to insufficient AD, the central bank will adopt an expansionary fiscal policy. The central bank will lower taxes and increase spending on infrastructure to increase employment and increasing spending, the effect of which is to increase AD within the economy.",
    }),
    new OptionsModel({
      value: "B",
      optionText: "Since the economy is experiencing a recessionary gap due to insufficient AD, the central bank will adopt an expansionary monetary policy. The central bank will increase money supply causing the equilibrium interest rates to fall within the economy. The drop in interest rates would result in a lower cost of borrowing for firms and households. Therefore households and firms are likely to borrow more and spend more, so that consumption (C) and investment (I) spending increase.The effect of this is to increase AD within the economy.",
    }),
    new OptionsModel({
      value: "C",
      optionText: "Since the economy is experiencing a recessionary gap due to insufficient AD, the central bank will adopt a contractionary monetary policy. The central bank will decrease money supply causing the equilibrium interest rates to rise within the economy. The rise in interest rates would result in a lower cost of borrowing for firms and households. Therefore households and firms are likely to borrow more and spend more, so that consumption (C) and investment (I) spending increase.The effect of this is to increase AD within the economy.",
    }),
    new OptionsModel({
      value: "D",
      optionText: "Since the economy is experiencing a recessionary gap due to insufficient AD, the central bank will adopt an expansionary fiscal policy. The central bank will decrease money supply causing the equilibrium interest rates to rise within the economy. The rise in interest rates would result in a higher cost of borrowing for firms and households. Therefore households and firms are likely to borrow more and spend more, so that consumption (C) and investment (I) spending increase.The effect of this is to increase AD within the economy.",
    }),
  ],
  correct: "B",
  planningScreen: null,
  answerScreen: new AnswerScreenModel({
    typeScreen: "text",
    heading: "PARAGRAPH 2",
    question: "Explain how increasing money and lowering interest rates can help close a recessionary gap?",
    mark: 4,
    answer: "Since the economy is experiencing a recessionary gap due to insufficient AD, the central bank will adopt an expansionary monetary policy. The central bank will increase money supply causing the equilibrium interest rates to fall within the economy. The drop in interest rates would result in a lower cost of borrowing for firms and households. Therefore households and firms are likely to borrow more and spend more, so that consumption (C) and investment (I) spending increase.The effect of this is to increase AD within the economy.",
  }),
  boxQuestion: "Explain how increasing money and lowering interest rates can help close a recessionary gap?",
  boxDisplay: "Guiding Question Prompt 1.6",
  headQuestion: "Analyse how monetary policy can be used to overcome a recessionary gap.",
  headDisplay: "Official Question",
  tags: ["Crafting the perfect response"],
  learningObjectives: ["1.7"],
  mark: 10,
  sub_marks: 4, // Derived from answerScreen mark
  difficulty: 1,
  date: "2019-05-01",
  estimatedTime: 2,
}),
new QuestionModel({
  id: "1.7", // ID from the original object
  bigQuestionNo: 1, // Derived from title "Q1.7"
  smallQuestionNo: 7, // Derived from title "Q1.7"
  question: "Analyse how monetary policy can be used to overcome a recessionary gap. What kind of diagram can be used to explain the use of monetary policy to overcome a recessionary gap?", // Combined headQuestion and boxQuestion
  type: "text",
  options: [
    new OptionsModel({
      value: "A",
      optionText: "A supply and demand diagram",
    }),
    new OptionsModel({
      value: "B",
      optionText: "A Phillips curve diagram",
    }),
    new OptionsModel({
      value: "C",
      optionText: "A production possibilities frontier diagram",
    }),
    new OptionsModel({
      value: "D",
      optionText: "An AD/AS diagram",
    }),
  ],
  correct: "D",
  planningScreen: new PlanningScreenModel({
    heading: "PARAGRAPH 3",
    question: "What kind of diagram can be used to explain the use of monetary policy to overcome a recessionary gap?",
    answer: "An AD/AS diagram",
    typeScreen: "text",
  }),
  answerScreen: null, // As there are no values provided for heading, question, mark, and answer in the original object.
  boxQuestion: "What kind of diagram can be used to explain the use of monetary policy to overcome a recessionary gap?",
  boxDisplay: "Guiding Question Prompt 1.7",
  headQuestion: "Analyse how monetary policy can be used to overcome a recessionary gap.",
  headDisplay: "Official Question",
  tags: ["Crafting the perfect response"],
  learningObjectives: ["1.7"],
  mark: 10,
  sub_marks: 0, // As there is no mark value in the answerScreen
  difficulty: 1,
  date: "2019-05-01",
  estimatedTime: 2,
}),

new QuestionModel({
  id: "1.8", // ID from the original object
  bigQuestionNo: 1, // Derived from title "Q1.8"
  smallQuestionNo: 8, // Derived from title "Q1.8"
  question: "Analyse how monetary policy can be used to overcome a recessionary gap. Which diagram illustrates the use of monetary policy to overcome a recessionary gap?", // Combined headQuestion and boxQuestion
  type: "image",
  options: [
    new OptionsModel({
      value: "A",
      optionText: "https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/Q1.8%2Foption_A.png?alt=media&token=bfc04cec-1079-43cb-aae1-d670e9306508",
    }),
    new OptionsModel({
      value: "B",
      optionText: "https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/Q1.8%2Foption_B.png?alt=media&token=0d50915c-2e4c-4dd8-ae63-4a27f1d249d4",
    }),
    new OptionsModel({
      value: "C",
      optionText: "https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/Q1.8%2Foption_C.png?alt=media&token=f2e11913-f417-4461-a147-85ca152bc583",
    }),
    new OptionsModel({
      value: "D",
      optionText: "https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/Q1.8%2Foption_D.png?alt=media&token=1dd1ca4e-5cc0-42c6-b4f4-3ce4ce88194c",
    }),
  ],
  correct: "A",
  planningScreen: null, // As there are no values provided for heading, question, and answer in the original object.
  answerScreen: new AnswerScreenModel({
    heading: "PARAGRAPH 3",
    question: "Which diagram illustrates the use of monetary policy to overcome a recessionary gap",
    mark: 1,
    typeScreen: "image",
    answer: "https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/Q1.8%2Foption_A.png?alt=media&token=bfc04cec-1079-43cb-aae1-d670e9306508",
  }),
  boxQuestion: "Which diagram illustrates the use of monetary policy to overcome a recessionary gap",
  boxDisplay: "Guiding Question Prompt 1.8",
  headQuestion: "Analyse how monetary policy can be used to overcome a recessionary gap.",
  headDisplay: "Official Question",
  tags: ["Crafting the perfect response"],
  learningObjectives: ["1.7", "1.9"],
  mark: 10,
  sub_marks: 1, // As there is only one mark value in the answerScreen
  difficulty: 3,
  date: "2019-05-01",
  estimatedTime: 2,
}),
// 1.9
new QuestionModel({
  id: "1.9",
  bigQuestionNo: 1,
  smallQuestionNo: 9,
  question: "Analyse how monetary policy can be used to overcome a recessionary gap. Which diagram illustrates the use of monetary policy to overcome a recessionary gap?",
  type: "text",
  options: [
    new OptionsModel({
      value: "A",
      optionText: "Decrease money supply and increase interest rates, shifting AD left"
    }),
    new OptionsModel({
      value: "B",
      optionText: "Increase money supply and lower interest rates, shifting AD right"
    }),
    new OptionsModel({
      value: "C",
      optionText: "Increase government spending and raise taxes, shifting AS right"
    }),
    new OptionsModel({
      value: "D",
      optionText: "Decrease government spending and lower taxes, shifting AS left"
    })],
  correct: "B",
  planningScreen: null,
  answerScreen: new AnswerScreenModel({
    typeScreen: "text",
    heading: "",
    mark: 3,
    question: 'What action would help an economy operating below its potential output (Yp) and in a state known as a "recessionary gap" to return to Yp?',
    answer: "Increase money supply and lower interest rates, shifting AD right"
  }),
  boxQuestion: 'What action would help an economy operating below its potential output (Yp) and in a state known as a "recessionary gap" to return to Yp?',
  boxDisplay: "Guiding Question Prompt 1.9",
  headQuestion: "Analyse how monetary policy can be used to overcome a recessionary gap. Which diagram illustrates the use of monetary policy to overcome a recessionary gap?",
  headDisplay: "Official Question",
  tags: ["Crafting the Perfect Response"],
  learningObjectives: ['1.7', '1.9'],
  mark: 10,
  sub_marks: 3, // As there is only one mark value in the answerScreen
  difficulty: 3,
  date: "2019-05-01",
  estimatedTime: 3,
}),

new QuestionModel({
  id: "2.1", // ID from the original object
  bigQuestionNo: 2, // Derived from title "Q2.1"
  smallQuestionNo: 1, // Derived from title "Q2.1"
  question: "Analyse two tools that a central bank can use to conduct expansionary monetary policy.", // Combined headQuestion and boxQuestion
  type: "text",
  options: [
    new OptionsModel({
      value: "A",
      optionText: "definition of key terms, explanation of expansionary monetary policy and two tools that a central bank can use to conduct expansionary monetary policy, including a money supply diagram with explanation.",
    }),
    new OptionsModel({
      value: "B",
      optionText: "Introduction, explanation of how monetary policy works, examples of expansionary monetary policy measures, explanation of how two monetary policy tools can help overcome a recessionary gap, and evaluation",
    }),
    new OptionsModel({
      value: "C",
      optionText: "Definition of key terms, explanation of how monetary policy works, examples of expansionary monetary policy measures, explanation of how open market operations and reserve requirements can be used to conduct monetary policy, and real world examples.",
    }),
  ],
  correct: "A",
  planningScreen: new PlanningScreenModel({
    typeScreen: "text",
    heading: "",
    question: "What is the ideal structure for your essay response",
    answer: "definition of key terms, explanation of expansionary monetary policy and two tools that a central bank can use to conduct expansionary monetary policy, including a money supply diagram with explanation",
  }),
  answerScreen: null,
  boxQuestion: "What is the ideal structure for your essay response.",
  boxDisplay: "Guiding Question Prompt 2.1",
  headQuestion: "Analyse two tools that a central bank can use to conduct expansionary monetary policy",
  headDisplay: "Official Question",
  tags: ["Deconstructing & Mapping"],
  learningObjectives: [],
  mark: 10,
  sub_marks: 0, // As there is only one mark value in the answerScreen
  difficulty: 3,
  date: "2019-05-01",
  estimatedTime: 2,
}),

new QuestionModel({
  id: "2.2", // ID from the original object
  bigQuestionNo: 2, // Derived from title "Q2.2"
  smallQuestionNo: 2, // Derived from title "Q2.2"
  question: "Analyse two tools that a central bank can use to conduct expansionary monetary policy. What key terms need to be defined in the response?", // Combined headQuestion and boxQuestion
  type: "text",
  options: [
    new OptionsModel({
      value: "A",
      optionText: "Fiscal policy and inflation",
    }),
    new OptionsModel({
      value: "B",
      optionText: "Monetary policy and Expansionary Monetary Policy",
    }),
    new OptionsModel({
      value: "C",
      optionText: "Aggregate demand and supply",
    }),
    new OptionsModel({
      value: "D",
      optionText: "Unemployment and economic growth",
    }),
  ],
  correct: "B",
  planningScreen: new PlanningScreenModel({
    typeScreen: "text",
    heading: "Paragraph 1",
    question: "Definition of key terms",
    answer: "Monetary policy and Expansionary Monetary Policy",
  }),
  answerScreen: null,
  boxQuestion: "What key terms need to be defined in the response?",
  boxDisplay: "Guiding Question Prompt 2.2",
  headQuestion: "Analyse two tools that a central bank can use to conduct expansionary monetary policy",
  headDisplay: "Official Question",
  tags: ["Deconstructing & Mapping"],
  learningObjectives: [],
  mark: 10,
  sub_marks: 0, // As there is only one mark value in the answerScreen
  difficulty: 4,
  date: "2019-05-01",
  estimatedTime: 2,
}),
new QuestionModel({
  id: "2.3", // ID from the original object
  bigQuestionNo: 2, // Derived from title "Q2.3"
  smallQuestionNo: 3, // Derived from title "Q2.3"
  question: "Analyse two tools that a central bank can use to conduct expansionary monetary policy Define monetary policy:", // Combined headQuestion and boxQuestion
  type: "text",
  options: [
    new OptionsModel({
      value: "A",
      optionText: "Monetary policy is the control of interest rates and money supply by the central bank to influence the level of AD within the economy and achieve macroeconomic objectives",
    }),
    new OptionsModel({
      value: "B",
      optionText: "Monetary policy is Control of interest rates and money supply by the government",
    }),
    new OptionsModel({
      value: "C",
      optionText: "Monetary policy is the Control of revenue and expenditure by the central bank",
    }),
    new OptionsModel({
      value: "D",
      optionText: "Monetary policy is the Control of revenue and expenditure by the government",
    }),
  ],
  correct: "A",
  planningScreen: null,
  answerScreen: new AnswerScreenModel({
    typeScreen: "text",
    heading: "Paragraph 1",
    question: "Define monetary policy:",
    mark: 1,
    answer: "Monetary policy is the control of interest rates and money supply by the central bank to influence the level of AD within the economy and achieve macroeconomic objectives."
  }),
  boxQuestion: "Define monetary policy:",
  boxDisplay: "Guiding Question Prompt 2.3",
  headQuestion: "Analyse two tools that a central bank can use to conduct expansionary monetary policy",
  headDisplay: "Official Question",
  tags: ["Deconstruction & Mapping"],
  learningObjectives: ["1.1"],
  mark: 10,
  sub_marks: 1, // no subquestions
  difficulty: 4,
  date: "2019-05-01",
  estimatedTime: 2,
}),
new QuestionModel({
  id: "2.4", // ID from the original object
  bigQuestionNo: 2, // Derived from title "Q2.4"
  smallQuestionNo: 4, // Derived from title "Q2.4"
  question: "Analyse two tools that a central bank can use to conduct expansionary monetary policy Define expansionary monetary policy:", // Combined headQuestion and boxQuestion
  type: "text",
  options: [
    new OptionsModel({
      value: "A",
      optionText: "Expansionary Monetary Policy is where Central banks increase taxes and government revenue to increase expenditure",
    }),
    new OptionsModel({
      value: "B",
      optionText: "Expansionary Monetary Policy is where Central banks increase interest rates and lower money supply to increase AD.",
    }),
    new OptionsModel({
      value: "C",
      optionText: "Expansionary Monetary Policy is where Central banks increase money supply and lower interest rates to increase AD.",
    }),
    new OptionsModel({
      value: "D",
      optionText: "Expansionary Monetary Policy is where Central banks decrease taxes and increase government expenditure to increase AD.",
    }),
  ],
  correct: "C",
  planningScreen: null,
  answerScreen: new AnswerScreenModel({
    typeScreen: "text",
    heading: "",
    question: "Define expansionary monetary policy:",
    mark: 1,
    answer: "Expansionary Monetary Policy is where central banks increase money supply and lower interest rates to increase AD"
  }),
  boxQuestion: "Define expansionary monetary policy:",
  boxDisplay: "Guiding Question Prompt 2.4",
  headQuestion: "Analyse two tools that a central bank can use to conduct expansionary monetary policy",
  headDisplay: "Official Question",
  tags: ["Deconstruction & Mapping"],
  learningObjectives: ["1.1"],
  mark: 10,
  sub_marks: 1, // no subquestions
  difficulty: 4,
  date: "2019-05-01",
  estimatedTime: 2,
}),

new QuestionModel({
  id: "2.5", // ID from the original object
  bigQuestionNo: 2, // Derived from title "Q2.5"
  smallQuestionNo: 5, // Derived from title "Q2.5"
  question: "Analyse two tools that a central bank can use to conduct expansionary monetary policy Choose and Explain two tools of monetary policy that a central bank can use to conduct expansionary monetary policy ?", // Combined headQuestion and boxQuestion
  type: "text",
  options: [
    new OptionsModel({
      value: "A",
      optionText: "Open market operations and income taxes",
    }),
    new OptionsModel({
      value: "B",
      optionText: "Open market operations and progressive taxes",
    }),
    new OptionsModel({
      value: "C",
      optionText: "Quantitative Easing and Indirect Taxes",
    }),
    new OptionsModel({
      value: "D",
      optionText: "Open market operations and Minimum Reserve Requirement",
    }),
  ],
  correct: "D",
  planningScreen: new PlanningScreenModel({
    typeScreen: "text",
    heading: "Paragraph 2",
    question: "Choose and Explain two tools that a central bank can use to conduct expansionary monetary policy",
    answer: "Open Market Operations and Minimum Reserve Requirement",
  }),
  answerScreen: null, // No question or answer in the original object for AnswerScreenModel
  boxQuestion: "Choose and Explain two tools of monetary policy that a central bank can use to conduct expansionary monetary policy ?",
  boxDisplay: "Guiding Question Prompt 2.5",
  headQuestion: "Analyse two tools that a central bank can use to conduct expansionary monetary policy",
  headDisplay: "Official Question",
  tags: ["Deconstruction & Mapping"],
  learningObjectives: ["1.4"],
  mark: 10,
  sub_marks: 0, // no subquestions
  difficulty: 4,
  date: "2019-05-01",
  estimatedTime: 2,
}),
new QuestionModel({
  id: "2.6", // ID from the original object
  bigQuestionNo: 2, // Derived from title "Q2.6"
  smallQuestionNo: 6, // Derived from title "Q2.6"
  question: "Analyse two tools that a central bank can use to conduct expansionary monetary policy Explain the use of open market operations in conducting expansionary monetary policy?", // Combined headQuestion and boxQuestion
  type: "text",
  options: [
    new OptionsModel({
      value: "A",
      optionText: "To conduct expansionary monetary policy central banks can use open market operations as a tool. This is where central banks buy government bonds from commercial banks, which increases the commercial banks excess reserves, increasing commercial banks lending ability and hence increasing money supply. The increase in money supply thereby lowers the equilibrium interest rates, allowing the central bank to conduct expansionary monetary policy.",
    }),
    new OptionsModel({
      value: "B",
      optionText: "To conduct expansionary monetary policy central banks can use open market operations as a tool. This is where central banks sell government bonds to commercial banks, increasing commercial banks excess reserves, increasing lending ability and hence decreasing money supply. The decrease in money supply thereby lowers the equilibrium interest rates, allowing the central bank to conduct expansionary monetary policy.",
    }),
    new OptionsModel({
      value: "C",
      optionText: "To conduct expansionary monetary policy central banks can use open market operations as a tool. This is where central banks buy government bonds from commercial banks, decreasing commercial banks excess reserves, decreasing their lending ability and hence decreasing money supply. The decrease in money supply thereby increases the equilibrium interest rates, allowing the central bank to conduct expansionary monetary policy.",
    }),
    new OptionsModel({
      value: "D",
      optionText: "To conduct expansionary monetary policy central banks can use open market operations as a tool. This is where central banks sell government bonds to commercial banks, decreasing commercial banks excess reserves, decreasing their lending ability and hence decreasing money supply and increasing interest rates within the economy to decrease AD.",
    }),
  ],
  correct: "A",
  planningScreen: null, // No heading, question or answer in the original object for PlanningScreenModel
  answerScreen: new AnswerScreenModel({
    typeScreen: "text",
    heading: "Paragraph 2",
    question: "Explain the use of open market operations in conducting expansionary monetary policy?",
    mark: 2,
    answer: "To conduct expansionary monetary policy central banks can use open market operations as a tool. This is where central banks buy government bonds from commercial banks, which increases the commercial banks excess reserves, increasing commercial banks lending ability and hence increasing money supply. The increase in money supply thereby lowers the equilibrium interest rates, allowing the central bank to conduct expansionary monetary policy."
  }),
  boxQuestion: "Explain the use of open market operations in conducting expansionary monetary policy?",
  boxDisplay: "Guiding Question Prompt 2.6",
  headQuestion: "Analyse two tools that a central bank can use to conduct expansionary monetary policy",
  headDisplay: "Official Question",
  tags: ["Deconstruction & Mapping"],
  learningObjectives: ["1.3", "1.4"],
  mark: 10,
  sub_marks: 2, // no subquestions
  difficulty: 4,
  date: "2019-05-01",
  estimatedTime: 2,
}),

new QuestionModel({
  id: "2.7", // ID from the original object
  bigQuestionNo: 2, // Derived from title "Q2.7"
  smallQuestionNo: 7, // Derived from title "Q2.7"
  question: "Analyse two tools that a central bank can use to conduct expansionary monetary policy. Explain the use of Minimum Reserve Requirement (MRR) in conducting expansionary monetary policy?", // Combined headQuestion and boxQuestion
  type: "text",
  options: [
    new OptionsModel({
      value: "A",
      optionText: "Another tool central banks can use to conduct expansionary monetary policy is to decrease the minimum reserve requirement. A minimum reserve requirement is where central banks require commercial banks to keep a fraction of total deposits as required reserves. The rest are called excess reserves and can be lent out. Decreasing MRR increases the excess reserves of commercial banks increasing their lending ability and hence money supply, which lowers interest rates, allowing the central bank to conduct expansionary monetary policy.",
    }),
    new OptionsModel({
      value: "B",
      optionText: "Another tool central banks can use to conduct expansionary monetary policy is to increase the minimum reserve requirement. A minimum reserve requirement is where central banks require commercial banks to keep a fraction of total deposits as required reserves. The rest are called excess reserves and can be lent out. Increasing MRR increases the excess reserves of commercial banks increasing their lending ability and hence money supply, which lowers interest rates, allowing the central bank to conduct expansionary monetary policy.",
    }),
    new OptionsModel({
      value: "C",
      optionText: "Another tool central banks can use to conduct expansionary monetary policy is to decrease the minimum reserve requirement. A minimum reserve requirement is The interest rate central banks charge on loans to commercial banks. Decreasing MRR increases the borrowing by commercial banks from the central banks. This increases commercial banks lending ability and hence money supply, which lowers interest rates, allowing the central bank to conduct expansionary monetary policy.",
    }),
    new OptionsModel({
      value: "D",
      optionText: "Another tool central banks can use to conduct expansionary monetary policy is to increase the minimum reserve requirement. A minimum reserve requirement is the fraction of total deposits that must be lent out by commercial banks. Increasing MRR increases commercial banks lending ability and hence money supply, which lowers interest rates, allowing the central bank to conduct expansionary monetary policy.",
    }),
  ],
  correct: "A",
  planningScreen: null, // No heading, question or answer in the original object for PlanningScreenModel
  answerScreen: new AnswerScreenModel({
    typeScreen: "text",
    heading: "",
    question: "Explain the use of Minimum Reserve Requirement (MRR) in conducting expansionary monetary policy?",
    mark: 2,
    answer: "Another tool central banks can use to conduct expansionary monetary policy is to decrease the minimum reserve requirement. A minimum reserve requirement is where central banks require commercial banks to keep a fraction of total deposits as required reserves. The rest are called excess reserves and can be lent out. Decreasing MRR increases the excess reserves of commercial banks increasing their lending ability and hence money supply, which lowers interest rates, allowing the central bank to conduct expansionary monetary policy"
  }),
  boxQuestion: "Explain the use of Minimum Reserve Requirement (MRR) in conducting expansionary monetary policy?",
  boxDisplay: "Guiding Question Prompt 2.7",
  headQuestion: "Analyse two tools that a central bank can use to conduct expansionary monetary policy",
  headDisplay: "Official Question",
  tags: ["Crafting the Perfect Response"],
  learningObjectives: ["1.3", "1.4"],
  mark: 10,
  sub_marks: 2, // no subquestions
  difficulty: 4,
  date: "2019-05-01",
  estimatedTime: 2,
}),
new QuestionModel({
  id: "2.8",
  bigQuestionNo: 2,
  smallQuestionNo: 8,
  question: "Analyse two tools that a central bank can use to conduct expansionary monetary policy. What kind of diagram can be used to explain and illustrate the use of expansionary monetary policy?",
  type: "text",
  options: [
    new OptionsModel({
      value: "A",
      optionText: "A Money supply and Money demand diagram",
    }),
    new OptionsModel({
      value: "B",
      optionText: "A Phillips curve diagram",
    }),
    new OptionsModel({
      value: "C",
      optionText: "A production possibilities frontier diagram",
    }),
    new OptionsModel({
      value: "D",
      optionText: "An AD/AS diagram",
    }),
  ],
  correct: "A",
  planningScreen: new PlanningScreenModel({
    typeScreen: "text",
    heading: "Paragraph 3",
    question: "What kind of diagram can be used to explain and illustrate the use of expansionary monetary policy?",
    answer: "A Money supply and Money demand diagram"
  }),
  answerScreen: null,
  boxQuestion: "What kind of diagram can be used to explain and illustrate the use of expansionary monetary policy?",
  boxDisplay: "Guiding Question Prompt 2.8",
  headQuestion: "Analyse two tools that a central bank can use to conduct expansionary monetary policy",
  headDisplay: "Official Question",
  tags: ["Crafting the Perfect Response"],
  learningObjectives: ["1.5","1.7"],
  mark: 10,
  sub_marks: 0,
  difficulty: 4,
  date: "2019-05-01",
  estimatedTime: 2,
}),

new QuestionModel({
  id: '2.9',
  bigQuestionNo: 2,
  smallQuestionNo: 9,
  question: 'Analyse two tools that a central bank can use to conduct expansionary monetary policy. Which diagram best illustrates the use of expansionary monetary policy?',
  type: 'image',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/2.9%2Foption_A.png?alt=media&token=1fb7bf63-9db2-4e97-8444-4d85f5115fcd',
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/2.9%2Foption_B.png?alt=media&token=1c83713d-adea-4dd1-8c2f-3a93956cc074',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/2.9%2Foption_C.png?alt=media&token=4bf11d9b-4e33-48d4-a0b4-a7bec7a65310',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/2.9%2Foption_D.png?alt=media&token=9ddb8f67-fab2-4cec-a602-20576575c48a',
    }),
  ],
  correct: 'B',
  planningScreen: null,
  answerScreen: new AnswerScreenModel({
    typeScreen: "image",
    heading: "",
    question: 'Which diagram best illustrates the use of expansionary monetary policy?',
    mark: 2,
    answer: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/2.9%2Foption_B.png?alt=media&token=1c83713d-adea-4dd1-8c2f-3a93956cc074',
  }),
  boxQuestion: 'Which diagram best illustrates the use of expansionary monetary policy?',
  boxDisplay: 'Guiding Question Prompt 2.9',
  headQuestion: 'Analyse two tools that a central bank can use to conduct expansionary monetary policy',
  headDisplay: 'Official Question',
  tags: ["Deconstruction & Mapping"],
  learningObjectives: ['1.4', '1.5', '1.7'],
  mark: 10,
  sub_marks: 2,
  difficulty: 4,
  date: '2019-05-01',
  estimatedTime: 2,
}),

new QuestionModel({
  id: '2.10',
  bigQuestionNo: 2,
  smallQuestionNo: 10,
  question: "Analyse two tools that a central bank can use to conduct expansionary monetary policy. Which diagram best illustrates the use of expansionary monetary policy?",
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'Decrease money supply, shifting the money supply curve left'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'Increase money supply, shifting the money supply curve right'
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'Decrease money demand, shifting the money demand curve left'
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'Increase money demand, shifting the money demand curve right'
    })
  ],
  correct: 'B',
  planningScreen: null,
  answerScreen:  new AnswerScreenModel({
    typeScreen: "text",
    heading: "",
    question: 'In the money market illustrated in figure 1 above, equilibrium is achieved where money demand equals money supply at i1. What action would the central bank take to conduct expansionary monetary policy?',
    mark: 2,
    answer: 'Increase money supply, shifting the money supply curve right'
  }),
  boxQuestion: 'In the money market illustrated in figure 1 above, equilibrium is achieved where money demand equals money supply at i1. What action would the central bank take to conduct expansionary monetary policy?',
  boxDisplay: 'Guiding Question Prompt 2.10',
  headQuestion: 'Analyse two tools that a central bank can use to conduct expansionary monetary policy. Which diagram best illustrates the use of expansionary monetary policy?',
  headDisplay: 'Official Question',
  tags: ["Crafting the Perfect Response"],
  learningObjectives: [],
  mark: 10,
  sub_marks: 2,
  difficulty: 5,
  date: '2019-05-01',
  estimatedTime: 2,
}),

// 3.1
new QuestionModel({
  id: '3.1',
  bigQuestionNo: 3,
  smallQuestionNo: 1,
  question: 'Explain how monetary policy can be used to overcome inflation? Which diagram best illustrates the use of expansionary monetary policy?',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'definition of key terms, explanation of how contractionary monetary policy can be used to lower inflationary pressures, including an AD/AS diagram diagram with explanation',
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'Introduction, explanation of how monetary policy works, examples of contractionary monetary policy measures, explanation of how two monetary policy tools can help overcome inflation, and evaluation',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'Definition of key terms, explanation of how monetary policy works, examples of expansionary monetary policy measures, and how they can be used to lower inflation and real world examples.',
    }),
  ],
  correct: 'A',
  planningScreen: new PlanningScreenModel({
    typeScreen: "text",
    heading: "STRUCTURE OF THE ESSAY RESPONSE",
    question: "What is the ideal structure for your essay response/10 marker?",
    answer: "definition of key terms, explanation of how contractionary monetary policy can be used to lower inflationary pressures, including an AD/AS diagram diagram with explanation."
  }),
  answerScreen: null,
  boxQuestion: 'What is the ideal structure for your essay response/10 marker?',
  boxDisplay: 'Guiding Question Prompt 3.1',
  headQuestion: 'Explain how monetary policy can be used to overcome inflation?',
  headDisplay: 'Official Question',
  tags: ['Deconstruction & Mapping'],
  learningObjectives: [],
  mark: 10,
  sub_marks: 0,
  difficulty: 5,
  date: '2019-05-01',
  estimatedTime: 2,
}), 
//3.2
new QuestionModel({
  id: '3.2',
  bigQuestionNo: 3,
  smallQuestionNo: 2,
  question: 'Explain how monetary policy can be used to overcome inflation? What key terms need to be defined in the response?',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'Fiscal policy and inflation'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'Monetary policy and Inflation',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'Aggregate demand and supply',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'Unemployment and economic growth',
    }),
  ],
  correct: 'B',
  planningScreen: new PlanningScreenModel({
    typeScreen: "text",
    heading: "Paragraph 1",
    question: "What key terms need to be defined in the response?",
    answer: "Monetary policy and Inflation"
  }),
  answerScreen: null,
  boxQuestion: 'What key terms need to be defined in the response?',
  boxDisplay: 'Guiding Question Prompt 3.2',
  headQuestion: 'Explain how monetary policy can be used to overcome inflation?',
  headDisplay: 'Official Question',
  tags: ['Deconstruction & Mapping'],
  learningObjectives: [],
  mark: 10,
  sub_marks: 0,
  difficulty: 5,
  date: '2019-05-01',
  estimatedTime: 2,
}),

//3.3
new QuestionModel({
  id: '3.3',
  bigQuestionNo: 3,
  smallQuestionNo: 3,
  question: 'Explain how monetary policy can be used to overcome inflation? Define monetary policy:',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'Monetary policy is the control of interest rates and money supply by the central bank to influence the level of AD within the economy and achieve macroeconomic objectives'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'Monetary policy is Control of interest rates and money supply by the government',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'Monetary policy is the Control of revenue and expenditure by the central bank',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'Monetary policy is the Control of revenue and expenditure by the government',
    }),
  ],
  correct: 'A',
  planningScreen: null,
  answerScreen: new AnswerScreenModel({
    heading: "Paragraph 1",
    question: 'Define monetary policy:',
    mark: 1,
    answer: 'Monetary policy is the control of interest rates and money supply by the central bank to influence the level of AD within the economy and achieve macroeconomic objectives',
  }),
  boxQuestion: 'Define monetary policy:',
  boxDisplay: 'Guiding Question Prompt 3.3',
  headQuestion: 'Explain how monetary policy can be used to overcome inflation?',
  headDisplay: 'Official Question',
  tags: ["Crafting the perfect response"],
  learningObjectives: ['1.1'],
  mark: 10,
  sub_marks: 1,
  difficulty: 5,
  date: '2019-05-01',
  estimatedTime: 2,
}),
//3.4
new QuestionModel({
  id: '3.4',
  bigQuestionNo: 3,
  smallQuestionNo: 4,
  question: 'Explain how monetary policy can be used to overcome inflation? Define inflation:',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'Inflation represents the fall in the average price level of goods and services.'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'Inflation represents a one time increase in the price of a specific good or service.',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'Inflation represents the persistent increase in the average price level of goods and services.',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'Inflation is an increase in the rate of unemployment within the economy.',
    }),
  ],
  correct: 'C',
  planningScreen: null,
  answerScreen: new AnswerScreenModel({
    heading: "",
    question: "Define inflation:",
    mark: 2,
    answer: 'Inflation represents the persistent increase in the average price level of goods and services.',
  }),
  boxQuestion: 'Define inflation:',
  boxDisplay: 'Guiding Question Prompt 3.4',
  headQuestion: 'Explain how monetary policy can be used to overcome inflation?',
  headDisplay: 'Official Question',
  tags: ["Deconstruction & Mapping"],
  learningObjectives: [],
  mark: 10,
  sub_marks: 1,
  difficulty: 5,
  date: '2019-05-01',
  estimatedTime: 2,
}),
//3.5
new QuestionModel({
  id: '3.5',
  bigQuestionNo: 3,
  smallQuestionNo: 5,
  question: 'How does monetary policy help overcome inflation?',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'By increasing government spending'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'By decreasing taxes',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'By using Contractionary Monetary Policy i.e. by decreasing money supply and increasing interest rates',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'By using Expansionary Monetary Policy i.e. by increasing money supply and decreasing interest rates',
    }),
  ],
  correct: 'C',
  planningScreen: new PlanningScreenModel({
    typeScreen: "text",
    heading: "Paragraph 2",
    question: "How does monetary policy help overcome inflation?",
    answer: "By using Contractionary Monetary Policy i.e. by decreasing money supply and increasing interest rates"
  }),
  answerScreen: null,
  boxQuestion: 'How does monetary policy help overcome inflation?',
  boxDisplay: 'Guiding Question Prompt 3.5',
  headQuestion: 'Explain how monetary policy can be used to overcome inflation?',
  headDisplay: 'Official Question',
  tags: ["Crafting the Perfect Response"],
  learningObjectives: [],
  mark: 10,
  sub_marks: 0,
  difficulty: 5,
  date: '2019-05-01',
  estimatedTime: 2,
}),
//3.6
new QuestionModel({
  id: '3.6',
  bigQuestionNo: 3,
  smallQuestionNo: 6,
  question: 'Explain how monetary policy can be used to overcome inflation? Explain how contractionary monetary policy i.e. decreasing money supply and increasing interest rates can help lower inflation?',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'Since the economy is experiencing a recessionary gap due to insufficient AD, the central bank will adopt an expansionary monetary policy. The central bank will lower taxes and increase spending on infrastructure to increase employment and increasing spending, the effect of which is to increase AD within the economy.'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'Since the economy is experiencing inflation/inflationary gap, the central bank will adopt a contractionary monetary policy. The central bank will decrease money supply causing the equilibrium interest rates to rise within the economy. The rise in interest rates would result in a higher cost of borrowing for firms and households. Therefore households and firms are likely to borrow less and spend less, so that consumption (C) and investment (I) spending increase.The effect of this is to decrease AD within the economy and with it level of inflation.',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'Since the economy is experiencing an inflationary gap due to higher AD, the central bank will adopt a contractionary monetary policy. The central bank will decrease money supply causing the equilibrium interest rates to rise within the economy. The rise in interest rates would result in a lower cost of borrowing for firms and households. Therefore households and firms are likely to borrow more and spend more, so that consumption (C) and investment (I) spending increase.The effect of this is to increase AD within the economy and lower inflationary pressures.',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'Since the economy is experiencing inflation due to insufficient AD, the central bank will adopt an expansionary fiscal policy. The central bank will decrease money supply causing the equilibrium interest rates to rise within the economy. The rise in interest rates would result in a higher cost of borrowing for firms and households. Therefore households and firms are likely to borrow more and spend more, so that consumption (C) and investment (I) spending increase.The effect of this is to increase AD within the economy and lower inflation.',
    }),
  ],
  correct: 'B',
  planningScreen: null,
  answerScreen: new AnswerScreenModel({
    heading: "PARAGRAPH 2",
    question: "Explain how contractionary monetary policy i.e. decreasing money supply and increasing interest rates can help lower inflation?",
    mark: 5,
    answer: 'Since the economy is experiencing inflation/inflationary gap, the central bank will adopt a contractionary monetary policy. The central bank will decrease money supply causing the equilibrium interest rates to rise within the economy. The rise in interest rates would result in a higher cost of borrowing for firms and households. Therefore households and firms are likely to borrow less and spend less, so that consumption (C) and investment (I) spending increase.The effect of this is to decrease AD within the economy and with it level of inflation.',
  }),
  boxQuestion: 'Explain how contractionary monetary policy i.e. decreasing money supply and increasing interest rates can help lower inflation?',
  boxDisplay: 'Guiding Question Prompt 3.6',
  headQuestion: 'Explain how monetary policy can be used to overcome inflation?',
  headDisplay: 'Official Question',
  tags: ["Crafting the perfect response"],
  learningObjectives: ['1.8'],
  mark: 10,
  sub_marks: 5,
  difficulty: 5,
  date: '2019-05-01',
  estimatedTime: 2,
}),
//3.7
new QuestionModel({
  id: '3.7',
  bigQuestionNo: 3,
  smallQuestionNo: 7,
  question: 'Explain how monetary policy can be used to overcome inflation? What kind of diagram can be used to explain the use of monetary policy to overcome inflation?',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'A supply and demand diagram'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'A Phillips curve diagram',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'A production possibilities frontier diagram',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'An AD/AS diagram',
    }),
  ],
  correct: 'D',
  planningScreen: new PlanningScreenModel({
    typeScreen: "text",
    heading: "Paragraph 3",
    question: "What kind of diagram can be used to explain the use of monetary policy to overcome inflation?",
    answer: "AD/AS Diagram"
  }),
  answerScreen: null,
  boxQuestion: 'What kind of diagram can be used to explain the use of monetary policy to overcome inflation?',
  boxDisplay: 'Guiding Question Prompt 3.7',
  headQuestion: 'Explain how monetary policy can be used to overcome inflation?',
  headDisplay: 'Official Question',
  tags: ['Deconstruction & Mapping'],
  learningObjectives: [],
  mark: 10,
  sub_marks: 0,
  difficulty: 5,
  date: '2019-05-01',
  estimatedTime: 2,
}),
//3.8
new QuestionModel({
  id: '3.8',
  bigQuestionNo: 3,
  smallQuestionNo: 8,
  question: 'Explain how monetary policy can be used to overcome inflation? Which diagram illustrates the use of monetary policy to overcome inflation/inflationary gap',
  type: 'image',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/3.8%2Foption_A.png?alt=media&token=5baf6988-f089-4d6e-92b4-ae8c03e44a5d&_gl=1*1tydn5b*_ga*NTAwMTk2OTMyLjE2ODU0MzQxMjQ.*_ga_CW55HF8NVT*MTY5Njk0MDY4MS4xODEuMS4xNjk2OTQwODE1LjU1LjAuMA..'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/3.8%2Foption_B.png?alt=media&token=083385c3-0785-44d8-89d6-562456a2011e&_gl=1*6csn1h*_ga*NTAwMTk2OTMyLjE2ODU0MzQxMjQ.*_ga_CW55HF8NVT*MTY5Njk0MDY4MS4xODEuMS4xNjk2OTQwODI5LjQxLjAuMA..',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/3.8%2Foption_C.png?alt=media&token=da4a1af7-b217-4d8f-a3e6-d516b55465ca&_gl=1*1gdsmmb*_ga*NTAwMTk2OTMyLjE2ODU0MzQxMjQ.*_ga_CW55HF8NVT*MTY5Njk0MDY4MS4xODEuMS4xNjk2OTQwODM3LjMzLjAuMA..',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/3.8%2Foption_D.png?alt=media&token=8cc92634-bb6c-4c6f-813e-f27a0db1fdd1&_gl=1*1glu1ph*_ga*NTAwMTk2OTMyLjE2ODU0MzQxMjQ.*_ga_CW55HF8NVT*MTY5Njk0MDY4MS4xODEuMS4xNjk2OTQwODQ4LjIyLjAuMA..',
    }),
  ],
  correct: 'A',
  planningScreen: null,
  answerScreen: new AnswerScreenModel({
    typeScreen: "image",
    heading: "",
    question: "Which diagram illustrates the use of monetary policy to overcome inflation/inflationary gap",
    mark: 2,
    answer: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/3.8%2Foption_A.png?alt=media&token=5baf6988-f089-4d6e-92b4-ae8c03e44a5d&_gl=1*1tydn5b*_ga*NTAwMTk2OTMyLjE2ODU0MzQxMjQ.*_ga_CW55HF8NVT*MTY5Njk0MDY4MS4xODEuMS4xNjk2OTQwODE1LjU1LjAuMA..',
  }),
  boxQuestion: 'Which diagram illustrates the use of monetary policy to overcome inflation/inflationary gap',
  boxDisplay: 'Guiding Question Prompt 3.8',
  headQuestion: 'Explain how monetary policy can be used to overcome inflation?',
  headDisplay: 'Official Question',
  tags: ["Deconstruction & Mapping"],
  learningObjectives: ['1.8', '1.9'],
  mark: 10,
  sub_marks: 2,
  difficulty: 5,
  date: '2019-05-01',
  estimatedTime: 2,
}),

new QuestionModel({
  id: '3.9',
  bigQuestionNo: 3,
  smallQuestionNo: 9,
  question: 'Explain how monetary policy can be used to overcome inflation? Which diagram illustrates the use of monetary policy to overcome inflation/inflationary gap',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'Recessionary gap, increase, right, rise'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'Inflationary gap, decrease, left, fall'
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'Equilibrium, decrease, left, fall'
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'Expansionary gap, increase, left, rise'
    })],
    correct: 'B',
    planningScreen: null,
    answerScreen: new AnswerScreenModel({
      typeScreen: 'text',
      heading: "",
      question: "As illustrated in the diagram above, the economy is currently operating at Yinf, at an output level above Yp and hence is in an ______________. Decreasing money supply and increasing interest rates would ___________ AD, shifting AD curve to the ______ from AD1 to AD2, causing the average price level to _________ from Pl1 to Pl2, thereby lowering inflation.",
      mark: 2,
      answer: 'Inflationary gap, decrease, left, fall',
    }),
    boxQuestion: 'As illustrated in the diagram above, the economy is currently operating at Yinf, at an output level above Yp and hence is in an ______________. Decreasing money supply and increasing interest rates would ___________ AD, shifting AD curve to the ______ from AD1 to AD2, causing the average price level to _________ from Pl1 to Pl2, thereby lowering inflation.',
    boxDisplay: 'Guiding Question Prompt 3.9',
    headQuestion: 'Explain how monetary policy can be used to overcome inflation? Which diagram illustrates the use of monetary policy to overcome inflation/inflationary gap.',
    headDisplay: 'Official Question',
    tags: ["Crafting the Perfect Response"],
    learningObjectives: [],
    mark: 10,
    sub_marks: 2,
    difficulty: 6,
    date: '2019-05-01',
    estimatedTime: 2,
}),

//4.1
new QuestionModel({
  id: '4.1',
  bigQuestionNo: 4,
  smallQuestionNo: 1,
  question: 'Analyse how expansionary monetary policy might lead to a rise in inflation. What is the ideal structure for your essay response/10 marker?',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'definition of key terms, explanation of how expansionary monetary policy can cause a rise in inflationary pressures, including an AD/AS diagram diagram with explanation.'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'Introduction, explanation of how monetary policy works, examples of contractionary monetary policy measures, explanation of how two monetary policy tools can help overcome inflation, and evaluation',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'Definition of key terms, explanation of how monetary policy works, examples of expansionary monetary policy measures, and how they can be used to lower inflation and real world examples.',
    }),
  ],
  correct: 'A',
  planningScreen: new PlanningScreenModel({
    typeScreen: "text",
    heading: "",
    question: "What is the ideal structure for your essay response/10 marker?",
    answer: "definition of key terms, explanation of how expansionary monetary policy can cause a rise in inflationary pressures, including an AD/AS diagram diagram with explanation"
  }),
  answerScreen: null,
  boxQuestion: 'What is the ideal structure for your essay response/10 marker?',
  boxDisplay: 'Guiding Question Prompt 4.1',
  headQuestion: 'Analyse how expansionary monetary policy might lead to a rise in inflation.',
  headDisplay: 'Official Question',
  tags: ["Deconstruction & Mapping"],
  learningObjectives: [],
  mark: 10,
  sub_marks: 0,
  difficulty: 6,
  date: '2019-05-01',
  estimatedTime: 2,
}),
//4.2
new QuestionModel({
  id: '4.2',
  bigQuestionNo: 4,
  smallQuestionNo: 2,
  question: 'Analyse how expansionary monetary policy might lead to a rise in inflation. What key terms need to be defined in the response?',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'Fiscal policy and inflation'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'Expansionary Monetary policy and Inflation',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'Aggregate demand and supply',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'Unemployment and economic growth',
    }),
  ],
  correct: 'B',
  planningScreen: new PlanningScreenModel({
    typeScreen: "text",
    heading: "Paragraph 1",
    question: "Definition of key terms:",
    answer: "Expansionary Monetary policy and Inflation"
  }),
  answerScreen: null,
  boxQuestion: 'What key terms need to be defined in the response?',
  boxDisplay: 'Guiding Question Prompt 4.2',
  headQuestion: 'Analyse how expansionary monetary policy might lead to a rise in inflation.',
  headDisplay: 'Official Question',
  tags: ["Deconstruction & Mapping"],
  learningObjectives: [],
  mark: 10,
  sub_marks: 0,
  difficulty: 6,
  date: '2019-05-01',
  estimatedTime: 2,
}),
//4.3
new QuestionModel({
  id: '4.3',
  bigQuestionNo: 4,
  smallQuestionNo: 3,
  question: 'Analyse how expansionary monetary policy might lead to a rise in inflation. Define expansionary monetary policy',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'Expansionary Monetary policy is the increase in money supply and decrease in interest rates by the central bank to increase the level of AD within the economy.'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'Expansionary Monetary policy is Control of interest rates and money supply by the government',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'Expansionary Monetary policy is the increase in revenue and expenditure by the central bank to increase AD.',
    }),
    new OptionsModel({
      value: 'D',
      optionText: ')Expansionary Monetary policy is the increase in revenue and expenditure by the government to increase AD.',
    }),
  ],
  correct: 'A',
  planningScreen: null,
  answerScreen: new AnswerScreenModel({
    typeScreen: "text",
    heading: "Paragraph 1",
    question: "Define expansionary monetary policy.",
    mark: 1,
    answer: 'Expansionary Monetary policy is the increase in money supply and decrease in interest rates by the central bank to increase the level of AD within the economy',
  }),
  boxQuestion: 'Define expansionary monetary policy.',
  boxDisplay: 'Guiding Question Prompt 4.3',
  headQuestion: 'Analyse how expansionary monetary policy might lead to a rise in inflation.',
  headDisplay: 'Official Question',
  tags: ["Crafting the Perfect Response"],
  learningObjectives: ['1.1'],
  mark: 10,
  sub_marks: 1,
  difficulty: 6,
  date: '2019-05-01',
  estimatedTime: 2,
}),
//4.4
new QuestionModel({
  id: '4.4',
  bigQuestionNo: 4,
  smallQuestionNo: 4,
  question: 'Analyse how expansionary monetary policy might lead to a rise in inflation. Define inflation:',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'Inflation represents the fall in the average price level of goods and services.'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'Inflation represents a one time increase in the price of a specific good or service.',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'Inflation represents the persistent increase in the average price level of goods and services.',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'Inflation is an increase in the rate of unemployment within the economy.',
    }),
  ],
  correct: 'C',
  planningScreen: null,
  answerScreen: new AnswerScreenModel({
    typeScreen: "text",
    heading: "",
    question: "Define inflation.",
    mark: 1,
    answer: 'Inflation represents the persistent increase in the average price level of goods and services.',
  }),
  boxQuestion: 'Define inflation:',
  boxDisplay: 'Guiding Question Prompt 4.4',
  headQuestion: 'Analyse how expansionary monetary policy might lead to a rise in inflation.',
  headDisplay: 'Official Question',
  tags: ["Deconstruction & Mapping"],
  learningObjectives: ['1.1'],
  mark: 10,
  sub_marks: 1,
  difficulty: 6,
  date: '2019-05-01',
  estimatedTime: 2,
}),
//4.5
new QuestionModel({
  id: '4.5',
  bigQuestionNo: 4,
  smallQuestionNo: 5,
  question: 'Analyse how expansionary monetary policy might lead to a rise in inflation. Define expansionary monetary policy',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'By increasing government spending and with it the AD and the average price level.'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'By decreasing taxes and with it AD and with it the average price leve.',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'By using Contractionary Monetary Policy i.e. by decreasing money supply and increasing interest rates central banks increase AD and with it the average price level.',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'By using Expansionary Monetary Policy i.e. by increasing money supply and decreasing interest rates, central banks increase AD and with it the average price level.',
    }),
  ],
  correct: 'D',
  planningScreen: new PlanningScreenModel({
    typeScreen: "text",
    heading: "PARAGRAPH 2",
    question: "How does monetary policy cause inflation?",
    answer: "By using Expansionary Monetary Policy i.e. by increasing money supply and decreasing interest rates, central banks increase AD and with it the average price level."
  }),
  answerScreen: null,
  boxQuestion: 'How does monetary policy cause inflation?',
  boxDisplay: 'Guiding Question Prompt 4.5',
  headQuestion: 'Analyse how expansionary monetary policy might lead to a rise in inflation.',
  headDisplay: 'Official Question',
  tags: ['Structure of the Response', "Crafting the Perfect Response"],
  learningObjectives: [],
  mark: 10,
  sub_marks: 0,
  difficulty: 6,
  date: '2019-05-01',
  estimatedTime: 2,
}),

//4.6
new QuestionModel({
  id: '4.6',
  bigQuestionNo: 4,
  smallQuestionNo: 6,
  question: 'Analyse how expansionary monetary policy might lead to a rise in inflation. Explain how expansionary monetary policy can cause inflation?',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'Since the economy is experiencing a recessionary gap due to insufficient AD, the central bank will adopt an expansionary monetary policy. The central bank will lower taxes and increase spending on infrastructure to increase employment and increasing spending, the effect of which is to increase AD within the economy and with it the average price level.'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'Since the economy is experiencing inflation/inflationary gap, the central bank will adopt a contractionary monetary policy. The central bank will decrease money supply causing the equilibrium interest rates to rise within the economy. The rise in interest rates would result in a higher cost of borrowing for firms and households. Therefore households and firms are likely to borrow less and spend less, so that consumption (C) and investment (I) spending increase.The effect of this is to decrease AD within the economy and with it level of inflation.',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'The Central bank adopts an expansionary monetary policy to stimulate economic activity and increase growth and spending within the economy. When the central bank adopts an expansionary monetary policy, it will increase money supply causing the equilibrium interest rates to fall within the economy. The fall in interest rates would result in a lower cost of borrowing for firms and households. Therefore households and firms are likely to borrow more and spend more, so that consumption (C) and investment (I) spending increase.The effect of this is to increase AD within the economy and hence increase inflationary pressures within the economy',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'Since the economy is experiencing inflation due to insufficient AD, the central bank will adopt an expansionary fiscal policy. The central bank will decrease money supply causing the equilibrium interest rates to rise within the economy. The rise in interest rates would result in a higher cost of borrowing for firms and households. Therefore households and firms are likely to borrow more and spend more, so that consumption (C) and investment (I) spending increase.The effect of this is to increase AD within the economy and lower inflation.',
    }),
  ],
  correct: 'C',
  planningScreen: null,
  answerScreen: new AnswerScreenModel({
    typeScreen: "text",
    heading: "PARAGRAPH 2",
    question: "Explain how expansionary monetary policy can cause inflation?",
    mark: 3,
    answer: 'The Central bank adopts an expansionary monetary policy to stimulate economic activity and increase growth and spending within the economy.When the central bank adopts an expansionary monetary policy, it will increase money supply causing the equilibrium interest rates to fall within the economy. The fall in interest rates would result in a lower cost of borrowing for firms and households. Therefore households and firms are likely to borrow more and spend more, so that consumption (C) and investment (I) spending increase.The effect of this is to increase AD within the economy and hence increase inflationary pressures within the economy.',
  }),
  boxQuestion: 'Explain how expansionary monetary policy can cause inflation?',
  boxDisplay: 'Guiding Question Prompt 4.6',
  headQuestion: 'Analyse how expansionary monetary policy might lead to a rise in inflation.',
  headDisplay: 'Official Question',
  tags: ["Deconstruction & Mapping"],
  learningObjectives: ['1.7'],
  mark: 10,
  sub_marks: 3,
  difficulty: 6,
  date: '2019-05-01',
  estimatedTime: 2,
}),
//4.7
new QuestionModel({
  id: '4.7',
  bigQuestionNo: 4,
  smallQuestionNo: 7,
  question: 'What kind of diagram can be used to explain and illustrate the use of expansionary monetary policy and its impact on inflation?',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'A Money supply and Money demand diagram'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'A Phillips curve diagram',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'A production possibilities frontier diagram',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'An AD/AS diagram',
    }),
  ],
  correct: 'D',
  planningScreen: new PlanningScreenModel({
    typeScreen: "text",
    heading: "PARAGRAPH 3",
    question: "What kind of diagram can be used to explain and illustrate the use of expansionary monetary policy and its impact on inflation?",
    answer: "AD/AS Diagram"
  }),
  answerScreen: null,
  boxQuestion: 'What kind of diagram can be used to explain and illustrate the use of expansionary monetary policy and its impact on inflation?',
  boxDisplay: 'Guiding Question Prompt 4.7',
  headQuestion: 'Analyse how expansionary monetary policy might lead to a rise in inflation.',
  headDisplay: 'Official Question',
  tags: ["Crafting the Perfect Response"],
  learningObjectives: ['1.9'],
  mark: 10,
  sub_marks: 0,
  difficulty: 6,
  date: '2019-05-01',
  estimatedTime: 2,
}),

//4.8
new QuestionModel({
  id: '4.8',
  bigQuestionNo: 4,
  smallQuestionNo: 8,
  question: 'Analyse how expansionary monetary policy might lead to a rise in inflation. Which diagram best illustrates expansionary monetary policy causing a rise in inflation?',
  type: 'image',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/4.8%2Foption_A.png?alt=media&token=db682ca4-db80-405b-b37e-3fc7cd817848&_gl=1*wl5o23*_ga*NTAwMTk2OTMyLjE2ODU0MzQxMjQ.*_ga_CW55HF8NVT*MTY5NzQ0MzM2Mi4xODIuMS4xNjk3NDQzNTQyLjUxLjAuMA..'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/4.8%2Foption_B.png?alt=media&token=351e24c8-fd9d-4351-9c73-5c4234a70ba1&_gl=1*6y82y6*_ga*NTAwMTk2OTMyLjE2ODU0MzQxMjQ.*_ga_CW55HF8NVT*MTY5NzQ0MzM2Mi4xODIuMS4xNjk3NDQzNTYwLjMzLjAuMA..',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/4.8%2Foption_C.png?alt=media&token=98765e39-22f1-4cb6-9c67-7de9d5bceec6&_gl=1*1ggre6l*_ga*NTAwMTk2OTMyLjE2ODU0MzQxMjQ.*_ga_CW55HF8NVT*MTY5NzQ0MzM2Mi4xODIuMS4xNjk3NDQzNTcyLjIxLjAuMA..',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/4.8%2Foption_D.png?alt=media&token=f4408dd0-c47f-4ea4-b89f-3c21042add29&_gl=1*wavkda*_ga*NTAwMTk2OTMyLjE2ODU0MzQxMjQ.*_ga_CW55HF8NVT*MTY5NzQ0MzM2Mi4xODIuMS4xNjk3NDQzNTgxLjEyLjAuMA..',
    }),
  ],
  correct: 'A',
  planningScreen: null,
  answerScreen: new AnswerScreenModel({
    typeScreen: "image",
    heading: "",
    question: "Which diagram best illustrates expansionary monetary policy causing a rise in inflation?",
    mark: 3 ,
    answer: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/4.8%2Foption_A.png?alt=media&token=db682ca4-db80-405b-b37e-3fc7cd817848&_gl=1*wl5o23*_ga*NTAwMTk2OTMyLjE2ODU0MzQxMjQ.*_ga_CW55HF8NVT*MTY5NzQ0MzM2Mi4xODIuMS4xNjk3NDQzNTQyLjUxLjAuMA..',
  }),
  boxQuestion: 'Which diagram best illustrates expansionary monetary policy causing a rise in inflation?',
  boxDisplay: 'Guiding Question Prompt 4.8',
  headQuestion: 'Analyse how expansionary monetary policy might lead to a rise in inflation.',
  headDisplay: 'Official Question',
  tags: ["Crafting the Perfect Response"],
  learningObjectives: ['1.9'],
  mark: 10,
  sub_marks: 3,
  difficulty: 6,
  date: '2019-05-01',
  estimatedTime: 2,
}),

new QuestionModel({
  id: '4.9',
  bigQuestionNo: 4,
  smallQuestionNo: 9,
  question: 'Analyse how expansionary monetary policy might lead to a rise in inflation. Which diagram best illustrates expansionary monetary policy causing a rise in inflation?',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'Aggregate demand (AD) would decrease, shifting AD curve left from AD1 to AD2, causing the average price level to decrease from Pl1 to Pl2, thereby causing deflation.'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'Aggregate demand (AD) would increase, shifting AD curve right from AD1 to AD2, causing the average price level to decrease from Pl1 to Pl2, thereby causing deflation.'
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'Aggregate demand (AD) would increase, shifting AD curve right from AD1 to AD2, causing the average price level to increase from Pl1 to Pl2, thereby causing inflation.'
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'Aggregate demand (AD) would decrease, shifting AD curve left from AD1 to AD2, causing the average price level to increase from Pl1 to Pl2, thereby causing inflation.'
    })],
    correct: 'C',
    planningScreen: null,
    answerScreen: new AnswerScreenModel({
      typeScreen: 'text',
      heading: "",
      question: "Fully explain the diagram from previous question: \nAs illustrated in the diagram above, the economy is currently operating at Yp, at potential output or full employment level of output. What would happen if the central bank increased money supply and decreased interest rates?",
      mark: 2,
      answer: 'Aggregate demand (AD) would increase, shifting AD curve right from AD1 to AD2, causing the average price level to increase from Pl1 to Pl2, thereby causing inflation.'
    }),
    boxQuestion: "Fully explain the diagram from previous question: \nAs illustrated in the diagram above, the economy is currently operating at Yp, at potential output or full employment level of output. What would happen if the central bank increased money supply and decreased interest rates?",
    boxDisplay: 'Guiding Question Prompt 4.9',
    headQuestion: 'Analyse how expansionary monetary policy might lead to a rise in inflation.',
    headDisplay: 'Official Question',
    tags: ["Crafting the Perfect Response"],
    learningObjectives: ['1.9'],
    mark: 10,
    sub_marks: 2,
    difficulty: 6,
    date: '2019-05-01',
    estimatedTime: 2
}),

// 5.1
new QuestionModel({
  id: '5.1',
  bigQuestionNo: 5,
  smallQuestionNo: 1,
  question: 'Explain how equilibrium interest rates are determined in an economy.',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'Definition of key terms, explanation of how equilibrium interest rates are determined, including money market diagram diagram with explanation.'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'Introduction, explanation of how monetary policy works, examples of contractionary monetary policy measures, explanation of how two monetary policy tools can help overcome inflation, and evaluation',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'Definition of key terms, explanation of how monetary policy works, examples of expansionary monetary policy measures, and how they can be used to lower interest rates and real world examples.',
    }),
  ],
  correct: 'A',
  planningScreen: new PlanningScreenModel({
    typeScreen: "text",
    heading: "",
    question: "What is the ideal structure for your essay response/10 marker?",
    answer: "Definition of key terms, explanation of how equilibrium interest rates are determined, including money market diagram diagram with explanation."
  }),
  answerScreen: null,
  boxQuestion: 'What is the ideal structure for your essay response/10 marker?',
  boxDisplay: 'Guiding Question Prompt 5.1',
  headQuestion: 'Explain how equilibrium interest rates are determined in an economy.',
  headDisplay: 'Official Question',
  tags: ["Deconstruction & Mapping"],
  learningObjectives: [],
  mark: 7,
  sub_marks: 0,
  difficulty: 6,
  date: '2019-05-01',
  estimatedTime: 2,
}),

// 5.2
new QuestionModel({
  id: '5.2',
  bigQuestionNo: 5,
  smallQuestionNo: 2,
  question: 'Explain how equilibrium interest rates are determined in an economy.',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'Fiscal policy and inflation'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'Monetary policy and Inflation',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'Aggregate demand and supply',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'Interest Rates',
    }),
  ],
  correct: 'D',
  planningScreen: new PlanningScreenModel({
    typeScreen: "text",
    heading: "Paragraph 1",
    question: "What key terms need to be defined in the response?",
    answer: "Interest rates"
  }),
  answerScreen: null,
  boxQuestion: 'What key terms need to be defined in the response?',
  boxDisplay: 'Guiding Question Prompt 5.2',
  headQuestion: 'Explain how equilibrium interest rates are determined in an economy',
  headDisplay: 'Official Question',
  tags: ['Structure of the Response', "Crafting the Perfect Response"],
  learningObjectives: [],
  mark: 7,
  sub_marks: 0,
  difficulty: 6,
  date: '2019-05-01',
  estimatedTime: 2,
}),

// 5.3
new QuestionModel({
  id: '5.3',
  bigQuestionNo: 5,
  smallQuestionNo: 3,
  question: 'Explain how equilibrium interest rates are determined in an economy.',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'interest rate is the percentage increase in the cost of borrowing money'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'interest rate is the opportunity cost of spending money',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'interest rate is the total tax paid as a percentage of incomes',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'interest rates represent the cost of borrowing or the return on savings.',
    }),
  ],
  
  correct: 'D',
  planningScreen: null,
  answerScreen: new AnswerScreenModel({
    typeScreen: "text",
    heading: "Paragraph 1",
    question: "Define interest rates",
    mark: 1,
    answer: 'interest rates represent the cost of borrowing or the return on savings',
  }),
  boxQuestion: 'Define interest rates.',
  boxDisplay: 'Guiding Question Prompt 5.3',
  headQuestion: 'Define interest rates:',
  headDisplay: 'Official Question',
  tags: ["Crafting the perfect response"],
  learningObjectives: ['1.1'],
  mark: 7,
  sub_marks: 1,
  difficulty: 6,
  date: '2019-05-01',
  estimatedTime: 2,
}),
// 5.4
new QuestionModel({
  id: '5.4',
  bigQuestionNo: 5,
  smallQuestionNo: 4,
  question: 'Explain how equilibrium interest rates are determined in an economy.',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'Equilibrium interest rate is the interest rate at which money demand equals money supply within the economy'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'Equilibrium interest rates represent a one time increase in the price of a specific good or service.',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'Equilibrium interest rate represents the persistent increase in the average price level of goods and services.',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'Equilibrium interest rate is an increase in the rate of unemployment within the economy.',
    }),
  ],
  correct: 'A',
  planningScreen: new PlanningScreenModel({
    typeScreen: "text",
    heading: "Paragraph 2",
    question: "How are equilibrium interest rates determined?",
    answer: "Equilibrium interest rate is the interest rate at which money demand equals money supply within the economy"
  }),
  answerScreen: null,
  boxQuestion: 'How are equilibrium interest rates determined?',
  boxDisplay: 'Guiding Question Prompt 5.4',
  headQuestion: 'Explain how equilibrium interest rates are determined in an economy',
  headDisplay: 'Official Question',
  tags: ["Deconstruction & Mapping"],
  learningObjectives: [],
  mark: 7,
  sub_marks: 0,
  difficulty: 6,
  date: '2019-05-01',
  estimatedTime: 2,
}),
// 5.5
new QuestionModel({
  id: '5.5',
  bigQuestionNo: 5,
  smallQuestionNo: 5,
  question: 'Explain how equilibrium interest rates are determined in an economy.',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'The Central bank adopts an expansionary monetary policy to stimulate economic activity and increase growth and spending within the economy. When the central bank adopts an expansionary monetary policy, it will increase money supply causing the equilibrium interest rates to fall within the economy. The fall in interest rates would result in a lower cost of borrowing for firms and households. Therefore households and firms are likely to borrow more and spend more, so that consumption (C) and investment (I) spending increase.The effect of this is to increase AD within the economy and hence increase inflationary pressures within the economy.'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'Since the economy is experiencing inflation due to insufficient AD, the central bank will adopt an expansionary fiscal policy. The central bank will decrease money supply causing the equilibrium interest rates to rise within the economy. The rise in equilibrium interest rates would result in a higher cost of borrowing for firms and households. Therefore households and firms are likely to borrow more and spend more, so that consumption (C) and investment (I) spending increase.The effect of this is to increase AD within the economy and lower inflation.',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'In the money market, the demand for money is downward sloping. This is because as the interest rate decreases, the qty demand for money by the consumers, firms and the government increases.The supply of money is fixed at a level decided by the central bank and the central bank can increase or decrease the supply of money using the tools of monetary policy such as open market operations and minimum reserve requirement. The interest rate at which money demand equals money supply is called the equilibrium interest rate.',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'Since the economy is experiencing a recessionary gap due to insufficient AD, the central bank will adopt an expansionary monetary policy. The central bank will lower taxes and increase spending on infrastructure to increase employment and increasing spending, the effect of which is to increase AD within the economy and with it the average price level.',
    }),
  ],
  
  correct: 'C',
  planningScreen: null,
  answerScreen: new AnswerScreenModel({
    typeScreen: "text",
    heading: "Paragraph 2:",
    question: "Explain how equilibrium interest rates are determined.",
    mark: 4,
    answer: 'The Central bank adopts an expansionary monetary policy to stimulate economic activity and increase growth and spending within the economy.When the central bank adopts an expansionary monetary policy, it will increase money supply causing the equilibrium interest rates to fall within the economy. The fall in interest rates would result in a lower cost of borrowing for firms and households. Therefore households and firms are likely to borrow more and spend more, so that consumption (C) and investment (I) spending increase.The effect of this is to increase AD within the economy and hence increase inflationary pressures within the economy.',
  }),
  boxQuestion: 'Explain how equilibrium interest rates are determined',
  boxDisplay: 'Guiding Question Prompt 5.5',
  headQuestion: 'Explain how equilibrium interest rates are determined in an economy',
  headDisplay: 'Official Question',
  tags: ["Crafting the perfect response"],
  learningObjectives: ['1.4', '1.5'],
  mark: 7,
  sub_marks: 4,
  difficulty: 6,
  date: '2019-05-01',
  estimatedTime: 2,
}),
// 5.6
new QuestionModel({
  id: '5.6',
  bigQuestionNo: 5,
  smallQuestionNo: 6,
  question: 'Explain how equilibrium interest rates are determined in an economy. What kind of diagram can be used to explain the determination of equilibrium interest rates?',
  type: 'text',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'A supply and demand diagram'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'A Phillips curve diagram',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'Money Market diagram',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'An AD/AS diagram',
    })],
  correct: 'C',
  planningScreen: new PlanningScreenModel({
    typeScreen: "text",
    heading: "Paragraph 3:",
    question: "What kind of diagram can be used to explain the determination of equilibrium interest rates?",
    answer: "Money Market diagram"
  }),
  answerScreen: null,
  boxQuestion: 'What kind of diagram can be used to explain the determination of equilibrium interest rates?',
  boxDisplay: 'Guiding Question Prompt 5.6',
  headQuestion: 'Explain how equilibrium interest rates are determined in an economy',
  headDisplay: 'Official Question',
  tags: ['Structure of the Response', "Crafting the Perfect Response"],
  learningObjectives: [],
  mark: 7,
  sub_marks: 0,
  difficulty: 6,
  date: '2019-05-01',
  estimatedTime: 2,
}),
// 5.7
new QuestionModel({
  id: '5.7',
  bigQuestionNo: 5,
  smallQuestionNo: 7,
  question: 'Explain how equilibrium interest rates are determined in an economy. Which diagram best illustrates the determination of equilibrium interest rates?',
  type: 'image',
  options: [
    new OptionsModel({
      value: 'A',
      optionText: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/5.7%2Foption_A.png?alt=media&token=0a1468ea-d685-45b2-ad11-641cd483b4a3&_gl=1*b1yo34*_ga*NTAwMTk2OTMyLjE2ODU0MzQxMjQ.*_ga_CW55HF8NVT*MTY5NzQ0NTg3OC4xODMuMS4xNjk3NDQ1OTEyLjI2LjAuMA..'
    }),
    new OptionsModel({
      value: 'B',
      optionText: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/5.7%2Foption_B.png?alt=media&token=01d23672-bd8b-49f3-90b6-1f5a9e295555&_gl=1*f8y5uq*_ga*NTAwMTk2OTMyLjE2ODU0MzQxMjQ.*_ga_CW55HF8NVT*MTY5NzQ0NTg3OC4xODMuMS4xNjk3NDQ1OTQxLjYwLjAuMA..',
    }),
    new OptionsModel({
      value: 'C',
      optionText: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/5.7%2Foption_C.png?alt=media&token=48551687-ef15-4593-a34c-fe841aa27abb&_gl=1*4upsqx*_ga*NTAwMTk2OTMyLjE2ODU0MzQxMjQ.*_ga_CW55HF8NVT*MTY5NzQ0NTg3OC4xODMuMS4xNjk3NDQ1OTUyLjQ5LjAuMA..',
    }),
    new OptionsModel({
      value: 'D',
      optionText: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/5.7%2Foption_D.png?alt=media&token=2c23e07a-adee-4203-a23d-fb0ccd996d7e&_gl=1*1ff7lob*_ga*NTAwMTk2OTMyLjE2ODU0MzQxMjQ.*_ga_CW55HF8NVT*MTY5NzQ0NTg3OC4xODMuMS4xNjk3NDQ1OTYyLjM5LjAuMA..',
    }),
  ],
  
  correct: 'A',
  planningScreen: null,
  answerScreen: new AnswerScreenModel({
    typeScreen: "image",
    heading: "",
    question: "Which diagram best illustrates the determination of equilibrium interest rates?",
    mark: 2,
    answer: 'https://firebasestorage.googleapis.com/v0/b/revision-tool-test.appspot.com/o/5.7%2Foption_A.png?alt=media&token=0a1468ea-d685-45b2-ad11-641cd483b4a3&_gl=1*b1yo34*_ga*NTAwMTk2OTMyLjE2ODU0MzQxMjQ.*_ga_CW55HF8NVT*MTY5NzQ0NTg3OC4xODMuMS4xNjk3NDQ1OTEyLjI2LjAuMA..',
  }),
  boxQuestion: 'Which diagram best illustrates the determination of equilibrium interest rates?',
  boxDisplay: 'Guiding Question Prompt 5.7',
  headQuestion: 'Explain how equilibrium interest rates are determined in an economy',
  headDisplay: 'Official Question',
  tags: ["Crafting the perfect response"],
  learningObjectives: ['1.5'],
  mark: 7,
  sub_marks: 2,
  difficulty: 6,
  date: '2019-05-01',
  estimatedTime: 2,
}),];


const econ_data_size = economics_data.length;
export { economics_data, econ_data_size };
