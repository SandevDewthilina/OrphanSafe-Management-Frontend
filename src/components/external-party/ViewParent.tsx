import "../../index.css";
import "../../assets/css/staff/dataTable.css";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import React, { useEffect, useRef } from "react";
import $ from "jquery"; // Import jQuery
import "datatables.net-dt/css/jquery.dataTables.css"; // Import DataTables CSS
import "datatables.net"; // Import DataTables JavaScript
import { useGetParentProfileListQuery,useDeleteParentProfileMutation } from "../../slices/profileApiSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ViewParent = () => {
  const tableRef = useRef(null);

  const { data, isError, isSuccess, isLoading,refetch } = useGetParentProfileListQuery();
  const [deleteRole] = useDeleteParentProfileMutation();

  const handleDelete = async (roleId) => {

    if (confirm('Are you sure?')) {
      const resp = await deleteRole({ userIdToDelete: roleId });
    if (isError) toast.error(resp.data.message);
    if (isSuccess) refetch();
      } else {
        //action cancelled
        console.log('Cancel is clicked.');
      }
    
  };


  useEffect(() => {
    $(tableRef.current).DataTable();
  }, [data]);
  return (
    <Row>
      <Col sm={12}>
        <MyCard>
          <MyCardHeader>Parent details</MyCardHeader>
          <MyCardBody>
          {isError && <Col className="text-center"><strong>Unexpected Error occurred Sorry! :(</strong></Col>}
            {isLoading && <Col className="text-center">Loading Data!</Col>}
            {isSuccess && 
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
                    <th>Name Of Father</th>
                    <th>Name Of Mother</th>
                    <th>Email</th>
                    <th>Father's Mobile Number</th>
                    <th>Mother's Mobile Number</th>
                    <th>Address</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                {data.parentsProfiles.map((parent) => (
                    <tr>
                      <td>
                          <Link  to={`/monitoring/viewParent/overview?parentId=${parent.UserId}`}>
                            <a href="#">{parent.NameOfFather}</a>
                          </Link>
                        </td>
                      <td>{parent.NameOfMother}</td>
                      <td>{parent.Email}</td>
                      <td>{parent.MobileOfFather}</td>
                      <td>{parent.MobileOfMother}</td>
                      <td>{parent.Address}</td>
                      <td>
                      <Link className="blue-button" to={`/edit/editParentProfile?parentId=${parent.UserId}`}>
                          Edit
                        </Link>
                        <Link className="red-button" onClick={() => handleDelete(parent.UserId)}>
                          Delete
                        </Link>
                      {/* <i className="fas fa-edit mr-3 text-primary"></i> */}
                      {/* <i className="fas fa-trash text-danger"></i> */}
                    </td>
                    </tr>
                  ))} 
                </tbody>

              </Table>
            </div>}
          </MyCardBody>
        </MyCard>
      </Col>
    </Row>
  );
};
export default ViewParent;
