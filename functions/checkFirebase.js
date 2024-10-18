import { doc, getDoc, setDoc } from "firebase/firestore";
import {db} from "../firebase.config"

// Checks for existence of user in firebase, if new, create new one
const checkUserInFirebase = async (user) => {
  
    const docData = {
      subjects: {
        recent_subject: null,
        math: {
          progress: 0,
          current_question: 0,
          marks_scored: 0,
          total_marks: 0,
          answer_record: {},
          planning_screen: [],
          answer_screen: [],
        },
        economics: {
          progress: 0,
          current_question: 0,
          marks_scored: 0,
          total_marks: 0,
          answer_record: {},
          planning_screen: [],
        },
      },
    };

    try {
      
      const usersRef = doc(db, "userInfo", user.sub);
      const docSnap = await getDoc(usersRef);
      
      // If user doesn't exist, create new document in firebase
      if (!docSnap.exists()) {
        await setDoc(usersRef, docData);
        console.log("Created new user");
      } else {
        console.log("User exists!");
      }
    } catch (error) {
      console.error("Error checking user in Firestore:", error);
    }
  };

  export default checkUserInFirebase;