import React, { FC, useState } from "react";
import Container from "react-bootstrap/Container";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import Modal from "react-bootstrap/Modal";

const Auth: FC = () => {
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <Container>
      <SignIn onSignUp={() => setOpenSignUp(true)} />
      <Modal show={openSignUp} onHide={() => setOpenSignUp(false)}>
        <Modal.Header closeButton>Sign Up</Modal.Header>
        <Modal.Body>
          <SignUp />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Auth;
