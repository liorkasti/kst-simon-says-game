import firestore from '@react-native-firebase/firestore';

export const db = firestore();
export const doc = 'qJjR6WHfIVpiJgxO1rWw';
export const ref = db.collection('scoresheet').doc(doc);
export const snapshot = ref.get();