"use client";
import React, { useEffect } from "react";
import HomeLayout from "@/app/components/layout/home/homeLayout";

import { useGetCategoryHooks } from "@/app/hooks/categoryHooks/useCategoryHooks";
import { useGetProductHooks } from "@/app/hooks/productHooks/useProductHooks";
import { useSelector, useDispatch } from "react-redux";
import {
  categorySuccess,
  categoryFailure,
  categoryLoading,
} from "@/app/redux/category/categorySlice";
import {
  productFailure,
  productLoading,
  productSuccess,
} from "@/app/redux/product/productSlice";

export default function Home() {
  const dispatch = useDispatch();
  //category state from redux
  const category = useSelector((state: any) => state.category.data);
  const categoryLoadingState = useSelector(
    (state: any) => state.category.loading
  );
  const categoryErrorState = useSelector((state: any) => state.category.error);
  //product state from redux
  const product = useSelector((state: any) => state.product.data);
  const productLoadingState = useSelector(
    (state: any) => state.product.loading
  );
  const productErrorState = useSelector((state: any) => state.product.error);

  const {
    categoryData,
    isError: categoryError,
    isLoading,
  } = useGetCategoryHooks();

  const {
    productData,
    isLoading: productLoadings,
    isError: productError,
  } = useGetProductHooks();

  useEffect(() => {
    if (isLoading) {
      dispatch(categoryLoading(true));
      dispatch(categorySuccess([]));
      dispatch(categoryFailure(null));
    }
    if (categoryData) {
      dispatch(categorySuccess(categoryData));
      dispatch(categoryLoading(false));
      dispatch(categoryFailure(null));
    }
    if (categoryError) {
      dispatch(categoryLoading(false));
      dispatch(categoryFailure(categoryError));
    }
  }, [categoryData, categoryError, dispatch, isLoading]);

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

  return (
    <HomeLayout
      categoryData={category?.data}
      categoryLoading={categoryLoadingState}
      categoryError={categoryErrorState}
      productData={product?.data}
    />
  );
}
