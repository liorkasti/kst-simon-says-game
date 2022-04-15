import {
  RISE_LEVEL
  , COUNTDOWN_OVER
  , INIT_SCORE
  , SET_SCORE
  , SET_PROMPT
  , USER_MAX_SCORE
  , ADD_USER
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

export const addUser = (userName, userPhone) => {
  return {
    type: ADD_USER,
    payload: {
      userName,
      userPhone,
    },
  };
};