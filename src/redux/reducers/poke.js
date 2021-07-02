import { FAVORITE, STATUS } from "../constants";

import { reject } from "ramda";

const INITIAL_STATE = {
  favPokeList: [],
  catchedPokeList: [],
};
export const poke = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FAVORITE.ADD_POKE:
      return { ...state, favPokeList: [...state.favPokeList, action.payload] };
    case FAVORITE.REMOVE_POKE:
      var arr = state.favPokeList.filter((x) => x.id != action.payload.id);
      return {
        ...state,
        favPokeList: arr,
      };
    case STATUS.CATCH_POKE:
      return {
        ...state,
        catchedPokeList: [...state.catchedPokeList, action.payload],
      };
    case STATUS.RELEASE_POKE:
      var arr = state.catchedPokeList.filter((x) => x.id != action.payload.id);
      return {
        ...state,
        catchedPokeList: arr,
      };
    default:
      return state;
  }
};
