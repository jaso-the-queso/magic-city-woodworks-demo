import React, { Component, Fragment } from "react";
import { Card, CardImage } from "mdbreact";
export default class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgUrl: this.props.url
    };
  }
  render() {
    return (
      <Fragment>
        <Card wide>
          <CardImage
            className="img-fluid z-depth-1-half"
            src={`${this.state.imgUrl}`}
          />
        </Card>
      </Fragment>
    );
  }
}
