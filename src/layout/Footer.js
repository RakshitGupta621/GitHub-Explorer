import React from "react";
import { Container } from "reactstrap";
/*bg-info makes background of color info, fixed-bottom ensres that footer always remains at the bottom, p-3 is padding of 3 from all sides*/
const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-info text-white text-uppercase fixed-bottom p-3"
    >
    Github search App with Firebase
    </Container>
  );
};

export default Footer;
