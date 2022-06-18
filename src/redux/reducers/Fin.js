import { CREATE_TRANSACTION } from "../../@jumbo/constants/ActionTypes";

const INIT_STATE = {
  transactions: {},
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CREATE_TRANSACTION: {
      const transaction = action.payload;
      const date = transaction.date;

      if (typeof state.transactions[date] === "undefined")
        state.transactions[date] = [];

      return {
        ...state,
        transactions: {
          ...state.transactions,
          [date]: state.transactions[date].concat(transaction),
        },
      };
    }
    default:
      return state;
  }
};
