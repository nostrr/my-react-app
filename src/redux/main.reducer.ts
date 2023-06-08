import {createSlice, Slice} from "@reduxjs/toolkit";
import {sendEmail} from "./main.thunk";

interface IMainState {
    showLoader: boolean
}

const initialState: IMainState = {
    showLoader: false
}

const mainSlice: Slice<IMainState> = createSlice({
    name: 'main',
    initialState: initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
            .addCase(sendEmail.pending, (state) =>{
            state.showLoader = true;
        })
            .addCase(sendEmail.fulfilled, (state)=>{
            state.showLoader = false;
        })
            .addCase(sendEmail.rejected, (state)=>{
                state.showLoader = false;
            })
    }
})

export default mainSlice.reducer;
export const {} = mainSlice.actions;