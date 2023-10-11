import { apiSlice } from "./apiSlice";
import { OVERALL_APPROVAL_URL, APPROVE_URL,REJECT_URL, CHAT_URL, REPORT_URL } from "../config";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getApprovalList: builder.query({
      query: () => ({
        url: OVERALL_APPROVAL_URL,
        method: "GET",
      }),
    }),
    approve: builder.mutation({
      query: (data) => ({
        url: APPROVE_URL,
        method: "PUT",
        body: data
      }),
    }),
    reject: builder.mutation({
      query: (data) => ({
        url: REJECT_URL,
        method: "PUT",
        body: data
      }),
    }),
    chat: builder.mutation({
      query: (data) => ({
        url: CHAT_URL,
        method: 'POST',
        body: data
      })
    }),
    getChat: builder.query({
      query: () => ({
        url: CHAT_URL,
        method: 'GET'
      })
    }),
    report: builder.mutation({
      query: (data) => ({
        url: REPORT_URL + `?report=${data}`,
        method: 'GET'
      })
    })
  }),
});

export const {
  useGetApprovalListQuery,
  useApproveMutation,
  useRejectMutation,
  useChatMutation,
  useGetChatQuery,
  useReportMutation
} = userApiSlice;
