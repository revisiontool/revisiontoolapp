import React from 'react'


function HeadDisplay( { current_question } ) {


  return (
        <div className="rounded-xl bg-custom_grey-100 p-5 ">
            <div className="flex flex-row gap-2 bg-custom_grey-100 ">
            <div className="rounded-lg my-auto bg-custom_blue-100">
                    <span className="p-2 text-xs text-custom_blue-500">
                        {current_question.mark} marks
                    </span>
                </div>
                <div className="rounded-lg my-auto bg-custom_green-600">
                    <span className="p-2 text-xs text-custom_green-400">
                        {getDifficultRating(current_question.difficulty)}
                    </span>
                </div>
                <div className="rounded-lg my-auto bg-custom_blue-100">
                    <span className="p-2 text-xs text-custom_blue-500">
                        {current_question.estimatedTime} - {current_question.estimatedTime + Math.ceil(0.2 * current_question.estimatedTime)} mins
                    </span>
                </div>
                <div className="rounded-lg my-auto bg-custom_green-600">
                    <span className="p-2 text-xs text-custom_green-400 ">
                        Date of Exam: {formatDate(current_question.date)}
                    </span>
                </div>
            </div>

            <div>
                <h1 className="mt-2 text-xs text-custom_black-500 md:text-sm lg:text-base xl:text-lg">
                    {current_question.headDisplay}
                </h1>
                <h1 className="text-base font-bold text-custom_black-500 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    {current_question.headQuestion}
                </h1>
            </div>
        </div>

  )
}

function getDifficultRating(difficulty) {

    var outcome;
    
    if (difficulty >= 1 && difficulty <= 3) {
        outcome = "Easy"
    } else if (difficulty > 3 && difficulty <= 5) {
        outcome = "Medium"
    } else if (difficulty > 5 && difficulty <= 7) {
        outcome = "Hard"
    } else {
        outcome = "Unknown"
    }

    return outcome

}

function formatDate(inputDate) {
    var dateParts = inputDate.split('-');
    var year = parseInt(dateParts[0]);
    var month = parseInt(dateParts[1]) - 1; // Month is zero-based in JavaScript Date object
    var date = parseInt(dateParts[2]);
  
    var formattedDate = new Date(year, month, date).toLocaleString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  
    return formattedDate;
}

export default HeadDisplay