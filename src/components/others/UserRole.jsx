import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";
import "../../assets/css/dashbord/dashboard.css";
import {
  useGetRolesListQuery,
  useDeleteRoleMutation,
} from "../../slices/userApiSlice";
import { toast } from "react-toastify";

const UserRoles = () => {
  const { data, isError, isSuccess, isLoading, refetch } =
    useGetRolesListQuery();
  const [deleteRole] = useDeleteRoleMutation();

  const handleDelete = async (roleId) => {
    const resp = await deleteRole({ id: roleId });
    if (isError) toast.error(resp.data.message);
    if (isSuccess) refetch();
  };

  return (
    <div className="responsive">
      <Row style={{ marginBottom: "10px" }}>
        <Col sm={12}>
          <MyCard>
            <MyCardHeader>User Roles</MyCardHeader>
            <MyCardBody>
              {isError && (
                <Col className="text-center">
                  <strong>Unexpected Error occured Sorry! :(</strong>
                </Col>
              )}
              {isLoading && <Col className="text-center">Loading Data!</Col>}
              {isSuccess && (
                <div className="d-flex flex-wrap">
                  {data.map((role) => (
                    <div className="role-container" key={role.Id}>
                      <div className="role-container-left d-flex flex-column justify-content-between mr-3">
                        <div>
                          <div style={{ fontSize: "14px", fontWeight: "900" }}>
                            Role ID: {role.Id}
                          </div>
                          <div
                            style={{
                              fontSize: "12px",
                              fontWeight: "500",
                              color: "#232F3E",
                            }}
                          >
                            Role Name: {role.Name}
                          </div>
                        </div>
                        <div
                          className="mt-3"
                          style={{
                            fontSize: "10px",
                            fontWeight: "500",
                            color: "#232F3E",
                          }}
                        >
                          Click here to view assigned users
                        </div>
                      </div>
                      <div className="role-container-right d-flex justify-content-end align-items-center">
                        
                        <button
                          className="my-btn-danger"
                          onClick={() => handleDelete(role.Id)}
                        >
                          delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>
    </div>
  );
};
export default UserRoles;
