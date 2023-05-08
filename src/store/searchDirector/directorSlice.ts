import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { IPersonFindByName, IPersonFinded } from "../../types/IPerson";


interface DirectorsState {
    directors: IPersonFinded[],
    isLoading: boolean,
    error: string,
}

const initialState: DirectorsState = {
    directors: [],
    isLoading: false,
    error: ''
}

export const director = createSlice({
    name: 'directors',
    initialState,
    reducers: {
        directorFetching(state) {
            state.isLoading = true
        },
        directorFetchingSuccess(state, action: PayloadAction<IPersonFinded[]>) {
            state.isLoading = false;
            state.error = ''
            state.directors = action.payload
        },
        directorFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    },
})

export default director.reducer