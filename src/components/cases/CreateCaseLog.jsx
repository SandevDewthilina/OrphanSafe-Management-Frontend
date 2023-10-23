import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import Select from "react-select";
import "../../assets/css/dropdown.css";
import {
  useGetCaseListByUserIdQuery,
  useCreateCaseLogMutation,
} from "../../slices/caseApiSlice";
import { toast } from "react-toastify";

const CreateCaseLogs = () => {
  const [createCaseLog, { isError, isLoading, isSuccess }] =
    useCreateCaseLogMutation();
  // React state to manage selected options
  const [selectedOption, setSelectedOption] = useState();
  const [logName, setLogName] = useState();
  const [logDescription, setLogDescription] = useState();
  const [caseLogDoc, setCaseLogDoc] = useState(null);
  const response = useGetCaseListByUserIdQuery();
  // Array of all options

  function handleSelect(data) {
    setSelectedOption(data);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    if (selectedOption) {
      if (logDescription && logName) {
        if (logDescription.trim().length != 0 && logName.trim().length != 0) {
          try {
            const formData = new FormData();
            formData.append("caseLogDoc", caseLogDoc);
            formData.append(
              "otherInfo",
              JSON.stringify({
                caseId: selectedOption.value,
                name: logName,
                description: logDescription,
              })
            );
            const res = await createCaseLog(formData).unwrap();
            if (isError) {
              toast.error(res.message);
            }
            toast.success("creation completed");
            form.reset();
          } catch (error) {
            toast.error(error.data.message);
          }
        } else {
          toast.error("name and description cannot be empty");
        }
      } else {
        toast.error("there shoud be a name and a description for a case log");
      }
    } else {
      toast.error("please select the Case");
    }
  };
  if (response.isSuccess) {
    const optionList = response.data.caseList.map(function (caseInfo) {
      const list = { value: caseInfo.CaseId, label: caseInfo.CaseName };
      return list;
    });

    // Function triggered on selection
    return (
      <Row>
        <Col sm={7}>
          <MyCard>
            <MyCardHeader>Create Case Log Form</MyCardHeader>
            <MyCardBody>
              <Form onSubmit={submitHandler} id="form">
                <Form.Group className="mb-3" controlId="formBasicGender">
                  <Form.Label>Case Name</Form.Label>
                  <Form.Text className="text-muted">
                    *Select the Case Name
                  </Form.Text>
                  <div className="dropdown-container">
                    <Select
                      options={optionList}
                      placeholder="Select the case"
                      value={selectedOption}
                      onChange={handleSelect}
                      isSearchable={true}
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCaseName">
                  <Form.Label>Case log name</Form.Label>
                  <Form.Text className="text-muted">
                    *name of the case log
                  </Form.Text>
                  <Form.Control
                    type="text"
                    placeholder="eg. 1st meeting "
                    onChange={(e) => setLogName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="caseDescription">
                  <Form.Label>Case log description</Form.Label>
                  <Form.Text className="text-muted">
                    *brief description about the case
                  </Form.Text>
                  <Form.Control
                    size="sm"
                    as="textarea"
                    rows={8}
                    placeholder="eg. can we get a first meeting to talk about this case briefly"
                    onChange={(e) => setLogDescription(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Label>Case log Documents</Form.Label>
                  <Form.Text className="text-muted">
                    *documents related to the Case log
                  </Form.Text>
                  <Form.Control
                    type="file"
                    size="sm"
                    style={{ padding: "0.05rem 0.3rem 0.2rem 0.3rem" }}
                    onChange={(e) => setCaseLogDoc(e.target.files[0])}
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
export default CreateCaseLogs;
