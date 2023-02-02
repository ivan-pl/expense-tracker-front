import React, { FC, useState } from "react";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import { auth } from "../../app/firebase-config";

const Auth: FC = () => {
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <SignIn onSignUp={() => setOpenSignUp(true)} auth={auth} />
        <Modal show={openSignUp} onHide={() => setOpenSignUp(false)}>
          <Modal.Header closeButton>Sign Up</Modal.Header>
          <Modal.Body>
            <SignUp auth={auth} />
          </Modal.Body>
        </Modal>
      </Row>
    </Container>
  );
};

export default Auth;
