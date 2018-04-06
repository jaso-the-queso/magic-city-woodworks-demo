import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 33.53, lng: -86.8 },
    zoom: 16
  };
  render() {
    return (
      <div className="container mt-5 pt-5">
        <div className="row main mt-4">
          <div className="col-md-3">
            <p className="invisible">.</p>
          </div>
          <div className="col-md-6 border-bottom text-center">
            <h1 className="mb-3 font-weight-bold">Our Shop</h1>
          </div>
          <div className="col-md-3">
            <p className="invisible">.</p>
          </div>
        </div>
        <div className="row main pt-2 mt-4">
          <div className="col-md-4 text-center">
            <h2 className="font-weight-bold">Address</h2>
            <p>931 28th St N</p>
            <p>Birmingham, AL 35203</p>
          </div>
          <div className="col-md-4 text-center">
            <h2 className="font-weight-bold">Email</h2>
            <p>Please email us at</p>
            <p className="font-italic">info@magiccitywoodworks.org</p>
            <p>for tour inquires</p>
          </div>
          <div className="col-md-4 text-center">
            <h2 className="font-weight-bold">Phone Number</h2>
            <p>(205) 983-7435</p>
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <div
              className="z-depth-1-half"
              style={{ height: "700px", width: "100%" }}
            >
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "",
                  language: "en"
                }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <img
                  style={{ height: "60px", width: "50px" }}
                  src="../pics/logtruck-marker.png"
                  alt="marker"
                  lat={33.529607}
                  lng={-86.800874}
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
