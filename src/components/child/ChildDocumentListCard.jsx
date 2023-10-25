import { Form, Table, Row, Col, Button } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../../components/MyCard";
import { useGetChildDocUrlMutation } from "../../slices/profileApiSlice";
import { toast } from "react-toastify";

const ChildDocumentListCard = (props) => {
  const [loadUrl, { isError }] = useGetChildDocUrlMutation();
  const ClickView = async (type) => {
    const response = await loadUrl(`childFiles/${props.childId}/${type}/`);
    console.log(response);
    if (isError) toast.error("sorry, request failed!");
    try{
      window.open(response.data.url[0].url, "_blank");
    } catch (e) {
      toast.error('Sorry, file cannot be accessed')
    }
  };

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
                        <Button
                          variant="outline-primary"
                          onClick={() => ClickView("MedicalDoc")}
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Medical Report</td>
                      <td className="td">
                        <Button
                          variant="outline-primary"
                          onClick={() =>
                            ClickView("ChildProtectionCertificate")
                          }
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Mother's Birth Certificate</td>
                      <td className="td">
                        <Button
                          variant="outline-primary"
                          onClick={() => ClickView("BirthCertificate")}
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Father's Birth Certificate</td>
                      <td className="td">
                        <Button
                          variant="outline-primary"
                          onClick={() => ClickView("FathersBirthCertificate")}
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">
                        Child Protection Authority Certififcate
                      </td>
                      <td className="td">
                        <Button
                          variant="outline-primary"
                          onClick={() =>
                            ClickView("ChildProtectionCertificate")
                          }
                        >
                          View
                        </Button>
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

export default ChildDocumentListCard;
