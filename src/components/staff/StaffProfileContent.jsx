import React from "react";
import { Form, Table, Row, Col } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../../components/MyCard";
import { useViewStaffProfilesQuery} from "../../slices/profileApiSlice";
//import "../../assets/css/profileIntro.css"

const StaffProfileContent = () => {
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("staffId");
  const {data, isLoading,isError,isSuccess}=
  useViewStaffProfilesQuery(paramValue);

  return  isSuccess && (
    <div>
      <div className="card">
      <div className="background">
        <Row className="profile">
          <Col xs={12} sm={12} md={4} lg={6} xl={4}>
            <div className="profileImage"></div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={6} xl={8}>
            <h1 className="name-header">{data.staffProfile.UserName}</h1>
            <p className="name-sub">Orphanage Name:</p>
            <p className="name-sub">{data.staffProfile.OrphanageName}</p>
            <p className="name-sub">{data.staffProfile.Gender}</p>
          </Col>
        </Row>
      </div>
    </div>
      <Row>
        <Col sm={0} md={1} lg={1}></Col>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>Employee Information</MyCardHeader>
            <MyCardBody>
              {isSuccess  && (<Form>
                <Table responsive bordered style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td className="td">Name with initials</td>
                      <td className="td">{data.staffProfile.UserName}</td>
                    </tr>
                    <tr>
                      <td className="td">Date of Birth</td>
                      <td className="td">{data.staffProfile.DOB}</td>
                    </tr>
                    <tr>
                      <td className="td">Gender</td>
                      <td className="td">{data.staffProfile.Gender}</td>
                    </tr>
                    <tr>
                      <td className="td">NIC Number</td>
                      <td className="td">{data.staffProfile.NIC}</td>
                    </tr>
                    <tr>
                      <td className="td">Address</td>
                      <td className="td">
                      {data.staffProfile.Address}
                      </td>
                    </tr>

                    <tr>
                      <td className="td">Phone number</td>
                      <td className="td">{data.staffProfile.PhoneNumber}</td>
                    </tr>
                    <tr>
                      <td className="td">Email</td>
                      <td className="td">{data.staffProfile.Email}</td>
                    </tr>
                    <tr>
                      <td className="td">Assigned orphanage</td>
                      <td className="td">{data.staffProfile.OrphanageName}</td>
                    </tr>
                  </tbody>
                </Table>
              </Form>)}
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>
    </div>
  );
};

export default StaffProfileContent;
