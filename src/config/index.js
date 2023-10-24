// const LOGIN_URL = "https://auth-service.ecodeit.com/api/users/auth";
// const LOGOUT_URL = "https://auth-service.ecodeit.com/api/users/logout";
export const LOGIN_URL = "/api/users/auth";
export const LOGOUT_URL = "/api/users/logout";
export const PATCH_FCM_TOKEN_URL = "/api/notifications/patchToken";
export const GET_CASE_LIST_URL = "/api/case/getCaseList";
export const GET_CASE_BY_CASEID_URL = "/api/case/getCaseInfoByCaseId";
export const DELETE_CASE_LOG_URL = "/api/case/deleteCaseLog";
export const GET_CASE_INVITATION_BY_USER_ID_URL =
  "/api/case/getCaseInvitationByUserId";
export const CREATE_CASE_URL = "/api/case/createCase";
export const GET_CASE_LOGS_LIST_URL = "/api/case/getCaseLogsByCaseId";
export const GET_CASE_LOG_BY_LOGID_URL = "/api/case/getCaseLogBycaseLogId";
export const GET_EXTERNAL_DASHBOARD_CHILD_PROFILES =
  "/api/case/ExternalDashboardChildProfiles";
export const GET_EXTERNAL_DASHBOARD_PENDING_CASE =
  "/api/case/ExternalDashboardPendingCase";
export const GET_EXTERNAL_DASHBOARD_CASE_ASSIGN =
  "/api/case/ExternalDashboardCaseAssign";
export const GET_CASES_FOR_ORPHANAGE_URL = "/api/case/getCasesForOrphanage";
export const GET_PENDING_CASE_URL = "/api/case/getPendingCaseForDashBoard";
export const GET_ONGOING_CASE_URL = "/api/case/getOngoingCaseForDashBoard";
export const CREATE_CASE_LOG_URL = "/api/case/createCaseLog";
export const GET_CASE_LIST_BY_USERID_URL = "/api/case/getCaseListByUserId";
export const UPDATE_CASE_STATE_URL = "/api/case/updateCaseState";
export const UPDATE_CASE_LOG_URL = "/api/case/updateCaseLog";
export const ORPHANAGE_REGISTER_URL = "/api/users/registerOrphanage";
export const GET_ROLES_LIST_URL = "/api/users/roles";
export const GET_CHILD_PROFILE_NAME_LIST =
  "/api/profile/getChildProfileNameListByOrphanageId";
export const GET_SOCIAL_WORKER_NAME_LIST =
  "/api/profile/getSocialWorkerNameListByOrphanageId";

export const GET_CHILD_LIST_URL = "/api/profile/getChildProfileList";
export const GET_STAFF_LIST_URL = "/api/profile/getStaffProfileList";
export const GET_STAFF_COUNT_FOR_ORPHANAGE_URL =
  "/api/profile/getStaffCountForOrphanage";
export const GET_PROFILE_COUNT_FOR_ORPHANAGE_URL =
  "/api/profile/getProfileCountForOrphanage";
export const GET_PARENT_COUNT_FOR_ORPHANAGE_URL =
  "/api/profile/getParentCountForOrphanage";
export const GET_SOCIAL_WORKER_LIST_URL =
  "/api/profile/getSocialWorkerProfileList";
export const GET_PARENT_LIST_URL = "/api/profile/getParentProfileList";

export const VIEW_CHILD_PROFILE_URL = "/api/profile/viewChildProfiles";
export const VIEW_STAFF_PROFILE_URL = "/api/profile/viewStaffProfile";
export const VIEW_PARENT_PROFILE_URL = "/api/profile/viewParentProfile";
export const VIEW_SOCIAL_WORKER_PROFILE_URL =
  "/api/profile/viewSocialWorkerProfile";
export const VIEW_CHILD_PROFILE_EXTERNAL_URL =
  "/api/profile/viewChildInfoExternal";

export const CREATE_CHILD_PROFILE_URL = "/api/profile/createChildProfile";
export const CREATE_STAFF_PROFILE_URL = "/api/profile/createStaffProfile";
export const CREATE_SOCIAL_WORKER_PROFILE_URL =
  "/api/profile/createSocialWorkerProfile";
export const CREATE_PARENT_PROFILE_URL = "/api/profile/createParentProfile";
export const CREATE_MANAGER_PROFILE_URL = "/api/profile/createManagerProfile";

export const DELETE_CHILD_PROFILE_URL = "/api/profile/deleteChildProfile";
export const DELETE_STAFF_PROFILE_URL = "/api/profile/deleteStaffProfile";
export const DELETE_SOCIAL_WORKER_PROFILE_URL =
  "/api/profile/deleteSocialWorkerProfile";
export const DELETE_PARENT_PROFILE_URL = "/api/profile/deleteParentProfile";

export const EDIT_CHILD_PROFILE_URL = "/api/profile/editChildProfile";
export const EDIT_STAFF_PROFILE_URL = "/api/profile/editStaffProfile";
export const EDIT_SOCIAL_WORKER_PROFILE_URL =
  "/api/profile/editSocialWorkerProfile";
export const EDIT_PARENT_PROFILE_URL = "/api/profile/editParentProfile";
export const CREATE_INQUIRY_URL = "/api/profile/createInquiry";
export const CREATE_FUND_URL = "/api/profile/createFund";
export const OVERALL_APPROVAL_URL = "/api/admin/approvalList";
export const APPROVE_URL = "/api/admin/approve";
export const REJECT_URL = "/api/admin/reject";
export const CHAT_URL = "/api/admin/chat";
export const REPORT_URL = "/api/admin/report";

export const determineAppServerKey = () => {
  const vapidPublicKey =
    "BBRtHqulpPja3_U6GUSDwiVjBqVCgHUQiEl0WpiBpIdTtQ7rlLbRnmKoQnrA2Anh-eV5rLHp11_rb8bGgQQNM3U";
  return urlBase64ToUint8Array(vapidPublicKey);
};

const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};
