import React, { Component } from "react";
import { Button, Fa } from "mdbreact";
import ImageCard from "./ImageCard";
import Carousel from "./Carousel.jsx";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="container mt-5 pt-4">
          <Carousel />
        </div>
        <div className="container my-4 justify-content-center" id="main">
          <div className="row main">
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
            <div className="col-md-6 border-top border-bottom text-center">
              <h4 className="font-weight-bold py-4">
                WE TEACH YOUNG MEN THE ART OF WORK
              </h4>
              <a href="/about">
                <Button outline color="elegant mb-4">
                  LEARN MORE
                </Button>
              </a>
            </div>
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>

            <div className="container mt-4">
              <div className="row">
                <div className="col-3">
                  <ImageCard className="mx-auto" url={"../pics/feed-1.jpg"} />
                </div>
                <div className="col-3">
                  <ImageCard
                    className="mx-auto"
                    url={"../pics/hogsnlogs.jpg"}
                  />
                </div>
                <div className="col-3">
                  <ImageCard className="mx-auto" url={"../pics/feed-2.jpg"} />
                </div>
                <div className="col-3">
                  <ImageCard className="mx-auto" url={"../pics/crew-1.jpg"} />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-3">
                  <ImageCard
                    className="mx-auto"
                    url={"../pics/delivery-1.jpg"}
                  />
                </div>
                <div className="col-3">
                  <ImageCard
                    className="mx-auto"
                    url={"../pics/shop-sunset.jpg"}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
            <div className="col-md-6 border-bottom text-center">
              <a href="https://www.instagram.com/magiccitywoodworks/?hl=en" target="_blank" rel="noopener noreferrer">
                <Button outline color="elegant mb-4 py-4">
                  <Fa icon="instagram" className="mx-3" /> FOLLOW @magiccitywoodworks <Fa icon="instagram" className="mx-3" />
                </Button>
              </a>
            </div>
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
