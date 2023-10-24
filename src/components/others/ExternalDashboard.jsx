import { Col, Row, Card } from "react-bootstrap";
import "../../index.css";
import "../../assets/css/dashbord/dashboard.css";

import {
  useGetExternalDashboardCaseAssignQuery,
  useGetExternalDashboardChildProfilesQuery,
  useGetExternalDashboardPendingCaseQuery,
} from "../../slices/caseApiSlice";

const ExternalDashboard = () => {
  const EDcaseAssignResponse = useGetExternalDashboardCaseAssignQuery();
  const EDchildProfileResponse = useGetExternalDashboardChildProfilesQuery();
  const EDpendingCaseResponse = useGetExternalDashboardPendingCaseQuery();

  return (
    <div className="responsive">
      <div className="cards">
        <div className="background">
          <h1 className="name-headers">Welcome to OrphanSafe</h1>
          <Row
            className="profile"
            style={{ paddingTop: "30px", paddingLeft: "50px" }}
          >
            <Col md={4} sm={12} style={{ marginBottom: "10px" }}>
              <Card className="shadow">
                <Row className="CardRow">
                  <Col className="colDec text-end">
                    <i
                      className="fas fa-user-circle"
                      style={{ fontSize: "30px", marginRight: "10px" }}
                    ></i>
                    Assigned child Profiles
                  </Col>
                </Row>
                {EDchildProfileResponse.isLoading && <div>Loading</div>}{" "}
                {EDchildProfileResponse.isSuccess && (
                  <div className="CardNumber">
                    {EDchildProfileResponse.data.count}
                  </div>
                )}
                <div className="CardItalic">Assigned child profiles</div>
              </Card>
            </Col>
            <Col md={4} sm={12} style={{ marginBottom: "10px" }}>
              <Card className="shadow">
                <Row className="CardRow">
                  <Col className="colDec text-end">
                    <i
                      className="fas fa-globe"
                      style={{ fontSize: "30px", marginRight: "10px" }}
                    ></i>
                    Pending Requests
                  </Col>
                </Row>

                <div className="CardNumber">
                  {EDpendingCaseResponse.isLoading && <div>Loading</div>}
                  {EDpendingCaseResponse.isError && <div>Error</div>}
                  {EDpendingCaseResponse.isSuccess && (
                    <div className="CardNumber">
                      {EDpendingCaseResponse.data.count}
                    </div>
                  )}
                </div>
                <div className="CardItalic">Number of pending requests</div>
              </Card>
            </Col>
            <Col md={4} sm={12} style={{ marginBottom: "10px" }}>
              <Card className="shadow">
                <Row className="CardRow">
                  <Col className="colDec text-end">
                    <i
                      className="fab fa-xbox"
                      style={{ fontSize: "30px", marginRight: "10px" }}
                    ></i>
                    Cases assigned
                  </Col>
                </Row>

                <div className="CardNumber">
                  {EDcaseAssignResponse.isLoading && <div>Loading</div>}
                  {EDcaseAssignResponse.isSuccess && (
                    <div className="CardNumber">
                      {EDcaseAssignResponse.data.count}
                    </div>
                  )}
                </div>
                <div className="CardItalic">Number of assigned cases</div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default ExternalDashboard;
