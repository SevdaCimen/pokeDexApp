import { INTROSLIDE } from "../constants";

const INITIAL_STATE = {
  skipIntro: false,
};
export const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INTROSLIDE.VIEWED:
      return { ...state, skipIntro: true };

    default:
      return state;
  }
};
