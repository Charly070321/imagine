import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../Components/common/PageTitle";
import Akshith from "../Components/patient-profile/Akshith";
import Shiva from "../Components/patient-profile/Shiva";
import Harshita from "../Components/patient-profile/Harshita";
import Shriya from "../Components/patient-profile/Shriya";


const MyPatients = () => (
    <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Patient List" subtitle="My Patients" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="3">
        <Harshita/>
      </Col>
      <Col lg="3">
        <Shriya/>
      </Col>
      <Col lg="3">
        <Shiva/>
      </Col>
      <Col lg="3">
        <Akshith/>
      </Col>
    </Row>
  </Container>
);

export default MyPatients;
