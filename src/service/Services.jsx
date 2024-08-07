import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./services.css"; // Ajusta la ruta según la estructura de tu proyecto
import serviceData from "../assets/data/serviceData"; // Ajusta la ruta según la estructura de tu proyecto

const Services = () => {
    return (
        <section className="services">
            <Container>
                <Row>
                    {serviceData.map((item, index) => (
                        <Col lg="3" md="4" key={index}>
                            <div className="service__item" style={{ background: item.bg }}>
                                <span><i className={item.icon}></i></span>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Services;
