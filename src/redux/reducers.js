import {
  RISE_LEVEL
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
  topScores: [],
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
      const { userName, score } = payload;
      console.log('payload :>> ', payload);
      if (state.topScores.length < 20) {
        state.topScores.push(payload)

      } else {
        const smallestResult = state.topScores.splice(-1)[0]

        if (smallestResult.score < payload.score) {
          state.topScores.push(payload)

        } else {
          state.topScores.push(smallestResult)
        }
      }

      state.topScores.sort((item1, item2) => item1.score < item2.score ? 1 : -1)
      return { ...state, topScores: state.topScores };

    default:
      return { ...state };
  }
};

export default reducers;
