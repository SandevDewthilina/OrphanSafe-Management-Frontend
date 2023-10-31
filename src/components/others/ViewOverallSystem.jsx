import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";
import "../../assets/css/dashbord/dashboard.css";

const ViewOverallSystem = () => {
  return (
    <div className="responsive">
      <Row style={{ marginBottom: "10px" }}>
        <Col sm={6}>
          <MyCard>
            <MyCardHeader>Overall System Reports </MyCardHeader>
            <MyCardBody>
              <div className="d-flex flex-wrap">
                <div className="role-container">
                  <div className="role-container-left d-flex flex-column justify-content-between mr-3">
                    <div>
                      <div style={{ fontsize: "15px", fontWeight: "900" }}>
                        All User Report
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#232F3E",
                        }}
                      >
                        An orphanage may produce an annual report that combines
                        financial, operational, and impact data to provide a
                        comprehensive overview of its activities
                      </div>
                    </div>
                  </div>
                  <div className="role-container-right d-flex justify-content-end align-items-center">
                    <button className="my-btn-primary">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>
    </div>
  );
};
export default ViewOverallSystem;
