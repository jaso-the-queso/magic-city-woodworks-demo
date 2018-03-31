import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem, CarouselControl } from 'mdbreact';

export default class Tables_Car extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 11
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
        className="z-depth-1 carousel_height">
        <CarouselInner className="carousel_height">
          <CarouselItem itemId="1">
            <div className="view hm-black-light product_carousel">
              <img className="d-block w-100" src="../pics/table_1.jpg" alt="First slide" />
              <div className="mask"></div>
            </div>
          </CarouselItem>
          <CarouselItem itemId="2">
            <div className="view hm-black-light product_carousel">
              <img className="d-block w-100" src="../pics/table_4.jpg" alt="Fourth item" />
              <div className="mask"></div>
            </div>
          </CarouselItem>
          <CarouselItem itemId="3">
            <div className="view hm-black-light product_carousel">
              <img className="d-block w-100" src="../pics/table_5.jpg" alt="Fifth item" />
              <div className="mask"></div>
            </div>
          </CarouselItem>
          <CarouselItem itemId="4">
            <div className="view hm-black-light product_carousel">
              <img className="d-block w-100" src="../pics/table_6.jpg" alt="Fifth item" />
              <div className="mask"></div>
            </div>
          </CarouselItem>
          <CarouselItem itemId="5">
            <div className="view hm-black-light product_carousel">
              <img className="d-block w-100" src="../pics/table_7.jpg" alt="Fifth item" />
              <div className="mask"></div>
            </div>
          </CarouselItem>
          <CarouselItem itemId="6">
            <div className="view hm-black-light product_carousel">
              <img className="d-block w-100" src="../pics/table_8.jpg" alt="Fifth item" />
              <div className="mask"></div>
            </div>
          </CarouselItem>
          <CarouselItem itemId="7">
            <div className="view hm-black-light product_carousel">
              <img className="d-block w-100" src="../pics/table_9.jpg" alt="Fifth item" />
              <div className="mask"></div>
            </div>
          </CarouselItem>
          <CarouselItem itemId="8">
            <div className="view hm-black-light product_carousel">
              <img className="d-block w-100" src="../pics/table_10.jpg" alt="Fifth item" />
              <div className="mask"></div>
            </div>
          </CarouselItem>
          <CarouselItem itemId="9">
            <div className="view hm-black-light product_carousel">
              <img className="d-block w-100" src="../pics/table_11.jpg" alt="Fifth item" />
              <div className="mask"></div>
            </div>
          </CarouselItem>
          <CarouselItem itemId="10">
            <div className="view hm-black-light product_carousel">
              <img className="d-block w-100" src="../pics/table_13.jpeg" alt="Fifth item" />
              <div className="mask"></div>
            </div>
          </CarouselItem>
          <CarouselItem itemId="11">
            <div className="view hm-black-light product_carousel">
              <img className="d-block w-100" src="../pics/table_18.jpg" alt="Fifth item" />
              <div className="mask"></div>
            </div>
          </CarouselItem>
        </CarouselInner>
        <CarouselControl direction="prev" role="button" onClick={() => { this.prev(); }} />
        <CarouselControl direction="next" role="button" onClick={() => { this.next(); }} />
      </Carousel>


    )
  }
}