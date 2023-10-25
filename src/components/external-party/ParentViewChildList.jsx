import "../../index.css";
import "../../assets/css/staff/dataTable.css";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import React, { useEffect, useRef } from "react";
import $ from "jquery"; // Import jQuery
import "datatables.net-dt/css/jquery.dataTables.css"; // Import DataTables CSS
import "datatables.net"; // Import DataTables JavaScript
import { LinkContainer } from "react-router-bootstrap";
import { useGetChildProfileForParentListQuery } from "../../slices/profileApiSlice";
import { Link } from "react-router-dom";

const ParentViewChildList = () => {
  const tableRef = useRef(null);

  // const [deleteChildProfile] = useDeleteChildProfileMutation();

  // const handleDelete = async (childId) => {
  //   const resp = await deleteChildProfile({ id: childId });
  //   if (isError) toast.error(resp.data.message);
  //   if (isSuccess) refetch();
  // };

  const { data, isError, isSuccess, isLoading } =
    useGetChildProfileForParentListQuery();

  useEffect(() => {
    // Initialize DataTable
    $(tableRef.current).DataTable();
  }, [data]);

  return (
    <Row>
      <Col sm={12}>
        <MyCard>
          <MyCardHeader>Child Details</MyCardHeader>
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
                      <th>Full Name</th>
                      <th>Date Of Birth</th>
                      <th>Gender</th>
                      <th>Date of Admission</th>
                      <th>Assigned Orphanage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.profile.map((child) => (
                      <tr>
                        {child.State === "ACCEPT" ? (
                          <td>
                            <Link
                              to={`/parent/viewChildProfileList/overview?childId=${child.Id}`}
                            >
                              <a href="#">{child.FullName}</a>
                            </Link>
                          </td>
                        ) : (
                          <td>{child.FullName}</td>
                        )}
                        <td>{child.DOB.substring(0, 10)}</td>
                        <td>{child.Gender}</td>
                        <td>{child.DateOfAdmission.substring(0, 10)}</td>
                        <td>{child.OrphanageName}</td>
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
export default ParentViewChildList;
