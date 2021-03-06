import React, { Component } from "react";
import {
  Col,
  Container,
  Row,
  Footer,
  FormInline,
  Input,
  Button
} from "mdbreact";

export default class FooterPage extends Component {
  render() {
    return (
      <Footer color="black" className="font-small pt-4 mt-4" id="footer">
        <Container className="text-left">
          <Row>
            <Col sm="3">
              <h5 className="title font-weight-bold">MAGIC CITY WOODWORKS</h5>
              <p>
                931 28th Street North <br /> Birmingham, AL
              </p>
              <p>
                (205) 983-7435 <br /> info@magiccitywoodworks.org
              </p>
            </Col>
            <Col sm="2">
              <h5 className="title">INFO</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </Col>
            <Col sm="2">
              <h5 className="title">LOCATION</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/location">The Shop</a>
                </li>
              </ul>
            </Col>
            <Col sm="3">
              <h5 className="title">SOCIAL</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.instagram.com/magiccitywoodworks/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/MagicCityWoodworks/" target="_blank" rel="noopener noreferrer">Facebook</a>
                </li>
              </ul>
            </Col>
            <Col sm="2">
              <h5 className="title">MCWW NEWSLETTER</h5>
              <FormInline>
                <Input
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                />
                <Button outline color="white">
                  SIGN UP
                </Button>
              </FormInline>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center">
          <Container fluid>
            <p> Made by Dank Maestro LLC. </p>
          </Container>
        </div>
      </Footer>
    );
  }
}
