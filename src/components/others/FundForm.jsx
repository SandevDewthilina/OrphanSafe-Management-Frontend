import React, { useState } from 'react';
import { Col, Form, Row,Button } from 'react-bootstrap';
import { MyCard, MyCardBody, MyCardHeader } from '../MyCard';
import Select from "react-select";
import "../../assets/css/dropdown.css";
import { toast } from "react-toastify";
import { useCreateFundMutation } from "../../slices/profileApiSlice";



const FundForm = () => {

  const [Name, setName] = useState("");
  const [Date,setDate]= useState("");
  const [TransactionAmount,setTransactionAmount]= useState("");
  const [Email,setEmail]= useState("");
  const [Mobile,setMobile]= useState("");
  const [Description,setDescription]= useState("");

  const [CreateFund, { isLoading, isError, isSuccess }] =
  useCreateFundMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await CreateFund({
        Name: Name,
        Email: Email,
        Mobile:Mobile,
        Date: Date,
        TransactionAmount: TransactionAmount,
        Description: Description,
        
        
      }).unwrap();

      toast.success(" Successfully created a fund form");
    } catch (error) {
      toast.error(error.data.message);
    }
  };


    return (
      <Row>
        <Col sm={7}>
        <MyCard>
        <MyCardHeader>Receive funds form</MyCardHeader>
        <MyCardBody>
        <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Donator's name</Form.Label>
        <Form.Text className="text-muted">
        *name of the Donator
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Supun Kodithuwakku" 
        onChange={(e) => setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCaseName">
        <Form.Label>Date</Form.Label>
        <Form.Text className="text-muted">
        *Date of the fund received
        </Form.Text>
        <Form.Control type="date" placeholder="e.g. 2023/08/24"
        onChange={(e) => setDate(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAmount">
        <Form.Label>Amount</Form.Label>
        <Form.Text className="text-muted">
        *amount of the fund received
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. 30,000.00" 
        onChange={(e) => setTransactionAmount(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAmount">
        <Form.Label>Email</Form.Label>
        <Form.Text className="text-muted">
        *Email address of the donator
        </Form.Text>
        <Form.Control type="email" placeholder="e.g. example@orphanSafe.com" 
        onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAmount">
        <Form.Label>Contact Number</Form.Label>
        <Form.Text className="text-muted">
        *Contact number of the donator
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. 071345576" 
        onChange={(e) => setMobile(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="caseDescription">
        <Form.Label>Fund description</Form.Label>
        <Form.Text className="text-muted">
        *brief description about the fund received 
        </Form.Text>
        <Form.Control size="sm" as="textarea" rows={8}
        onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>

      
      {/* <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label>Fund Documents</Form.Label>
        <Form.Text className="text-muted">
        *documents related to the fund
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}/>
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
  export default FundForm;