import { combineReducers } from "redux";
import categorySlice from "@/app/redux/category/categorySlice";
import productSlice from "@/app/redux/product/productSlice";

const rootReducer = combineReducers({
  category: categorySlice,
  product: productSlice,
});
export default rootReducer;
