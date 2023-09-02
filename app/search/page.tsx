"use client";
import React, { useEffect } from "react";
import SearchLayout from "@/app/components/layout/search/searchLayout";
import { useGetProductHooks } from "@/app/hooks/productHooks/useProductHooks";
import {
  productFailure,
  productLoading,
  productSuccess,
} from "@/app/redux/product/productSlice";
import { useSelector, useDispatch } from "react-redux";
const Search = () => {
  const dispatch = useDispatch();
  //product state from redux
  const product = useSelector((state: any) => state.product.data);
  const productLoadingState = useSelector(
    (state: any) => state.product.loading
  );
  const productErrorState = useSelector((state: any) => state.product.error);

  const {
    productData,
    isLoading: productLoadings,
    isError: productError,
  } = useGetProductHooks();
  useEffect(() => {
    if (productLoadings) {
      dispatch(productLoading(true));
      dispatch(productSuccess([]));
      dispatch(productFailure(null));
    }
    if (productData) {
      dispatch(productSuccess(productData));
      dispatch(productLoading(false));
      dispatch(productFailure(null));
    }
    if (productError) {
      dispatch(productLoading(false));
      dispatch(productFailure(productError));
    }
  }, [dispatch, productData, productError, productLoadings]);
  return <SearchLayout productData={product?.data} />;
};

export default Search;
