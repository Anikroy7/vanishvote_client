import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pollApi = createApi({
  reducerPath: "pollApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_SERVER_BASE_URL}/api` }),
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
    getPollById: builder.query({
      query: (id: string) => `/poll/${id}`,
      providesTags: ["polls"],
    }),
    getMyPolls: builder.query({
      query: (userId: string) => `/poll/my/${userId}`,
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
    createReaction: builder.mutation({
      query: (data) => {
        return {
          url: `/poll/create/reaction/${data.id}`,
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
  useGetPollByIdQuery,
  useCreateVoteMutation,
  useGetMyPollsQuery,
  useCreateReactionMutation
} = pollApi;