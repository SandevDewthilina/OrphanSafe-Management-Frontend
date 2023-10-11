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
  useGetStaffProfileListQuery,
  useDeleteStaffProfileMutation,
} from "../../slices/profileApiSlice";
import { toast } from "react-toastify";

const ViewStaff = () => {
  const tableRef = useRef(null);
  const { data, isError, isSuccess, isLoading, refetch } =
    useGetStaffProfileListQuery();
  const [deleteRole] = useDeleteStaffProfileMutation();

  const handleDelete = async (roleId) => {
    const resp = await deleteRole({ userIdToDelete: roleId });
    if (isError) toast.error(resp.data.message);
    if (isSuccess) refetch();
  };

  useEffect(() => {
    // Initialize DataTable
    $(tableRef.current).DataTable();
  }, [data]);

  return (
    <Row>
      <Col sm={12}>
        <MyCard>
          <MyCardHeader>
            Staff Details
          </MyCardHeader>
          <MyCardBody>
            {isError && (
              <Col className="text-center">
                <strong>Unexpected Error occurred Sorry! :(</strong>
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
                      <th>Name</th>
                      <th>Email</th>
                      <th>Contact Number</th>
                      <th>Gender</th>
                      <th>Role</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.staffProfiles.map((data) => (
                      <tr>
                        <td>
                          <Link
                            to={`/monitoring/viewStaff/overview?staffId=${data.UserId}`}
                          >
                            <a href="#">{data.UserName}</a>
                          </Link>
                        </td>
                        <td>{data.Email}</td>
                        <td>{data.PhoneNumber}</td>
                        <td>{data.Gender}</td>
                        <td>{data.RoleName}</td>
                        <td>
                          <Link
                            className="blue-button"
                            to={`/edit/editStaffProfile?staffId=${data.UserId}`}
                          >
                            Edit
                          </Link>
                          <Link
                            class="red-button"
                            onClick={() => handleDelete(data.UserId)}
                          >
                            Delete
                          </Link>
                          {/* <i className="fas fa-edit mr-3 text-primary"></i> */}
                          {/* <i className="fas fa-trash text-danger"></i> */}
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
export default ViewStaff;
