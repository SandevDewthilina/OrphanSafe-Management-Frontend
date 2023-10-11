import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import { useSelector } from "react-redux";
import {
  useViewChildProfilesQuery,
  useEditChildProfileMutation,
} from "../../slices/profileApiSlice";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const EditChildForm = () => {

  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("childId");



  const [FullName, setFullName] = useState("");
  const [DOB,setDOB]= useState("");
  const [Gender,setGender]= useState("");
  const [DateOfAdmission,setDateOfAdmission]= useState("");
  const [Country,setCountry]= useState("");
  const [City,setCity]= useState("");
  const [Nationality,setNationality]= useState("");
  const [Language,setLanguage]= useState("");
  const [Remark,setRemark]= useState("");
  const [MedicalDesc,setMedicalDesc]= useState("");
  const [BirthFather,setBirthFather]= useState("");
  const [BirthMother,setBirthMother]= useState("");
  const [ReasonForPlacement,setReasonForPlacement]= useState("");
  const [OrphanageName,setOrphanageName]= useState("");

  const [MedicalDoc,setMedicalDoc]= useState(null);
  const [Photograph,setPhotograph]= useState(null);
  const [ChildProtectionCertificate,setChildProtectionCertificate]= useState(null);
  const [BirthCertificate,setBirthCertificate]= useState(null);
  const [MothersBirthCertificate,setMothersBirthCertificate]= useState(null);
  const [FathersBirthCertificate,setFathersBirthCertificate]= useState(null);

  const {data, isLoading,isError,isSuccess}=
  useViewChildProfilesQuery(paramValue);


  useEffect(() => {
    if (isSuccess) {
      setFullName(data.childProfile.FullName || "");
      setDOB(data.childProfile.DOB || "");
      setGender(data.childProfile.Gender || "");
      setDateOfAdmission(data.childProfile.DateOfAdmission || "");
      setCountry(data.childProfile.Country || "");
      setCity(data.childProfile.City || "");
      setNationality(data.childProfile.Nationality || "");
      setLanguage(data.childProfile.Language || "");
      setRemark(data.childProfile.Remark || "");
      setMedicalDesc(data.childProfile.MedicalDesc || "");
      setBirthFather(data.childProfile.BirthFather || "");
      setBirthMother(data.childProfile.BirthMother || "");
      setReasonForPlacement(data.childProfile.ReasonForPlacement || "");
      setOrphanageName(data.childProfile.OrphanageName || "");
    }
  }, [isSuccess, data]);


 


  const [editChild]=useEditChildProfileMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("MedicalDoc", MedicalDoc);
      formData.append("Photograph", Photograph);
      formData.append("ChildProtectionCertificate", ChildProtectionCertificate);
      formData.append("BirthCertificate", BirthCertificate);
      formData.append("MothersBirthCertificate", MothersBirthCertificate);
      formData.append("FathersBirthCertificate", FathersBirthCertificate);
      formData.append("otherInfo", JSON.stringify({
        Id:paramValue,
        FullName: FullName,
        DOB: DOB,
        Gender: Gender,
        DateOfAdmission: DateOfAdmission,
        Country: Country,
        City: City,
        Nationality: Nationality,
        Language: Language,
        Remark: Remark,
        MedicalDesc: MedicalDesc,
        BirthFather: BirthFather,
        BirthMother: BirthMother,
        ReasonForPlacement: ReasonForPlacement,
        OrphanageName : OrphanageName, 
        
      }));
      const res = await editChild(
        formData
      ).unwrap();

      toast.success(" Child profile Registration completed");
    } catch (error) {
      toast.error(error.data.message);
    }
  };

    return isSuccess && ( 
      <Row>
        <Col sm={7}>
        <MyCard>
        <MyCardHeader>Edit Child profile</MyCardHeader>
        <MyCardBody>
          <Form onSubmit={submitHandler}>
          <Form.Label className="form-subtitle">Child Information</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Text className="text-muted">
        *identifier for the child
        </Form.Text>
        <Form.Control 
        type="text" 
        placeholder="e.g. full name" 
        onChange={(e) => setFullName(e.target.value)}
        defaultValue={data.childProfile.FullName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicdob">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Text className="text-muted">
        *Date of birth of the child
        </Form.Text>
        <Form.Control
        type="date"
        placeholder="Date of birth"
        onChange={(e) => setDOB(e.target.value)}
        defaultValue={data.childProfile.DOB}
        />
        </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label>Gender</Form.Label>
        <Form.Text className="text-muted">
        *gender
        </Form.Text>
        <Form.Select 
        size="sm" 
        onChange={(e) => setGender(e.target.value)}
        defaultValue={data.childProfile.Gender}>
        <option value="">Choose</option>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
        </Form.Select>
      </Form.Group>

      

      <Form.Group className="mb-3" controlId="formBasicBirthPlace">
        <Form.Label>Place of birth</Form.Label>
        <Form.Text className="text-muted">
        *Place of birth of the child
        </Form.Text>
        <Row>
        <Col xs={6}>
            <Form.Label>City</Form.Label>
          <Form.Control 
          placeholder="e.g. Panadura"
          onChange={(e) => setCity(e.target.value)}
          defaultValue={data.childProfile.City}/></Col>
        <Col xs={6}><Form.Label>Country</Form.Label>
          <Form.Control placeholder="e.g. Sri Lanka"
          onChange={(e) => setCountry(e.target.value)}
          defaultValue={data.childProfile.Country}/></Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNationality">
        <Form.Label>Nationality</Form.Label>
        <Form.Text className="text-muted">
        *nationality of the child
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Sri Lankan" 
        onChange={(e) => setNationality(e.target.value)}
        defaultValue={data.childProfile.Nationality}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLanguage">
        <Form.Label>Preferred Language</Form.Label>
        <Form.Text className="text-muted">
        *Language the child is most comfortable with
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Sinhala" 
        onChange={(e) => setLanguage(e.target.value)}
        defaultValue={data.childProfile.Language}/>
      </Form.Group>



      <Form.Label className="form-subtitle">Health Information</Form.Label>
      <Form.Group className="mb-3" controlId="medicalHistory">
        <Form.Label>Medical History</Form.Label>
        <Form.Text className="text-muted">
        *brief description of any medical conditions or allergies
        </Form.Text>
        <Form.Control size="sm" as="textarea" rows={8} 
        onChange={(e) => setMedicalDesc(e.target.value)}
        defaultValue={data.childProfile.MedicalDesc}/>
      </Form.Group>

      <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label>Medical Documents History</Form.Label>
        <Form.Text className="text-muted">
        *documents related to the medical history
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}
        onChange={(e) => setMedicalDoc(e.target.files[0])}/>
      </Form.Group>



      

    

      <Form.Label className="form-subtitle">Family Background</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicBirthPlace">
        <Form.Label>Parents Names</Form.Label>
        <Form.Text className="text-muted">
        *names of child's parents
        </Form.Text>
        <Row>
        <Col xs={6}>
            <Form.Label>Father's Name</Form.Label>
          <Form.Control placeholder="e.g. Sunil Perera"
          onChange={(e) => setBirthFather(e.target.value)}
          defaultValue={data.childProfile.BirthFather}/></Col>
        <Col xs={6}><Form.Label>Mother's Name</Form.Label>
          <Form.Control placeholder="e.g. Kumudi Perera"
          onChange={(e) => setBirthMother(e.target.value)}
          defaultValue={data.childProfile.BirthMother}/></Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicGrade">
        <Form.Label>Reason for Placement</Form.Label>
        <Form.Text className="text-muted">
        *brief explanation of why the child is under the care of the orphanage
        </Form.Text>
        <Form.Control size="sm" as="textarea" rows={8}
        onChange={(e) => setReasonForPlacement(e.target.value)} 
        defaultValue={data.childProfile.ReasonForPlacement}/>
      </Form.Group>

      <Form.Label className="form-subtitle">Additional Information</Form.Label>

      <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label>Photograph</Form.Label>
        <Form.Text className="text-muted">
        *upload a recent photograph of the child
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}
        onChange={(e) => setPhotograph(e.target.files[0])}/>
      </Form.Group>

     

      <Form.Group className="mb-3" controlId="formBasicGrade">
        <Form.Label>Remarks</Form.Label>
        <Form.Text className="text-muted">
        *if there is any special remarks include here.
        </Form.Text>
        <Form.Control size="sm" as="textarea" rows={8} 
        onChange={(e) => setRemark(e.target.value)}
        defaultValue={data.childProfile.Remark}/>
      </Form.Group>

      <Form.Label className="form-subtitle">Documents</Form.Label>

      <Form.Group controlId="formFileLegalDoc" className="mb-3">
      <Form.Label>Child Protection Authority Certificate</Form.Label>
        <Form.Text className="text-muted">
        *child Protection Authority Certificate related to the child.
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}
        onChange={(e) => setChildProtectionCertificate(e.target.files[0])}/>
      </Form.Group>

      <Form.Group controlId="formFileLegalDoc" className="mb-3">
      <Form.Label>Birth Certificate</Form.Label>
        <Form.Text className="text-muted">
        *birth certificate of the child's father.
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}
        onChange={(e) => setBirthCertificate(e.target.files[0])}/>
      </Form.Group>

      <Form.Group controlId="formFileLegalDoc" className="mb-3">
      <Form.Label>Mother's Birth Certificate</Form.Label>
        <Form.Text className="text-muted">
        *birth certificate of the child's mother.
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}
        onChange={(e) => setMothersBirthCertificate(e.target.files[0])}/>
      </Form.Group>


      <Form.Group controlId="formFileLegalDoc" className="mb-3">
      <Form.Label>Father's Birth Certificate</Form.Label>
        <Form.Text className="text-muted">
        *birth certificate of the child's father.
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}
        onChange={(e) => setFathersBirthCertificate(e.target.files[0])}/>
      </Form.Group>




      

      <Form.Label className="form-subtitle">Registration Information</Form.Label>


      <Form.Group className="mb-3" controlId="formBasicdob">
        <Form.Label>Date Of Admission</Form.Label>
        <Form.Text className="text-muted">
        *the date that the child got registered
        </Form.Text>
         <Form.Control
         type="date"
         placeholder="Date of birth"
         onChange={(e) => setDateOfAdmission(e.target.value)}
         defaultValue={data.childProfile.DateOfAdmission}
         />
         </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicStaffName">
        <Form.Label> Orphanage Name</Form.Label>
        <Form.Text className="text-muted">
        *name of the orphanage that the child is assigned
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Little dreams" 
        onChange={(e) => setOrphanageName(e.target.value)}
        defaultValue={data.childProfile.OrphanageName}/>
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
  export default EditChildForm;