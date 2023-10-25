import { Col, Table, Row, Card } from "react-bootstrap";
import { MyCard, MyCardHeader } from "../MyCard";
import "../../index.css";
import "../../assets/css/dashbord/dashboard.css";
import { useAdminDashboardQuery } from "../../slices/adminApiSlice";

const AdminDashboard = () => {
  const dashboardRes = useAdminDashboardQuery();
  if (dashboardRes.isLoading) {
    return <div>Loading</div>;
  }
  if (dashboardRes.isError) {
    return <div>Error :( Something went wrong</div>;
  }
  if (dashboardRes.isSuccess) {
    const data = dashboardRes.data;
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

                  <div className="CardNumber">{data.childProfiles}</div>
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
                      Working staff
                    </Col>
                  </Row>

                  <div className="CardNumber">{data.workingStaff}</div>
                  <div className="CardItalic">Registered staff profiles</div>
                </Card>
              </Col>
              <Col md={3} sm={6} xs={12} style={{ marginBottom: "10px" }}>
                <Card className="shadow">
                  <Row className="CardRow">
                    <Col className="colDec text-end">
                      <i
                        className="fab fa-xbox"
                        style={{ fontSize: "30px", marginRight: "10px" }}
                      ></i>
                      Social Workers
                    </Col>
                  </Row>

                  <div className="CardNumber">{data.socialWorkers}</div>
                  <div className="CardItalic">
                    Registered social workers profiles
                  </div>
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
                      Registered Orphanages
                    </Col>
                  </Row>

                  <div className="CardNumber">{data.orphanages}</div>
                  <div className="CardItalic">Registered orphanages</div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        <div className="responsive">
          <Row style={{ marginBottom: "10px" }}>
            <Col sm={12} md={6} style={{ marginBottom: "10px" }}>
              <MyCard>
                <MyCardHeader>Parents Requests</MyCardHeader>
                <Table responsive bordered style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th>Mother</th>
                      <th>Father</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.parents.map((data) => (
                      <tr>
                        <td>{data.NameOfMother}</td>
                        <td>{data.NameOfFather}</td>
                        <td>{data.Description}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </MyCard>
            </Col>

            <Col sm={12} md={6}>
              <MyCard>
                <MyCardHeader>Inquiries</MyCardHeader>
                <Table responsive bordered style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Subject</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.inquiries.map((data) => (
                      <tr>
                        <td>{data.Id}</td>
                        <td>{data.Subject}</td>
                        <td>{data.Description}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </MyCard>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
};
export default AdminDashboard;
