import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Footer from "../footer/footer";
// import { FaFacebook } from "react-icons/fa";

function About() {
  return (
    <Row>
      <Col md={6}>
        <Image
          fluid
          className="image"
          src="https://images.unsplash.com/photo-1580980981132-14f7e2b5b276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
        ></Image>
      </Col>
      <Col>
        <Row className="allyns">
          <h1>
            About <span className="title">Me</span>
          </h1>
          <p>
            A friend of mine gave me a sourdough starter in 2015, and I fell in
            love with baking with wild yeast. I never looked back. I opened my
            cottage bakery 9 months later.
          </p>
          <p>
            Using mostly organic, and non-GMO ingredients, my breads are baked
            to order. Orders can be picked up Tuesday through Saturday. Please
            allow 3 days for your order. Orders are not final until you have
            receive a reply from me. This is also a cash-only business, so you
            will make your payment when you pick up the bread.
          </p>
          <Button className="breadbutton" href="/shop">
            VIEW THE BREADS <span className="arrow"> &#8594;</span>
          </Button>
        </Row>
        <Footer></Footer>
      </Col>
    </Row>
  );
}

export default About;
