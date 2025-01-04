import { Col, Container, Row } from "react-bootstrap";
import salesforceJS1 from "../assets/img/salesforceJS1.jpg";
import Coursera from "../assets/img/coursera.jpg";
import NPTEL from "../assets/img/nptel.jpg";
import APPLAUSE from "../assets/img/applause.jpg";

export const Certifications = () => {
    return (
        <section className="certificate" id="certifications">
            <Container>
                <div><h2>Certifications / Awards</h2></div>
                <br />
                <Row className="g-4">
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <div className="tile">
                            <img src={salesforceJS1} alt="Salesforce JS1" className="tile-image" />
                            <h3 className="tile-title">Salesforce JavaScript Developer 1</h3>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <div className="tile">
                            <img src={NPTEL} alt="NPTEL Java" className="tile-image" />
                            <h3 className="tile-title">Programming in Java by NPTEL</h3>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <div className="tile">
                            <img src={Coursera} alt="Coursera" className="tile-image" />
                            <h3 className="tile-title">DeepLearning by Coursera</h3>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <div className="tile">
                            <img src={APPLAUSE} alt="Applause Award" className="tile-image" />
                            <h3 className="tile-title">Applause Award by ABSYZ</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
