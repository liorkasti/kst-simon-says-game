import {
  RISE_LEVEL
  , INIT_SCORE
  , SET_SCORE
  , SET_PROMPT
  , USER_MAX_SCORE
  , ADD_USER
  , GET_SCORES
} from './types';

const initialState = {
  level: 1,
  score: 0,
  boardPrompt: 'Play',
  maxScore: 0,
  topScores: []
};

const reducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case RISE_LEVEL:
      return { ...state, level: state.level + 1 };

    case INIT_SCORE:
      return { ...state, score: 0 };

    case SET_SCORE:
      return { ...state, score: payload };

    case SET_PROMPT:
      return { ...state, boardPrompt: payload };

    case USER_MAX_SCORE:
      let maxScore;
      let userScore = payload;
      state.maxScore > userScore
        ? (maxScore = state.maxScore)
        : (maxScore = userScore);
      return { ...state, maxScore, };

    case GET_SCORES:
      // let { topScores } = payload;
      return { ...state, topScores: payload };

    default:
      return { ...state };
  }
};

export default reducers;
