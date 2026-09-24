"use client";

import { Container, Breadcrumb } from "react-bootstrap";
import { usePathname } from "next/navigation";

const BreadcrumbBanner = () => {
    const pathname = usePathname();

    const pathnames = pathname.split("/").filter((x) => x);

    if (pathnames.length === 0) {
        return null;
    }

    return (
        <div className="breadcrumb-banner bg-lightgray py-5 text-center">
            <Container fluid="lg">

                <h1 className="breadcrumb-title fw-bold text-capitalize text-dark mb-2">
                    {pathnames[pathnames.length - 1].replace(/-/g, " ")}
                </h1>

                <Breadcrumb className="d-flex justify-content-center custom-breadcrumb m-0">

                    <Breadcrumb.Item
                        href="/"
                        className="text-dark text-decoration-none"
                    >
                        Home
                    </Breadcrumb.Item>

                    {pathnames.map((value, index) => {

                        const to = `/${pathnames
                            .slice(0, index + 1)
                            .join("/")}`;

                        const isLast =
                            index === pathnames.length - 1;

                        return isLast ? (
                            <Breadcrumb.Item
                                key={to}
                                active
                                className="text-capitalize"
                            >
                                {value.replace(/-/g, " ")}
                            </Breadcrumb.Item>
                        ) : (
                            <Breadcrumb.Item
                                key={to}
                                href={to}
                                className="text-dark text-decoration-none text-capitalize"
                            >
                                {value.replace(/-/g, " ")}
                            </Breadcrumb.Item>
                        );
                    })}

                </Breadcrumb>

            </Container>
        </div>
    );
};

export default BreadcrumbBanner;