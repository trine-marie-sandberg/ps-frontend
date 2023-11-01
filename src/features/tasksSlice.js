import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    tasks: [],
    //status: null,
    loading: "loading content",
    error: "An error occured",
}
//💡createAsyncThunk() accepts 3 paramenters: action-type, function, options
export const tasksFetch = createAsyncThunk(
    "tasks/tasksFetch",
    async () => {
        try {
            const response = await axios.get("http://10.0.0.68:5000/" + "tasks");
            return response?.data
        } catch(error) {
            console.log(error);
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
    //https://www.youtube.com/watch?v=I2aM7YcOXDY
    extraReducers: (builder) => {
        builder.addCase(tasksFetch.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(tasksFetch.fulfilled, (state, action) => {
            state.loading = false;
            state.tasks = action.payload;
            state.error = "";
        });
        builder.addCase(taskFetch.rejected, (state, action) => {
            state.loading = false;
            state.tasks = [];
            state.error = action.error;
        });
    }
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
