import React from "react";
import { Form, Table, Row, Col } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../../components/MyCard";
import { useViewParentProfilesQuery} from "../../slices/profileApiSlice";
//import "../../assets/css/profileIntro.css"

const ParentProfileContent = () => {

  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("parentId");
  const {data, isLoading,isError,isSuccess}=
  useViewParentProfilesQuery(paramValue);


  return isSuccess && (
    <div>
      <div className="card">
      <div className="background">
        <Row className="profile">
          <Col xs={12} sm={12} md={4} lg={6} xl={4}>
            <div className="profileImage"></div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={6} xl={8}>
            <h1 className="name-header">{data.parentProfile.NameOfFather}</h1>
            <p className="name-sub">{data.parentProfile.NameOfMother}</p>
            <p className="name-sub">{data.parentProfile.AdoptionPreference}</p>
          </Col>
        </Row>
      </div>
    </div>


      <Row>
        <Col sm={0} md={1} lg={1}></Col>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>Father's Information</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table responsive bordered style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td className="td">Name </td>
                      <td className="td">{data.parentProfile.NameOfFather}</td>
                    </tr>
                    <tr>
                      <td className="td">Date of birth</td>
                      <td className="td">{data.parentProfile.DOBOfFather}</td>
                    </tr>
                    <tr>
                      <td className="td">NIC number of father</td>
                      <td className="td">{data.parentProfile.NICOfFather}</td>
                    </tr>
                    <tr>
                      <td className="td">Mobile number</td>
                      <td className="td">{data.parentProfile.MobileOfFather}</td>
                    </tr>
                    <tr>
                      <td className="td">Occupation</td>
                      <td className="td">{data.parentProfile.OccupationOfFather}</td>
                    </tr>
                    
                  </tbody>
                </Table>
              </Form>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>
      <Row>
        <Col sm={0} md={1} lg={1}></Col>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>Mother's Information</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table responsive bordered style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td className="td">Name </td>
                      <td className="td">{data.parentProfile.NameOfMother}</td>
                    </tr>
                    <tr>
                      <td className="td">Date of birth</td>
                      <td className="td">{data.parentProfile.setDOBOfMother}</td>
                    </tr>
                    <tr>
                      <td className="td">NIC number of father</td>
                      <td className="td">{data.parentProfile.NICOfMother}</td>
                    </tr>
                    <tr>
                      <td className="td">Mobile number</td>
                      <td className="td">{data.parentProfile.MobileOfMother}</td>
                    </tr>
                    <tr>
                      <td className="td">Occupation</td>
                      <td className="td">{data.parentProfile.OccupationOfMother}</td>
                    </tr>
                    
                  </tbody>
                </Table>
              </Form>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>
      <Row>
        <Col sm={0} md={1} lg={1}></Col>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>Other Information</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table responsive bordered style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td className="td">Email</td>
                      <td className="td">{data.parentProfile.Email}</td>
                    </tr>
                    <tr>
                      <td className="td">Address</td>
                      <td className="td">{data.parentProfile.Address}</td>
                    </tr>
                    {/* <tr>
                      <td className="td">Birthday certificate</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">yearly paysheet</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          View
                        </a>
                      </td>
                    </tr> */}
                  </tbody>
                </Table>
              </Form>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>

      <Row>
        <Col sm={0} md={1} lg={1}></Col>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>Adoption/Foster Care Preferences</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table responsive bordered style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td className="td">Type of Placement Preferred</td>
                      <td className="td">{data.parentProfile.AdoptionPreference}</td>
                    </tr>
                    <tr>
                      <td className="td">Age Range of Child Preferred</td>
                      <td className="td">{data.parentProfile.AgePreference}</td>
                    </tr>
                    <tr>
                      <td className="td">Gender Preference</td>
                      <td className="td">{data.parentProfile.GenderPreference}</td>
                    </tr>
                    <tr>
                      <td className="td">Nationality Preference</td>
                      <td className="td">{data.parentProfile.NationalityPreference}</td>
                    </tr>
                    <tr>
                      <td className="td">Language Preference</td>
                      <td className="td">{data.parentProfile.LanguagePreference}</td>
                    </tr>
                    
                  </tbody>
                </Table>
              </Form>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>
    </div>
  );
};

export default ParentProfileContent;
