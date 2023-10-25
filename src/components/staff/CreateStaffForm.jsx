import { toast } from "react-toastify";
import { useCreateStaffProfileMutation } from "../../slices/profileApiSlice";
import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import { useState } from "react";

const CreateStaffForm = () => {
  const [username, setUsername] = useState("");
  const [name,setName]= useState("");
  const [phoneNumber,setPhoneNumber]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  //const [OrphanageName,setOrphanageName]= useState("");
  const [address,setAddress]= useState("");
  const [nic,setNic]= useState("");
  const [gender,setGender]= useState("");
  const [dob,setDOB]= useState("");
  const [employeeType,setEmployeeType]= useState("");
  

  const [NICDoc,setNICDoc]= useState(null);
  const [BirthCertificate,setBirthCertificate]= useState(null);
  const [ResidenceCertificate,setResidenceCertificate]= useState(null);
  const [CharacterCertificate,setCharacterCertificate]= useState(null);

  const [registerStaff, { isLoading, isError, isSuccess }] =
  useCreateStaffProfileMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("NICDoc", NICDoc);
      formData.append("BirthCertificate", BirthCertificate);
      formData.append("ResidenceCertificate", ResidenceCertificate);
      formData.append("CharacterCertificate", CharacterCertificate);
      formData.append("otherInfo", JSON.stringify({
        username: username,
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
        //OrphanageName: OrphanageName,
        address: address,
        nic: nic,
        gender: gender,
        dob: dob,
        employeeType:employeeType,
        
      }));
      const res = await registerStaff(formData).unwrap();

      toast.success(" Staff profile Registration completed");
    } catch (error) {
      toast.error(error.data.message);
    }
  };


    return (
      <Row>
        <Col sm={7}>
        <MyCard>
        <MyCardHeader>Create staff profile</MyCardHeader>
        <MyCardBody>
          <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Text className="text-muted">
        *identifier for the employee
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. full name"
         onChange={(e) => setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDob">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Text className="text-muted">
        *Date of birth of the child
        </Form.Text>
        <Form.Control
        type="date"
        placeholder="Date of birth"
        onChange={(e) => setDOB(e.target.value)}
        />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label>Gender</Form.Label>
        <Form.Text className="text-muted">
        *gender
        </Form.Text>
        <Form.Select size="sm"
        onChange={(e) => setGender(e.target.value)} >
        <option value="">Choose</option>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Text className="text-muted">
        *address of the employee
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Panadura,Kaluthara"
        onChange={(e) => setAddress(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicType">
        <Form.Label>Type of the employee</Form.Label>
        <Form.Text className="text-muted">
        *select the type of the employee
        </Form.Text>
        
        <Form.Select 
        onChange={(e) => setEmployeeType(e.target.value)}>
        <option value="">Choose</option>
        <option value="orphanageStaff">Orphanage staff</option>
        <option value="orphanageManager">Orphanage Manager</option>
        </Form.Select>

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicID">
        <Form.Label>NIC number</Form.Label>
        <Form.Text className="text-muted">
        *national identity card number of the employee
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. 20024502333" 
        onChange={(e) => setNic(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicID">
        <Form.Label>Phone number</Form.Label>
        <Form.Text className="text-muted">
        *phone number of the employee
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. 0777684567" 
        onChange={(e) => setPhoneNumber(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Text className="text-muted">
        *email address of the employee
        </Form.Text>
        <Form.Control type="email" placeholder="e.g. example@email.com" 
        onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Label className="form-subtitle">Documents</Form.Label>


      <Form.Group controlId="formFileLegalDoc" className="mb-3">
      <Form.Label>Birth Certificate</Form.Label>
        <Form.Text className="text-muted">
        *birth certificate of the employee.
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}
        onChange={(e) => setBirthCertificate(e.target.files[0])}/>
      </Form.Group>

      <Form.Group controlId="formFileLegalDoc" className="mb-3">
      <Form.Label>Soft copy of NIC</Form.Label>
        <Form.Text className="text-muted">
        *soft copy of the employee national identity card
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}
        onChange={(e) => setNICDoc(e.target.files[0])}/>
      </Form.Group>

      <Form.Group controlId="formFileLegalDoc" className="mb-3">
      <Form.Label>Residence Certificate</Form.Label>
        <Form.Text className="text-muted">
        *residence Certificate of the employee
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}
        onChange={(e) => setResidenceCertificate(e.target.files[0])}/>
      </Form.Group>

      <Form.Group controlId="formFileLegalDoc" className="mb-3">
      <Form.Label>Character Certificate</Form.Label>
        <Form.Text className="text-muted">
        *character Certificate of the employee
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}
        onChange={(e) => setCharacterCertificate(e.target.files[0])}/>
      </Form.Group>


      <Form.Label className="form-subtitle">Create Account</Form.Label>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>User Name</Form.Label>
        <Form.Text className="text-muted">
        *username of the employee account
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. full name" 
        onChange={(e) => setUsername(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Text className="text-muted">
        *set temporary password for the employee account
        </Form.Text>
        <Form.Control type="password" placeholder="***********" 
        onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicStaffName">
        <Form.Label> Orphanage Name</Form.Label>
        <Form.Text className="text-muted">
        *name of the orphanage that the employee work
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
  export default CreateStaffForm;