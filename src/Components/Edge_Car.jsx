import React, { Component } from "react";
import {
  Carousel,
  CarouselInner,
  CarouselItem,
  CarouselControl
} from "mdbreact";

export default class Edge_Car extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 8
    };
  }

  next() {
    const nextItem = this.state.activeItem + 1;
    if (nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    const prevItem = this.state.activeItem - 1;
    if (prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }

  render() {
    return (
      <Carousel
        activeItem={this.state.activeItem}
        next={this.next}
        className="z-depth-1"
      >
        <CarouselInner>
          <CarouselItem itemId="1">
            <div className="view hm-black-light">
              <img
                className="d-block w-100"
                src="../pics/edge_1.jpg"
                alt="First slide"
              />
              <div className="mask" />
            </div>
          </CarouselItem>
          <CarouselItem itemId="2">
            <div className="view hm-black-strong">
              <img
                className="d-block w-100"
                src="../pics/edge_2.jpg"
                alt="Second slide"
              />
              <div className="mask" />
            </div>
          </CarouselItem>
          <CarouselItem itemId="3">
            <div className="view hm-black-slight">
              <img
                className="d-block w-100"
                src="../pics/edge_3.jpg"
                alt="Third slide"
              />
              <div className="mask" />
            </div>
          </CarouselItem>
          <CarouselItem itemId="4">
            <div className="view hm-black-light">
              <img
                className="d-block w-100"
                src="../pics/edge_4.jpg"
                alt="Fourth item"
              />
              <div className="mask" />
            </div>
          </CarouselItem>
          <CarouselItem itemId="5">
            <div className="view hm-black-light">
              <img
                className="d-block w-100"
                src="../pics/edge_5.jpg"
                alt="Fifth item"
              />
              <div className="mask" />
            </div>
          </CarouselItem>
          <CarouselItem itemId="6">
            <div className="view hm-black-light">
              <img
                className="d-block w-100"
                src="../pics/edge_6.jpg"
                alt="Fifth item"
              />
              <div className="mask" />
            </div>
          </CarouselItem>
          <CarouselItem itemId="7">
            <div className="view hm-black-light">
              <img
                className="d-block w-100"
                src="../pics/edge_7.jpg"
                alt="Fifth item"
              />
              <div className="mask" />
            </div>
          </CarouselItem>
          <CarouselItem itemId="8">
            <div className="view hm-black-light">
              <img
                className="d-block w-100"
                src="../pics/edge_8.jpg"
                alt="Fifth item"
              />
              <div className="mask" />
            </div>
          </CarouselItem>
        </CarouselInner>
        <CarouselControl
          direction="prev"
          role="button"
          onClick={() => {
            this.prev();
          }}
        />
        <CarouselControl
          direction="next"
          role="button"
          onClick={() => {
            this.next();
          }}
        />
      </Carousel>
    );
  }
}
