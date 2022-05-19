import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

import LoginForm from "./components/LoginForm";

export default function Login() {
  return (
    <div className="bg-skyblue">
      <Col md={{ span: 4, offset: 4 }} className="col-center">
        <Card className="card-shadow w-100 bg-lightBlue" style={{ maxWidth: '400px' }}>
          <Card.Body>
            <h2 className="text-center mb-4">Sign in</h2>

            <LoginForm/>

            <div className="w-100 text-center mt-2">
              New user? <Link to="/signup">Sign up</Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
