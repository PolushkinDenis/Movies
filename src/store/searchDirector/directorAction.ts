import axios from "axios";
import { IMovies } from "../../types/IMovies";
import { AppDispatch } from "../store";
import { director } from "./directorSlice";
import { IPersonFindByName } from "../../types/IPerson";


export const fetchDirector = (name: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(director.actions.directorFetching());
        const response = await axios.get<IPersonFindByName>(
            `http://localhost:8000/api/persons/search?profession=режиссер&name=${name}&size=5`
        );
        dispatch(director.actions.directorFetchingSuccess(response.data.rows));
    } catch (e: any) {
        dispatch(director.actions.directorFetchingError(e.message));
    }
};
