"use client";
import React from "react";
import { useParams } from "next/navigation";
import ProductLayout from "@/app/components/layout/product/productLayout";
import { useSingleProductHooks } from "@/app/hooks/productHooks/useSingleProductHooks";
const Product = () => {
  const router = useParams();
  const { productDetails, isLoading, isError } = useSingleProductHooks(
    router.product
  );

  return <ProductLayout productData={productDetails?.data} />;
};

export default Product;
