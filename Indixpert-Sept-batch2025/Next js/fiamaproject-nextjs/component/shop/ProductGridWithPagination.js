"use client";
import React, { useEffect, useState } from "react";
import { Row, Col, Pagination } from "react-bootstrap";
import { useParams, useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import {
    getProducts,
    getProductsByCategory,
} from "../../api/Services";


function ProductGridWithPagination() {

    const [listProducts, setListProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { slug } = useParams();
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("search")?.trim() || "";
    const productsPerPage = 12;


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);
                let data;
                if (slug) {
                    data = await getProductsByCategory(slug);
                } else {
                    data = await getProducts();
                }
                setListProducts(data.products);

            } catch (error) {
                console.log(error);
                setError(error);
                setListProducts([]);

            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
        setCurrentPage(1);
    }, [slug]);

    const filteredProducts = listProducts.filter((product) => {
        if (!searchQuery) return true;

        const searchableText = [
            product.title,
            product.category,
            product.description,
            ...(product.tags || []),
        ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

        return searchableText.includes(searchQuery.toLowerCase());
    });

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const firstProductIndex = (currentPage - 1) * productsPerPage;
    const visibleProducts = filteredProducts.slice(
        firstProductIndex,
        firstProductIndex + productsPerPage
    );

    const changePage = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (loading) {
        return (<div className="text-center py-5"> <p>Loading products... </p></div>);
    }
    if (error) {
        return (<div className="text-center py-5">
            <p className="text-danger">Failed to load products.</p></div>);
    }

    return (
        <div className="product-grid-wrapper">

            {searchQuery && filteredProducts.length === 0 && (
                <div className="text-center py-5">
                    <h5>Item not found</h5>
                    <p className="text-muted mb-0">
                        No product matches &quot;{searchQuery}&quot;.
                    </p>
                </div>
            )}

            <Row className="g-4 mt-2">
                {visibleProducts.map((item) => (
                    <Col xs={12} sm={6} md={4} key={item.id}>
                        <ProductCard product={item} />
                    </Col>
                ))}
            </Row>

            {totalPages > 1 && (
                <Pagination className="custom-pagination justify-content-center mt-5">
                    <Pagination.First
                        onClick={() => changePage(1)}
                        disabled={currentPage === 1}
                    />
                    <Pagination.Prev
                        onClick={() => changePage(currentPage - 1)}
                        disabled={currentPage === 1}
                    />
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                        (page) => (
                            <Pagination.Item
                                key={page}
                                active={page === currentPage}
                                onClick={() => changePage(page)}
                            >
                                {page}
                            </Pagination.Item>
                        )
                    )}
                    <Pagination.Next
                        onClick={() => changePage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    />
                    <Pagination.Last
                        onClick={() => changePage(totalPages)}
                        disabled={currentPage === totalPages}
                    />
                </Pagination>
            )}

            {!searchQuery && listProducts.length === 0 && (
                <div className="text-center py-5">
                    <p>
                        No products found.
                    </p>
                </div>
            )}

        </div>
    );
}
export default ProductGridWithPagination;