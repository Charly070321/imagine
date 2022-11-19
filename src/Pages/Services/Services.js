import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
// import Row from "react-bootstrap"
// import Col from "react-bootstrap"

const Services = ({ children }) => {
  return (
    <div>
      {/* <Row className='p-0 m-0'>
        <Col></Col>
      </Row> */}
    

        {" "}
        {/* <ServiceCard /> */}
        {children}
    </div>
  );
};

export default Services;
