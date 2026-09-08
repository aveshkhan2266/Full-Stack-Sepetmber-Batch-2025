import { Card, ListGroup, Row, Col, Container } from "react-bootstrap";
import { Facebook, Instagram, Youtube, TwitterX, Linkedin } from "react-bootstrap-icons";

function RBListGroup() {
    return (
        <Container className='p-3 mt-2'>

            <h3 className="text-start text-decoration-underline mb-3">ListGroup</h3>
            <hr />
            <Card className="shadow-sm" style={{ width: "24rem" }}>
                <Card.Body>
                    <Card.Title className="fw-semibold fs-4 mb-3">
                        Social Media Traffic
                    </Card.Title>

                    <ListGroup variant="flush">

                        <ListGroup.Item>
                            <Row className="align-items-center">
                                <Col className="d-flex align-items-center gap-2">
                                    <Facebook size={22} className="text-primary" />
                                    Facebook
                                </Col>
                                <Col xs="auto">20%</Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row className="align-items-center">
                                <Col className="d-flex align-items-center gap-2">
                                    <Instagram size={22} className="text-primary" />
                                    Instagram
                                </Col>
                                <Col xs="auto">20%</Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row className="align-items-center">
                                <Col className="d-flex align-items-center gap-2">
                                    <Youtube size={22} className="text-primary" />
                                    YouTube
                                </Col>
                                <Col xs="auto">20%</Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row className="align-items-center">
                                <Col className="d-flex align-items-center gap-2">
                                    <TwitterX size={22} className="text-primary" />
                                    TwitterX
                                </Col>
                                <Col xs="auto">20%</Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row className="align-items-center">
                                <Col className="d-flex align-items-center gap-2">
                                    <Linkedin size={22} className="text-primary" />
                                    LinkedIn
                                </Col>
                                <Col xs="auto">20%</Col>
                            </Row>
                        </ListGroup.Item>

                    </ListGroup>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default RBListGroup;