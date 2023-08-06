import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tasksApi = createApi({
    reducerPath: "tasksApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://10.0.0.68:5000/"}),
    endpoints: (builder) => ({
        getAllTasks: builder.query({
            query: () => "tasks",
        }),
    }),
});

export const { useGetAllTasksQuery } = tasksApi;

//https://www.youtube.com/watch?v=X3cE7Hatlo8&list=PL63c_Ws9ecIRnNHCSqmIzfsMAYZrN71L6&index=9 
//https://redux-toolkit.js.org/rtk-query/overview 