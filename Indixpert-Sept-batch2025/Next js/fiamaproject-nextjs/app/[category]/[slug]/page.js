"use client";
import { Suspense } from "react";
import ProductDetails from "../../../component/productdetail/ProductDetails";

export default function Page() {
  return <Suspense fallback={null}><ProductDetails /></Suspense>;
}
