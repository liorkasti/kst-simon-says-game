import { SET_SCORE, SET_PROMPT, FETCH_SCORES, USER_MAX_SCORE } from './types';

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
    case SET_SCORE:
      return { ...state, score: payload };

    case SET_PROMPT:
      return { ...state, boardPrompt: payload };

    case FETCH_SCORES:
      return { ...state, topScores: payload };

    case USER_MAX_SCORE:
      let maxScore;
      let userScore = payload;
      state.maxScore > userScore
        ? (maxScore = state.maxScore)
        : (maxScore = userScore);
      return { ...state, maxScore, };

    default:
      return { ...state };
  }
};

export default reducers;
