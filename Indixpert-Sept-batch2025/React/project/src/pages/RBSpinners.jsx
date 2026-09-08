import { useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap";

function RBSpinners() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true);
    };

    const handleCancel = () => {
        setLoading(false);
    };

    return (
        <Container className="p-3 mt-2">
            <h3 className="text-decoration-underline mb-3">Spinner</h3>
            <hr />

            <div className="d-flex gap-3">
                <Button
                    variant="primary"
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                className="me-2"
                            />
                            Submitting...
                        </>
                    ) : (
                        "Click to Submit"
                    )}
                </Button>

                <Button
                    variant="danger"
                    onClick={handleCancel}
                    disabled={!loading}
                >
                    Cancel
                </Button>
            </div>
        </Container>
    );
}

export default RBSpinners;