import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    tasks: [],
    status: null
}
//createAsyncThunk() accepts 3 paramenters: action-type, function, options
export const tasksFetch = createAsyncThunk(
    "tasks/tasksFetch",
    async () => {
        const response = await axios.get("http://10.0.0.68:5000/tasks");
        return response?.data
    }
);

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: {
        [tasksFetch.pending]: (state, action) => {
            //redux-toolkit is using library immer, and won't mutate out state
            state.status = "pending"
        },
        [tasksFetch.fulfilled]: (state, action) => {
            state.status = "sucsess"
            state.tasks = action.payload
        },
        [tasksFetch.rejected]: (state, action) => {
            state.status = "rejected"
            state.tasks = action.payload
        }
    }

});
export default tasksSlice.reducer;

//https://redux.js.org/tutorials/essentials/part-5-async-logic
//https://www.youtube.com/watch?v=wB6hjNHe_ps&list=PL63c_Ws9ecIRnNHCSqmIzfsMAYZrN71L6&index=7
//https://www.youtube.com/watch?v=0T7P6Mb2XNE&list=PL63c_Ws9ecIRnNHCSqmIzfsMAYZrN71L6&index=8