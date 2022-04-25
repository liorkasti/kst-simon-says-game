import firestore from '@react-native-firebase/firestore';

import { ref } from '../constants/cloud';

import { SET_SCORE, SET_PROMPT, FETCH_SCORES, USER_MAX_SCORE } from './types';

export const setScore = number => {
  return {
    type: SET_SCORE,
    payload: number,
  };
};

export const setPrompt = prompt => {
  return ({
    type: SET_PROMPT,
    payload: prompt,
  });
};

export const userMaxScore = (userScore) => {
  return {
    type: USER_MAX_SCORE,
    payload: userScore,
  };
};

export const storeData = async (userName, score) => {
  try {
    await ref.update({
      topScores: firestore.FieldValue.arrayUnion({ userName, score })
    }).then(() => { fetchScores(); });
  } catch (e) {
    console.log('Something went wrong while storing in firestore.', error);
  }
};

export const fetchScores = async isFeched => {
  try {
    let topScores = await ref.get();
    // console.log(topScores.data());
    return dispatch => {  // TODO: fix warning
      isFeched ? isFeched() : null;
      console.log('isFeched :>> ', isFeched);

      dispatch({
        type: FETCH_SCORES,
        payload: topScores
          .data()
          .topScores?.sort((a, b) => a.score < b.score)
          .slice(0, 20),
      });
    };
  } catch (e) {
    console.log('Something went wrong while fetching from firestore.', error);
  } 
};