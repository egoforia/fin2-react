import { CREATE_TRANSACTION } from "@jumbo/constants/ActionTypes";

export const createTransaction = (transaction) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_TRANSACTION,
      payload: transaction,
    });
  };
};
