import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface TestState {
    test: number,
}


const initialState: TestState = {
    test: 1,
}

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        addTest(state) {
            state.test += 1
        }
    }
})

export default testSlice.reducer