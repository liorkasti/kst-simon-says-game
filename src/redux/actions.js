import firestore from '@react-native-firebase/firestore';

import { ref } from '../constants/cloud';

import {
  RISE_LEVEL
  , INIT_SCORE
  , SET_SCORE
  , SET_PROMPT
  , USER_MAX_SCORE
  , ADD_SCORE
  , GET_SCORES
} from './types';

export const riseLevel = {
  type: RISE_LEVEL,
  payload: 'riseLevel',
};

export const initScore = {
  type: INIT_SCORE,
  payload: 'initScore',
};

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

export const storeData = async (userName, score, callback) => {
  try {
    await ref.update({
      topScores: firestore.FieldValue.arrayUnion({ userName, score }),
    });
    callback ? callback() : null;
  } catch (e) {
    console.warn('__storeData__', e);
  }
};

export const fetchData = async isFeched => {
  try {
    const topScores = await ref.get();
    // console.warn(topScores?.data());
    return dispatch => {
      isFeched ? isFeched() : null;
      dispatch({
        type: GET_SCORES,
        payload: topScores
          .data()
          .topScores?.sort((a, b) => a.score < b.score)
          .slice(0, 20),
      });
    };
  } catch (e) {
    console.warn('_fetchData__', e);
  }
};