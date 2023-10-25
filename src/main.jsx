import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import store from "./store";
import { Provider } from "react-redux";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen.jsx";
import App from "./App.jsx";
import DefaultLayout from "./DefaultLayout.jsx";
import AuthApp from "./AuthApp.jsx";
import AdminApp from "./AdminApp";
import CreateChildProfileScreen from "./screens/child-profile/CreateChildProfileScreen";
import ViewChildProfileScreen from "./screens/child-profile/ViewChildProfileScreen";
import ViewDashboardScreen from "./screens/others/ViewDashboardScreen";
import ViewStaffScreen from "./screens/staff/ViewStaffScreen";
import ViewSocialWorkerScreen from "./screens/external-party/ViewSocialWorkerScreen";
import ViewParentScreen from "./screens/external-party/ViewParentScreen";
import ViewChildDocumentScreen from "./screens/child-profile/ViewChildDocumentScreen";
import ViewStaffDocumentScreen from "./screens/staff/ViewStaffDocumentScreen";
import ViewSocialWorkerDocumentScreen from "./screens/external-party/ViewSocialWorkerDocumentScreen";
import ViewParentDocumentScreen from "./screens/external-party/ViewParentDocumentScreen";
import ViewOngingCases from "./screens/cases/ViewOngingCases";
import ViewPendingCases from "./screens/cases/ViewPendingCases";
import ViewChildReportScreen from "./screens/child-profile/ViewChildReportScreen";
import ViewFinancialReportScreen from "./screens/others/ViewFinancialReportScreen";
import ViewStaffReportScreen from "./screens/staff/ViewStaffReportScreen";
import ViewExternalPartyReportScreen from "./screens/external-party/ViewExternalPartyReportScreen";
import CreateStaffScreen from "./screens/staff/CreateStaffScreen";
import CreateSocialWorkerScreen from "./screens/external-party/CreateSocialWorkerScreen";
import ViewUserRolesScreen from "./screens/others/ViewUserRolesScreen";
import CreateParentScreen from "./screens/external-party/CreateParentScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import ChildOverviewScreen from "./screens/child-profile/ChildOverviewScreen";
import ViewOverallSystemScreen from "./screens/others/ViewOverallSystemScreen";
import AssignSocialWorkersScreen from "./screens/cases/AssignSocialWorkersScreen";
import ReceiveFundScreen from "./screens/others/ReceiveFundScreen";
import StaffOverviewScreen from "./screens/staff/StaffOverviewScreen";
import ParentOverviewScreen from "./screens/external-party/ParentOverviewScreen";
import SocialWorkerOverviewScreen from "./screens/external-party/SocialWorkerOverviewScreen";
import AcceptRejectCasesScreen from "./screens/cases/AcceptRejectCasesScreen";
import CreateInquiryScreen from "./screens/others/CreateInquiryScreen";
import ExternalPartyApp from "./ExternalPartyApp";
import RequestChildProfileScreen from "./screens/external-party/RequestChildProfileScreen";
import RequestCaseInfo from "./screens/external-party/RequestCaseInfoScreen";
import ParentsViewCasesScreen from "./screens/external-party/ParentsViewCasesScreen";
import InquiriesBulkResponseScreen from "./screens/others/InquiriesBulkResponseScreen";
import CreateCaseLogsScreen from "./screens/cases/CreateCaseLogsScreen";
import EditCaseLogsScreen from "./screens/cases/EditCaseLogsScreen";
import CaseRequestScreen from "./screens/cases/CaseRequestScreen";
import EditDeleteCaseLogScreen from "./screens/cases/EditDeleteCaseLogScreen";
import CaseOverViewScreen from "./screens/cases/CaseOverViewScreen";
import EditProfile from "./screens/others/EditProfile";
import OverallApprovalScreen from "./screens/others/OverallApprovalScreen";
import StaffChatScreen from "./screens/others/StaffChatScreen";
import OngoingCaseExternalScreen from "./screens/external-party/OngoingCasesExternalScreen";
import ParentViewChildProfileScreen from "./screens/external-party/ParentsViewChildProfileScreen";
import ParentViewChildProfileListScreen from "./screens/external-party/ParentViewChildProfileListScreen";
import AdminStaffProfileScreen from "./screens/staff/AdminStaffProfileScreen";
import BulkResponseFormScreen from "./screens/others/BulkResponseFormScreen";
import AdminDashboardScreen from "./screens/others/AdminDashboardScreen";
import ExternalDashboardScreen from "./screens/others/ExternalDashboardScreen";
import AccessDenied from "./screens/AccessDenied";
import EditChildProfileScreen from "./screens/child-profile/EditChildProfileScreen";
import EditStaffProfileScreen from "./screens/staff/EditStaffProfileScreen";
import EditParentProfileScreen from "./screens/external-party/EditParentScreen";
import EditSocialWorkerScreen from "./screens/external-party/EditSocialWorkerScreen";
import DeleteChildScreen from "./screens/child-profile/DeleteChildScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<ViewDashboardScreen />} />
        <Route index={true} path="/home" element={<ViewDashboardScreen />} />
        <Route path="/dashboard" element={<ViewDashboardScreen />} />
        <Route path="/monitoring/viewStaff" element={<ViewStaffScreen />} />
        <Route
          path="/monitoring/viewStaff/overview"
          element={<StaffOverviewScreen />}
        />
        <Route
          path="/monitoring/viewSocialWorker"
          element={<ViewSocialWorkerScreen />}
        />
        <Route path="/cases/caseLogs" element={<EditDeleteCaseLogScreen />} />
        <Route
          path="/monitoring/viewSocialWorker/overview"
          element={<SocialWorkerOverviewScreen />}
        />
        <Route path="/monitoring/viewParent" element={<ViewParentScreen />} />
        <Route
          path="/monitoring/viewParent/overview"
          element={<ParentOverviewScreen />}
        />

        <Route
          path="/profile/createProfile"
          element={<CreateChildProfileScreen />}
        />
        <Route
          path="/profile/viewProfile"
          element={<ViewChildProfileScreen />}
        />
        <Route
          path="/profile/viewProfile/overview"
          element={<ChildOverviewScreen />}
        />
        <Route
          path="/legal/viewChildDocument"
          element={<ViewChildDocumentScreen />}
        />
        <Route
          path="/legal/viewStaffDocument"
          element={<ViewStaffDocumentScreen />}
        />
        <Route
          path="/legal/viewSocialWorkerDocument"
          element={<ViewSocialWorkerDocumentScreen />}
        />
        <Route
          path="/legal/viewParentDocument"
          element={<ViewParentDocumentScreen />}
        />
        <Route path="/cases/viewOngoingCases" element={<ViewOngingCases />} />

        <Route
          path="/cases/viewOngoingCases/overview"
          element={<CaseOverViewScreen />}
        />

        <Route
          path="/cases/AssignSocialWorkers"
          element={<AssignSocialWorkersScreen />}
        />

        <Route
          path="/report/viewChildReport"
          element={<ViewChildReportScreen />}
        />
        <Route
          path="/report/viewFinancialReport"
          element={<ViewFinancialReportScreen />}
        />
        <Route
          path="/report/viewStaffReport"
          element={<ViewStaffReportScreen />}
        />
        <Route
          path="/report/viewExternalPartyReport"
          element={<ViewExternalPartyReportScreen />}
        />

        <Route path="/userRole/createStaff" element={<CreateStaffScreen />} />
        <Route path="/userRole/createParent" element={<CreateParentScreen />} />
        <Route
          path="/userRole/createSocialWorker"
          element={<CreateSocialWorkerScreen />}
        />
        <Route path="/funds/ReceiveFunds" element={<ReceiveFundScreen />} />

        <Route
          path="/inquiry/CreateInquiry"
          element={<CreateInquiryScreen />}
        />

        <Route path="/editProfile" element={<EditProfile />} />
        <Route
          path="/edit/editChildProfile"
          element={<EditChildProfileScreen />}
        />
        <Route
          path="/edit/editStaffProfile"
          element={<EditStaffProfileScreen />}
        />
        <Route
          path="/edit/editParentProfile"
          element={<EditParentProfileScreen />}
        />
        <Route
          path="/edit/editSocialWorkerProfile"
          element={<EditSocialWorkerScreen />}
        />

        <Route
          path="/inquiry/CreateInquiry"
          element={<CreateInquiryScreen />}
        />
        <Route
          path="/delete/deleteChildProfile"
          element={<DeleteChildScreen />}
        />

        <Route path="/chat/StaffChat" element={<StaffChatScreen />} />
      </Route>
      <Route element={<AuthApp />}>
        <Route path="/auth/login" element={<LoginScreen />} />
        <Route path="/auth/register" element={<RegistrationScreen />} />
        <Route
          path="/registration/OrphanageRegistration"
          element={<RegistrationScreen />}
        />
        <Route path="/auth/denied" element={<AccessDenied />} />
      </Route>
      <Route element={<AdminApp />}>
        <Route path="/dashboard/Admin" element={<AdminDashboardScreen />} />

        <Route
          path="/inquiry/InquiriesBulkResponse"
          element={<InquiriesBulkResponseScreen />}
        />
        <Route
          path="/approval/OverallApproval"
          element={<OverallApprovalScreen />}
        />
        <Route path="/cases/viewPendingCases" element={<ViewPendingCases />} />
        <Route
          path="/admin/viewStaffProfile/overview"
          element={<AdminStaffProfileScreen />}
        />
        <Route
          path="/admin/ResponseBulk"
          element={<BulkResponseFormScreen />}
        />
        <Route path="/admin/StaffChat" element={<StaffChatScreen />} />
        <Route
          path="/report/viewOverallSystemReport"
          element={<ViewOverallSystemScreen />}
        />
        <Route
          path="/userRole/viewUserRole"
          element={<ViewUserRolesScreen />}
        />
      </Route>
      <Route element={<ExternalPartyApp />}>
        <Route
          path="/dashboard/External"
          element={<ExternalDashboardScreen />}
        />
        <Route
          path="/parent/viewChildProfileList/overview"
          element={<ChildOverviewScreen />}
        />
        <Route
          path="/cases/viewCases/overview"
          element={<CaseOverViewScreen />}
        />
        <Route
          path="/cases/AcceptOrRejectCases"
          element={<AcceptRejectCasesScreen />}
        />
        <Route path="/external/StaffChat" element={<StaffChatScreen />} />
        <Route
          path="/external/CreateCaseLog"
          element={<CreateCaseLogsScreen />}
        />
        <Route path="/external/EditCaseLog" element={<EditCaseLogsScreen />} />
        <Route path="/external/CaseRequest" element={<CaseRequestScreen />} />

        <Route
          path="/external/OngoingCases"
          element={<OngoingCaseExternalScreen />}
        />
        <Route
          path="/external/EditDeleteCaseLog"
          element={<EditDeleteCaseLogScreen />}
        />
        <Route
          path="/parent/RequestChildProfile"
          element={<RequestChildProfileScreen />}
        />
        <Route path="/parent/RequestCaseInfo" element={<RequestCaseInfo />} />
        <Route
          path="/parent/ParentsViewCases"
          element={<ParentsViewCasesScreen />}
        />
        <Route
          path="/parent/viewProfile/overview"
          element={<ParentViewChildProfileScreen />}
        />
        <Route
          path="/parent/viewChildProfileList"
          element={<ParentViewChildProfileListScreen />}
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register('./sw.js')
//     .then((resp) => console.warn(resp))
//     .catch((e) => console.log(e));
// }
