import React, { Component } from "react";
import { Link } from "react-router-dom";

import TablesCar from "./Tables_Car";
import EdgeCar from "./Edge_Car";
import OtherCar from "./Other_Car";

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5 pt-5 justify-content-center" id="main">
          <div className="row main mt-4 ">
            <div className="col-md-2">
              <p className="invisible">.</p>
            </div>
            <div className="col-md-8 text-center">
              <h1 className="font-weight-bold">Photo Gallery</h1>
            </div>
            <div className="col-md-2">
              <Link to="/video_gallery_1" className="text-right black-text">Video Gallery</Link>
            </div>
          </div>

          <div className="row main pt-2 mb-4">
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
            <div className="col-md-6 border-bottom text-center">
              <h2 className="mb-5 mt-3">Tables</h2>
            </div>
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
          </div>
          <div className="row main  mb-4">
            <div className="col-md-2">
              <p className="invisible">.</p>
            </div>
            <div className="col-md-8 text-center">
              <TablesCar />
            </div>
            <div className="col-md-2">
              <p className="invisible">.</p>
            </div>
          </div>

          <div className="row main pt-5 mb-4">
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
            <div className="col-md-6 border-bottom text-center">
              <h2 className="mb-5 mt-3">Live Edge</h2>
            </div>
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
          </div>
          <div className="row main  mb-4">
            <div className="col-md-2">
              <p className="invisible">.</p>
            </div>
            <div className="col-md-8 text-center">
              <EdgeCar />
            </div>
            <div className="col-md-2">
              <p className="invisible">.</p>
            </div>
          </div>

          <div className="row main pt-5 mb-4">
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
            <div className="col-md-6 border-bottom text-center">
              <h2 className="mb-5 mt-3">Other Customs</h2>
            </div>
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
          </div>
          <div className="row main  mb-4">
            <div className="col-md-2">
              <p className="invisible">.</p>
            </div>
            <div className="col-md-8 text-center">
              <OtherCar />
            </div>
            <div className="col-md-2">
              <p className="invisible">.</p>
            </div>
          </div>

          <div className="row main pt-5 mb-4">
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
            <div className="col-md-6 border-bottom text-center">
              <h2 className="mb-5 mt-3">Smalls</h2>
            </div>
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
          </div>
          <div className="row main mb-4">
            <div className="col-md-3 smalls">
              <img src="../pics/small_1.jpg" alt="img-1" />
            </div>
            <div className="col-md-3 smalls">
              <img src="../pics/small_2.jpg" alt="img-2" />
            </div>
            <div className="col-md-3 smalls">
              <img src="../pics/small_3.jpg" alt="img-3" />
            </div>
            <div className="col-md-3 smalls">
              <img src="../pics/small_4.jpg" alt="img-4" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
