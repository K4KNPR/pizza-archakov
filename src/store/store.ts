import {configureStore} from '@reduxjs/toolkit'
import sortingSlice from "./sorting/sortingSlice";


export const store = configureStore({
    reducer: {
        sorting: sortingSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch