import "../../index.css";
import "../../assets/css/staff/dataTable.css";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import { useEffect, useRef } from "react";
import $ from "jquery"; // Import jQuery
import "datatables.net-dt/css/jquery.dataTables.css"; // Import DataTables CSS
import "datatables.net"; // Import DataTables JavaScript
import { LinkContainer } from "react-router-bootstrap";
import {
  useGetApprovalListQuery,
  useApproveMutation,
  useRejectMutation,
} from "../../slices/adminApiSlice";
import { toast } from "react-toastify";

const OverallApproval = () => {
  const tableRef = useRef(null);

  const { data, isError, isLoading, isSuccess, refetch } =
    useGetApprovalListQuery();
  console.log(data);
  const [approveReq, approveStat] = useApproveMutation();
  const [rejectReq, rejectStat] = useRejectMutation();

  const approve = async (approvalId) => {
    const resp = await approveReq({
      approvalId: approvalId,
    });
    if (approveStat.isError) {
      toast.error("approval Error");
    }
    if (approveStat.isSuccess) {
      toast.success("approval success");
      await refetch();
    }
  };

  const reject = async (approvalId) => {
    const resp = await rejectReq({
      approvalId: approvalId,
    });
    if (rejectStat.isError) {
      toast.error("approval Error");
    }
    if (rejectStat.isSuccess) {
      toast.success("approval success");
      await refetch();
    }
  };

  useEffect(() => {
    // Initialize DataTable
    if (data) $(tableRef.current).DataTable();
  }, [data]);
  return (
    <div>
      <Row style={{ marginBottom: "20px" }}>
        <Col sm={12}>
          <MyCard>
            <MyCardHeader>Parents Request Case Information</MyCardHeader>
            <MyCardBody>
              {isError && (
                <Col className="text-center">
                  <strong>Unexpected Error occured Sorry! :(</strong>
                </Col>
              )}
              {isLoading && <Col className="text-center">Loading Data!</Col>}
              {isSuccess && (
                <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                  <Table
                    responsive
                    //ref={tableRef}
                    id="example"
                    className="row-border"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Parent ID</th>
                        <th>Name</th>
                        <th>Child ID</th>
                        <th>Child Name</th>
                        <th>Reason for request</th>
                        <th>Approve</th>
                        <th>reject</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.parentCaseRequests.map((row) => (
                        <tr key={row.RequestId}>
                          <td>{row.approvalid}</td>
                          <td>
                            <LinkContainer to="/admin/viewStaffProfile/overview">
                              <a href="#">{row.ParentName}</a>
                            </LinkContainer>
                          </td>
                          <td>data.ChildId</td>
                          <td>
                            <LinkContainer to="/admin/viewStaffProfile/overview">
                              <a href="#">{row.ChildName}</a>
                            </LinkContainer>
                          </td>
                          <td>
                            <LinkContainer to="/cases/viewPendingCases">
                              <a href="#">{row.Remark}</a>
                            </LinkContainer>
                          </td>
                          <td>
                            <button
                              className="my-btn mr-2"
                              onClick={(e) => approve(row.approvalid)}
                            >
                              Approve
                            </button>
                          </td>
                          <td>
                            <button
                              className="my-btn-danger"
                              onClick={(e) => reject(row.approvalid)}
                            >
                              Reject
                            </button>
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
      <Row style={{ marginBottom: "20px" }}>
        <Col sm={12}>
          <MyCard>
            <MyCardHeader>Parent Request child profile</MyCardHeader>
            <MyCardBody>
              {isError && (
                <Col className="text-center">
                  <strong>Unexpected Error occured Sorry! :(</strong>
                </Col>
              )}
              {isLoading && <Col className="text-center">Loading Data!</Col>}
              {isSuccess && (
                <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                  <Table
                    responsive
                    //ref={tableRef}
                    id="example"
                    className="row-border"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Parent ID</th>
                        <th>Name</th>
                        <th>Child ID</th>
                        <th>Child Name</th>
                        <th>Reason for request</th>
                        <th>Approve</th>
                        <th>reject</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.socialWorkerProfileRequests.map((row) => (
                        <tr key={row.approvalid}>
                          <td>{row.approvalid}</td>
                          <td>
                            <LinkContainer to="/admin/viewStaffProfile/overview">
                              <a href="#">{row.parentname}</a>
                            </LinkContainer>
                          </td>
                          <td>{row.childid}</td>
                          <td>
                            <LinkContainer to="/admin/viewStaffProfile/overview">
                              <a href="#">{row.childname}</a>
                            </LinkContainer>
                          </td>
                          <td>
                            <LinkContainer to="/cases/viewPendingCases">
                              <a href="#">{row.Remark}</a>
                            </LinkContainer>
                          </td>
                          <td>
                            <button
                              className="my-btn mr-2"
                              onClick={(e) => approve(row.approvalid)}
                            >
                              Approve
                            </button>
                          </td>
                          <td>
                            <button
                              className="my-btn-danger"
                              onClick={(e) => reject(row.approvalid)}
                            >
                              Reject
                            </button>
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
      <Row style={{ marginBottom: "20px" }}>
        <Col sm={12}>
          <MyCard>
            <MyCardHeader>Receive Funds approval</MyCardHeader>
            <MyCardBody>
              {isError && (
                <Col className="text-center">
                  <strong>Unexpected Error occured Sorry! :(</strong>
                </Col>
              )}
              {isLoading && <Col className="text-center">Loading Data!</Col>}
              {isSuccess && (
                <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                  <Table
                    responsive
                    //ref={tableRef}
                    id="example"
                    className="row-border"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Receipt number</th>
                        <th>Donator's name</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Approve</th>
                        <th>reject</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.fundingApprovals.map((row) => (
                        <tr key={row.approvalid}>
                          <td>{row.approvalid}</td>
                          <td>{row.Name}</td>
                          <td>{row.TransactionDateTime}</td>
                          <td>{row.TransactionAmount}</td>
                          <td>
                            <LinkContainer to="/cases/viewPendingCases">
                              <a href="#">{row.Description}</a>
                            </LinkContainer>
                          </td>
                          <td>
                            <button
                              className="my-btn mr-2"
                              onClick={(e) => approve(row.approvalid)}
                            >
                              Approve
                            </button>
                          </td>
                          <td>
                            <button
                              className="my-btn-danger"
                              onClick={(e) => reject(row.approvalid)}
                            >
                              Reject
                            </button>
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
    </div>
  );
};
export default OverallApproval;
