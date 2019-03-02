import { all, takeLatest } from "redux-saga/effects"; //metodo para lidar c varios sagas tipo o combineReducers

import { Types as FavoriteTypes } from "../ducks/favorites";

import { addFavorite } from "./favorites";

// uma função generator, function*, que lida com o async  e o yield é parecido com o await
export default function* rootSaga() {
  yield all([takeLatest(FavoriteTypes.ADD_REQUEST, addFavorite)]);
}

/*
 * takeLatest pega uma unica requisição por vez, independente do quando o usuario cliclar
 * no botao de add
 *
 */
