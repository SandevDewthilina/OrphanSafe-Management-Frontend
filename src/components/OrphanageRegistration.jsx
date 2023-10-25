import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../components/MyCard";
import { useState } from "react";
import { useRegisterOrphanageMutation } from "../slices/userApiSlice";
import { toast } from "react-toastify";

const OrphanageRegistration = () => {
  const [name, setName] = useState("");
  const [registeredDate, setRegisteredDate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [registrationId, setRegistrationId] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [founderName, setFounderName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [user_email, setUserEmail] = useState("");
  const [user_username, setUserUsername] = useState("");
  const [user_name, setUserName] = useState("");
  const [user_phoneNumber, setUserPhoneNumber] = useState("");
  const [user_address, setUserAddress] = useState("");
  const [user_nic, setUserNIC] = useState("");
  const [user_gender, setUserGender] = useState("");
  const [user_dob, setUserDOB] = useState("");
  const [landReport, setLandReport] = useState(null);
  const [housePlan, setHousePlan] = useState(null);
  const [regCert, setRegCert] = useState(null);

  const [registerOrphanage, { isLoading, isError, isSuccess }] =
    useRegisterOrphanageMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("regCert", regCert);
      formData.append("housePlan", housePlan);
      formData.append("landReport", landReport);
      formData.append("otherInfo", JSON.stringify({
        name: name,
        registeredDate: registeredDate,
        capacity: capacity,
        registrationId: registrationId,
        city: city,
        district: district,
        founderName: founderName,
        address: address,
        phoneNumber: phoneNumber,
        email: email,
        user_email: user_email,
        user_username: user_username,
        user_name: user_name,
        user_phoneNumber: user_phoneNumber,
        user_address: user_address,
        user_nic: user_nic,
        user_gender: user_gender,
        user_dob: user_dob,
      }));
      const res = await registerOrphanage(formData).unwrap();

      toast.success("Registration completed");
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  return (
    <Row>
      <Col sm={3}></Col>
      <Col sm={6} className="my-5">
        <MyCard>
          <MyCardHeader>
            Register an Orphanage on OrphanSafe platform
          </MyCardHeader>
          <MyCardBody>
            <Form onSubmit={submitHandler}>
              <Form.Label className="form-subtitle">
                Orphanage Information
              </Form.Label>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Text className="text-muted">
                  *identifier for the orphanage
                </Form.Text>
                <Form.Control
                  type="text"
                  placeholder="e.g. name of the orphanage"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRegisterDate">
                <Form.Label>Registered Date</Form.Label>
                <Form.Text className="text-muted">
                  *date of registration
                </Form.Text>
                <Form.Control
                  type="date"
                  placeholder="e.g. 1980/04/14"
                  onChange={(e) => setRegisteredDate(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRegisterDate">
                <Form.Label>Capacity</Form.Label>
                <Form.Text className="text-muted">
                  *how many children can stay there
                </Form.Text>
                <Form.Control
                  type="text"
                  placeholder="e.g. 100"
                  onChange={(e) => setCapacity(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRegID">
                <Form.Label>Registration ID</Form.Label>
                <Form.Text className="text-muted">
                  *given registration ID from child protection authority
                </Form.Text>
                <Form.Control
                  type="text"
                  placeholder="WP-KL-14515"
                  onChange={(e) => setRegistrationId(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Text className="text-muted">
                  *Address of the orphanage
                </Form.Text>
                <Row>
                  <Col xs={6}>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      placeholder="e.g. Panadura"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Col>
                  <Col xs={6}>
                    <Form.Label>District</Form.Label>
                    <Form.Control
                      placeholder="e.g. Kaluthara"
                      onChange={(e) => setDistrict(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Label className="form-subtitle">
                Contact Information of the founder
              </Form.Label>

              <Form.Group className="mb-3" controlId="formBasicNameOfFounder">
                <Form.Label>Name</Form.Label>
                <Form.Text className="text-muted">
                  *name of the founder or organization
                </Form.Text>
                <Form.Control
                  type="text"
                  placeholder="e.g. S.K.Sumanasekara or ABCD Pvt"
                  onChange={(e) => setFounderName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Current Address</Form.Label>
                <Form.Text className="text-muted">
                  *Current address of the founder or organization
                </Form.Text>
                <Form.Control
                  type="text"
                  placeholder="e.g. 5/117,Panadura,Kaluthara"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Contact Phone Number</Form.Label>
                <Form.Text className="text-muted">
                  *Contact phone number of the founder
                </Form.Text>
                <Form.Control
                  type="text"
                  placeholder="e.g. 034 22 333456"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Text className="text-muted">
                  *email address of the orphanage
                </Form.Text>
                <Form.Control
                  type="email"
                  placeholder="e.g. example@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Label className="form-subtitle">
                Required documents
              </Form.Label>

              <Form.Group controlId="formFileReg" className="mb-3">
                <Form.Label>Certificate of registration</Form.Label>
                <Form.Text className="text-muted">
                  *upload a pdf document of the certificate of registration that
                  is issued by the child protection authority
                </Form.Text>
                <Form.Control
                  type="file"
                  onChange={(e) => setRegCert(e.target.files[0])}
                  size="sm"
                  style={{ padding: "0.1rem 0.3rem 0.2rem 0.3rem" }}
                />
              </Form.Group>

              <Form.Group controlId="formFilePlan" className="mb-3">
                <Form.Label>House Plan</Form.Label>
                <Form.Text className="text-muted">
                  *house plan of the orphanage building are uploaded here.
                </Form.Text>
                <Form.Control
                  type="file"
                  onChange={(e) => setHousePlan(e.target.files[0])}
                  size="sm"
                  style={{ padding: "0.05rem 0.3rem 0.2rem 0.3rem" }}
                />
              </Form.Group>

              <Form.Group controlId="formFileLand" className="mb-3">
                <Form.Label>Land report</Form.Label>
                <Form.Text className="text-muted">
                  *land report of the orphanage land are uploaded here.
                </Form.Text>
                <Form.Control
                  type="file"
                  onChange={(e) => setLandReport(e.target.files[0])}
                  size="sm"
                  style={{ padding: "0.05rem 0.3rem 0.2rem 0.3rem" }}
                />
              </Form.Group>

              <Form.Label className="form-subtitle">
                Create Orhanage Manager Account
              </Form.Label>

              <Form.Group className="mb-3" controlId="formBasicFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Text className="text-muted">
                  *Name as of the user
                </Form.Text>
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Text className="text-muted">*Email of the user</Form.Text>
                <Form.Control
                  type="email"
                  placeholder="example@gmail.com"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUsernmae">
                <Form.Label>Username</Form.Label>
                <Form.Text className="text-muted">
                  *Username for new user
                </Form.Text>
                <Form.Control
                  type="text"
                  placeholder="New username"
                  onChange={(e) => setUserUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Label>Gender</Form.Label>
                <Form.Text className="text-muted">*Gender</Form.Text>
                <Form.Select
                  size="sm"
                  onChange={(e) => setUserGender(e.target.value)}
                >
                  <option value="">Choose</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Text className="text-muted">
                  *Address of the user
                </Form.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter your address"
                  onChange={(e) => setUserAddress(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Text className="text-muted">
                  *Phone number of the user
                </Form.Text>
                <Form.Control
                  type="tel"
                  placeholder="07XXXXXXXXX"
                  onChange={(e) => setUserPhoneNumber(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicNIC">
                <Form.Label>NIC Number</Form.Label>
                <Form.Text className="text-muted">
                  *NIC number of the user
                </Form.Text>
                <Form.Control
                  type="text"
                  placeholder="NIC Number"
                  onChange={(e) => setUserNIC(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicdob">
                <Form.Label>DOB</Form.Label>
                <Form.Text className="text-muted">
                  *Date of birth of the user
                </Form.Text>
                <Form.Control
                  type="date"
                  placeholder="Date of birth"
                  onChange={(e) => setUserDOB(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </MyCardBody>
        </MyCard>
      </Col>
    </Row>
  );
};

export default OrphanageRegistration;
