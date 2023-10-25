import { apiSlice } from "./apiSlice";
import {
  GET_CASE_LIST_URL,
  CREATE_CASE_URL,
  GET_CASE_BY_CASEID_URL,
  GET_CASE_INVITATION_BY_USER_ID_URL,
  UPDATE_CASE_STATE_URL,
  GET_CASE_LIST_BY_USERID_URL,
  CREATE_CASE_LOG_URL,
  GET_CASE_LOGS_LIST_URL,
  DELETE_CASE_LOG_URL,
  UPDATE_CASE_LOG_URL,
  GET_CASE_LOG_BY_LOGID_URL,
  GET_PENDING_CASE_URL,
  GET_EXTERNAL_DASHBOARD_CHILD_PROFILES,
  GET_EXTERNAL_DASHBOARD_PENDING_CASE,
  GET_EXTERNAL_DASHBOARD_CASE_ASSIGN,
  GET_ONGOING_CASE_URL,
  GET_CASES_FOR_ORPHANAGE_URL,
  GET_ADOPTION_CASE_URL,
  GET_FUNDING_FOR_ORPHANAGE_URL,
  CREATE_PROFILE_REQUEST_URL,
  CREATE_CASE_REQUEST_URL,
  GET_CASE_LIST_BY_PARENT_ID_URL,

} from "../config";

export const caseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCaseList: builder.query({
      query: (data) => ({
        url: GET_CASE_LIST_URL,
        method: "GET",
        // body: data,
      }),
    }),
    getCaseListByUserId: builder.query({
      query: (data) => ({
        url: GET_CASE_LIST_BY_USERID_URL,
        method: "GET",
        // body: data,
      }),
    }),

    getCaseListByParentId: builder.query({
      query: (data) => ({
        url: GET_CASE_LIST_BY_PARENT_ID_URL,
        method: "GET",
        // body: data,
      }),
    }),
    getCaseByCaseId: builder.query({
      query: (data) => ({
        url: GET_CASE_BY_CASEID_URL + `?caseId=${data}`,
        method: "GET",
      }),
    }),
    createCase: builder.mutation({
      query: (data) => ({
        url: CREATE_CASE_URL,
        method: "POST",
        body: data,
      }),
    }),
    createProfileRequest: builder.mutation({
      query: (data) => ({
        url: CREATE_PROFILE_REQUEST_URL,
        method: "POST",
        body: data,
      }),
    }),
    createCaseRequest: builder.mutation({
      query: (data) => ({
        url: CREATE_CASE_REQUEST_URL,
        method: "POST",
        body: data,
      }),
    }),
    createCaseLog: builder.mutation({
      query: (data) => ({
        url: CREATE_CASE_LOG_URL,
        method: "POST",
        body: data,
      }),
    }),
    deleteCaseLog: builder.mutation({
      query: (data) => ({
        url: DELETE_CASE_LOG_URL,
        method: "DELETE",
        body: data,
      }),
    }),
    getCaseInvitationByUserId: builder.query({
      query: (data) => ({
        url: GET_CASE_INVITATION_BY_USER_ID_URL,
        method: "GET",
      }),
    }),

    getCaseLogs: builder.query({
      query: (data) => ({
        url: GET_CASE_LOGS_LIST_URL + `?caseId=${data}`,
        method: "GET",
      }),
    }),

    getCaseLogBylogId: builder.query({
      query: (data) => ({
        url: GET_CASE_LOG_BY_LOGID_URL + `?logId=${data}`,
        method: "GET",
      }),
    }),
    getPendingCase: builder.query({
      query: (data) => ({
        url: GET_PENDING_CASE_URL,
        method: "GET",
      }),
    }),
    getOngoingCase: builder.query({
      query: (data) => ({
        url: GET_ONGOING_CASE_URL,
        method: "GET",
      }),
    }),

    getExternalDashboardChildProfiles: builder.query({
      query: (data) => ({
        url: GET_EXTERNAL_DASHBOARD_CHILD_PROFILES,
        method: "GET",
      }),
    }),

    getExternalDashboardPendingCase: builder.query({
      query: (data) => ({
        url: GET_EXTERNAL_DASHBOARD_PENDING_CASE,
        method: "GET",
      }),
    }),
    getExternalDashboardCaseAssign: builder.query({
      query: (data) => ({
        url: GET_EXTERNAL_DASHBOARD_CASE_ASSIGN,
        method: "GET",
      }),
    }),
    getCasesForOrphanage: builder.query({
      query: (data) => ({
        url: GET_CASES_FOR_ORPHANAGE_URL,
        method: "GET",
      }),
    }),

    getAdoptionForOrphanage: builder.query({
      query: (data) => ({
        url: GET_ADOPTION_CASE_URL,
        method: "GET",
      }),
    }),

    getFundingForOrphanage: builder.query({
      query: (data) => ({
        url: GET_FUNDING_FOR_ORPHANAGE_URL,
        method: "GET",
      }),
    }),

    updateCaseState: builder.mutation({
      query: (data) => ({
        url: UPDATE_CASE_STATE_URL,
        method: "PUT",
        body: data,
      }),
    }),

    updateCaseLog: builder.mutation({
      query: (data) => ({
        url: UPDATE_CASE_LOG_URL,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetCaseListQuery,
  useCreateCaseMutation,
  useGetCaseByCaseIdQuery,
  useGetCaseInvitationByUserIdQuery,
  useUpdateCaseStateMutation,
  useGetCaseListByUserIdQuery,
  useCreateCaseLogMutation,
  useGetCaseLogsQuery,
  useDeleteCaseLogMutation,
  useUpdateCaseLogMutation,
  useGetCaseLogBylogIdQuery,
  useGetPendingCaseQuery,
  useGetOngoingCaseQuery,
  useGetExternalDashboardCaseAssignQuery,
  useGetExternalDashboardChildProfilesQuery,
  useGetExternalDashboardPendingCaseQuery,
  useGetCasesForOrphanageQuery,
  useGetAdoptionForOrphanageQuery,
  useGetFundingForOrphanageQuery,
  useCreateProfileRequestMutation,
  useCreateCaseRequestMutation,
  useGetCaseListByParentIdQuery

} = caseApiSlice;
