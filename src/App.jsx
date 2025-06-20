import * as React from "react";
import image from "../img/mImg.jpg";
import "./App.css";
import "./index.css";
import Table from "./Table";
import { Container, Row, Col } from "react-bootstrap";

import Clock from "./clock";

export default function App() {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <Row className="w-100">
        <Col xs={12} className="text-center mb-4">
          <img src={image} className="logo img-fluid" alt="Masjid logo" />
        </Col>
      </Row>

      <Row className="w-100">
        <Col xs={12} className="text-center mb-4">
          <h1 className="display-4" style={{ color: "gold" }}>
            الآ اِلَهَ اِ لّا اللّهُ مُحَمَّدٌ رَسُوُل اللّهِ
          </h1>
          <span style={{ color: "white" }}>
            <Clock />
          </span>
        </Col>
      </Row>

      <Row className="w-100">
        <Col xs={12} className="text-center">
          <Table />
        </Col>
      </Row>
    </Container>
  );
}
