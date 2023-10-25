import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import Select from "react-select";
import "../../assets/css/dropdown.css";
import { toast } from "react-toastify";
import {
  useGetChildProfileNameListQuery,
  useGetSocialWorkerNameListQuery,
} from "../../slices/profileApiSlice";

import { useCreateCaseMutation } from "../../slices/caseApiSlice";

const AssignSocialWorkers = () => {
  // React state to manage selected options
  const [selectedChildOption, setSelectedChildOption] = useState();
  const [selectedSocialWorkerOption, setSelectedSocialWorkerOption] =
    useState();

  const [caseName, setCaseName] = useState("");
  const [caseDescription, setCaseDescription] = useState("");

  const cResponse = useGetChildProfileNameListQuery();
  const swResponse = useGetSocialWorkerNameListQuery();
  const [createCase, { isError, isLoading, isSuccess }] =
    useCreateCaseMutation();

  if (cResponse.isSuccess && swResponse.isSuccess) {
    const childOptionList = cResponse.data.childProfileNameList.map(function (
      child
    ) {
      const list = { value: child.Id, label: child.FullName };
      return list;
    });
    const socialWorkerOptionList = swResponse.data.socialWorkerNameList.map(
      function (sw) {
        const list = { value: sw.Id, label: sw.Name + ` (${sw.Role})` };
        return list;
      }
    );

    const submitHandler = async (e) => {
      const form = document.getElementById("form");

      e.preventDefault();
      if (selectedChildOption && selectedSocialWorkerOption) {
        if (caseName.trim().length != 0 && caseDescription.trim().length != 0) {
          try {
            const caseData = {
              caseName: caseName,
              description: caseDescription,
              childProfileId: selectedChildOption.value,
              caseOwnerId: selectedSocialWorkerOption.value,
            };
            console.log(caseData);
            const res = await createCase(caseData).unwrap();
            toast.success("creation completed");
            form.reset();
            setCaseName("");
            setCaseDescription("");
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

    function childSelectHandle(data) {
      setSelectedChildOption(data);
    }
    function socialWorkerSelectHandle(data) {
      setSelectedSocialWorkerOption(data);
    }

    return (
      <Row>
        <Col sm={7}>
          <MyCard>
            <MyCardHeader>Assign social workers form</MyCardHeader>
            <MyCardBody>
              <Form onSubmit={submitHandler} id="form">
                <Form.Group className="mb-3" controlId="formBasicCaseName">
                  <Form.Label>Case name</Form.Label>
                  <Form.Text className="text-muted">
                    *name of the case
                  </Form.Text>
                  <Form.Control
                    type="text"
                    placeholder="e.g. Adoption case"
                    onChange={(e) => setCaseName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="caseDescription">
                  <Form.Label>Case description</Form.Label>
                  <Form.Text className="text-muted">
                    *brief description about the case
                  </Form.Text>
                  <Form.Control
                    type="text"
                    placeholder="e.g. describe about the case"
                    onChange={(e) => setCaseDescription(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicGender">
                  <Form.Label>Child Name</Form.Label>
                  <Form.Text className="text-muted">
                    *Select the child
                  </Form.Text>

                  <div className="dropdown-container">
                    <Select
                      options={childOptionList}
                      placeholder="Select child"
                      value={selectedChildOption}
                      onChange={childSelectHandle}
                      isSearchable={true}
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicGender">
                  <Form.Label>Social worker Name</Form.Label>
                  <Form.Text className="text-muted">
                    *Select the social workers assigned to this case
                  </Form.Text>

                  <div className="dropdown-container">
                    <Select
                      options={socialWorkerOptionList}
                      placeholder="Select the Social Worker"
                      value={selectedSocialWorkerOption}
                      onChange={socialWorkerSelectHandle}
                      isSearchable={true}
                    />
                  </div>
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
  // Function triggered on selection
};
export default AssignSocialWorkers;
