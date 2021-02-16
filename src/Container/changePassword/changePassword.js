import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./changePassword.css";

class ChangePassword extends Component {
  render() {
    return (
      <Card style={{ marginLeft: "25%", marginTop: "8%", marginBottom: "5%", width: "100rem" }}>
        <Form>
          <Form.Group controlId="formGroupOldPassword">
            <Form.Label>Old Password</Form.Label>
            <Form.Control type="password" placeholder="Type password" />
          </Form.Group>
          <Form.Group controlId="formGroupNewPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="Type password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Change Password
          </Button>
        </Form>
      </Card>
    );
  }
}
export default ChangePassword;
