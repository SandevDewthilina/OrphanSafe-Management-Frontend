import { toast } from "react-toastify";
import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDeleteChildProfileMutation } from "../../slices/profileApiSlice";
import { Link } from "react-router-dom";

const DeleteChild = () => {
  const navigate = useNavigate()

  const [commitMessage, setCommitMessage] = useState("");
  //const [committedByUserName,setCommittedByUserName]= useState("");
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("childId");

  const { userInfo } = useSelector((state) => state.auth);

  const [DeleteChild, { isLoading, isError, isSuccess }] =
  useDeleteChildProfileMutation();

  useEffect(() => {
    if (!userInfo) {
      navigate("/auth/login");
    }
  }, [navigate, userInfo]);

  const handleCancel = () => {
    // Redirect to "/profile/viewProfile"
    history.push('/profile/viewProfile');
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await DeleteChild({
        commitMessage: commitMessage,
        committedByUserName: userInfo.email,
        childId: paramValue,
        
        
      }).unwrap();

      toast.success(" Delete Child Request completed");
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
        <Form.Control size="sm" as="textarea" rows={8} placeholder="e.g. Message" 
        onChange={(e) => setCommitMessage(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicStaffName">
        <Form.Label> Commit By</Form.Label>
        <Form.Text className="text-muted">
        *name of the person who delete the child profile
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Kamal Perera" 
        //onChange={(e) => setCommittedByUserName(e.target.value)}
        value={userInfo.email}
        />
      </Form.Group>
      <br></br>

      <Row style={{ marginBottom: "10px" }}>
      <Col sm={6}>
      <Button variant="danger" type="submit">
        Delete
      </Button>
      </Col>
      <Col sm={6}>
      <div class="d-flex justify-content-end">
        <Link to='/profile/viewProfile'>
          <Button variant="primary" >
          Cancel
          </Button>
        </Link>
      
      </div>
      
      </Col>
      </Row>

     
    </Form>
    </MyCardBody>
    </MyCard>
        </Col>
      </Row>
    );
  };
  export default DeleteChild;