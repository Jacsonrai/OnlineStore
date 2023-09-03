import { combineReducers } from "redux";
import categorySlice from "@/app/redux/category/categorySlice";
import productSlice from "@/app/redux/product/productSlice";
import searchSlice from "@/app/redux/search/searchSlice";
import drawerSlice from "@/app/redux/drawer/drawerSlice";
import cartSlice from "@/app/redux/cart/cartSlice";

const rootReducer = combineReducers({
  category: categorySlice,
  product: productSlice,
  search: searchSlice,
  drawer: drawerSlice,
  cart: cartSlice,
});
export default rootReducer;
