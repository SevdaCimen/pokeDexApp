import { INTROSLIDE } from "../constants";

export function FinishIntro() {
  return async (dispatch) => {
    dispatch({
      type: INTROSLIDE.VIEWED,
    });
  };
}
