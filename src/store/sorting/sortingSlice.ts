import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISortVariant {
    name: string,
    sort: string
}

interface SortingSlice {
    orderType: number,
    sortVariant: ISortVariant,
    category: number
}

const initialState: SortingSlice = {
    orderType: 1,
    sortVariant: {name: 'популярности', sort: 'rating'},
    category: 0
}

export const sortingSlice = createSlice({
    name: 'sorting',
    initialState,
    reducers: {
        changeOrder: (state) => {
            state.orderType = Number(!state.orderType)
        },
        changeSortVariant: (state, action: PayloadAction<ISortVariant>) => {
            state.sortVariant = action.payload
        },
        changeCategory: (state,action: PayloadAction<number>) => {
            state.category = action.payload
        }

    }
})

export const {changeOrder, changeSortVariant, changeCategory} = sortingSlice.actions
export default sortingSlice.reducer