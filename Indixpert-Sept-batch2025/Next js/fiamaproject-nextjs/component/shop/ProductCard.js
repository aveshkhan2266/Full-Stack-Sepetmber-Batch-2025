"use client";
import React, { useState } from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Eye } from 'react-bootstrap-icons';
import Link from 'next/link';
import AddToWishlistRedux from '../Wishlist/AddToWishlistRedux';
import AddToCartRedux from '../cart/AddTocartRedux';
import QuickViewModal from '../productdetail/QuickViewModal';
import productImage1 from '../../assets/image/1.webp';
import productImage2 from '../../assets/image/2.webp';
import productImage3 from '../../assets/image/3.webp';
import productImage4 from '../../assets/image/4.webp';
import productImage5 from '../../assets/image/5.webp';
import productImage6 from '../../assets/image/6.webp';
import productImage7 from '../../assets/image/7.webp';
import productImage8 from '../../assets/image/8.webp';


const fallbackImages = [
    productImage1,
    productImage2,
    productImage3,
    productImage4,
    productImage5,
    productImage6,
    productImage7,
    productImage8,
];

const ProductCard = ({ product }) => {
    const [showQuickView, setShowQuickView] = useState(false);
    const [imageSource, setImageSource] = useState(
        product.images?.[0] || product.thumbnail || fallbackImages[0]
    );

    const handleQuickView = (event) => {
        event.stopPropagation();
        setShowQuickView(true);
    };

    return (
        <>
            <Card className="flower-card text-center position-relative border-0 rounded-0">

                {product.rating && (
                    <Badge className="py-2 px-3 mt-4 fw-bold rounded-0 bg-accent rounded-end position-absolute top-0 start-0">
                        {product.rating}
                    </Badge>
                )}

                <Link href={`/product/${product.id}`} className="d-block">
                    <Card.Img
                        variant="top"
                        src={imageSource}
                        alt={product.title}
                        className="flower-card-img rounded-0"
                        onError={() => {
                            const fallbackImage = fallbackImages[(product.id - 1) % fallbackImages.length];
                            if (imageSource !== fallbackImage) {
                                setImageSource(fallbackImage);
                            }
                        }}
                    />
                </Link>

                <div className="hover-cart d-flex align-items-center p-0">

                    <div className="px-3 py-2 wishlist-btn">
                        <AddToWishlistRedux product={product} />
                    </div>

                    <AddToCartRedux product={product} />

                    <div className="px-3 py-2 Search-btn">
                        <Eye
                            className="text-white"
                            onClick={handleQuickView}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>

                </div>
            </Card>

            <div className="text-center mt-3">

                <Link
                    href={`/product/${product.id}`}
                    className="text-decoration-none"
                >
                    <h6 className="mb-1 text-uppercase text-secondary fw-normal">
                        {product.title}
                    </h6>
                </Link>

                <p className="fw-semibold text-color mb-0">
                    {product.price}{' '}

                    {product.discountPercentage && (
                        <span className="text-lighter small-size text-decoration-line-through fw-semibold">
                            {product.discountPercentage}
                        </span>
                    )}
                </p>

            </div>

            <QuickViewModal
                show={showQuickView}
                handleClose={() => setShowQuickView(false)}
                product={product}
            />
        </>
    );
};

export default ProductCard;