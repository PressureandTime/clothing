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
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;