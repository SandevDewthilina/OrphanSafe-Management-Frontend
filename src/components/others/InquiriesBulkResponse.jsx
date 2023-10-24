import "../../index.css";
import "../../assets/css/staff/dataTable.css";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import React, { useEffect, useRef } from "react";
import $ from "jquery"; // Import jQuery
import "datatables.net-dt/css/jquery.dataTables.css"; // Import DataTables CSS
import "datatables.net"; // Import DataTables JavaScript
import { LinkContainer } from "react-router-bootstrap";


const InquiriesBulkResponse = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // Initialize DataTable
    $(tableRef.current).DataTable();
  }, []);
  return (
    <Row>
      <Col sm={12}>
        <MyCard>
          <MyCardHeader>Bulk responses for inquiries</MyCardHeader>
          <MyCardBody>
            <div>
              <Table
                responsive
                ref={tableRef}
                id="example"
                className="row-border"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Select</th>
                    <th>Inquiry ID</th>
                    <th >Date</th>
                    <th>Inquiry Subject</th>
                    <th>Inquiry Details</th>
                    <th>Sender Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td style={{ textAlign: 'center' }} >
                    <Form.Check aria-label="option 1" style={{ transform: "scale(1.5)" }} />
                    </td>
                    <td>001</td>
                    <td>2023/09/01</td>
                    <td>Support Request</td>
                    <td>I'm having trouble with my account.</td>
                    {/* <td><a href="#" className="blue-button"style={{ fontSize: "14px"}}>View</a></td> */}
                    {/* <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      <LinkContainer to="/admin/viewStaffProfile/overview">
                        <a href="#">bob Niles</a>
                      </LinkContainer>
                    </td>  */}
                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                        bob Niles
                    </td> 
                  </tr>
                 
                 
                 
                </tbody>
              </Table>
              
            </div>
            <div className="mt-1"></div>
            <div className="d-flex justify-content-end mt-4">
            <LinkContainer to="/admin/ResponseBulk">
                        <button className="my-btn-danger">Response</button>
                      </LinkContainer>
            
            </div>
          </MyCardBody>
        </MyCard>
      </Col>
    </Row>
  );
};
export default InquiriesBulkResponse;
