import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import TransactionForm from "components/Transaction/TransactionForm";
import TransactionItem from "components/Transaction/TransactionItem";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "redux/thunks/fin/categories.thunks";

const Fin = () => {
  const dispatch = useDispatch();

  const dates = [
    moment(),
    moment().subtract(1, "days"),
    moment().subtract(2, "days"),
    moment().subtract(3, "days"),
    moment().subtract(4, "days"),
  ];

  const onSubmit = () => {};

  const { transactions } = useSelector((state) => state.finReducer);

  getAllCategories(dispatch);

  const total = (transactions) => {
    if (transactions)
      return transactions.reduce(
        (partialSum, transaction) =>
          partialSum + parseFloat(transaction.amount),
        0
      );
    else return 0;
  };

  return (
    <Box>
      {dates.map((date, index) => (
        <Box key={index}>
          <Typography variant="caption">
            {date.format("DD MMM YY, ddd")} - total:{" "}
            {total(transactions[date.format("DD/MM/YYYY")])}
          </Typography>

          {transactions[date.format("DD/MM/YYYY")] &&
            transactions[date.format("DD/MM/YYYY")].map((transaction) => (
              <TransactionItem transaction={transaction} />
            ))}

          <TransactionForm date={date} onSubmit={onSubmit} />
        </Box>
      ))}
    </Box>
  );
};

export default Fin;
