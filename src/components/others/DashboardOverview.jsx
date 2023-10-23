import React from "react";
import { Button, Col, Form, Row, Table, Card } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";
import "../../assets/css/dashbord/dashboard.css";
import { useGetOngoingCaseQuery } from "../../slices/caseApiSlice";

const DashboardOverview = () => {
  const { data, isError, isSuccess, isLoading } = useGetOngoingCaseQuery();

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

                <div className="CardNumber">56</div>
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

                <div className="CardNumber">12</div>
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
                    Ongoing Adoptions
                  </Col>
                </Row>

                <div className="CardNumber">56</div>
                <div className="CardItalic">Registered child profiles</div>
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

                <div className="CardNumber">22</div>
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
                  {isSuccess && data.cases ? (
                    data.cases.map((data) => (
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
