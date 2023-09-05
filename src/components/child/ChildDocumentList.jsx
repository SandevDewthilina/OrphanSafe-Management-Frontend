import React from "react";
import { Form, Table, Row, Col } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../../components/MyCard";
import "../../assets/css/child/child.css";
import ViewButton from "../Button";

const ChildDocumentList = () => {
  return (
    <div>
      <Row>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>child Documents</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table hover style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td className="td">Birth Certificate</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          <ViewButton />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Medical Report</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          <ViewButton />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Mother's Birth Certificate</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          <ViewButton />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Father's Birth Certificate</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          <ViewButton />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">
                        Child Protection Authority Certififcate
                      </td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          <ViewButton />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Form>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>
    </div>
  );
};

export default ChildDocumentList;