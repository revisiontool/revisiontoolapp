import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {

    var questions = [
        "WHAT IS THE REVISION TOOL BETA?",
        "HOW DOES THE REVISION TOOL BETA WORK?",
        "WHAT ARE THE FEATURES OF REVISION TOOL BETA?",
        "WHAT SUBJECTS/CURRICULUM ARE AVAILABLE FOR REVISON TOOL BETA?",
        "HOW CAN I REQUEST NEW SUBJECTS/CURRICULUM TO BE ADDED TO THE REVISION TOOL BETA?",
        "HOW CAN I SHARE THE REVISION TOOL BETA WITH MY FRIENDS?",
        "HOW CAN I CONTACT THE TEAM BEHIND THE REVISION TOOL BETA?",
        "WHAT ARE THE TERMS AND CONDITIONS OF USING THE REVISION TOOL BETA?",
        "WHAT IS THE PRIVACY POLICY OF THE REVISION TOOL BETA?"
    ]

    var answers = [
      "The Revision Tool Beta is a trial version of our online learning platform that offers interactive and personalized question sets for IBDP Economics and Mathematics curriculums. It allows students to practice and revise for their exams in a more efficient and effective way.",
      "The Revision Tool Beta allows users to sign up for a trial account and access a set of questions for one subtopic within the IBDP Economics and Mathematics curriculums. Users can then take the practice questions and receive a predicted grade and a report pinpointing the exact learning objectives they need to spend more time revising.",
      "The Revision Tool Beta offers interactive and personalized question sets that are based on real exam questions and are designed to help students practice and revise effectively. It also includes a predicted grade, a report that highlights learning objectives that need more revision, and a referral program that allows users to gain premium access to the tool once it is fully developed.",
      "The trial period for The Revision Tool Beta is currently set to be one month long.",
      "The subjects and curriculums currently available for The Revision Tool Beta are IBDP Economics and Mathematics.",
      "Users can request new subjects/curriculums to be added by providing feedback on The Revision Tool Beta. There is a dedicated feedback page on the website where users can indicate which subjects/curriculums they want to see developed.",
      "Users can share The Revision Tool Beta with their friends by using the referral program. By sharing their unique referral code, users can gain premium access to the tool once it is fully developed. For every friend you refer who signs up, you'll get one day of premium access to the tool when it's fully developed. The more friends you refer, the more access you'll have!",
      'Users can contact the team behind The Revision Tool Beta by visiting the "Contact Us" page on the website. Here, users can submit a form or find contact information for the team.',
      'The terms and conditions of using The Revision Tool Beta can be found on the "Terms and Conditions" page on the website. Here, users can find information on limitations and liabilities of using the tool.',
      'The Privacy Policy of The Revision Tool Beta can be found on the "Privacy Policy" page on the website. Here, users can find information on how user data is collected, stored, and used.'
    ];



  return (
    <div className="m-2 md:m-20 xl:mx-60 ">
    {questions.map((val, index)=> {
        return (
            <Accordion key={index} className="m-5">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className=' text-xs sm:text-lg font-semibold'>{val}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {answers[index]}
          </Typography>
        </AccordionDetails>
      </Accordion>
        )
    })}
    
    </div>
  );
}