import React, { Component, Fragment } from "react";
import { Input, Button, Fa } from "mdbreact";

export default class Contact extends Component {
  render() {
    return (
      <Fragment id="wrap">
        <div className="container my-5" id="main">
          <div className="row main pt-5">
            <div className="col-md-1">
              <p className="invisible">.</p>
            </div>
            <div className="col-md-10  pt-4 ">
              <h2 className="mb-5 text-center">Inquiries & Comments</h2>
              <form>
                <p className="h5 text-center mb-4">Write to us</p>
                <div className="row">
                  <div className="col-md-6">
                    <Input
                      label="First name"
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
                      label="Last name"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                  </div>
                </div>
                <Input
                  label="Your email"
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
                <Input type="textarea" label="Your message" icon="pencil" />
                <div className="text-center">
                  <Button outline color="black">
                    Send <Fa icon="paper-plane-o" className="ml-1" />
                  </Button>
                </div>
              </form>
            </div>
            <div className="col-md-1">
              <p className="invisible">.</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
