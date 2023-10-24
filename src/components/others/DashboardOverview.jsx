import { Col, Row, Table, Card } from "react-bootstrap";
import { MyCard, MyCardHeader } from "../MyCard";
import "../../index.css";
import "../../assets/css/dashbord/dashboard.css";
import {
  useGetPendingCaseQuery,
  useGetOngoingCaseQuery,
  useGetCasesForOrphanageQuery,
} from "../../slices/caseApiSlice";
import {
  useGetStaffCountForOrphanageQuery,
  useGetProfileCountForOrphanageQuery,
  useGetParentCountForOrphanageQuery,
} from "../../slices/profileApiSlice";

const DashboardOverview = () => {
  const pendingRes = useGetPendingCaseQuery();
  const ongoingRes = useGetOngoingCaseQuery();
  const profileCount = useGetProfileCountForOrphanageQuery();
  const staffCount = useGetStaffCountForOrphanageQuery();
  const parentCount = useGetParentCountForOrphanageQuery();
  const caseCount = useGetCasesForOrphanageQuery();
  if (profileCount.isSuccess) {
    console.log(profileCount.data);
  }
  return (
    <div className="responsive">
      <div className="cards">
        <div className="background">
          <h1 className="name-headers">Overview</h1>
          <Row
            className="profile"
            style={{ paddingTop: "30px", paddingLeft: "50px" }}
          >
            <Col md={3} sm={6} xs={12} style={{ marginBottom: "10px" }}>
              <Card className="shadow">
                <Row className="CardRow">
                  <Col className="colDec text-end">
                    <i
                      className="fas fa-user-circle"
                      style={{ fontSize: "30px", marginRight: "10px" }}
                    ></i>
                    Child profiles
                  </Col>
                </Row>

                <div className="CardNumber">
                  {profileCount.isLoading
                    ? "Loading"
                    : profileCount.isSuccess
                    ? profileCount.data.count
                    : "Error"}
                </div>
                <div className="CardItalic">Registered child profiles</div>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} style={{ marginBottom: "10px" }}>
              <Card className="shadow">
                <Row className="CardRow">
                  <Col className="colDec text-end">
                    <i
                      className="fas fa-globe"
                      style={{ fontSize: "30px", marginRight: "10px" }}
                    ></i>
                    Working Staff
                  </Col>
                </Row>

                <div className="CardNumber">
                  {staffCount.isLoading
                    ? "Loading"
                    : staffCount.isSuccess
                    ? staffCount.data.count
                    : "Error"}
                </div>
                <div className="CardItalic">Registered staff profiles</div>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} style={{ marginBottom: "10px" }}>
              <Card className="shadow">
                <Row className="CardRow">
                  <Col className="colDec text-end">
                    <i
                      className="fa fa-heart"
                      style={{ fontSize: "30px", marginRight: "10px" }}
                    ></i>
                    Parent Involves
                  </Col>
                </Row>

                <div className="CardNumber">
                  {parentCount.isLoading
                    ? "Loading"
                    : parentCount.isSuccess
                    ? parentCount.data.count
                    : "Error"}
                </div>
                <div className="CardItalic">Adoption and Foster care</div>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} style={{ marginBottom: "10px" }}>
              <Card className="shadow">
                <Row className="CardRow">
                  <Col className="colDec text-end">
                    <i
                      className="fas fa-university"
                      style={{ fontSize: "30px", marginRight: "10px" }}
                    ></i>
                    Case Management
                  </Col>
                </Row>

                <div className="CardNumber">
                  {caseCount.isLoading
                    ? "Loading"
                    : caseCount.isSuccess
                    ? caseCount.data.count
                    : "Error"}
                </div>
                <div className="CardItalic">Registered child profiles</div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <div className="responsive">
        <Row style={{ marginBottom: "10px" }}>
          <Col sm={12} md={6} style={{ marginBottom: "10px" }}>
            <MyCard>
              <MyCardHeader>Pending Approvals</MyCardHeader>
              <Table responsive bordered style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Case Name</th>
                    <th>Publish Date</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingRes.isSuccess && pendingRes.data.cases ? (
                    pendingRes.data.cases.map((data) => (
                      <tr>
                        <td>{data.Id}</td>
                        <td>{data.CaseName}</td>
                        <td>{data.CreatedAt}</td>
                      </tr>
                    ))
                  ) : (
                    <div>Loading</div>
                  )}
                </tbody>
              </Table>
            </MyCard>
          </Col>

          <Col sm={12} md={6}>
            <MyCard>
              <MyCardHeader>Ongoing Cases</MyCardHeader>
              <Table responsive bordered style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Case Name</th>
                    <th>State Date</th>
                  </tr>
                </thead>
                <tbody>
                  {ongoingRes.isSuccess && ongoingRes.data.cases ? (
                    ongoingRes.data.cases.map((data) => (
                      <tr>
                        <td>{data.Id}</td>
                        <td>{data.CaseName}</td>
                        <td>{data.CreatedAt.substring(0, 10)}</td>
                      </tr>
                    ))
                  ) : (
                    <div>Loading</div>
                  )}
                </tbody>
              </Table>
            </MyCard>
          </Col>
        </Row>

        <Row style={{ marginBottom: "10px" }}>
          <Col sm={12} md={6} style={{ marginBottom: "10px" }}>
            <MyCard>
              <MyCardHeader>Funds Received</MyCardHeader>
              <Table responsive bordered style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Case Description</th>
                    <th>State Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>234</td>
                    <td>Adoption case-3445- child Id 22332</td>
                    <td>2023-12-12</td>
                  </tr>
                  <tr>
                    <td>234</td>
                    <td>Adoption case-3445- child Id 22332</td>
                    <td>2023-12-12</td>
                  </tr>
                  <tr>
                    <td>234</td>
                    <td>Adoption case-3445- child Id 22332</td>
                    <td>2023-12-12</td>
                  </tr>
                  <tr>
                    <td>234</td>
                    <td>Adoption case-3445- child Id 22332</td>
                    <td>2023-12-12</td>
                  </tr>
                </tbody>
              </Table>
            </MyCard>
          </Col>

          <Col sm={12} md={6}>
            <MyCard>
              <MyCardHeader>Adoption Requests</MyCardHeader>
              <Table responsive bordered style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Case Description</th>
                    <th>State Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>234</td>
                    <td>Adoption case-3445- child Id 22332</td>
                    <td>2023-12-12</td>
                  </tr>
                  <tr>
                    <td>234</td>
                    <td>Adoption case-3445- child Id 22332</td>
                    <td>2023-12-12</td>
                  </tr>
                  <tr>
                    <td>234</td>
                    <td>Adoption case-3445- child Id 22332</td>
                    <td>2023-12-12</td>
                  </tr>
                  <tr>
                    <td>234</td>
                    <td>Adoption case-3445- child Id 22332</td>
                    <td>2023-12-12</td>
                  </tr>
                </tbody>
              </Table>
            </MyCard>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default DashboardOverview;
