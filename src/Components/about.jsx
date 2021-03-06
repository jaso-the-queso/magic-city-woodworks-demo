import React, { Component, Fragment } from "react";

import Doughnut from "./Doughnut";

export default class About extends Component {
  render() {
    return (
      <Fragment id="wrap">
        <div className="container mt-5 pt-5" id="main">
          <div className="row main mt-4 justify-content-center">
            <div className="col-md-8">
              <h2 className="text-center border-bottom pb-4 font-weight-bold">
                WHO ARE WE?
              </h2>
            </div>
          </div>
          <div className="row main mt-4 justify-content-center">
            <div className="col-md-8">
              <Doughnut />
            </div>
          </div>

          <div className="row main pt-5 justify-content-center">
            <div className="col-md-8 border-top border-bottom text-center">
              <h5 className="font-weight-bold py-4">
                WE ARE A SOCIAL IMPACT COMPANY DESIGNED TO HELP YOUNG MEN BRIDGE
                THE INTIMIDATING GAP BETWEEN UNEMPLOYMENT AND MEANINGFUL
                EMPLOYMENT.
              </h5>
              <h5 className="">
                WE STARTED IN A ONE CAR GARAGE WITH JUST A FEW TOOLS. TODAY WE
                ARE BLESSED TO USE A LARGE WORKSHOP IN THE HEART OF DOWNTOWN
                BIRMINGHAM, ALABAMA TO GIVE A UNIQUE OPPORTUNITY TO OUR
                APPRENTICES. <br />
                <br />
                OUR GOAL IS TO OFFER HIGH CALIBER JOB AND LIFE SKILL TRAINING
                FOR EACH APPRENTICE THAT JOINS OUR TEAM.<br />
                <br />
                MAGIC CITY WOODWORKS IS BUILT ON FAITH, HOPE AND GOOD OLE
                FASHIONED HARD WORK.<br />
                <br />
                MAGIC CITY WOODWORKS WAS FOUNDED IN 2013 BY A FIREMAN, LAWRENCE
                SHEFFIELD, WHO HAD A VISION TO SEE YOUNG MEN ENJOYING THE ART OF
                WORK ACROSS BIRMINGHAM. <br />
                <br />
              </h5>
            </div>
          </div>
          <div className="row main">
            <div className="col-md-3">
              <p className="invisible">.</p>
            </div>
            <div className="col-md-6 border-bottom text-center">
              <h2 className=" py-4">
                “Magic City Woodworks is special due to the fellowship, learning
                experience and the faith aspect.”
              </h2>
              <p className="">- DEANGLO STEPHENS (BUILDER)</p>
              <img
                className="mb-5"
                src="../pics/worker.jpg"
                alt="Magic City Woodworks Worker"
              />
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
