import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import ExternalSidebar from "./components/ExternalSidebar";
import { useLocation } from "react-router-dom"; // Import useLocation

const ExternalPartyApp = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      userInfo &&
      userInfo.roleName !== "parent" &&
      userInfo.roleName !== "socialWorker"
    ) {
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
    "/": "Home",
    "/home": "Home Page",
    "/dashboard/External": "Dashboard",
    "/external/CreateCaseLog": "Create Case Log",
    "/external/CaseRequest": "New Case Request",
    "/parent/RequestChildProfile": "Request Child Profiles",
    "/parent/RequestCaseInfo": "Request Case Information",
    "/parent/ParentsViewCases": "View Cases",
    "/external/OngoingCases": "View Case Logs",
    "/cases/AcceptOrRejectCases": "Accept Or Reject Assigned Cases",
    "/parent/viewChildProfileList": "Requested Child list",
    "/parent/viewProfile/overview": "Child Profile",
    "/external/StaffChat": "Forum",
    "/external/EditDeleteCaseLog": "Case Log Slider",
    "/external/EditCaseLog": "Edit Case Log",

    // Add more path-title mappings as needed
  };
  // Check if the path exists in the mapping, and if so, set the pageTitle accordingly
  if (path in pathToTitleMap) {
    pageTitle = pathToTitleMap[path];
  }

  return userInfo &&
    userInfo &&
    (userInfo.roleName === "parent" || userInfo.roleName === "socialWorker") ? (
    <>
      <Header />
      <ExternalSidebar />
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

export default ExternalPartyApp;
