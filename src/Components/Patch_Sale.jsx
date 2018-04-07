import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Fa } from 'mdbreact';

export default class Patch_Sale extends Component {

  render() {
    return (
      <div>
        <div className="container my-5 pt-5">
          <div className="row justify-content-between">
            <ul className="list-unstyled col-md- d-inline mt-4">
              <Link to="/shop_main" className="d-inline text-dark py-3">OUR PRODUCTS</Link>
              <li className="d-inline text-dark"> > </li>
              <li className="d-inline text-dark">MAGIC CITY WOODWORKS PATCH</li>
              {/* <Link to="/shop_main/cutting_boards" className="d-inline text-dark py-3">JUICE GROOVE CUTTING BOARD</Link> */}
            </ul>
            <ul className="list-unstyled col d-inline mt-4 text-right">
                <Link to="/shop_main/sweatshirt_light_sale" className="d-inline text-dark py-3"> PREVIOUS</Link>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1>Magic City Woodworks Patch</h1>
              <h3 className="py-4">$5.00</h3>
              <p>Whether you're shooting for practical or fashionable, the Magic City Woodworks patch is good for covering a hole in your clothes or showing your pride for your favorite non-profit. Grab one for your shirt, hat, jacket or backpack while supplies last!</p>
              <p className="py-1">Specs:</p>
              <p className="py-1">- 5 in. x 2 in.</p>
              <p className="py-1">- Iron-On</p>
              <p className="py-1">- Embroidered Patch</p>
              <p className="m-0 pt-3">QUANTITY:</p>
              <input type="number" className="rounded grey lighten-2 border-0 px-3 py-2" /> <br />
              <Button outline color="elegant mt-5 px-5 py-3">ADD TO CART</Button> <br />
              <Fa icon="facebook" className="my-4 mr-4" />
              <Fa icon="twitter" className="my-4 mr-4" />              
              <Fa icon="linkedin" className="my-4 mr-4" /> <br />

            </div>

            <div className="col-md-7">
            <img src="../pics/patch_2_big.jpg" className="img-fluid rounded mb-2" alt="Magic City Woodworks Patch" />
            <img src="../pics/patch_1.jpg" className="img-fluid rounded mb-2" alt="Magic City Woodworks Patch" />
            <img src="../pics/patch_3_big.jpg" className="img-fluid rounded mb-2" alt="Magic City Woodworks Patch" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
