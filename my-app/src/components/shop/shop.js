import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import breads from "../../breads.json";
import Navigation from "../navigation/navigation";
import { FaTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderedBread: [],
      orderedBreadArray: [],
      breadArray: [],
      showSideClass: "false",
    };
  }

  addBread = (title, action) => {
    console.log("bread");

    for (var e = 0; e < this.state.orderedBread; e++) {}

    for (var i = 0; i < this.state.orderedBread.length; i++) {
      if (title === this.state.orderedBread[i].title) {
        switch (action) {
          case "add":
            this.state.orderedBread[i].count++;
            break;
          case "subtract":
            this.state.orderedBread[i].count--;
            break;
          case "remove":
            this.state.orderedBread[i].count = 0;
            break;
          default:
            break;
        }

        if (this.state.orderedBread[i].count < 0) {
          this.state.orderedBread[i].count = 0;
        }
        this.setState({ orderedBread: this.state.orderedBread });
      }
    }
  };

  componentDidMount() {
    let oBread = breads.breads.map((item, index) => {
      return { title: item.title, count: 0 };
    });
    this.setState({ orderedBread: oBread });

    let breadCard = breads.breads.map((item, index) => {
      return (
        <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      );
    });

    this.setState({ breadArray: breadCard });
  }

  update() {
    let orderArray = this.state.orderedBread.map((item, index) => {
      return (
        <p className="order">
          {item.title} - {item.count}
          <FaPlus
            onClick={async () => {
              this.addBread(item.title, "add");
            }}
            className="edit-bread"
          ></FaPlus>
          <FaMinus
            onClick={async () => {
              this.addBread(item.title, "subtract");
            }}
            className="edit-bread"
          ></FaMinus>
        </p>
      );
    });

    this.setState({ orderedBreadArray: orderArray });
  }

  render() {
    return (
      <Container fluid id="wrapper" className={this.state.showSideClass}>
        <Navigation></Navigation>
        <Row>
          <Col md={6}>
            <Image
              className="home-image"
              src="https://images.unsplash.com/photo-1522697849174-ba75e5be7d3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            ></Image>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div id="sidebar-wrapper">
              <ul className="sidebar-nav">
                <li className="sidebar-brand">
                  <p> Your Order </p>
                  {this.state.orderedBreadArray}
                </li>
              </ul>
              {/* <Button className="bread-button-checkout" onClick={async () => {}}>
            Checkout
          </Button> */}
            </div>
            <Container id="page-content-wrapper">
              <p>
                <span>Please Note:</span> You are requesting the bread. Orders
                are not final until you have received a reply from Laurie Smith.
                This is also a cash-only business, so you will make your payment
                when you pick up the bread.
                <button
                  onClick={async () => {
                    this.setState({ showSideClass: "" });
                  }}
                >
                  Hide
                </button>
                <button
                  onClick={async () => {
                    this.setState({ showSideClass: "toggled" });
                  }}
                >
                  Show
                </button>
              </p>
              <div className="card">
                <div className="card">{this.state.breadArray}</div>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Shop;
