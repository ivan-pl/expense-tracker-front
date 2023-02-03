import React from "react";
import Form from "react-bootstrap/Form";
import { FieldError } from "react-hook-form";

export default function showError(err?: FieldError): React.ReactElement | null {
  return err ? (
    <Form.Text className="text-danger">{err.message}</Form.Text>
  ) : null;
}
