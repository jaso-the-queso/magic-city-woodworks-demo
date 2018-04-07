import React, { Component, Fragment } from "react";
import { Button } from "mdbreact";

export default class Donate extends Component {
  render() {
    return (
      <Fragment>
        <div className="container mt-5 pt-5 justify-content-center" id="main">
          <div className="row main mt-4">
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
            <div className="col-md-6 text-center">
              <h1 className="font-weight-bold">Donate</h1>
            </div>
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
          </div>
          <div className="row main pt-3">
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
            <div className="col-md-6 border-top text-center">
              <h3 className="py-4">
                Give The Gift of Meaningful Work By Helping Us Provide 12
                Apprenticeships in 2018.
              </h3>
              <h5 className="">
                BE A PART OF THE CREW TODAY BY CLICKING DONATE BELOW. <br />
                <br />
                Your Generosity Will Help Us:<br />
                <br />
              </h5>
            </div>
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
          </div>

          <div className="row main py-2 border-bottom pb-5">
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
            <div className="col-md 6">
              <div className="container border text-center rounded grey lighten-4">
                <div className="row">
                  <img
                    src="../pics/donate_logo.png"
                    className="col-md- py-3 pl-3 rounded"
                    alt="Donate Logo"
                  />
                  <div className="col py-3">
                    <p>Your donation</p>
                    <h1>$0.00</h1>
                  </div>
                </div>

                <div className="row">
                  <div className="col text-left pt-3">
                    <p>Select Donation Amount:</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <Button color="elegant" className="rounded w-100">
                      $50
                    </Button>
                    <Button color="elegant" className="rounded w-100">
                      $100
                    </Button>
                    <Button color="elegant" className="rounded w-100">
                      $250
                    </Button>
                    <Button color="elegant" className="rounded w-100">
                      $500
                    </Button>
                  </div>
                </div>

                <div className="row">
                  <div className="col d-flex justify-content-center pt-3">
                    <div class="input-group mb-2 mr-sm-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">$</div>
                      </div>
                      <input
                        type="text"
                        class="form-control py-0"
                        id="inlineFormInputGroupUsername2"
                        placeholder="or enter custom amount..."
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col text-left pt-5">
                    <h5>Donate with card:</h5>
                  </div>
                </div>

                <div className="row">
                  <div className="col justify-content-center pb-5">
                    <select className="w-100 rounded">
                      <option value="1">One Time</option>
                      <option value="2">Weekly</option>
                      <option value="3">Monthly</option>
                      <option value="4">Quarterly</option>
                      <option value="5">Yearly</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col justify-content-center pt-5 pb-3">
                    <Button color="elegant" className="rounded">
                      {" "}
                      Your Information >{" "}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
          </div>

          <div className="row main">
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
            <div className="col-md-6 border-bottom text-center mt-4">
              <p className="">
                Magic City Woodworks is a 501(c)3 Non Profit Organization. All
                donations are tax deductible.{" "}
              </p>
              <p className="">Checks can be mailed to:</p>
              <p className="font-italic">Magic City Woodworks</p>
              <p className="font-italic">925 28th Street North</p>
              <p className="font-italic">Birmingham, Alabama 35203</p>
            </div>
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
