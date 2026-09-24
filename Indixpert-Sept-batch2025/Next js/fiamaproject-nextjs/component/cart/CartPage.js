"use client";
import BreadcrumbBanner from "../common/BreadcrumbBanner";
import CartTable from "./CartTable";
import CartTotals from "./CartTotals";

function Cart() {
    ;
    return (
        <>
            <BreadcrumbBanner />
            <CartTable />
            <CartTotals />
        </>

    );
}
export default Cart