import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {
	FETCH_COLLECTIONS_START,
	FETCH_COLLECTIONS_SUCCESS,
	FETCH_COLLECTIONS_FAILURE,
} from './shop.action.types';

export const fetchCollectionsStart = () => {
	return {
		type: FETCH_COLLECTIONS_START,
	};
};

export const fetchCollectionsSuccess = (collectionsMap) => {
	return {
		type: FETCH_COLLECTIONS_SUCCESS,
		payload: collectionsMap,
	};
};

export const fetchCollectionsFailure = (errorMessage) => ({
	type: FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => async (dispatch) => {
	const collectionRef = firestore.collection('collections');
	dispatch(fetchCollectionsStart());

	collectionRef
		.get()
		.then((snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			dispatch(fetchCollectionsSuccess(collectionsMap));
		})
		.catch((error) => dispatch(fetchCollectionsFailure(error.message)));
};
