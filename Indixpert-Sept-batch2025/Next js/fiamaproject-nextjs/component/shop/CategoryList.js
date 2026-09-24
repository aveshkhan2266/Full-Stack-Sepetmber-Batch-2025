"use client";
import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import { getCategories } from "../../api/Services";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                setError(error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="category-list-wrapper py-2">

            <h5 className="fw-bold text-dark pb-3 border-bottom">
                Categories
            </h5>

            {error && (
                <p className="text-danger">
                    Failed to load categories
                </p>
            )}

            <Nav className="flex-column gap-2">

                {categories.map((category) => (
                    <Link
                        key={category.slug}
                        href={`/shop/${category.slug}`}
                        className="category-link text-decoration-none text-secondary"
                    >
                        {category.name}
                    </Link>
                ))}

            </Nav>
        </div>
    );
};

export default CategoryList;