import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Col } from "react-bootstrap";
import { useLocation } from "react-router-dom"; // Import useLocation

const App = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo && userInfo.roleName !== "orphanageManager") {
      navigate("/auth/denied");
    }

    if (!userInfo) {
      setTimeout(() => {
        navigate("/auth/login");
      }, 2000);
    }
  }, [navigate, userInfo]);

  const location = useLocation(); // Get the current location
  const path = location.pathname; // Extract the pathname

  let pageTitle = "Default Title"; // Default title

  // Define a mapping of paths to titles
  const pathToTitleMap = {
    "/": "Dashboard",
    "/home": "Dashboard",
    "/dashboard": "Dashboard",
    "/monitoring/viewStaff": "View staff profiles",
    "/monitoring/viewSocialWorker": "View social worker profiles",
    "/monitoring/viewParent": "View parent profiles",
    "/profile/createProfile": "Create child profile Form",
    "/userRole/createStaff": "Create staff Form",
    "/userRole/createParent": "Create parent Form",
    "/userRole/createSocialWorker": "Create social worker Form",
    "/cases/viewPendingCases": "Approval Page",
    "/cases/AssignSocialWorkers": "Assign social workers for cases",
    "/report/viewOverallSystemReport": "Overall system Report",
    "/profile/viewProfile/overview": "Profile Overview",
    "/monitoring/viewStaff/overview": "Profile Overview",
    "/monitoring/viewSocialWorker/overview": "Profile Overview",
    "/monitoring/viewParent/overview": "Profile Overview",
    "/cases/AcceptOrRejectCases": "Accept Or Reject Assigned Cases",
    "/inquiry/CreateInquiry": "Create Inquiry Form",
    "/legal/viewChildDocument": "Child Document",
    "/legal/viewStaffDocument": "Staff Document",
    "/legal/viewParentDocument": "Parent Document",
    "/legal/viewSocialWorkerDocument": "Social Worker Document",
    "/parent/RequestChildProfile": "Request profiles of children for parents",
    "/parent/RequestCaseInfo":
      "Request case information of children for parents",
    "/parent/ParentsViewCases": "Parents View Case Information",
    "/inquiry/InquiriesBulkResponse": "Bulk response for inquiries",
    "/socialWorker/EditDeleteCaseLog":
      "Edit and delete case logs for social workers",
    "/cases/viewOngoingCases": "Ongoing cases",
    "/cases/viewCases/overview": "Overview of case",
    "/cases/viewOngoingCases/overview": "Case Overview",
    "/editProfile": "your profile",

    "/funds/ReceiveFunds": "Receive Funds",
    "/profile/viewProfile": "View child profiles",
    "/report/viewExternalPartyReport": "External Party Reports",
    "/report/viewStaffReport": " View Staff Reports",
    "/report/viewFinancialReport": "View Financial Report",
    "/report/viewChildReport": "View Child Report",
    "/approval/OverallApproval": "Overall Approvals",
    "/chat/StaffChat": "Staff Chat",
    "/registration/OrphanageRegistration": "Orphanage Registration",
    "/edit/editChildProfile":"Edit Child Profiles",
    "/edit/editStaffProfile": "Edit Staff profiles",
    "/edit/editParentProfile": "Edit Parent Profiles",
    "/edit/editSocialWorkerProfile":"Edit Social worker Profiles",
   
    "/delete/deleteChildProfile":"Delete Child Profile Form"

  };
  // Check if the path exists in the mapping, and if so, set the pageTitle accordingly
  if (path in pathToTitleMap) {
    pageTitle = pathToTitleMap[path];
  }

  return userInfo && userInfo && userInfo.roleName === "orphanageManager" ? (
    <>
      <Header />
      <Sidebar />
      <section className="main-container-section" id="main-section">
        <div className="container">
          <section>
            <div className="page-main-header">{pageTitle}</div>
            {/* 
              <div className="page-sub-header">
                Select the features provided by the OrphanSafe Platform.
              </div>
              */}
          </section>
          <section className="mt-3 main-page-content">
            <Outlet />
          </section>
        </div>
      </section>
    </>
  ) : (
    <div className="col text-center pt-5">
      <img
        src="/app-icon.png"
        alt=""
        style={{ height: "50px", width: "50px", marginBottom: "30px" }}
      />
      <h5>Redirecting, Please wait...</h5>
    </div>
  );
};

export default App;
