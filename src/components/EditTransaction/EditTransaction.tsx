import React, { FC, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";
import InputGroup from "react-bootstrap/InputGroup";
import { useForm, SubmitHandler } from "react-hook-form";

import { Tag, PayMethod } from "../../types/transactions.type";
import { useAppDispatch } from "../../app/hooks";
import { closeEditWindow } from "../../store/expensesPageSlice";
import showError from "../../utils/showError";
import { Transaction } from "../../types/transactions.type";

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

const EditTransaction: FC<Props> = ({ date, transaction }) => {
  const [open, setOpen] = useState(true);

  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      date,
      ...transaction,
    },
  });

  const handleSave: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(closeEditWindow());
  };

  const handleDelete = () => {
    console.log("delete", transaction.id);
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
            <Button type="submit" variant="success">
              Save
            </Button>
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditTransaction;
