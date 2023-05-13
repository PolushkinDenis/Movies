import axios from "axios";
import { IMovies } from "../../types/IMovies";
import { AppDispatch } from "../store";
import { newMovies } from "./newMoviesSlice";

export const fetchNewMovies = (url: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(newMovies.actions.moviesFetching());
    const response = await axios.get<IMovies>(
      `http://localhost:8000/api/${url}`
    );
    dispatch(newMovies.actions.moviesFetchingSuccess(response.data.rows));
  } catch (e: any) {
    dispatch(newMovies.actions.moviesFetchingError(e.message));
  }
};
