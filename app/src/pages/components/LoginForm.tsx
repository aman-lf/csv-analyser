import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';
import { Alert, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

import { admin_signin } from '../../api';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      setError('');
      admin_signin(email, password)
        .then((res: AxiosResponse) => {
          localStorage.setItem('token', res.data.data.token);
          navigate('../', { replace: true });
        })
        .catch((err: AxiosError) => {
          if (err.response && err.response.data.error.details) {
            return setError(err.response.data.error.details[0].message)
          }

          return err.response && setError(err.response.data.error.message);
        });
    } catch {
      setError('Failed to log in');
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

      <Button className="w-50 mt-3" type="submit">
        Sign In
      </Button>
    </Form>
  );
}
