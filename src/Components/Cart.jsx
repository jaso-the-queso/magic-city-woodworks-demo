import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "mdbreact";

export default class About extends Component {
    render() {
        return (
            <div className="container mt-5 pt-5 align-items-center">
                <div className="row justify-content-start">
                    <h3 className="mt-4">SHOPPING CART</h3>
                </div>

                <div className="row align-items-end pt-2">
                    <p className="col-8 text-left text-uppercase">Item</p>
                    <p className="col-2 text-center text-uppercase">Qty.</p>
                    <p className="col-2 text-right text-uppercase">Price</p>
                </div>

                <div className="row border-bottom border-top align-items-center pt-5 pb-5">
                    <p className="col-1 text-uppercase">x</p>
                    <img src="../pics/coaster_1_thumb.jpg" width="100" height="66" className="img-fluid col-2 align-self-center rounded" />
                    <div className="col-5">
                        <div className="row">
                            <p className="font-weight-bold">Wooden Coasters</p> 
                        </div>
                        <div className="row">
                            <p>Size: 4 Coasters</p>
                        </div>
                    </div>
                    <p className="col-2 text-center font-weight-bold">2</p>
                    <p className="col-2 text-right font-weight-bold">$40.00</p>
                </div>

                <div className="row border-bottom align-items-center pt-5 pb-5">
                    <p className="col-1 text-uppercase">x</p>
                    <img src="../pics/groove_1_thumb.jpg" width="100" height="66" className="img-fluid col-2 align-self-center rounded" />
                    <div className="col-5">
                        <div className="row">
                            <p className="font-weight-bold">Juice Groove Cutting Board</p> 
                        </div>
                        <div className="row">
                            <p>Size: 12" x 18"</p>
                        </div>
                    </div>
                    <p className="col-2 text-center font-weight-bold">1</p>
                    <p className="col-2 text-right font-weight-bold">$70.00</p>
                </div>

                <div className="row border-bottom align-items-center pt-5 pb-5">
                    <p className="col-1 text-uppercase">x</p>
                    <img src="../pics/organizer_1_thumb.jpg" width="100" height="66" className="img-fluid col-2 align-self-center rounded" />
                    <div className="col-5">
                        <div className="row">
                            <p className="font-weight-bold">Desk Organizer</p> 
                        </div>
                    </div>
                    <p className="col-2 text-center font-weight-bold">1</p>
                    <p className="col-2 text-right font-weight-bold">$30.00</p>
                </div>

                <div className="text-right">
                    <h5 className="font-weight-bold py-5">Subtotal: $140.00</h5>
                </div>
                <div className="text-right mb-5">
                    <Button outline color="elegant"> CHECKOUT </Button>
                </div>
            </div>
        );
    }
}
