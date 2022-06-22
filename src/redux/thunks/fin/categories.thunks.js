import { fetchError } from "redux/actions";
import { getAllCategoriesSuccess } from "redux/actions/Fin";
import CategoriesApi from "services/api/apps/fin/categories.api";

export const getAllCategories = (dispatch) => {
  CategoriesApi.getAll()
    .then((response) => {
      dispatch(getAllCategoriesSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchError(error.message));
    });
};
