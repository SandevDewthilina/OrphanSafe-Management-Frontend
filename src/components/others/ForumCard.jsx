import { useEffect, useState } from "react";
import "../../assets/css/staff/forum.css";
import { Col, Form, Row } from "react-bootstrap";
import { useGetChatQuery, useChatMutation } from "../../slices/adminApiSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ForumCard = () => {
  const chatData = useGetChatQuery();
  const [pushChat, { isError }] = useChatMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const [message, setMessage] = useState("");

  const sendChat = async () => {
    await pushChat({
      from: userInfo.userId,
      to: userInfo.userId,
      content: message,
    });
    if (isError) {
      toast.error("couldn't send chat");
    }
    setMessage("");
    chatData.refetch();
  };

  useEffect(() => {
    if (chatData.isSuccess) {
      // Get a reference to your div element
      const myDiv = document.getElementById("scrollview");

      // Scroll to the bottom
      myDiv.scrollTop = myDiv.scrollHeight;
    }
  }, [chatData.data]);

  useEffect(() => {
    setInterval(() => {
      chatData.refetch()
    }, 2000);
  },[])

  return (
    <div className="background">
      <h1 className="name-headers">Public Forum</h1>
      <div className="container-card">
        <Row>
          <Col>
            <div className="card-head-text">User ID: {userInfo.userId}</div>
            <div className="card-head-text">User Name: {userInfo.email}</div>
          </Col>
        </Row>
        <div className="divider"></div>
        {chatData.isError && (
          <Col className="text-center">
            <strong>Unexpected Error occured Sorry! :(</strong>
          </Col>
        )}
        {chatData.isLoading && <Col className="text-center">Loading Data!</Col>}
        {chatData.isSuccess && (
          <div
            id="scrollview"
            style={{
              maxHeight: "500px",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            {chatData.data.map((chat) => (
              <Row key={chat.Id}>
                <Col className="">
                  <div className="message">
                    <div
                      className={
                        chat.From === userInfo.userId ? "send" : "reply mr-4"
                      }
                    >
                      <div className="msg-text">{chat.Content}</div>
                    </div>
                    <div className="date">
                      {chat.Timestamp.toString().replace("T", " ")}
                    </div>
                  </div>
                </Col>
              </Row>
            ))}
          </div>
        )}

        <div className="divider"></div>
        <div className="start-chat">
          <Form.Label>Start a Topic</Form.Label>
          <Row>
            <Col lg={10}>
              <Form.Control
                type="text"
                placeholder="Discribe your topic"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Col>
            <Col lg={2}>
              <button className="my-btn mr-2" onClick={sendChat}>
                send
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ForumCard;
