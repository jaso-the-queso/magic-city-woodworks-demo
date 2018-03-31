import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 33.53, lng: -86.8 },
    zoom: 16
  };
  render() {
    return (
      <div className="container">
        <div className="row">
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
        <div className="row main pt-2 mb-4">
          <div className="col-md-3">
            <p className="invisible">.</p>
          </div>
          <div className="col-md-6 border-bottom text-center">
            <h2 className="mb-5 mt-3">Our Shop</h2>
          </div>
          <div className="col-md-3">
            <p className="invisible">.</p>
          </div>
        </div>
        <div className="row">
          <h2>Birmingham, AL</h2>
        </div>
        <div className="row">
          <h6 className="col-4">931 28th St N</h6>
          <h6 className="col-4">
            Please Email info@magiccitywoodworks.org for tour inquires
          </h6>
          <h6 className="col-4">Phone: (205) 983 7435</h6>
        </div>
        <div className="row">
          <h6 className="col-4">Birmingham, A: 35203</h6>
        </div>
      </div>
    );
  }
}
