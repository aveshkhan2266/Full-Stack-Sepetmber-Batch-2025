import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import {
    getProducts,
    getProductsByCategory,
} from "../../api/Services";


function ProductGridWithPagination() {

    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { slug } = useParams();


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
    }, [slug]);

    if (loading) {
        return (<div className="text-center py-5"> <p>Loading products... </p></div>);
    }
    if (error) {
        return (<div className="text-center py-5">
            <p className="text-danger">Failed to load products.</p></div>);
    }

    return (
        <div className="product-grid-wrapper">

            <Row className="g-4 mt-2">
                {listProducts.map((item) => (
                    <Col xs={12} sm={6} md={4} key={item.id}>
                        <ProductCard product={item} />
                    </Col>
                ))}
            </Row>

            {listProducts.length === 0 && (
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