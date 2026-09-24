import { Container, Row, Col } from "react-bootstrap";

function BannerSection({ banners = [], largeBanner = false }) {
    return (
        <section className="banner-area">
            <Container>
                <Row className="g-4">
                    {banners.map((banner) => (
                        <Col key={banner.id} xs={12} lg={largeBanner ? 6 : 4}>
                            <div className="banner-item">
                                <a href={banner.link || "/shop"}>
                                    <div className="banner-img">
                                        <img src={banner.image} alt={banner.alt || "Banner"} />
                                    </div>
                                </a>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default BannerSection;
