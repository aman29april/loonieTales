import { configureStore, createSlice } from '@reduxjs/toolkit';

const crsStore = createSlice({
    name: 'crsStore',
    initialState: {
        userProfile: {},
        total: 0
    },
    reducers: {
        setCrs: (state, action) => {
            state.userProfile = {...state.userProfile, ...action.payload}
            let sum = 0
            Object.entries(state.userProfile).map(([key, value]) => {
                sum += value['points']
            })

            state.total = sum
        }
    }

})

export const {
    setCrs
} = crsStore.actions

export default crsStore.reducer
