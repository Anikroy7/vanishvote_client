import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pollApi = createApi({
  reducerPath: "pollApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["polls"],
  endpoints: (builder) => ({
    createPoll: builder.mutation({
      query: (data) => {
        return {
          url: "/poll/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["polls"],
    }),

    getPolls: builder.query({
      query: () => "/poll/all",
      providesTags: ["polls"],
    }),
    createVote: builder.mutation({
      query: (data) => {
        return {
          url: `/poll/create/vote/${data.id}`,
          method: "POST",
          body: data.body,
        };
      },
      invalidatesTags: ["polls"],
    }),

  }),
});

export const {
  useCreatePollMutation,
  useGetPollsQuery,
  useCreateVoteMutation
} = pollApi;