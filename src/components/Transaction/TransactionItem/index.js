import { Box, Typography } from "@material-ui/core";
import React from "react";

const TransactionItem = ({ transaction }) => {
  return (
    <Box display="flex">
      <Typography variant="subtitle2">{transaction.amount}</Typography>
      <Typography variant="subtitle2">{transaction.category_id}</Typography>
    </Box>
  );
};

export default TransactionItem;
