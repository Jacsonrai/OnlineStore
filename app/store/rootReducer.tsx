import { combineReducers } from "redux";
import categorySlice from "@/app/redux/category/categorySlice";
import productSlice from "@/app/redux/product/productSlice";
import searchSlice from "@/app/redux/search/searchSlice";

const rootReducer = combineReducers({
  category: categorySlice,
  product: productSlice,
  search: searchSlice,
});
export default rootReducer;
