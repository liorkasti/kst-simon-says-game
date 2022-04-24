import firestore from '@react-native-firebase/firestore';

export const doc = 'qJjR6WHfIVpiJgxO1rWw';
export const db = firestore();
export const ref = db.collection('scoresheet').doc(doc);
export const snapshot = ref.get();