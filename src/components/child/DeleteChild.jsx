import { toast } from "react-toastify";
import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import { useState } from "react";
import { useDeleteChildProfileMutation } from "../../slices/profileApiSlice";

const DeleteChild = () => {
  const [commitMessage, setCommitMessage] = useState("");
  const [committedByUserName,setCommittedByUserName]= useState("");
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("childId");

  

  const [DeleteChild, { isLoading, isError, isSuccess }] =
  useDeleteChildProfileMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await DeleteChild({
        commitMessage: commitMessage,
        committedByUserName: committedByUserName,
        childId: paramValue,
        
        
      }).unwrap();

      toast.success(" Staff profile Registration completed");
    } catch (error) {
      toast.error(error.data.message);
    }
  };


    return (
      <Row>
        <Col sm={7}>
        <MyCard>
        <MyCardHeader>Delete child profile</MyCardHeader>
        <MyCardBody>
          <Form onSubmit={submitHandler}>
      <Form.Label className="form-subtitle">Delete child profile</Form.Label>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Commit Message</Form.Label>
        <Form.Text className="text-muted">
        *Reason for deleting the profile
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Message" 
        onChange={(e) => setCommitMessage(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicStaffName">
        <Form.Label> Commit By</Form.Label>
        <Form.Text className="text-muted">
        *name of the person who delete the child profile
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Kamal Perera" 
        onChange={(e) => setCommittedByUserName(e.target.value)}/>
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
  export default DeleteChild;