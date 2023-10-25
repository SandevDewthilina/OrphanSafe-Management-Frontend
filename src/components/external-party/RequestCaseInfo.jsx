import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import Select from "react-select";
import "../../assets/css/dropdown.css";
import { useGetChildProfileForParentListQuery } from "../../slices/profileApiSlice";
import { useCreateCaseRequestMutation } from "../../slices/caseApiSlice";
import { toast } from "react-toastify";

const RequestCaseInfo = () => {
  // React state to manage selected options
  const [selectedChildOption, setSelectedChildOption] = useState();
  const [requestDescription, setRequestDescription] = useState("");
  const profileRes = useGetChildProfileForParentListQuery();
  const [createCaseRequest, { isError, isLoading, isSuccess }] =
    useCreateCaseRequestMutation();

  const submitHandler = async (e) => {
    const form = document.getElementById("form");
    e.preventDefault();
    if (requestDescription) {
      if (requestDescription.trim().length != 0) {
        try {
          const request = {
            description: requestDescription,
            childProfileId: selectedChildOption.value,
          };
          console.log(request);
          const res = await createCaseRequest(request).unwrap();
          toast.success("creation completed");
          form.reset();
        } catch (error) {
          toast.error(error.data.message);
        }
      } else {
        toast.error("There should be a name and a description, Please fill");
      }
    } else {
      toast.error("Please select the options");
    }
  };
  // Array of all options
  // Function triggered on selection
  function handleSelect(data) {
    setSelectedChildOption(data);
  }
  if (profileRes.isSuccess) {
    const optionList = profileRes.data.profile.map(function (child) {
      const list = { value: child.Id, label: child.FullName };
      return list;
    });
    return (
      <Row>
        <Col sm={7}>
          <MyCard>
            <MyCardHeader>Request Child Profile Form</MyCardHeader>
            <MyCardBody>
              <Form onSubmit={submitHandler} id="form">
                <Form.Group className="mb-3" controlId="formBasicGender">
                  <Form.Label>Child Name and ID</Form.Label>
                  <Form.Text className="text-muted">
                    *Select the child
                  </Form.Text>

                  <div className="dropdown-container">
                    <Select
                      options={optionList}
                      placeholder="Select child"
                      value={selectedChildOption}
                      onChange={handleSelect}
                      isSearchable={true}
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="medicalHistory">
                  <Form.Label>Reason for request</Form.Label>
                  <Form.Text className="text-muted">
                    *brief description of the reason for requesting the child
                    profile.
                  </Form.Text>
                  <Form.Control
                    type="text"
                    placeholder="e.g. describe about the case"
                    onChange={(e) => setRequestDescription(e.target.value)}
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
  }
};
export default RequestCaseInfo;
