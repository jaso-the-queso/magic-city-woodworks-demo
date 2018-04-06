import React, { Component, Fragment } from "react";

import TablesCar from "./Tables_Car";
import EdgeCar from "./Edge_Car";
import OtherCar from "./Other_Car";

export default class Gallery extends Component {
    render() {
        return (
            <Fragment id="wrap">
                <div className="container my-2 justify-content-center" id="main">
                    <div class="vid-container">
                        <iframe id="vid_frame" src="http://www.youtube.com/embed/eg6kNoJmzkY?rel=0&showinfo=0&autohide=1" width="560" height="315" frameborder="0"></iframe>
                    </div>
                </div>
            </Fragment>
        );
    }
}
