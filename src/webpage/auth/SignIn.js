import axios from "axios";
import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

const SignIn = () => {
 
    /** When user signs in  */

    const setCurrentUser = useSetCurrentUser();
    const [SignIn, SetSignIn] = useState({
      username: "",
      password: "",
    });
    const { username, password } = SignIn;

    
    const [error, setError] = useState({});

    const submitForm = async (event) => {
      event.preventDefault();
      try {
        const { data } = await axios.post("/dj-rest-auth/login/", SignIn);
        setCurrentUser(data.user);
      } catch (err) {
        setError(err.response?.data);
      }
    };

    const handleInput = (event) => {
      SetSignIn({
        ...SignIn,
        [event.target.name]: event.target.value,
      });
    };

    return (
      <div>
        <Form onSubmit={submitForm}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              name="username"
              onChange={handleInput}
            />
          </Form.Group>
          {error.username?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={handleInput}
            />
          </Form.Group>

          {error.password?.map((message, idx) =>
                  <Alert variant="warning" key={idx}> {message} </Alert>

                )}
          <Button variant="primary" type="submit" >
                Log in
              </Button>

          {error.non_field_errors?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Form>
      </div>
    );
  
};

export default SignIn;
