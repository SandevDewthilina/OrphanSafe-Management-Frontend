import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import { toast } from "react-toastify";
import { useCreateParentProfileMutation } from "../../slices/profileApiSlice";
import { useState } from "react";

const CreateParentForm = () => {
  const [username, setUsername] = useState("");

  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");

  const [address,setAddress]= useState("");

  const [NameOfFather,setNameOfFather]= useState("");
  const [NICOfFather,setNICOfFather]= useState("");
  const [MobileOfFather,setMobileOfFather]= useState("");
  const [DOBOfFather,setDOBOfFather]= useState("");
  const [OccupationOfFather,setOccupationOfFather]= useState("");
  const [NameOfMother,setNameOfMother]= useState("");
  const [NICOfMother,setNICOfMother]= useState("");
  const [MobileOfMother,setMobileOfMother]= useState("");
  const [DOBOfMother,setDOBOfMother]= useState("");
  const [OccupationOfMother,setOccupationOfMother]= useState("");
  const [AdoptionPreference,setAdoptionPreference]= useState("");
  const [AgePreference,setAgePreference]= useState("");
  const [GenderPreference,setGenderPreference]= useState("");
  const [NationalityPreference,setNationalityPreference]= useState("");
  const [LanguagePreference,setLanguagePreference]= useState("");
  

  const [NICDocMother,setNICDocMother]= useState(null);
  const [NICDocFather,setNICDocFather]= useState(null);
  const [MothersBirthCertificate,setMothersBirthCertificate]= useState(null);
  const [FathersBirthCertificate,setFathersBirthCertificate]= useState(null);
  const [MarriageCertificate,setMarriageCertificate]= useState(null);
  const [ResidenceCertificate,setResidenceCertificate]= useState(null);
  const [SalaryPaySheet,setSalaryPaySheet]= useState(null);

  const [registerParent, { isLoading, isError, isSuccess }] =
  useCreateParentProfileMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("NICDocMother", NICDocMother);
      formData.append("NICDocFather", NICDocFather);
      formData.append("MarriageCertificate", MarriageCertificate);
      formData.append("ResidenceCertificate", ResidenceCertificate);
      formData.append("MothersBirthCertificate", MothersBirthCertificate);
      formData.append("FathersBirthCertificate", FathersBirthCertificate);
      formData.append("SalaryPaySheet", SalaryPaySheet);

      formData.append("otherInfo", JSON.stringify({
        username: username,
        name: NameOfFather,
        phoneNumber:MobileOfFather,
        email: email,
        password: password,
        address: address,
        nic: NICOfFather,
        gender: "MALE",
        dob: DOBOfFather,

        NameOfFather: NameOfFather,
        NICOfFather: NICOfFather,
        MobileOfFather: MobileOfFather,
        DOBOfFather: DOBOfFather,
        OccupationOfFather: OccupationOfFather,
        NameOfMother: NameOfMother,
        NICOfMother: NICOfMother,
        MobileOfMother: MobileOfMother,
        DOBOfMother: DOBOfMother,
        OccupationOfMother: OccupationOfMother,
        Address: address,
        Email: email,
        AdoptionPreference: AdoptionPreference,
        AgePreference: AgePreference,
        GenderPreference: GenderPreference,
        NationalityPreference: NationalityPreference,
        LanguagePreference: LanguagePreference,
        
      }));
      const res = await registerParent(formData).unwrap();

      toast.success(" Parent profile Registration completed");
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  return (
    <Row>
      <Col sm={7}>
        <MyCard>
          <MyCardHeader>Create Parent profile</MyCardHeader>
          <MyCardBody>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicBirthPlace">
                <Form.Label className="form-subtitle">Parents Details</Form.Label>
                <Form.Text className="text-muted">
                  *names of child's parents
                </Form.Text>
                <Row>
                  <Col xs={6}>
                    <Form.Label>Foster father's name</Form.Label>
                    <Form.Control placeholder="e.g. Sunil Perera" 
                    onChange={(e) => setNameOfFather(e.target.value)}/></Col>
                  <Col xs={6}><Form.Label>Foster mother's name</Form.Label>
                    <Form.Control placeholder="e.g. Kumudi Perera" 
                    onChange={(e) => setNameOfMother(e.target.value)}/></Col>
                </Row>
                <Row >
                  <Col xs={6}>
                    <Form.Label>NIC number</Form.Label>
                    <Form.Control placeholder="e.g. 0023345453" 
                    onChange={(e) => setNICOfFather(e.target.value)}/></Col>
                  <Col xs={6}><Form.Label>NIC number</Form.Label>
                    <Form.Control placeholder="e.g. 0023345453"
                    onChange={(e) => setNICOfMother(e.target.value)} /></Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control placeholder="e.g. 071 2345678" 
                    onChange={(e) => setMobileOfFather(e.target.value)}/></Col>
                  <Col xs={6}><Form.Label>Mobile Number</Form.Label>
                    <Form.Control placeholder="e.g. 071 2345678" 
                    onChange={(e) => setMobileOfMother(e.target.value)}/></Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control placeholder="e.g. 1984/06/27" type="date"
                    onChange={(e) => setDOBOfFather(e.target.value)}/></Col>
                  <Col xs={6}><Form.Label>Date of Birth</Form.Label>
                    <Form.Control placeholder="e.g. 1984/06/27" type="date"
                    onChange={(e) => setDOBOfMother(e.target.value)}/></Col>
                </Row>

                <Row>
                  <Col xs={6}>
                    <Form.Label>Occupation</Form.Label>
                    <Form.Control placeholder="e.g. Manager" 
                    onChange={(e) => setOccupationOfFather(e.target.value)}/></Col>
                  <Col xs={6}><Form.Label>Occupation</Form.Label>
                    <Form.Control placeholder="e.g. Teacher" 
                    onChange={(e) => setOccupationOfMother(e.target.value)}/></Col>
                </Row>

              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Text className="text-muted">
                  *address of the parents
                </Form.Text>
                <Form.Control type="text" placeholder="e.g. Panadura,Kaluthara" 
                onChange={(e) => setAddress(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Text className="text-muted">
                  *email address of the parent
                </Form.Text>
                <Form.Control type="email" placeholder="e.g. example@email.com"
                onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label>Marital Status</Form.Label>
        <Form.Text className="text-muted">
        *Marital Status of the parents
        </Form.Text>
        <Form.Select size="sm" >
        <option ></option>
        <option value="1" >Single</option>
        <option value="2">Married</option>
        <option value="3">Divorced</option>
        <option value="4">Widowed</option>
        </Form.Select>
      </Form.Group> */}

              <Form.Label className="form-subtitle">Documents</Form.Label>


              <Form.Group controlId="formFileLegalDoc" className="mb-3">
                <Form.Label>Birth Certificate of Mother</Form.Label>
                <Form.Text className="text-muted">
                  *birth certificate of the foster mother.
                </Form.Text>
                <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }} 
                onChange={(e) => setMothersBirthCertificate(e.target.files[0])}/>
              </Form.Group>

              <Form.Group controlId="formFileLegalDoc" className="mb-3">
                <Form.Label>Birth Certificate of Father</Form.Label>
                <Form.Text className="text-muted">
                  *birth certificate of the foster father.
                </Form.Text>
                <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }} 
                onChange={(e) => setFathersBirthCertificate(e.target.files[0])}/>
              </Form.Group>

              <Form.Group controlId="formFileLegalDoc" className="mb-3">
                <Form.Label>Soft copy of NIC of Mother</Form.Label>
                <Form.Text className="text-muted">
                  *soft copy of the foster mother national identity card
                </Form.Text>
                <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }} 
                onChange={(e) => setNICDocMother(e.target.files[0])}/>
              </Form.Group>

              <Form.Group controlId="formFileLegalDoc" className="mb-3">
                <Form.Label>Soft copy of NIC of Father</Form.Label>
                <Form.Text className="text-muted">
                  *soft copy of the foster father national identity card
                </Form.Text>
                <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }} 
                onChange={(e) => setNICDocFather(e.target.files[0])}/>
              </Form.Group>

              <Form.Group controlId="formFileLegalDoc" className="mb-3">
                <Form.Label>Residence Certificate</Form.Label>
                <Form.Text className="text-muted">
                  *residence Certificate of parents
                </Form.Text>
                <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }} 
                onChange={(e) => setResidenceCertificate(e.target.files[0])}/>
              </Form.Group>

              <Form.Group controlId="formFileLegalDoc" className="mb-3">
                <Form.Label>Marriage Certificate</Form.Label>
                <Form.Text className="text-muted">
                  *marriage Certificate of parents
                </Form.Text>
                <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}
                onChange={(e) => setMarriageCertificate(e.target.files[0])} />
              </Form.Group>

              <Form.Group controlId="formFileLegalDoc" className="mb-3">
                <Form.Label>Salary Pay Sheet</Form.Label>
                <Form.Text className="text-muted">
                  *salary pay sheet of parents
                </Form.Text>
                <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }} 
                onChange={(e) => setSalaryPaySheet(e.target.files[0])}/>
              </Form.Group>


              <br />
              <Form.Label className="form-subtitle"> Adoption/Foster Care Preferences</Form.Label>
              {/* <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label> Type of Placement Preferred</Form.Label>
        <Form.Text className="text-muted">
        *select the types of placement preferred
        </Form.Text>
        <Form.Check type="checkbox" id="autoSizingCheck1" label="Adoption"/>
        <Form.Check type="checkbox" id="autoSizingCheck2" label="Foster Care "/>
        <Form.Check type="checkbox" id="autoSizingCheck3" label=" Either"/>
      </Form.Group> */}

              <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Label>Type of Placement Preferred</Form.Label>
                <Form.Text className="text-muted">
                  *select the types of placement preferred
                </Form.Text>
                <Form.Select size="sm" 
                onChange={(e) => setAdoptionPreference(e.target.value)}>
                  <option ></option>
                  <option value="ADOPTION" >Adoption</option>
                  <option value="FOSTERCARE">Foster Care</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Age Range of Child Preferred</Form.Label>
                <Form.Text className="text-muted">
                  *Give the preferred age range of the child
                </Form.Text>
                <Form.Control type="text" placeholder="e.g. [9-15]"
                onChange={(e) => setAgePreference(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Label>Gender Preference</Form.Label>
                <Form.Text className="text-muted">
                  *gender of the child
                </Form.Text>
                <Form.Select size="sm"
                onChange={(e) => setGenderPreference(e.target.value)} >
                  <option ></option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Nationality Preference</Form.Label>
                <Form.Text className="text-muted">
                  *Give nationality preference
                </Form.Text>
                <Form.Control type="text" placeholder="e.g. Sri lankan" 
                onChange={(e) => setNationalityPreference(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Language Preference</Form.Label>
                <Form.Text className="text-muted">
                  *Give language preference
                </Form.Text>
                <Form.Control type="text" placeholder="e.g. Sinhala"
                onChange={(e) => setLanguagePreference(e.target.value)} />
              </Form.Group>









              <Form.Label className="form-subtitle">Create Account</Form.Label>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>User Name</Form.Label>
                <Form.Text className="text-muted">
                  *username of the parent account
                </Form.Text>
                <Form.Control type="text" placeholder="e.g. full name"
                onChange={(e) => setUsername(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Text className="text-muted">
                  *set temporary password for the parent account
                </Form.Text>
                <Form.Control type="password" placeholder="***********"
                onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicStaffName">
                <Form.Label> Orphanage Name</Form.Label>
                <Form.Text className="text-muted">
                  *name of the orphanage by which the parent got registered
                </Form.Text>
                <Form.Control type="text" placeholder="e.g. Little dreams Orphanage" 
                onChange={(e) => setOrphanageName(e.target.value)}/>
              </Form.Group> */}




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
export default CreateParentForm;