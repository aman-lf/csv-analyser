import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import SignupForm from './components/SignupForm';

export default function Signup() {
  return (
    <div className="bg-skyblue">
      <Col md={{ span: 4, offset: 4 }} className="col-center">
        <Card className="card-shadow w-100">
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>

            <SignupForm />

            <div className="w-100 text-center mt-2">
              Already a user? <Link to="/signin">Sign In</Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
