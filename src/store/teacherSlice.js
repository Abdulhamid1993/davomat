import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const teacherGet = createAsyncThunk('teacher/teacherGet', async () => {
    const res = await axios.get('https://638b219281df38ab34622b2b.mockapi.io/teachers')
    return res.data
}) 



const TeacherSlice = createSlice({
    name: 'teacher',
    initialState: {
            data: 'isim',
            teachers: []
    },
    reducers: {
       
    },
    extraReducers: {
        [teacherGet.pending]:(state) => {
            state.data = 'loading'
        },
        [teacherGet.fulfilled]:(state, action) => {
            state.teachers = action.payload
            state.data = 'pk'
        },
        [teacherGet.rejected]: (state) =>{
            state.data = 'err'
            
        }
    }
})


export const TeacherActions = TeacherSlice.actions;


export default TeacherSlice.reducer;