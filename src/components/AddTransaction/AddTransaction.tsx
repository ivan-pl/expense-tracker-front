import React, { FC, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

import formatDate from "../../utils/formatDate";
import { PayMethod, Tag, Transaction } from "../../types/transactions.type";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addToStorageAndStore } from "../../store/transactionsSlice";
import { selectUserCredentials } from "../../store/userSelectors";
import addTransaction from "../../api/addTransaction";
import "./AddTransaction.scss";

interface Props {
  className?: string;
}

const AddTransaction: FC<Props> = ({ className = "" }: Props) => {
  const dispatch = useAppDispatch();
  const { uid, token } = useAppSelector(selectUserCredentials);

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(formatDate(new Date()));
  const [tag, setTag] = useState(Tag.Food);
  const [payMethod, setPayMethod] = useState(PayMethod.Cash);
  const [comment, setComment] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const resetState = () => {
    setOpen(false);
    setDate(formatDate(new Date()));
    setTag(Tag.Food);
    setPayMethod(PayMethod.Cash);
    setComment("");
    setAmount("");
    setErrorMsg("");
  };

  const showModal = () => setOpen(true);

  const handleAdd = () => {
    setLoading(true);

    const transaction: Omit<Transaction, "id"> = {
      amount,
      tag,
      comment,
      payMethod,
    };

    addTransaction(uid, token, transaction, date)
      .then((id) => {
        dispatch(
          addToStorageAndStore({
            date,
            transaction: { ...transaction, id },
          })
        );
        resetState();
      })
      .catch((err: Error) => {
        setErrorMsg(err.message);
      })
      .finally(() => setLoading(false));
  };

  const handleClose = () => resetState();

  return (
    <>
      <button
        className={"add-transaction " + className}
        data-testid="add-transaction"
        onClick={showModal}
      >
        <span className="add-transaction__icon"></span>
      </button>

      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add expenses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
          <Form>
            <Form.Group controlId="formGridDate" className="mb-3 col-6">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formPayMethod">
                <Form.Label>Pay method</Form.Label>
                <Form.Select
                  value={payMethod}
                  onChange={(e) => setPayMethod(e.target.value as PayMethod)}
                >
                  {Object.keys(PayMethod).map((payMethodName) => (
                    <option key={payMethodName} value={payMethodName}>
                      {payMethodName}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formTag">
                <Form.Label>Tag</Form.Label>
                <Form.Select
                  value={tag}
                  onChange={(e) => setTag(e.target.value as Tag)}
                >
                  {Object.keys(Tag).map((tagName) => (
                    <option key={tagName} value={tagName}>
                      {tagName}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formAmount">
              <Form.Label>Amount</Form.Label>
              <InputGroup>
                <InputGroup.Text>RUB</InputGroup.Text>
                <Form.Control
                  placeholder="0"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formComment">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                placeholder="Any comment"
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          {isLoading ? (
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            </Button>
          ) : (
            <Button variant="success" onClick={handleAdd}>
              Add
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddTransaction;
