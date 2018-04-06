import React, { Component, Fragment } from "react";
import { Input, Button, Fa } from "mdbreact";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5 pt-5" id="main">
          <div className="row main mt-4">
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
            <div className="col-md-6 border-bottom text-center">
              <h1 className="mb-4 font-weight-bold">Our Shop</h1>
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
          <div className="row main pt-5">
            <div className="col-md-1">
              <p className="invisible">.</p>
            </div>
            <div className="col-md-10  pt-3 ">
              <form>
                <p className="h5 text-center mb-4">Write to us</p>
                <div className="row">
                  <div className="col-md-6">
                    <Input
                      label="First Name"
                      icon="user"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      label="Last Name"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                  </div>
                </div>
                <Input
                  label="Email Address"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <Input
                  label="Subject"
                  icon="tag"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <Input type="textarea" label="Your Message" icon="pencil" />
                <div className="text-center">
                  <Button outline color="black">
                    Submit <Fa icon="paper-plane-o" className="ml-1" />
                  </Button>
                </div>
              </form>
            </div>
            <div className="col-md-1">
              <p className="invisible">.</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
