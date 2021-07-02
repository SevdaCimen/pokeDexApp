import { FAVORITE, STATUS } from "../constants";

export function PokeAddFavorite(item) {
  return async (dispatch) => {
    dispatch({
      type: FAVORITE.ADD_POKE,
      payload: item,
    });
  };
}

export function PokeRemoveFavorite(item) {
  return async (dispatch) => {
    dispatch({
      type: FAVORITE.REMOVE_POKE,
      payload: item,
    });
  };
}
export function PokeCatch(item) {
  return async (dispatch) => {
    dispatch({
      type: STATUS.CATCH_POKE,
      payload: item,
    });
  };
}
export function PokeRelease(item) {
  return async (dispatch) => {
    dispatch({
      type: STATUS.RELEASE_POKE,
      payload: item,
    });
  };
}
