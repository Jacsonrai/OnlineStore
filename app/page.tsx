"use client";
import React, { useEffect } from "react";
import HomeLayout from "@/app/components/layout/home/homeLayout";
import { categoryData } from "@/app/mockData/index";
// import { useSelector, useDispatch } from "react-redux";
import { useGetCategoryHooks } from "@/app/hooks/categoryHooks/useCategoryHooks";
import { useSelector, useDispatch } from "react-redux";
import {
  categorySuccess,
  categoryFailure,
  categoryLoading,
} from "@/app/redux/category/categorySlice";

export default function Home() {
  const dispatch = useDispatch();
  const category = useSelector((state: any) => state.category.data);
  const loading = useSelector((state: any) => state.category.loading);
  const error = useSelector((state: any) => state.category.error);

  const {
    categoryData,
    isError: categoryError,
    isLoading,
  } = useGetCategoryHooks();

  useEffect(() => {
    if (categoryData) {
      dispatch(categorySuccess(categoryData));
      dispatch(categoryLoading(false));
      dispatch(categoryFailure(null));
    }
    if (categoryError) {
      dispatch(categoryLoading(false));
      dispatch(categoryFailure(categoryError));
    }
  }, [categoryData, categoryError, dispatch]);

  return <HomeLayout categoryData={categoryData?.data} />;
}
