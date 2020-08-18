import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCfxD8jMjta0Y9ZxPjefuPoJSqQqQHh56Q',
	authDomain: 'crwn-db-bac3e.firebaseapp.com',
	databaseURL: 'https://crwn-db-bac3e.firebaseio.com',
	projectId: 'crwn-db-bac3e',
	storageBucket: 'crwn-db-bac3e.appspot.com',
	messagingSenderId: '352901297395',
	appId: '1:352901297395:web:714affac501d2fe5c83386',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
