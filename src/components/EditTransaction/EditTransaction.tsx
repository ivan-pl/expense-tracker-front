import React, { FC } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm, SubmitHandler } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectEditWindow } from "../../store/expensesPageSelectors";
import { closeEditWindow } from "../../store/expensesPageSlice";
import { Transaction } from "../../types/transactions.type";

interface Inputs {
  date: string;
}

const EditTransaction: FC = () => {
  const { date, isEditWindowOpened, transaction } =
    useAppSelector(selectEditWindow);

  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();

  const handleSave: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const handleClose = () => {
    dispatch(closeEditWindow());
  };

  return (
    <Modal show={isEditWindowOpened} onHide={handleClose}>
      <Modal.Header>Edit transaction</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(handleSave)}>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              defaultValue={date!}
              {...register("date")}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>

        <Button type="submit" variant="success">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTransaction;
