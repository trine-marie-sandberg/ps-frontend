import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    tasks: [],
    status: null,
    loading: "loading content",
    error: "An error occured",
}
//💡createAsyncThunk() accepts 3 paramenters: action-type, function, options
export const tasksFetch = createAsyncThunk(
    "tasks/tasksFetch",
    async (id=null, { rejectWithValue }) => {
        try {
            const response = await axios.get(baseUrl + "tasks");
            return response?.data
        } catch(error) {
            return rejectWithValue(error.response.data);
        } 
    }
);
const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload)
        }
    },
});
export default tasksSlice.reducer;
export const { addTask } = tasksSlice.actions;

export const taskFetch = createAsyncThunk(
    "task/taskFetch",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(baseUrl + `task/${id}`);
            return response?.data
        } catch(error) {
            return rejectWithValue(error.response.data);
        } 
    }
);
export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
}).reducer;

//https://redux.js.org/tutorials/essentials/part-5-async-logic
//https://www.youtube.com/watch?v=wB6hjNHe_ps&list=PL63c_Ws9ecIRnNHCSqmIzfsMAYZrN71L6&index=7
//https://www.youtube.com/watch?v=0T7P6Mb2XNE&list=PL63c_Ws9ecIRnNHCSqmIzfsMAYZrN71L6&index=8
