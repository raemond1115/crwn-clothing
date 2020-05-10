import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAGKtijdY4V7se7a4zH8UV_HmOCt6R3C5g",
    authDomain: "crwn-db-564fb.firebaseapp.com",
    databaseURL: "https://crwn-db-564fb.firebaseio.com",
    projectId: "crwn-db-564fb",
    storageBucket: "crwn-db-564fb.appspot.com",
    messagingSenderId: "508077787281",
    appId: "1:508077787281:web:dd064c9da19b2f86941730",
    measurementId: "G-BYJ807LRV0"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;