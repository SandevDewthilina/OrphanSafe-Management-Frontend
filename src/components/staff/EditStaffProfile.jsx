import { toast } from "react-toastify";
import { useEditStaffProfileMutation ,useViewStaffProfilesQuery} from "../../slices/profileApiSlice";
import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import { useState,useEffect } from "react";

const EditStaffForm = () => {
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("staffId");

  const [name,setName]= useState("");
  const [phoneNumber,setPhoneNumber]= useState("");
  const [email,setEmail]= useState("");
  const [OrphanageName,setOrphanageName]= useState("");
  const [address,setAddress]= useState("");
  const [nic,setNic]= useState("");
  const [gender,setGender]= useState("");
  const [dob,setDOB]= useState("");

  const {data, isLoading,isError,isSuccess}=
  useViewStaffProfilesQuery(paramValue);

  useEffect(() => {
    if (isSuccess) {
      setName(data.staffProfile.UserName || "");
      setPhoneNumber(data.staffProfile.PhoneNumber || "");
      setEmail(data.staffProfile.Email || "");
      setOrphanageName(data.staffProfile.OrphanageName || "");
      setAddress(data.staffProfile.Address || "");
      setNic(data.staffProfile.NIC || "");
      setGender(data.staffProfile.Gender || "");
      setDOB(data.staffProfile.DOB || "");
    }
  }, [isSuccess, data]);

  // const [name, setName] = useState(data.staffProfile.UserName || ""); 
  // const [phoneNumber, setPhoneNumber] = useState(data.staffProfile.PhoneNumber || "");
  // const [email, setEmail] = useState(data.staffProfile.Email || "");
  // const [OrphanageName, setOrphanageName] = useState(data.staffProfile.OrphanageName || "");
  // const [address, setAddress] = useState(data.staffProfile.Address || "");
  // const [nic, setNic] = useState(data.staffProfile.NIC || "");
  // const [gender, setGender] = useState(data.staffProfile.Gender || "");
  // const [dob, setDOB] = useState(data.staffProfile.DOB || "");

  

  const [NICDoc,setNICDoc]= useState(null);
  const [BirthCertificate,setBirthCertificate]= useState(null);
  const [ResidenceCertificate,setResidenceCertificate]= useState(null);
  const [CharacterCertificate,setCharacterCertificate]= useState(null);


  const [editStaff]=useEditStaffProfileMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("NICDoc", NICDoc);
      formData.append("BirthCertificate", BirthCertificate);
      formData.append("ResidenceCertificate", ResidenceCertificate);
      formData.append("CharacterCertificate", CharacterCertificate);
      formData.append("otherInfo", JSON.stringify({
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        OrphanageName: OrphanageName,
        address: address,
        nic: nic,
        gender: gender,
        dob: dob,
        id:paramValue,
      }));
      const res = await editStaff(formData).unwrap();

      toast.success(" Staff profile Registration completed");
    } catch (error) {
      toast.error(error.data.message);
    }
  };


    return isSuccess &&(
      <Row>
        <Col sm={7}>
        <MyCard>
        <MyCardHeader>Edit staff profile</MyCardHeader>
        <MyCardBody>
          <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Text className="text-muted">
        *identifier for the employee
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. full name"
         onChange={(e) => setName(e.target.value)} 
         defaultValue={data.staffProfile.UserName}
         />
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
        defaultValue={data.staffProfile.DOB}
        />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label>Gender</Form.Label>
        <Form.Text className="text-muted">
        *gender
        </Form.Text>
        <Form.Select size="sm"
        onChange={(e) => setGender(e.target.value)} 
        defaultValue={data.staffProfile.Gender}>
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
        onChange={(e) => setAddress(e.target.value)} 
        defaultValue={data.staffProfile.Address}/>
      </Form.Group>

      

      <Form.Group className="mb-3" controlId="formBasicID">
        <Form.Label>NIC number</Form.Label>
        <Form.Text className="text-muted">
        *national identity card number of the employee
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. 20024502333" 
        onChange={(e) => setNic(e.target.value)}
        defaultValue={data.staffProfile.NIC}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicID">
        <Form.Label>Phone number</Form.Label>
        <Form.Text className="text-muted">
        *phone number of the employee
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. 0777684567" 
        onChange={(e) => setPhoneNumber(e.target.value)}
        defaultValue={data.staffProfile.PhoneNumber}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Text className="text-muted">
        *email address of the employee
        </Form.Text>
        <Form.Control type="email" placeholder="e.g. example@email.com" 
        onChange={(e) => setEmail(e.target.value)}
        defaultValue={data.staffProfile.Email}/>
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

      <Form.Group className="mb-3" controlId="formBasicStaffName">
        <Form.Label> Orphanage Name</Form.Label>
        <Form.Text className="text-muted">
        *name of the orphanage that the employee work
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Little dreams Orphanage" 
        onChange={(e) => setOrphanageName(e.target.value)}
        defaultValue={data.staffProfile.OrphanageName}/>
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
  export default EditStaffForm;