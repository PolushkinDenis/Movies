import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { IPersonFindByName, IPersonFinded } from "../../types/IPerson";


interface ActorsState {
    actors: IPersonFinded[],
    isLoading: boolean,
    error: string,
}

const initialState: ActorsState = {
    actors: [],
    isLoading: false,
    error: ''
}

export const actor = createSlice({
    name: 'actors',
    initialState,
    reducers: {
        actorFetching(state) {
            state.isLoading = true
        },
        actorFetchingSuccess(state, action: PayloadAction<IPersonFinded[]>) {
            state.isLoading = false;
            state.error = ''
            state.actors = action.payload
        },
        actorFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    },
})

export default actor.reducer