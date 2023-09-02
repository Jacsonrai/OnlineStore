import { combineReducers } from "redux";
import categorySlice from "@/app/redux/category/categorySlice";

const rootReducer = combineReducers({
  category: categorySlice,
});
export default rootReducer;
