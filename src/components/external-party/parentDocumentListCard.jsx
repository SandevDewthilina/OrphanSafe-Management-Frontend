import { Form, Table, Row, Col, Button } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../../components/MyCard";
import { useGetChildDocUrlMutation } from "../../slices/profileApiSlice";
import { toast } from "react-toastify";

const parentDocumentListCard = (props) => {
  const [loadUrl, { isError }] = useGetChildDocUrlMutation();
  const ClickView = async (type) => {
    const response = await loadUrl(`parentFiles/${props.parentId}/${type}/`);
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
            <MyCardHeader>Parents Documents</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table hover style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td className="td">Birth Certificate of Mother</td>
                      <td className="td">
                      <Button
                          variant="outline-primary"
                          onClick={() => ClickView("MothersBirthCertificate")}
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Birth Certificate of Father</td>
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
                      <td className="td">Soft copy of NIC of Mother</td>
                      <td className="td">
                      <Button
                          variant="outline-primary"
                          onClick={() => ClickView("NICDocMother")}
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Soft copy of NIC of Father</td>
                      <td className="td">
                      <Button
                          variant="outline-primary"
                          onClick={() => ClickView("NICDocFather")}
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Marriage Certificate</td>
                      <td className="td">
                      <Button
                          variant="outline-primary"
                          onClick={() => ClickView("MarriageCertificate")}
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Residence Certificate</td>
                      <td className="td">
                      <Button
                          variant="outline-primary"
                          onClick={() => ClickView("ResidenceCertificate")}
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Salary Paysheet</td>
                      <td className="td">
                      <Button
                          variant="outline-primary"
                          onClick={() => ClickView("SalaryPaySheet")}
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

export default parentDocumentListCard;
