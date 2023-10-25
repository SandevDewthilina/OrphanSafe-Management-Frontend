import "../../index.css";
import "../../assets/css/staff/dataTable.css";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import React, { useEffect, useRef } from "react";
import $ from "jquery"; // Import jQuery
import "datatables.net-dt/css/jquery.dataTables.css"; // Import DataTables CSS
import "datatables.net"; // Import DataTables JavaScript
import { Link } from "react-router-dom";

import {
  useGetCaseListByUserIdQuery,
  useGetCaseListByParentIdQuery,
} from "../../slices/caseApiSlice";

import { useSelector } from "react-redux";

const OngoingCaseViewExternal = () => {
  const tableRef = useRef(null);
  const { userInfo } = useSelector((state) => state.auth);
  var data = null;
  const socialRes = useGetCaseListByUserIdQuery();
  const parentRes = useGetCaseListByParentIdQuery();

  if (userInfo.roleName === "socialWorker" && socialRes.isSuccess) {
    data = socialRes.data;
  }
  if (userInfo.roleName === "parent" && parentRes.isSuccess) {
    data = parentRes.data;
  }

  useEffect(() => {
    // Initialize DataTable
    $(tableRef.current).DataTable();
  }, [data]);
  return (
    <Row>
      <Col sm={12}>
        <MyCard>
          <MyCardHeader>View Cases</MyCardHeader>
          <MyCardBody>
            {socialRes.isError && (
              <Col className="text-center">
                <strong>Unexpected Error occured Sorry! :(</strong>
              </Col>
            )}
            {socialRes.isLoading && (
              <Col className="text-center">Loading Data!</Col>
            )}
            {socialRes.isSuccess && (
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
                      <th>Assigned By</th>
                      <th>Child Name</th>
                      <th>Last Update</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.caseList.map((data) => (
                      <tr>
                        <td>{data.CaseId}</td>
                        <td>
                          <Link
                            to={`/cases/viewCases/overview?caseId=${data.CaseId}`}
                          >
                            <a href="#">{data.CaseName}</a>
                          </Link>
                        </td>
                        <td>{data.AssignedBy}</td>
                        <td>{data.ChildName}</td>
                        <td>
                          {data.LastUpdate
                            ? data.LastUpdate.substring(0, 10)
                            : "Not stated"}
                        </td>
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

export default OngoingCaseViewExternal;
