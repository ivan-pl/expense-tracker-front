import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { Auth } from "firebase/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import { useAppDispatch } from "../../app/hooks";
import { addToStorageAndStore } from "../../store/userSlice";

interface Props {
  onSignUp: () => void;
  auth: Auth;
}

type Inputs = {
  email: string;
  password: string;
};

const SignIn: FC<Props> = ({ onSignUp, auth }) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const [signInWithEmailAndPassword, userCredential, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  if (userCredential) {
    const { user } = userCredential;
    user.getIdToken().then((token) => {
      dispatch(addToStorageAndStore({ token, uid: user.uid }));
      navigate("/");
    });
  }

  return (
    <Form
      className="m-4 col-10 col-md-5 mx-md-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      {error && <Alert variant="danger">{error.message}</Alert>}
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2} md={3}>
          Email
        </Form.Label>
        <Col sm={10} md={9}>
          <Form.Control
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Please enter a valid email",
              },
            })}
          />
        </Col>
        {errors.email && (
          <Form.Text className="text-danger">{errors.email.message}</Form.Text>
        )}
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2} md={3}>
          Password
        </Form.Label>
        <Col sm={10} md={9}>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password should be at-least 6 characters.",
              },
            })}
          />
        </Col>
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }} md={{ span: 9, offset: 3 }}>
          {loading ? (
            <Button type="submit" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            </Button>
          ) : (
            <Button type="submit">Sign In</Button>
          )}
        </Col>
      </Form.Group>
      <p className="text-center">
        Not a member?{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onSignUp();
          }}
        >
          Sign Up
        </a>
      </p>
    </Form>
  );
};

export default SignIn;
