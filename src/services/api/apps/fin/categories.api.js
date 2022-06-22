import FinApi from ".";

class CategoriesApi {
  getAll = async () => FinApi().get("/categories");
}

export default new CategoriesApi();
