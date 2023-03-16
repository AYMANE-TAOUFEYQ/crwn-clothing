import { initializeApp } from "firebase/app";
import {    
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBL8YhvhrATskUfPUSUe3eq1bgYqCfe7j8",
    authDomain: "crwn-clothing-db-12a14.firebaseapp.com",
    projectId: "crwn-clothing-db-12a14",
    storageBucket: "crwn-clothing-db-12a14.appspot.com",
    messagingSenderId: "884180378988",
    appId: "1:884180378988:web:95c59a7742be4ab20fff49"
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if(!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);


    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
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

export const createAuthUserWithEmailAndPassword = async (email , password) => {
    if(!email || !password) return ;

    return await createUserWithEmailAndPassword(auth, email, password);
}


export const signInAuthUserWithEmailAndPassword = async (email , password) => {
    if(!email || !password) return ;
    
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);


export const onAuthStateChangeListener= (callback) => {
    onAuthStateChanged(auth,callback );
}