import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import breads from "../../breads.json";

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

  componentDidMount() {
    let oBread = breads.breads.map((item, index) => {
      return { title: item.title, count: 0 };
    });
    this.setState({ orderedBread: oBread });

    let breadCard = breads.breads.map((item, index) => {
      return (
        <Card
          style={{ width: "17rem" }}
          className="bread-card"
          key={index}
          data-index={index}
        >
          <Card.Img variant="top" data-index={index} src={item.image} />
        </Card>
      );
    });

    this.setState({ breadArray: breadCard });
  }

  render() {
    return (
      <Container fluid id="wrapper" className={this.state.showSideClass}>
        <Navigation></Navigation>
        <div className="card-deck">
          <div className="card-columns">{this.state.breadArray}</div>
        </div>
        <Footer></Footer>
      </Container>
    );
  }
}
export default Shop;
