import {
    AnswerScreenModel,
    OptionsModel,
    PlanningScreenModel,
    QuestionModel,
  } from "../models/questionModel";

const math_data = [
     // Question 1
    new QuestionModel({
        id: "1.1", // Unique ID for the question. Format shall remain same.
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
     // Question 2
     new QuestionModel({
        id: "1.2", // You may need to set this dynamically
        bigQuestionNo: 1, 
        smallQuestionNo: 2, 
        question: "Create an equation for the common difference. (Method Mark =1)",
        type: "text",
        options: [
            new OptionsModel({
              value: "A",
              optionText: "d = u2 - u1"
            }),
            new OptionsModel({
              value: "B",
              optionText: "d = u1 - u2"
            }),
            new OptionsModel({
              value: "C",
              optionText: "d = u2 + u1"
            }),
            new OptionsModel({
              value: "D",
              optionText: "d = 2 * u1 - u2"
            })
          ],
        correct: "A",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: "Common Difference Equation",
            question: 'Create an equation for the common difference.',
            answer: 'd = u2 - u1',
            mark: 1,
            typeScreen: 'text'
        }),
        boxQuestion: 'Create an equation for the common difference?',
        boxDisplay: "Question Prompt 1.2", 
        headQuestion: 'In an arithmetic sequence, the first term is 10 and second term is 6.',
        headDisplay: "Official Question",
        tags: ["Crafting the Perfect Response"],
        learningObjectives: ['1.2','1.4'],
        mark: 6,
        sub_marks: 1,
        difficulty: 2, // You can change this to a string if your model expects a string
        date: "2019-05-01",
        estimatedTime: 2,
      }),
     // Question 3
     new QuestionModel({
        id: "1.3",
        bigQuestionNo: 1,
        smallQuestionNo: 3,
        question: "Find the common difference (Answer Mark = 1)",
        type: "text",
        options: [
          new OptionsModel({
            value: "A",
            optionText: "u2 - u1 = 6 - 10 = -4"
          }),
          new OptionsModel({
            value: "B",
            optionText: "u1 - u2 = 10 - 6 = 4"
          }),
          new OptionsModel({
            value: "C",
            optionText: "u2 + u1 = 10 + 6 = 16"
          }),
          new OptionsModel({
            value: "D",
            optionText: "2 * u1 - u2 = 20 - 6 = 14"
          })
        ],
        correct: "A",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Common Difference Equation',
            question: 'Find the common difference',
            answer: "u2 - u1 = 6 - 10 = -4",
            mark: 1,
            typeScreen: "text"
        }),
        boxQuestion: 'Find the common difference',
        boxDisplay: "Question Prompt 1.3", 
        headQuestion: 'In an arithmetic sequence, the first term is 10 and second term is 6.',
        headDisplay: "Official Question",
        tags: [],
        learningObjectives: ["1.4"],
        mark: 6,
        sub_marks: 1,
        difficulty: 2,
        date: "2019-05-01",
        estimatedTime: 2,
    }),
    // Question 4
    new QuestionModel({
        id: "1.4",
        bigQuestionNo: 1,
        smallQuestionNo: 4,
        question: "Identify the formula for the nth term of an arithmetic sequence?",
        type: "text",
        options: [
            new OptionsModel({
            value: "A",
            optionText: "un = u1 + d * (n - 1)"
            }),
            new OptionsModel({
            value: "B",
            optionText: "un = u1 + dn"
            }),
            new OptionsModel({
            value: "C",
            optionText: "un = u1 - d * (n + 1)"
            }),
            new OptionsModel({
            value: "D",
            optionText: "un = u1 - d * n"
            })
        ],
        correct: "A",
        planningScreen: new PlanningScreenModel({
            heading: 'Nth Term Equation',
            question: 'Identify the formula for the nth term of an arithmetic sequence?',
            answer: "un = u1 + d * (n - 1)",
            typeScreen: "text"
        }),
        answerScreen: null,
        boxQuestion: 'Identify the formula for the nth term of an arithmetic sequence?',
        boxDisplay: "Question Prompt 1.4", 
        headQuestion: 'In an arithmetic sequence, the first term is 10 and second term is 6.',
        headDisplay: "Official Question",
        tags: ["Crafting the Perfect Response"],
        learningObjectives: ["1.3"],
        mark: 6,
        sub_marks: 0,
        difficulty: 2,
        date: "2019-05-01",
        estimatedTime: 2,
    }),
    // Question 5
    new QuestionModel({
        id: "1.5",
        bigQuestionNo: 1,
        smallQuestionNo: 5,
        question: "Create an equation for the 20th term? (Method Mark = 1)",
        type: "text",
        options: [
        new OptionsModel({
            value: "A",
            optionText: "u20 = 10 - 4 * (20-1)"
        }),
        new OptionsModel({
            value: "B",
            optionText: "u20 = 10 - 4 * (20)"
        }),
        new OptionsModel({
            value: "C",
            optionText: "u20 = 10 - (-4) * (20 + 1)"
        }),
        new OptionsModel({
            value: "D",
            optionText: "u20 = 10 - (-4) * (20)"
        })
        ],
        correct: "A",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Equation for 20th Term',
            question: 'Create an equation for the 20th term?',
            answer: "u20 = 10 - 4 * (20-1)",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'Create an equation for the 20th term?',
        boxDisplay: "Guiding Question Prompt 1.5", 
        headQuestion: 'In an arithmetic sequence, the first term is 10 and second term is 6.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.3"],
        mark: 6,
        sub_marks: 1,
        difficulty: 2,
        date: "2019-05-01",
        estimatedTime: 2,
    }),
    // Question 6
    new QuestionModel({
        id: "1.6",
        bigQuestionNo: 1,
        smallQuestionNo: 6,
        question: "Find the 20th term? (Answer Mark = 1)",
        type: "text",
        options: [
        new OptionsModel({
            value: "A",
            optionText: "u20 = -66"
        }),
        new OptionsModel({
            value: "B",
            optionText: "u20 = -70"
        }),
        new OptionsModel({
            value: "C",
            optionText: "u20 = 94"
        }),
        new OptionsModel({
            value: "D",
            optionText: "u20 = 90"
        })
        ],
        correct: "A",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Arithmetic Term',
            question: 'Find the 20th term?',
            answer: "u20 = -66",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'Find the 20th term?',
        boxDisplay: "Guiding Question Prompt 1.6", 
        headQuestion: 'In an arithmetic sequence, the first term is 10 and second term is 6.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.3"],
        mark: 6,
        sub_marks: 1,
        difficulty: 2,
        date: "2019-05-01",
        estimatedTime: 2,
    }),
    // Question 7
    new QuestionModel({
        id: "1.7",
        bigQuestionNo: 1,
        smallQuestionNo: 7,
        question: "Identify the formula for the sum of an arithmetic series:",
        type: "text",
        options: [
        new OptionsModel({
            value: "A",
            optionText: "Sn = n/2 * (2u1 + d * (n-1))"
        }),
        new OptionsModel({
            value: "B",
            optionText: "Sn = n/2 * (u1 + d * (n-1))"
        }),
        new OptionsModel({
            value: "C",
            optionText: "Sn = n/2 * (u1 - un)"
        }),
        new OptionsModel({
            value: "D",
            optionText: "Sn = n/2 * (2 * u1 - d * n)"
        })
        ],
        correct: "A",
        planningScreen: new PlanningScreenModel({
            heading: 'Sum of Arithmetic Series',
            question: 'Identify the formula for the sum of an arithmetic series:',
            answer: "Sn = n/2 * (2u1+d(n-1))",
            typeScreen: "text"
        }),
        answerScreen: null,
        boxQuestion: 'Identify the formula for the sum of an arithmetic series:',
        boxDisplay: "Guiding Question Prompt 1.7", 
        headQuestion: 'In an arithmetic sequence, the first term is 10 and second term is 6.',
        headDisplay: "Official Question",
        tags: ["Crafting the Perfect Response"],
        learningObjectives: ["1.3"],
        mark: 6,
        sub_marks: 0,
        difficulty: 2,
        date: "2019-05-01",
        estimatedTime: 2,
    }),
    // Question 8
    new QuestionModel({
        id: "1.8",
        bigQuestionNo: 1,
        smallQuestionNo: 8,
        question: "Create an equation for the sum of 20 terms? (Method mark = 1)",
        type: "text",
        options: [
        new OptionsModel({
            value: "A",
            optionText: "S20 = 20/2 * (2(10) - 4 * (20-1))"
        }),
        new OptionsModel({
            value: "B",
            optionText: "S20 = 20/2 * (10 - 4 * (20-1))"
        }),
        new OptionsModel({
            value: "C",
            optionText: "S20 = 20/2 * (10 - (-66))"
        }),
        new OptionsModel({
            value: "D",
            optionText: "S20 = 20/2 * (2 * (10) - 4 * (20))"
        })
        ],
        correct: "A",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Finding Arithmetic Sum',
            question: 'Create an equation for the sum of 20 terms?',
            answer: "S20 = 20/2 * (2 * (10) - 4 * (20-1))",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'Create an equation for the sum of 20 terms?',
        boxDisplay: "Question Prompt 1.8", 
        headQuestion: 'In an arithmetic sequence, the first term is 10 and second term is 6.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.3"],
        mark: 6,
        sub_marks: 1,
        difficulty: 2,
        date: "2019-05-01",
        estimatedTime: 2,
    }),
    // Question 9
    new QuestionModel({
        id: "1.9",
        bigQuestionNo: 1,
        smallQuestionNo: 9,
        question: "Find the sum of 20 terms?",
        type: "text",
        options: [
        new OptionsModel({
            value: "A",
            optionText: "S20 = -560"
        }),
        new OptionsModel({
            value: "B",
            optionText: "S20 = -660"
        }),
        new OptionsModel({
            value: "C",
            optionText: "S20 = 760"
        }),
        new OptionsModel({
            value: "D",
            optionText: "S20 = -600"
        })
        ],
        correct: "A",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Calculating Arithmetic Sum',
            question: 'Find the sum of 20 terms?',
            answer: "S20 = -560",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'Find the sum of 20 terms?',
        boxDisplay: "Question Prompt 1.9", 
        headQuestion: 'In an arithmetic sequence, the first term is 10 and second term is 6.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.3"],
        mark: 6,
        sub_marks: 1,
        difficulty: 2,
        date: "2019-05-01",
        estimatedTime: 2,
    }),
    // Question 2

    // Question 2.1

    new QuestionModel({
        id: "2.1",
        bigQuestionNo: 2,
        smallQuestionNo: 1,
        question: "Define an arithmetic series?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "A series with a common difference between any two terms"
            }),
            new OptionsModel({
                value: "B",
                optionText: "A series with a common difference between two consecutive terms"
            }),
            new OptionsModel({
                value: "C",
                optionText: "A series with a common difference between the first and second term"
            }),
            new OptionsModel({
                value: "D",
                optionText: "A series with a common ratio between two consecutive terms"
            })
        ],
        correct: "B",
        planningScreen: new PlanningScreenModel({
            heading: 'Arithmetic Series',
            question: 'Define an arithmetic series?',
            answer: "A series with a common difference between two consecutive terms",
            typeScreen: "text"
        }),
        answerScreen: null,
        boxQuestion: 'Define an arithmetic series?',
        boxDisplay: "Question Prompt 2.1", 
        headQuestion: 'In an arithmetic sequence, u5 = 33 and u10 = 6.',
        headDisplay: "Official Question",
        tags: ["Crafting the Perfect Response", "Non-Calculator"],
        learningObjectives: ["1.2"],
        mark: 6,
        sub_marks: 0,
        difficulty: 3,
        date: "2020-05-01",
        estimatedTime: 6,
    }),
    new QuestionModel({
        id: "2.2",
        bigQuestionNo: 2,
        smallQuestionNo: 2,
        question: "Create an equation for the common difference?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "(u10 - u5) / 5"
            }),
            new OptionsModel({
                value: "B",
                optionText: "(u10 + u5) / 5"
            }),
            new OptionsModel({
                value: "C",
                optionText: "u10 / 5"
            }),
            new OptionsModel({
                value: "D",
                optionText: "(u5 - u10) / 5"
            })
        ],
        correct: "A",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Common Difference',
            question: 'Create an equation for the common difference?',
            answer: "u10-u5/5",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'Create an equation for the common difference?',
        boxDisplay: "Question Prompt 2.2", 
        headQuestion: 'In an arithmetic sequence, u5 = 33 and u10 = 6.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.2", "1.4"],
        mark: 6,
        sub_marks: 1,
        difficulty: 3,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "2.3",
        bigQuestionNo: 2,
        smallQuestionNo: 3,
        question: "Find the common difference?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "(68 - 33) / 5 = 7"
            }),
            new OptionsModel({
                value: "B",
                optionText: "(68 + 33) / 5 = 20.2"
            }),
            new OptionsModel({
                value: "C",
                optionText: "68 / 5 = 13.6"
            }),
            new OptionsModel({
                value: "D",
                optionText: "(33 - 68) / 5 = -7"
            })
        ],
        correct: "A",
        planningScreen: new PlanningScreenModel({
            heading: 'Common Difference',
            question: 'Find the common difference?',
            answer: "(68 - 33) / 5 = 7",
            typeScreen: "text",
            mark: 1
        }),
        answerScreen: null,
        boxQuestion: 'Find the common difference?',
        boxDisplay: "Question Prompt 2.3", 
        headQuestion: 'In an arithmetic sequence, u5 = 33 and u10 = 68.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.4"],
        mark: 6,
        sub_marks: 1,
        difficulty: 4,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "2.4",
        bigQuestionNo: 2,
        smallQuestionNo: 4,
        question: "Identify the formula for the nth term of an arithmetic sequence?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "un = u1 + d * (n-1)"
            }),
            new OptionsModel({
                value: "B",
                optionText: "un = u1 + d * n"
            }),
            new OptionsModel({
                value: "C",
                optionText: "un = u1 - d * (n+1)"
            }),
            new OptionsModel({
                value: "D",
                optionText: "un = u1 - d * (n)"
            })
        ],
        correct: "A",
        planningScreen: new PlanningScreenModel({
            heading: 'Formula for nth Term',
            question: 'Identify the formula for the nth term of an arithmetic sequence?',
            answer: "un=u1+d (n-1)",
            typeScreen: "text"
        }),
        answerScreen: null,
        boxQuestion: 'Identify the formula for the nth term of an arithmetic sequence?',
        boxDisplay: "Guiding Question Prompt 2.4", 
        headQuestion: 'In an arithmetic sequence, u5 = 33 and u10 = 6.',
        headDisplay: "Official Question",
        tags: ["Crafting the Perfect Response"],
        learningObjectives: ["1.3"],
        mark: 6,
        sub_marks: 0,
        difficulty: 4,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    // question 5
    new QuestionModel({
        id: "2.5",
        bigQuestionNo: 2,
        smallQuestionNo: 5,
        question: "Create an equation for the fifth term?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "u5 = u1 + 4 * d"
            }),
            new OptionsModel({
                value: "B",
                optionText: "u5 = u1 - 4 * d"
            }),
            new OptionsModel({
                value: "C",
                optionText: "u5 = u10 / u1"
            }),
            new OptionsModel({
                value: "D",
                optionText: "u10 = u5 + u1 /2"
            })
        ],
        correct: "A",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Equation for Fifth Term',
            question: 'Create an equation for the fifth term ?',
            answer: "u5 = u1 + 4d",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'Create an equation for the fifth term?',
        boxDisplay: "Question Prompt 2.5", 
        headQuestion: 'In an arithmetic sequence, u5 = 33 and u10 = 6.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.3", "1.7"],
        mark: 6,
        sub_marks: 1,
        difficulty: 2,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    // Question 6
    new QuestionModel({
        id: "2.6",
        bigQuestionNo: 2,
        smallQuestionNo: 6,
        question: "Find the first term by substitution of values into the formula for the 5th term?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "33 = u1 - 4 * (7)"
            }),
            new OptionsModel({
                value: "B",
                optionText: "33 = u1 + 4 * (7)"
            }),
            new OptionsModel({
                value: "C",
                optionText: "33 = 68 / u1"
            }),
            new OptionsModel({
                value: "D",
                optionText: "68 = 33 + u1 / 2"
            })
        ],
        correct: "B",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'First Term Using Substitution',
            question: 'Find the first term by substitution of values into the formula for the 5th term?',
            answer: "33 = u1 + 4 * (7)",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'Find the first term by substitution of values into the formula for the 5th term?',
        boxDisplay: "Question Prompt 2.6", 
        headQuestion: 'In an arithmetic sequence, u5 = 33 and u10 = 6.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.3", "1.7"],
        mark: 6,
        sub_marks: 1,
        difficulty: 4,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "2.7",
        bigQuestionNo: 2,
        smallQuestionNo: 7,
        question: "What is the value of u1?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "6"
            }),
            new OptionsModel({
                value: "B",
                optionText: "5"
            }),
            new OptionsModel({
                value: "C",
                optionText: "3"
            }),
            new OptionsModel({
                value: "D",
                optionText: "9"
            })
        ],
        correct: "B",
        planningScreen: new PlanningScreenModel({
            heading: 'Calculating u1',
            question: 'What is the value of u1?',
            answer: "5",
            typeScreen: "text"
        }),
        answerScreen: null,
        boxQuestion: 'What is the value of u1?',
        boxDisplay: "Question Prompt 2.7", 
        headQuestion: 'In an arithmetic sequence, u5 = 33 and u10 = 6.',
        headDisplay: "Official Question",
        tags: ["Crafting the Perfect Response"],
        learningObjectives: ["1.3", "1.7"],
        mark: 6,
        sub_marks: 0,
        difficulty: 4,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    // Question 8
    new QuestionModel({
        id: "2.8",
        bigQuestionNo: 2,
        smallQuestionNo: 8,
        question: "Identify the formula for the sum of an arithmetic series:",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "S = n/2 * (2 * u1 + d * (n-1))"
            }),
            new OptionsModel({
                value: "B",
                optionText: "Sn= n/2 * (u1 + d * (n-1))"
            }),
            new OptionsModel({
                value: "C",
                optionText: "Sn=n/2 * (u1 - un)"
            }),
            new OptionsModel({
                value: "D",
                optionText: "Sn= n/2 * (2 * u1 - d * (n))"
            })
        ],
        correct: "A",
        planningScreen: new PlanningScreenModel({
            heading: 'Arithmetic Series Sum',
            question: 'Identify the formula for the sum of an arithmetic series:',
            answer: "Sn = n/2 * (2 * u1 + d * (n-1))",
            typeScreen: "text"
        }),
        answerScreen: null,
        boxQuestion: 'Identify the formula for the sum of an arithmetic series:',
        boxDisplay: "Question Prompt 2.8", 
        headQuestion: 'In an arithmetic sequence, u5 = 33 and u10 = 6.',
        headDisplay: "Official Question",
        tags: ["Crafting the Perfect Response"],
        learningObjectives: ["1.3"],
        mark: 6,
        sub_marks: 0,
        difficulty: 4,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    // Question 9
    new QuestionModel({
        id: "2.9",
        bigQuestionNo: 2,
        smallQuestionNo: 9,
        question: "Create an equation for the sum of 20 terms?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "S20 = 20/2 * (2(5)-7(20-1))"
            }),
            new OptionsModel({
                value: "B",
                optionText: "S20 = 20/2 * (10 + 7 * (20-1))"
            }),
            new OptionsModel({
                value: "C",
                optionText: "S20 = 20/2 * (10-(-66))"
            }),
            new OptionsModel({
                value: "D",
                optionText: "S20 = 20/2 * (2(10)-7(20))"
            })
        ],
        correct: "A",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Sum of 20 Terms',
            question: 'Create an equation for the sum of 20 terms?',
            answer: "S20 = 20/2 * (2(5)-7(20-1))",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'Arithmetic Sum Equation',
        boxDisplay: "Question Prompt 2.9", 
        headQuestion: 'In an arithmetic sequence, u5 = 33 and u10 = 6.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.3"],
        mark: 6,
        sub_marks: 1,
        difficulty: 4,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    // Question 10
    new QuestionModel({
        id: "2.10",
        bigQuestionNo: 2,
        smallQuestionNo: 10,
        question: "Find the sum of 20 terms?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "S20 = -560"
            }),
            new OptionsModel({
                value: "B",
                optionText: "S20 = -660"
            }),
            new OptionsModel({
                value: "C",
                optionText: "S20 = 760"
            }),
            new OptionsModel({
                value: "D",
                optionText: "S20 = 1430"
            })
        ],
        correct: "D",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Sum of 20 Terms',
            question: 'Find the sum of 20 terms?',
            answer: "S20=1430",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'Find the sum of 20 terms?',
        boxDisplay: "Question Prompt 2.10", 
        headQuestion: 'In an arithmetic sequence, u5 = 33 and u10 = 6.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.3"],
        mark: 6,
        sub_marks: 1,
        difficulty: 4,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    // Question 3
    // Question 3.1

    new QuestionModel({
        id: "3.1",
        bigQuestionNo: 3,
        smallQuestionNo: 1,
        question: "Define an arithmetic series?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "A series with a common difference between any two terms"
            }),
            new OptionsModel({
                value: "B",
                optionText: "A series with a common difference between two consecutive terms"
            }),
            new OptionsModel({
                value: "C",
                optionText: "A series with a common difference between the first and second term"
            }),
            new OptionsModel({
                value: "D",
                optionText: "A series with a common ratio between two consecutive terms"
            })
        ],
        correct: "B",
        planningScreen: new PlanningScreenModel({
            heading: 'Arithmetic Series',
            question: 'Define an arithmetic series?',
            answer: "A series with a common difference between two consecutive terms",
            typeScreen: "text"
        }),
        answerScreen: null,
        boxQuestion: 'Define an arithmetic series?',
        boxDisplay: "Guiding Question Prompt 3.1", 
        headQuestion: 'Consider an arithmetic sequence u30 = S30=30.',
        headDisplay: "Official Question",
        tags: ["Crafting the Perfect Response"],
        learningObjectives: ["1.2"],
        mark: 6,
        sub_marks: 0,
        difficulty: 5,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    // Question 3.2
    new QuestionModel({
        id: "3.2",
        bigQuestionNo: 3,
        smallQuestionNo: 2,
        question: "Identify the formula for the sum of n terms in an arithmetic series?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "Sn=n/2 (u1 + un)"
            }),
            new OptionsModel({
                value: "B",
                optionText: "Sn= u1 (1-r^n)/1-r"
            }),
            new OptionsModel({
                value: "C",
                optionText: "Sn=u1/1-r"
            }),
            new OptionsModel({
                value: "D",
                optionText: "Sn=n/2 (2u1+un)"
            })
        ],
        correct: "A",
        planningScreen: new PlanningScreenModel({
            heading: 'Sum of n Terms in Arithmetic Series',
            question: 'Identify the formula for the sum of n terms in an arithmetic series?',
            answer: "Sn = n/2 (u1 + un)",
            typeScreen: "text"
        }),
        answerScreen: null,
        boxQuestion: 'Identify the formula for the sum of n terms in an arithmetic series?',
        boxDisplay: "Guiding Question Prompt 3.2", 
        headQuestion: 'Consider an arithmetic sequence u30 = S30 = 30.',
        headDisplay: "Official Question",
        tags: ["Crafting the Perfect Response"],
        learningObjectives: ["1.3", "1.4"],
        mark: 6,
        sub_marks: 0,
        difficulty: 5,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "3.3",
        bigQuestionNo: 3,
        smallQuestionNo: 3,
        question: "Find u1 using the sum of 30 terms, S30? (A1)",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "30=15 (u1 + 30)"
            }),
            new OptionsModel({
                value: "B",
                optionText: "30= u1+30"
            }),
            new OptionsModel({
                value: "C",
                optionText: "30=15u1-30"
            }),
            new OptionsModel({
                value: "D",
                optionText: "30= 15(2u1+d(29))"
            })
        ],
        correct: "A",
        planningScreen: null,
        answerScreen: new PlanningScreenModel({
            heading: 'Find u1 using S30',
            question: 'Find u1 using the sum of 30 terms, S30?',
            answer: "30=15 (u1 + 30)",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'Find u1 using the sum of 30 terms, S30?',
        boxDisplay: "Question Prompt 3.3", 
        headQuestion: 'Consider an arithmetic sequence u30=S30=30.',
        headDisplay: "Official Question",
        tags: ["Crafting the Perfect Response"],
        learningObjectives: ["1.4", "1.7"],
        mark: 6,
        sub_marks: 1,
        difficulty: 5,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "3.4",
        bigQuestionNo: 3,
        smallQuestionNo: 4,
        question: "What is the value of u1?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "20"
            }),
            new OptionsModel({
                value: "B",
                optionText: "28"
            }),
            new OptionsModel({
                value: "C",
                optionText: "-28"
            }),
            new OptionsModel({
                value: "D",
                optionText: "24"
            })
        ],
        correct: "C",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Value of u1',
            question: 'What is the value of u1?',
            answer: "-28",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'What is the value of u1?',
        boxDisplay: "Question Prompt 3.4", 
        headQuestion: 'Consider an arithmetic sequence u30=S30=30.',
        headDisplay: "Official Question",
        tags: ["Crafting the Perfect Response"],
        learningObjectives: ["1.4", "1.7"],
        mark: 6,
        sub_marks: 1,
        difficulty: 5,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "3.5",
        bigQuestionNo: 3,
        smallQuestionNo: 5,
        question: "Identify the formula for the nth term of an arithmetic sequence?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "un = u1r^n-1"
            }),
            new OptionsModel({
                value: "B",
                optionText: "un = u1+un"
            }),
            new OptionsModel({
                value: "C",
                optionText: "un = u1+d(n-1)"
            }),
            new OptionsModel({
                value: "D",
                optionText: "un = u1+d(n)"
            })
        ],
        correct: "C",
        planningScreen: new PlanningScreenModel({
            heading: 'Formula for nth Term of Arithmetic Sequence',
            question: 'Identify the formula for the nth term of an arithmetic sequence?',
            answer: "un = u1+d(n-1)",
            typeScreen: "text"
        }),
        answerScreen: null,
        boxQuestion: 'Identify the formula for the nth term of an arithmetic sequence?',
        boxDisplay: "Question Prompt 3.5", 
        headQuestion: 'Consider an arithmetic sequence u30=S30=30.',
        headDisplay: "Official Question",
        tags: ["Crafting the Perfect Response"],
        learningObjectives: ["1.3", "1.4"],
        mark: 6,
        sub_marks: 0,
        difficulty: 5,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "3.6",
        bigQuestionNo: 3,
        smallQuestionNo: 6,
        question: "Find the common difference using the 30th term of the arithmetic sequence, u30? (A1 & M1)",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "30= -28+d"
            }),
            new OptionsModel({
                value: "B",
                optionText: "30=-28+d(29)"
            }),
            new OptionsModel({
                value: "C",
                optionText: "30=-28+d(30)"
            }),
            new OptionsModel({
                value: "D",
                optionText: "30= -28 - d"
            })
        ],
        correct: "B",
        planningScreen: null,
        answerScreen:  new PlanningScreenModel({
            heading: 'Finding Common Difference',
            question: 'Find the common difference using the 30th term of the arithmetic sequence, u30?',
            answer: "30=-28+d(29)",
            typeScreen: "text",
            mark: 2
        }),
        boxQuestion: 'Find the common difference using the 30th term of the arithmetic sequence, u30?',
        boxDisplay: "Question Prompt 3.6", 
        headQuestion: 'Consider an arithmetic sequence u30=S30=30.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.4", "1.7"],
        mark: 6,
        sub_marks: 2,
        difficulty: 5,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "3.7",
        bigQuestionNo: 3,
        smallQuestionNo: 7,
        question: "What is the value of d?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "2"
            }),
            new OptionsModel({
                value: "B",
                optionText: "5"
            }),
            new OptionsModel({
                value: "C",
                optionText: "1"
            }),
            new OptionsModel({
                value: "D",
                optionText: "4"
            })
        ],
        correct: "A",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Value of d',
            question: 'What is the value of d?',
            answer: "2",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'What is the value of d?',
        boxDisplay: "Question Prompt 3.7", 
        headQuestion: 'Consider an arithmetic sequence u30=S30=30.',
        headDisplay: "Official Question",
        tags: ["Crafting the Perfect Response"],
        learningObjectives: ["1.4", "1.5"],
        mark: 6,
        sub_marks: 1,
        difficulty: 5,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    // Question 4
    // Question 4.1
    new QuestionModel({
        id: "4.1",
        bigQuestionNo: 4,
        smallQuestionNo: 1,
        question: "Define an arithmetic series?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "A series with a common difference between any two terms"
            }),
            new OptionsModel({
                value: "B",
                optionText: "A series with a common difference between two consecutive terms"
            }),
            new OptionsModel({
                value: "C",
                optionText: "A series with a common difference between the first and second term"
            }),
            new OptionsModel({
                value: "D",
                optionText: "A series with a common ratio between two consecutive terms"
            })
        ],
        correct: "B",
        planningScreen: new PlanningScreenModel({
            heading: 'Arithmetic Series',
            question: 'Define an arithmetic series?',
            answer: "A series with a common difference between two consecutive terms",
            typeScreen: "text"
        }),
        answerScreen: null,
        boxQuestion: 'Define an arithmetic series?',
        boxDisplay: "Guiding Question Prompt 4.1", 
        headQuestion: 'An arithmetic sequence has first term 80 and common difference -2. Let Sn denote the sum of the first n terms of the sequence.',
        headDisplay: "Official Question",
        tags: ["Crafting the Perfect Response"],
        learningObjectives: ["1.2"],
        mark: 5,
        sub_marks: 0,
        difficulty: 5,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "4.2",
        bigQuestionNo: 4,
        smallQuestionNo: 2,
        question: "Identify the formula for the nth term of an arithmetic sequence?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "un = u1 * r^(n - 1)"
            }),
            new OptionsModel({
                value: "B",
                optionText: "un = u1 + un"
            }),
            new OptionsModel({
                value: "C",
                optionText: "un = u1 + d * (n-1)"
            }),
            new OptionsModel({
                value: "D",
                optionText: "un = u1 + d * (n)"
            })
        ],
        correct: "C",
        planningScreen: new PlanningScreenModel({
            heading: 'Formula for nth Term',
            question: 'Identify the formula for the nth term of an arithmetic sequence?',
            answer: "un=u1+d(n-1)",
            typeScreen: "text"
        }),
        answerScreen: null,
        boxQuestion: 'Identify the formula for the nth term of an arithmetic sequence?',
        boxDisplay: "Guiding Question Prompt 4.2", 
        headQuestion: 'An arithmetic sequence has first term 80 and common difference -2. Let Sn denote the sum of the first n terms of the sequence.',
        headDisplay: "Official Question",
        tags: ["Crafting the Perfect Response"],
        learningObjectives: ["1.3", "1.7"],
        mark: 5,
        sub_marks: 0,
        difficulty: 5,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "4.3",
        bigQuestionNo: 4,
        smallQuestionNo: 3,
        question: "By substituting the first term and common difference, create an equation for the nth term, un=0 ?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "0 = 80 - 2 * (n-1)"
            }),
            new OptionsModel({
                value: "B",
                optionText: "80 = 0 + 2 * (n)"
            }),
            new OptionsModel({
                value: "C",
                optionText: "2 * (n-1) + 80 = 80"
            }),
            new OptionsModel({
                value: "D",
                optionText: "0 = 80 * (-2)^(n-1)"
            })
        ],
        correct: "A",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Equation for nth Term',
            question: 'By substituting the first term and common difference, create an equation for the nth term, un=0?',
            answer: "0 = 80 - 2 * (n-1)",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'By substituting the first term and common difference, create an equation for the nth term, un=0?',
        boxDisplay: "Question Prompt 4.3", 
        headQuestion: 'An arithmetic sequence has first term 80 and common difference -2. Let Sn denote the sum of the first n terms of the sequence.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.3", "1.7"],
        mark: 5,
        sub_marks: 1,
        difficulty: 5,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "4.4",
        bigQuestionNo: 4,
        smallQuestionNo: 4,
        question: "What is the value of n?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "n = 41"
            }),
            new OptionsModel({
                value: "B",
                optionText: "n = 38"
            }),
            new OptionsModel({
                value: "C",
                optionText: "n = 36"
            }),
            new OptionsModel({
                value: "D",
                optionText: "n = 45"
            })
        ],
        correct: "A",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Value of n',
            question: 'What is the value of n?',
            answer: "n = 41",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'What is the value of n?',
        boxDisplay: "Question Prompt 4.4", 
        headQuestion: 'An arithmetic sequence has first term 80 and common difference -2. Let Sn denote the sum of the first n terms of the sequence.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.3", "1.7"],
        mark: 5,
        sub_marks: 1,
        difficulty: 5,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "4.5",
        bigQuestionNo: 4,
        smallQuestionNo: 5,
        question: "Identify the formula for the sum of n terms in an arithmetic series?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "Sn = n/2 * (u1 + un)"
            }),
            new OptionsModel({
                value: "B",
                optionText: "Sn = u1 * (1-r^n) / 1-r"
            }),
            new OptionsModel({
                value: "C",
                optionText: "Sn = u1 / 1-r"
            }),
            new OptionsModel({
                value: "D",
                optionText: "Sn = n/2 * (2u1 + un)"
            })
        ],
        correct: "A",
        planningScreen: new PlanningScreenModel({
            heading: 'Sum Formula for Arithmetic Series',
            question: 'Identify the formula for the sum of n terms in an arithmetic series?',
            answer: "Sn = n/2 * (u1 + un)",
            typeScreen: "text"
        }),
        answerScreen: null,
        boxQuestion: 'Identify the formula for the sum of n terms in an arithmetic series?',
        boxDisplay: "Guiding Question Prompt 4.5", 
        headQuestion: 'An arithmetic sequence has first term 80 and common difference -2. Let Sn denote the sum of the first n terms of the sequence.',
        headDisplay: "Official Question",
        tags: ["Crafting the Perfect Response"],
        learningObjectives: ["1.3", "1.4"],
        mark: 5,
        sub_marks: 0,
        difficulty: 5,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "4.6",
        bigQuestionNo: 4,
        smallQuestionNo: 6,
        question: "At what value of n will the sum of n terms be maximized?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "n = 41"
            }),
            new OptionsModel({
                value: "B",
                optionText: "n = 1"
            }),
            new OptionsModel({
                value: "C",
                optionText: "n = 100"
            }),
            new OptionsModel({
                value: "D",
                optionText: "infinite number of terms"
            })
        ],
        correct: "A",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Maximizing Sum of Terms',
            question: 'At what value of n will the sum of n terms be maximized?',
            answer: "n = 41",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'At what value of n will the sum of n terms be maximized?',
        boxDisplay: "Question Prompt 4.6", 
        headQuestion: 'An arithmetic sequence has first term 80 and common difference -2. Let Sn denote the sum of the first n terms of the sequence.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.2"],
        mark: 5,
        sub_marks: 1,
        difficulty: 5,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "4.7",
        bigQuestionNo: 4,
        smallQuestionNo: 7,
        question: "Create an equation to find the maximum sum of terms/maximum value of Sn? (A1)",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "S41=41/2 (80+0)"
            }),
            new OptionsModel({
                value: "B",
                optionText: "S41=80(1+2)"
            }),
            new OptionsModel({
                value: "C",
                optionText: "S41=41/2 (80-1)"
            }),
            new OptionsModel({
                value: "D",
                optionText: "S41= 40/2 (80 -(-2))"
            })
        ],
        correct: "A",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Maximum Sum of Terms',
            question: 'Create an equation to find the maximum sum of terms/maximum value of Sn?',
            answer: "S41=41/2 (80+0)",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'Create an equation to find the maximum sum of terms/maximum value of Sn?',
        boxDisplay: "Question Prompt 4.7", 
        headQuestion: 'An arithmetic sequence has first term 80 and common difference -2. Let Sn denote the sum of the first n terms of the sequence.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.3"],
        mark: 5,
        sub_marks: 1,
        difficulty: 5,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "4.8",
        bigQuestionNo: 4,
        smallQuestionNo: 8,
        question: "What is the value of s41?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "s41 = 1500"
            }),
            new OptionsModel({
                value: "B",
                optionText: "s41 = 1600"
            }),
            new OptionsModel({
                value: "C",
                optionText: "s41 = 1640"
            }),
            new OptionsModel({
                value: "D",
                optionText: "s41 = 1620"
            })
        ],
        correct: "C",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Value of s41',
            question: 'What is the value of s41?',
            answer: "s41 = 1640",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'What is the value of s41?',
        boxDisplay: "Question Prompt 4.8", 
        headQuestion: 'An arithmetic sequence has first term 80 and common difference -2. Let Sn denote the sum of the first n terms of the sequence.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.3"],
        mark: 5,
        sub_marks: 1,
        difficulty: 5,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    // Question 5
    // Question 5.1

    new QuestionModel({
        id: "5.1",
        bigQuestionNo: 5,
        smallQuestionNo: 1,
        question: "Define an infinite geometric series.",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "A geometric series with a common ratio r >1"
            }),
            new OptionsModel({
                value: "B",
                optionText: "A geometric series with a common ratio r<1"
            }),
            new OptionsModel({
                value: "C",
                optionText: "A geometric series with a common ratio r>-1"
            }),
            new OptionsModel({
                value: "D",
                optionText: "A geometric series with a common ratio -1<r<1"
            })
        ],
        correct: "D",
        planningScreen: new PlanningScreenModel({
            heading: 'Infinite Geometric Series',
            question: 'Define an infinite geometric series.',
            answer: "A geometric series with a common ratio -1<r<1",
            typeScreen: "text"
        }),
        answerScreen: null,
        boxQuestion: 'Define an infinite geometric series.',
        boxDisplay: "Question Prompt 5.1", 
        headQuestion: 'The first term of an infinite geometric sequence is 5. The sum of the infinite sequence is 100.',
        headDisplay: "Official Question",
        tags: ["Crafting the Perfect Response"],
        learningObjectives: ["1.2"],
        mark: 6,
        sub_marks: 0,
        difficulty: 6,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "5.2",
        bigQuestionNo: 5,
        smallQuestionNo: 2,
        question: "Identify the formula for the infinite geometric series:",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "u1/1-r"
            }),
            new OptionsModel({
                value: "B",
                optionText: "u1/r"
            }),
            new OptionsModel({
                value: "C",
                optionText: "u1(1-r^n)/1-r"
            }),
            new OptionsModel({
                value: "D",
                optionText: "u1(1-r)"
            })
        ],
        correct: "A",
        planningScreen: new PlanningScreenModel({
            heading: 'Infinite Geometric Series',
            question: 'Identify the formula for the infinite geometric series:',
            answer: "u1/1-r",
            typeScreen: "text"
        }),
        answerScreen: null,
        boxQuestion: 'Identify the formula for the infinite geometric series:',
        boxDisplay: "Question Prompt 5.2", 
        headQuestion: 'The first term of an infinite geometric sequence is 5. The sum of the infinite sequence is 100.',
        headDisplay: "Official Question",
        tags: ["Crafting the Perfect Response"],
        learningObjectives: ["1.10", "1.11"],
        mark: 6,
        sub_marks: 0,
        difficulty: 6,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "5.3",
        bigQuestionNo: 5,
        smallQuestionNo: 3,
        question: "Create an equation to solve for the common ratio?",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "5/1-r=100"
            }),
            new OptionsModel({
                value: "B",
                optionText: "5/r=100"
            }),
            new OptionsModel({
                value: "C",
                optionText: "r/5-r=100"
            }),
            new OptionsModel({
                value: "D",
                optionText: "5/1-r=100r"
            })
        ],
        correct: "A",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Solving for Common Ratio',
            question: 'Create an equation to solve for the common ratio?',
            answer: "5/1-r=100",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'Create an equation to solve for the common ratio?',
        boxDisplay: "Question Prompt 5.3", 
        headQuestion: 'The first term of an infinite geometric sequence is 5. The sum of the infinite sequence is 100.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.6", "1.10", "1.11"],
        mark: 6,
        sub_marks: 1,
        difficulty: 6,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "5.4",
        bigQuestionNo: 5,
        smallQuestionNo: 4,
        question: "Find the common ratio: (A1)",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "r = 0.95"
            }),
            new OptionsModel({
                value: "B",
                optionText: "r = 0.85"
            }),
            new OptionsModel({
                value: "C",
                optionText: "r = -0.80"
            }),
            new OptionsModel({
                value: "D",
                optionText: "r = -0.95"
            })
        ],
        correct: "A",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Common Ratio of Geometric Sequence',
            question: 'Find the common ratio:',
            answer: "r = 0.95",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'Find the common ratio:',
        boxDisplay: "Question Prompt 5.4", 
        headQuestion: 'The first term of an infinite geometric sequence is 5. The sum of the infinite sequence is 100.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.6", "1.10", "1.11"],
        mark: 6,
        sub_marks: 1,
        difficulty: 6,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "5.5",
        bigQuestionNo: 5,
        smallQuestionNo: 5,
        question: "Identify the formula for the sum of n terms in a geometric series:",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "Sn=u1(1-r^n)/1-r"
            }),
            new OptionsModel({
                value: "B",
                optionText: "Sn=u1(r^n-1)/1-r"
            }),
            new OptionsModel({
                value: "C",
                optionText: "Sn=u1/1-r"
            }),
            new OptionsModel({
                value: "D",
                optionText: "Sn=u1/r^n-1"
            })
        ],
        correct: "A",
        planningScreen: new PlanningScreenModel({
            heading: 'Geometric Series Formula',
            question: 'Identify the formula for the sum of n terms in a geometric series:',
            answer: "Sn=u1(1-r^n)/1-r",
            typeScreen: "text"
        }),
        answerScreen: null,
        boxQuestion: 'Identify the formula for the sum of n terms in a geometric series:',
        boxDisplay: "Guiding Question Prompt 5.5", 
        headQuestion: 'The first term of an infinite geometric sequence is 5. The sum of the infinite sequence is 100.',
        headDisplay: "Official Question",
        tags: ["Crafting the Perfect Response"],
        learningObjectives: ["1.2", "1.5"],
        mark: 6,
        sub_marks: 0,
        difficulty: 6,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "5.6",  // Assuming this is the next id in your sequence.
        bigQuestionNo: 5,
        smallQuestionNo: 6,
        question: "Create an equation for the sum of ten terms (M1):",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "S10= 5(1-0.95^10)/1-0.95"
            }),
            new OptionsModel({
                value: "B",
                optionText: "S10=5(0.95^10-1)/1-0.95"
            }),
            new OptionsModel({
                value: "C",
                optionText: "S10=5/1-0.95"
            }),
            new OptionsModel({
                value: "D",
                optionText: "S10=5/0.95^10-1"
            })
        ],
        correct: "A",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Equation for Sum of Ten Terms',
            question: 'Create an equation for the sum of ten terms (M1):',
            answer: "S10= 5(1-0.95^10)/1-0.95",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'Create an equation for the sum of ten terms (M1):',
        boxDisplay: "Question Prompt 5.6", 
        headQuestion: 'The first term of an infinite geometric sequence is 5. The sum of the infinite sequence is 100.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.2", "1.5"],
        mark: 6,
        sub_marks: 1,
        difficulty: 6,
        date: "2020-05-01",  // Assuming same date as before
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "5.7",
        bigQuestionNo: 5,
        smallQuestionNo: 7,
        question: "Find the sum of 10 terms:",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "S10=100"
            }),
            new OptionsModel({
                value: "B",
                optionText: "S10=150"
            }),
            new OptionsModel({
                value: "C",
                optionText: "S10= 40.1"
            }),
            new OptionsModel({
                value: "D",
                optionText: "S10=45.3"
            })
        ],
        correct: "C",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Sum of 10 Terms',
            question: 'Find the sum of 10 terms:',
            answer: "S10= 40.1",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'Find the sum of 10 terms:',
        boxDisplay: "Question Prompt 5.7", 
        headQuestion: 'The first term of an infinite geometric sequence is 5. The sum of the infinite sequence is 100.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.2", "1.5"],
        mark: 6,
        sub_marks: 1,
        difficulty: 6,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "5.8",
        bigQuestionNo: 5,
        smallQuestionNo: 8,
        question: "Create an equation/inequality for the sum of n terms greater than 80.",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "5(1-0.95^n)/1-0.95 >80"
            }),
            new OptionsModel({
                value: "B",
                optionText: "5(1-0.95^n)/0.95-1>80"
            }),
            new OptionsModel({
                value: "C",
                optionText: "5 (0.95^n)/0.95 <80"
            }),
            new OptionsModel({
                value: "D",
                optionText: "0.95^n>80"
            })
        ],
        correct: "A",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Equation for Sum Greater than 80',
            question: 'Create an equation/inequality for the sum of n terms greater than 80.',
            answer: "5(1-0.95^n)/1-0.95 >80",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'Create an equation/inequality for the sum of n terms greater than 80.',
        boxDisplay: "Question Prompt 5.8", 
        headQuestion: 'The first term of an infinite geometric sequence is 5. The sum of the infinite sequence is 100.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.5", "1.8"],
        mark: 6,
        sub_marks: 1,
        difficulty: 6,
        date: "2020-05-01",
        estimatedTime: 2,
    }),
    new QuestionModel({
        id: "5.9",
        bigQuestionNo: 5,
        smallQuestionNo: 9,
        question: "Find the least value of n for which the sum of n terms is greater than 80.",
        type: "text",
        options: [
            new OptionsModel({
                value: "A",
                optionText: "n = 41"
            }),
            new OptionsModel({
                value: "B",
                optionText: "n = 32"
            }),
            new OptionsModel({
                value: "C",
                optionText: "n = 35"
            }),
            new OptionsModel({
                value: "D",
                optionText: "n = 40.5"
            })
        ],
        correct: "B",
        planningScreen: null,
        answerScreen: new AnswerScreenModel({
            heading: 'Least Value of n',
            question: 'Find the least value of n for which the sum of n terms is greater than 80.',
            answer: "n = 32",
            typeScreen: "text",
            mark: 1
        }),
        boxQuestion: 'Find the least value of n for which the sum of n terms is greater than 80.',
        boxDisplay: "Question Prompt 5.9", 
        headQuestion: 'The first term of an infinite geometric sequence is 5. The sum of the infinite sequence is 100.',
        headDisplay: "Official Question",
        tags: ["Deconstructing & Mapping"],
        learningObjectives: ["1.5", "1.8"],
        mark: 6,
        sub_marks: 1,
        difficulty: 7,
        date: "2020-05-01",
        estimatedTime: 2,
    })]


const math_data_size = math_data.length;
export {math_data_size, math_data};
