import "../../index.css";
import "../../assets/css/staff/dataTable.css";
import { Button, Col, Form, Row, Table, Toast } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import React, { useEffect, useRef, useState } from "react";
import $ from "jquery"; // Import jQuery
import "datatables.net-dt/css/jquery.dataTables.css"; // Import DataTables CSS
import "datatables.net"; // Import DataTables JavaScript
import { Link } from "react-router-dom";
import { useGetCaseListQuery } from "../../slices/caseApiSlice";

const OngoinCaseView = () => {
  const tableRef = useRef(null);
  const { data, isError, isSuccess, isLoading } = useGetCaseListQuery();

  useEffect(
    () => {
      // Initialize DataTable
      $(tableRef.current).DataTable();
    },
    [data]
  );

  return (
    <Row>
      <Col sm={12}>
        <MyCard>
          <MyCardHeader>Staff Details</MyCardHeader>
          <MyCardBody>
            {isError && (
              <Col className="text-center">
                <strong>Unexpected Error occured Sorry! :(</strong>
              </Col>
            )}
            {isLoading && <Col className="text-center">Loading Data!</Col>}
            {isSuccess && (
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
                      <th>Case ID</th>
                      <th>Case Name</th>
                      <th>Child Name</th>
                      <th>State</th>
                      <th>Last Update</th>
                      <th>Assigned worker</th>
                      <th>Assigned By</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.caseList.map((data) => (
                      <tr>
                        <td>{data.Id}</td>
                        <td>
                          <Link
                            to={`/cases/viewOngoingCases/overview?caseId=${data.Id}`}
                          >
                            <a href="#">{data.CaseName}</a>
                          </Link>
                        </td>
                        <td>{data.ChildName}</td>
                        <td>{data.State}</td>
                        <td>
                          {data.LastUpdate ? (
                            <b>{data.LastUpdate.substring(0, 10)}</b>
                          ) : (
                            "not started"
                          )}
                        </td>
                        <td>{data.SocialWorkerName}</td>
                        <td>{data.CreatedBy}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
          </MyCardBody>
        </MyCard>
      </Col>
    </Row>
  );
};

export default OngoinCaseView;
