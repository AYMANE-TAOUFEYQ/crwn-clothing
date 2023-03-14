import { initializeApp } from "firebase/app";
import {    
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBL8YhvhrATskUfPUSUe3eq1bgYqCfe7j8",
    authDomain: "crwn-clothing-db-12a14.firebaseapp.com",
    projectId: "crwn-clothing-db-12a14",
    storageBucket: "crwn-clothing-db-12a14.appspot.com",
    messagingSenderId: "884180378988",
    appId: "1:884180378988:web:95c59a7742be4ab20fff49"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);


    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }

    return userDocRef;

    //check is user data exists
    //create / set the document with the data from userAuth in my collection

    //if user data does not exists

    //return userDocRef
};