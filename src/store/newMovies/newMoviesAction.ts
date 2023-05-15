import axios from "axios";
import { IMovie, IMovies } from "../../types/IMovies";
import { AppDispatch } from "../store";
import { newMovies } from "./newMoviesSlice";

interface SlideItem {
  movies: IMovie[],
  title: string
}

export const fetchNewMovies = (url: string, title: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(newMovies.actions.moviesFetching());
    const response = await axios.get<IMovies>(
      `http://localhost:8000/api/${url}`
    );
    const movies: SlideItem = {
      movies: response.data.rows,
      title: title
    }
    dispatch(newMovies.actions.moviesFetchingSuccess(movies));
  } catch (e: any) {
    dispatch(newMovies.actions.moviesFetchingError(e.message));
  }
};
