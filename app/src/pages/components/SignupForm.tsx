import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';

import { admin_signup } from '../../api';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      admin_signup(email, password)
        .then((res) => {
          navigate('../', { replace: true });
        })
        .catch((err) => {
          if (err.response && err.response.data.error.details) {
            return setError(err.response.data.error.details[0].message);
          }
          setError(err.response.data.error.message);
        });
    } catch {
      setError('Failed to create an account');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="user-form">
      {error && <Alert variant="danger">{error}</Alert>}

      <Form.Group id="email">
        <Form.Label>
          <FontAwesomeIcon icon={faEnvelope} size={'1x'} className="me-1" />
          Email
        </Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          required
        />
      </Form.Group>

      <Form.Group id="password">
        <Form.Label>
          <FontAwesomeIcon icon={faKey} size={'1x'} className="me-1" />
          Password
        </Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        />
      </Form.Group>

      <Form.Group id="password-confirm">
        <Form.Label>
          <FontAwesomeIcon icon={faKey} size={'1x'} className="me-1" />
          Confirm Password
        </Form.Label>
        <Form.Control
          type="password"
          value={passwordConfirm}
          onChange={(event) => {
            setPasswordConfirm(event.target.value);
          }}
          required
        />
      </Form.Group>

      <Button className="w-50 mt-3" type="submit">
        Sign Up
      </Button>
    </Form>
  );
}
