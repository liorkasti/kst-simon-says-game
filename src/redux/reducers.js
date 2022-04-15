import {
  RISE_LEVEL
  , COUNTDOWN_OVER
  , INIT_SCORE
  , SET_SCORE
  , SET_PROMPT
  , USER_MAX_SCORE
  , ADD_USER
} from './types';

const initialState = {
  level: 1,
  score: 0,
  boardPrompt: 'Play',
  maxScore: 0,
  users: [],
};

const reducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //TODO: setPrompt and setScore
    case RISE_LEVEL:
      return {
        ...state,
        level: state.level + 1,
      };
    case INIT_SCORE:
      return {
        ...state,
        score: 0,
      };
    case SET_SCORE:
      return {
        ...state,
        score: payload,
      };
    case SET_PROMPT:
      return {
        ...state,
        boardPrompt: payload,
      };
    case USER_MAX_SCORE:
      let maxScore;
      const userScore = payload;
      state.maxScore > userScore
        ? (maxScore = state.maxScore)
        : (maxScore = userScore);

      return {
        ...state,
        maxScore,
      };
    case ADD_USER:
      const { userName, userPhone } = payload;
      let newUser = state.users.find((user) => {
        if (user.userPhone === userPhone && user.userName === userName) {
          return user;
        }
      });

      let user = {};
      user = newUser
        ? (user = { ...newUser, userMaxScore: state.maxScore })
        : (user = { userName, userPhone, userMaxScore: state.maxScore });
      const users = [...state.users];
      console.log('Users: ', users);
      const userIndex = state.users.findIndex(
        (user) => user.userPhone === userPhone && user.userName === userName
      );
      if (userIndex !== -1) {
        users[userIndex].userPhone = user.userPhone;
        users[userIndex].userMaxScore = user.userMaxScore;
        users[userIndex].userName = user.userName;
      } else {
        users.push(user);
      }

      return {
        ...state,
        users: [...users],
      };

    default:
      return { ...state };
  }
};

export default reducers;
