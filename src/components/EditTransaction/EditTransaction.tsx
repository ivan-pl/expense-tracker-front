import React, { FC, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";
import Spinner from "react-bootstrap/Spinner";
import InputGroup from "react-bootstrap/InputGroup";
import { useForm, SubmitHandler } from "react-hook-form";

import { Tag, PayMethod } from "../../types/transactions.type";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { closeEditWindow } from "../../store/expensesPageSlice";
import showError from "../../utils/showError";
import { Transaction } from "../../types/transactions.type";
import updateTransaction from "../../api/updateTransaction";
import { selectUserCredentials } from "../../store/userSelectors";

interface Inputs {
  date: string;
  tag: Tag;
  payMethod: PayMethod;
  comment: string;
  amount: string;
}

interface Props {
  transaction: Transaction;
  date: string;
}

const EditTransaction: FC<Props> = ({
  date: initialDate,
  transaction: initialTransaction,
}) => {
  const [open, setOpen] = useState(true);
  const [loadingSave, setLoadingSave] = useState(false);

  const dispatch = useAppDispatch();
  const { uid, token } = useAppSelector(selectUserCredentials);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      date: initialDate,
      ...initialTransaction,
    },
  });

  const handleSave: SubmitHandler<Inputs> = (data) => {
    const { date, ...transaction } = data;
    setLoadingSave(true);
    updateTransaction(
      { ...transaction, id: initialTransaction.id },
      date,
      uid,
      token
    ).then((updatedTransaction) => {
      
    });
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(closeEditWindow());
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <Modal show={open} onHide={handleClose}>
      <Modal.Header>Edit transaction</Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit(handleSave)}>
          <Form.Group className="mb-3 col-6">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              {...register("date", { required: "Date is required" })}
            />
            {showError(errors.date)}
          </Form.Group>

          <Stack direction="horizontal" className="mb-3" gap={4}>
            <Form.Group as={Col}>
              <Form.Label>Pay method</Form.Label>
              <Form.Select {...register("payMethod", { required: true })}>
                {Object.keys(PayMethod).map((payMethodName) => (
                  <option key={payMethodName} value={payMethodName}>
                    {payMethodName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Tag</Form.Label>
              <Form.Select {...register("tag", { required: true })}>
                {Object.keys(Tag).map((tagName) => (
                  <option key={tagName} value={tagName}>
                    {tagName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Stack>

          <Form.Group>
            <Form.Label>Amount</Form.Label>
            <InputGroup>
              <InputGroup.Text>RUB</InputGroup.Text>
              <Form.Control
                placeholder="0"
                type="number"
                {...register("amount", { required: "Amount is required" })}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <Form.Label>Comment</Form.Label>
            <Form.Control
              placeholder="Any comment"
              type="text"
              {...register("comment")}
            />
          </Form.Group>

          <Stack className="mt-5" direction="horizontal" gap={3}>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>

            <Button
              variant="secondary"
              onClick={handleClose}
              className="ms-auto"
            >
              Close
            </Button>
            {loadingSave ? (
              <Button type="submit" variant="success" disabled>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              </Button>
            ) : (
              <Button type="submit" variant="success">
                Save
              </Button>
            )}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditTransaction;
