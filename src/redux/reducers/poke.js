import { FAVORITE, STATUS } from "../constants";

const INITIAL_STATE = {
  favPokeList: [],
  catchedPokeList: [],
};
export const poke = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FAVORITE.ADD_POKE:
      return { ...state, favPokeList: [...state.favPokeList, action.payload] };
    case FAVORITE.REMOVE_POKE:
      return {
        ...state,
        favPokeList: [...state.favPokeList.slice(0, action.payload)],
      };
    case STATUS.CATCH_POKE:
      debugger;
      return {
        ...state,
        catchedPokeList: [...state.catchedPokeList, action.payload],
      };
    case STATUS.RELEASE_POKE:
      return {
        ...state,
        catchedPokeList: [...state.catchedPokeList.slice(0, action.payload)],
      };
    default:
      return state;
  }
};
