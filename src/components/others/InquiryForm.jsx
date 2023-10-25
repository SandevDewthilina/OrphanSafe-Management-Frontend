import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import { toast } from "react-toastify";
import { useState,useEffect } from "react";
import { useCreateInquiryMutation } from "../../slices/profileApiSlice";
import { useNavigate } from "react-router-dom";


const InquiryForm = () => {
  //const navigate = useNavigate()
  const [Subject, setSubject] = useState("");
  const [Description,setDescription]= useState("");

  const [CreateInquiry, { isLoading, isError, isSuccess }] =
  useCreateInquiryMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await CreateInquiry({
        Subject: Subject,
        Description: Description,
        
      }).unwrap();

      toast.success(" Create Inquiry completed");
    } catch (error) {
      toast.error(error.data.message);
    }
  };


    return (
      <Row>
        <Col sm={7}>
        <MyCard>
        <MyCardHeader>Create Inquiries</MyCardHeader>
        <MyCardBody>
        <Form onSubmit={submitHandler}>
          <Form.Label className="form-subtitle"> Inquiry Information</Form.Label>
      
   
      <Form.Group className="mb-3" controlId="formBasicSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Text className="text-muted">
        *subject of the inquiry
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Subject"
        onChange={(e) => setSubject(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="medicalHistory">
        <Form.Label>Inquiry  Message</Form.Label>
        <Form.Text className="text-muted">
        *brief description about the inquiry
        </Form.Text>
        <Form.Control size="sm" as="textarea" rows={8} 
         onChange={(e) => setDescription(e.target.value)}/>
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
  export default InquiryForm;