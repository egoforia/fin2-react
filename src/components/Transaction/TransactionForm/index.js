import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "redux/actions/Fin";

const TransactionForm = ({ onSubmit, date }) => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.finReducer);

  const defaultTransaction = {
    amount: "",
    category_id: null,
    date: date.format("DD/MM/YYYY"),
  };

  const [initialValues, setInitialValues] = useState(defaultTransaction);

  const internalOnSubmit = (form) => {
    dispatch(createTransaction(form));

    if (typeof onSubmit === "function") onSubmit();
  };

  const validate = () => {};

  return (
    <Form
      onSubmit={internalOnSubmit}
      validate={validate}
      initialValues={initialValues}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Box hidden>
            <Field name="date" type="hidden">
              {(props) => (
                <TextField
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                  type={props.input.type}
                />
              )}
            </Field>
          </Box>
          <Box display="flex" justifyContent="space-between" gridGap="1rem">
            <Field name="amount" type="text">
              {(props) => (
                <TextField
                  fullWidth
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                  type={props.input.type}
                  variant="outlined"
                  label="amount"
                  required={true}
                />
              )}
            </Field>
            <Field name="category_id">
              {(props) => (
                <TextField
                  fullWidth={true}
                  select={true}
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                  variant="outlined"
                  label="category"
                  required={true}
                >
                  <MenuItem value="">
                    <em>Choose a category</em>
                  </MenuItem>
                  {categories?.length &&
                    categories.map((category, index) => (
                      <MenuItem key={index} value={category.id}>
                        {category.name}
                      </MenuItem>
                    ))}
                </TextField>
              )}
            </Field>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              style={{ minWidth: "auto" }}
            >
              <Typography variant="subtitle2">Salvar</Typography>
            </Button>
          </Box>
        </form>
      )}
    />
  );
};

export default TransactionForm;
