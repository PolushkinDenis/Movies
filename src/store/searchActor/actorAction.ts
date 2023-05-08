import axios from "axios";
import { IMovies } from "../../types/IMovies";
import { AppDispatch } from "../store";
import { actor } from "./actorSlice";
import { IPersonFindByName } from "../../types/IPerson";


export const fetchActor = (name: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(actor.actions.actorFetching());
        const response = await axios.get<IPersonFindByName>(
            `http://localhost:8000/api/persons/search?profession=актер&name=${name}&size=5`
        );
        dispatch(actor.actions.actorFetchingSuccess(response.data.rows));
    } catch (e: any) {
        dispatch(actor.actions.actorFetchingError(e.message));
    }
};
