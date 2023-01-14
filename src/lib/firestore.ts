import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, query } from "firebase/firestore";
import { collection, addDoc, getDoc, where } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCjDEi_oGaKMtGpHeF1edai69f4R6C9t6M",
  authDomain: "unhorario-alertbud.firebaseapp.com",
  projectId: "unhorario-alertbud",
  storageBucket: "unhorario-alertbud.appspot.com",
  messagingSenderId: "720795287735",
  appId: "1:720795287735:web:3b9c393c92c9e66b4a8d32",
  measurementId: "G-W8T2QX6SHM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const commentDb = collection(db, "comments");
const ratingDb = collection(db, "ratings");

/**
 * Uploads a comment to the database
 * @param content Comment content
 * @param teacher_name The teacher's name
 * @since 0.0.4
 */
export async function uploadComment(content: string, teacher_name: string) {
    try {
        const docRef = await addDoc(commentDb, {
            comment: content,
            teacher_name: teacher_name,
        });
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

/**
 * Uploads a rating to the database
 * @param value Rating value
 * @param teacher_name The teacher's name
 * @since 0.0.4
 */
export async function uploadRating(value: boolean, teacher_name: string) {
    try {
        const docRef = await addDoc(ratingDb, {
            rating: value,
            teacher_name: teacher_name,
        });
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

/**
 * Gets teacher ratings from the database
 * @param teacher_name The teacher's name
 * @since 0.0.4
 */
export async function getRatings(teacher_name: string) {
    try {
       const returnValue = new Array<boolean>();
       const teacherQuery = await query(ratingDb, where("teacher_name", "==", teacher_name)); 
       const teacherSnapshot = await getDocs(teacherQuery);

        teacherSnapshot.forEach((doc) => {
            returnValue.push(doc.data().rating);
        });

        return returnValue;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

/**
 * Gets teacher comments from the database
 * @param teacher_name The teacher's name
 * @since 0.0.4
 */
export async function getComments(teacher_name: string) {
    try {
       const returnValue = new Array<string>();
       const teacherQuery = await query(commentDb, where("teacher_name", "==", teacher_name)); 
       const teacherSnapshot = await getDocs(teacherQuery);

        teacherSnapshot.forEach((doc) => {
            returnValue.push(doc.data().comment);
        });

        return returnValue;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}