import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const TransactionItem = ({ transaction }) => {
  const { categories } = useSelector((state) => state.finReducer);

  const getCategory = (category_id) => {
    if (categories?.length)
      return categories.find((category) => {
        return category.id == category_id;
      });
    else return null;
  };

  return (
    <Box display="flex">
      <Typography variant="subtitle2">{transaction.amount}</Typography>
      <Typography variant="subtitle2">
        {getCategory(transaction.category_id)?.name}
      </Typography>
    </Box>
  );
};

export default TransactionItem;
