import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Fa } from 'mdbreact';

export default class Coasters_Sale extends Component {

  render() {
    return (
      <div>
        <div className="container my-5 pt-5">
          <div className="row justify-content-between">
            <ul className="list-unstyled col d-inline mt-4">
              <Link to="/shop_main" className="d-inline text-dark py-3">OUR PRODUCTS</Link>
              <li className="d-inline text-dark"> > </li>
              <Link to="/shop_main/company_gifts" className="d-inline text-dark py-3">WOODEN COASTERS</Link>
            </ul>
            <ul className="list-unstyled col d-inline mt-4 text-right">
              <Link to="/shop_main/juice_groove_cutting_board_sale" className="d-inline text-dark py-3">NEXT</Link>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1>Wooden Coasters</h1>
              <h3 className="py-4">$20.00</h3>
              <p>Our handmade assorted wood coasters will be great table protection and an even better talking piece. No two sets are the same and that uniqueness is something we take pride in at Magic City Woodworks. This product was crafted by the Magic City Woodworks crew right here in our home city of Birmingham, AL.</p>
              <p className="py-1">Specs:</p>
              <p className="py-1">- Assorted Wood</p>
              <p className="py-1">- 4 in x 4 in. x .5 in.</p>
              <p className="py-1">- Available in sets of 3, 4, and 5 Coasters</p>
              <p className="m-0 pt-3">QUANTITY:</p>
              <input type="number" className="rounded grey lighten-2 border-0 px-3 py-2" /> <br />
              <Button outline color="elegant mt-5 px-5 py-3">ADD TO CART</Button> <br />
              <Fa icon="facebook" className="my-4 mr-4" />
              <Fa icon="twitter" className="my-4 mr-4" />              
              <Fa icon="linkedin" className="my-4 mr-4" /> <br />
              <div className="video-responsive">
                <iframe src="https://player.vimeo.com/video/166422973" className="rounded" width="450" height="253" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </div>
            </div>

            <div className="col-md-7">
            <img src="../pics/coaster_1_big.jpg" className="img-fluid rounded mb-2" alt="" />
            <img src="../pics/coaster_2_big.jpg" className="img-fluid rounded mb-2" alt="" />
            <img src="../pics/coaster_3_big.jpg" className="img-fluid rounded mb-2" alt="" />
            <img src="../pics/coaster_4_big.jpg" className="img-fluid rounded mb-2" alt="" />
            <img src="../pics/coaster_5_big.jpg" className="img-fluid rounded mb-2" alt="" />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
