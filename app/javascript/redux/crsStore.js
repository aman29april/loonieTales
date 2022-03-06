import { configureStore, createSlice } from '@reduxjs/toolkit';
import {useSelector} from "react-redux";
import {isSpouseKey} from "../components/crs/common";

const crsStore = createSlice({
    name: 'crsStore',
    initialState: {
        userProfile: {},
        //     {
        //     sectionA: {
        //         data: {},
        //         total: 0
        //     },
        //     sectionB:{
        //         data: {},
        //         total: 0
        //     },
        //     sectionC:{
        //         data: {},
        //         total: 0
        //     },
        //     sectionD:{
        //         data: {},
        //         total: 0
        //     }
        // },
        total: 0,
        partnered: false
    },
    reducers: {
        setCrs: (state, action) => {
            state.userProfile = {...state.userProfile, ...action.payload}
            // let sum = 0
            //
            // Object.entries(state.userProfile).map(([key, value]) => {
            //     sum += value['points']
            // })
            state.total = computeTotal(state)
        },
        setCrsPartner: (state, action) => {
            state.partnered = action.payload
        },
        removeCrsKey: (state, action) => {
            delete state.userProfile[action.payload];
            state.total = computeTotal(state)
        }
    }

})

const computeTotal = (state) =>{
    const partnered = state.partnered
    let sum = 0
    Object.entries(state.userProfile).map(([key, value]) => {
        if(isSpouseKey(key) && !partnered){
        //    DO Nothing
        }else{
            sum += value['points']
        }
    })
    return sum
}
export const {
    setCrs,
    removeCrsKey,
    setCrsPartner
} = crsStore.actions

export default crsStore.reducer
