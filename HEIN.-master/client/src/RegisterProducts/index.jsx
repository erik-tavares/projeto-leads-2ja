import React, { useState } from "react";
import { Form, Button, ListGroup, Alert } from "react-bootstrap";

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    } else {
      setShowAlert(true);
    }
  };

  return (
    <div>
      <h1>Message Board</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formMessage">
          <Form.Label>Leave a message:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          Por Favor Insira Uma Mensagem!
        </Alert>
      )}
      <ListGroup>
        {messages.map((message, index) => (
          <ListGroup.Item key={index}>{message}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default MessageBoard;
