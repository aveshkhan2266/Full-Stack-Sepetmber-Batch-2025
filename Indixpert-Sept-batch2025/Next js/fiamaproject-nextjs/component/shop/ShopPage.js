"use client";
import { Suspense } from "react";
import { Row, Col, Container } from "react-bootstrap";
import BreadcrumbBanner from "../common/BreadcrumbBanner";
import CategoryList from "./CategoryList";
import ProductGridWithPagination from "./ProductGridWithPagination";

function Shop() {
    return (
        <>
            <BreadcrumbBanner />

            <Container>
                <Row className="mt-5">
                    {/* Products - first on medium/small, second on large */}
                    <Col lg={9} order="1" className="order-lg-2">
                        <Suspense fallback={<div className="text-center py-5">Loading products...</div>}>
                            <ProductGridWithPagination />
                        </Suspense>
                    </Col>

                    {/* Categories - below products on medium/small, left on large */}
                    <Col lg={3} order="2" className="order-lg-1">
                        <CategoryList />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Shop;