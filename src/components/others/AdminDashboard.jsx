import { Col, Table,Row, Card } from "react-bootstrap";
import { MyCard, MyCardHeader } from "../MyCard";
import "../../index.css";
import "../../assets/css/dashbord/dashboard.css";

const AdminDashboard = () => {
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

                <div className="CardNumber">2034</div>
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

                <div className="CardNumber">450</div>
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

                <div className="CardNumber">106</div>
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

                <div className="CardNumber">246</div>
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
              <MyCardHeader>Pending Staff Approvals</MyCardHeader>
              <Table responsive bordered style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Approval Description</th>
                    <th>Publish Date</th>
                    <th>State</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>234</td>
                    <td>Adoption case-3445- child Id 22332</td>
                    <td>2023-12-12</td>
                    <td>
                      <i>Pending</i>
                    </td>
                  </tr>
                  <tr>
                    <td>234</td>
                    <td>Adoption case-3445- child Id 22332</td>
                    <td>2023-12-12</td>
                    <td>
                      <i>Pending</i>
                    </td>
                  </tr>
                  <tr>
                    <td>234</td>
                    <td>Adoption case-3445- child Id 22332</td>
                    <td>2023-12-12</td>
                    <td>
                      <i>Pending</i>
                    </td>
                  </tr>
                  <tr>
                    <td>234</td>
                    <td>Adoption case-3445- child Id 22332</td>
                    <td>2023-12-12</td>
                    <td>
                      <i>Pending</i>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </MyCard>
          </Col>

          <Col sm={12} md={6}>
            <MyCard>
              <MyCardHeader>Social Worker Approvals</MyCardHeader>
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

        <Row style={{ marginBottom: "10px" }}>
          <Col sm={12} md={6} style={{ marginBottom: "10px" }}>
            <MyCard>
              <MyCardHeader>Parents Requests</MyCardHeader>
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
              <MyCardHeader>Inquiries</MyCardHeader>
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
export default AdminDashboard;