import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";

const InquiryForm = () => {
    return (
      <Row>
        <Col sm={7}>
        <MyCard>
        <MyCardHeader>Create Inquiries</MyCardHeader>
        <MyCardBody>
          <Form>
          <Form.Label className="form-subtitle"> Inquiry Information</Form.Label>
      
   
      <Form.Group className="mb-3" controlId="formBasicSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Text className="text-muted">
        *subject of the inquiry
        </Form.Text>
        <Form.Control type="email" placeholder="e.g. example@email.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="medicalHistory">
        <Form.Label>Inquiry  Message</Form.Label>
        <Form.Text className="text-muted">
        *brief description about the inquiry
        </Form.Text>
        <Form.Control size="sm" as="textarea" rows={8} />
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