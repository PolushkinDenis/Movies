import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { moviesAPI } from "../services/MoviesService";
import newMoviesSlice from "./newMovies/newMoviesSlice";
import moviesSlice from "./movies/moviesSlice";
import directorSlice from "./searchDirector/directorSlice";
import actorSlice from "./searchActor/actorSlice";
import {authorizationReducer} from "./authorization/authorizationSlice";

const rootReducer = combineReducers({
  authorizationReducer,
  newMoviesSlice,
  moviesSlice,
  directorSlice,
  actorSlice,
  [moviesAPI.reducerPath]: moviesAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(moviesAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
