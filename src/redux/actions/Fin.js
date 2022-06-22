import {
  CREATE_TRANSACTION,
  GET_ALL_CATEGORIES,
} from "@jumbo/constants/ActionTypes";

export const createTransaction = (transaction) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_TRANSACTION,
      payload: transaction,
    });
  };
};

export const getAllCategoriesSuccess = (categories) => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: categories,
    });
  };
};
