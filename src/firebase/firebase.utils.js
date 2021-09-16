import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCTiX8US1r0L0QKV5kSyMuLAyDkbElNKd4",
    authDomain: "e-commerce-db-32a4f.firebaseapp.com",
    projectId: "e-commerce-db-32a4f",
    storageBucket: "e-commerce-db-32a4f.appspot.com",
    messagingSenderId: "400972094885",
    appId: "1:400972094885:web:1cb6d1f7d759a57fda9c4c",
    measurementId: "G-1BQRY82QPQ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user',error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;