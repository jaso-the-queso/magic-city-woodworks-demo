import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Fa } from 'mdbreact';

export default class Juice_Groove_Cutting_Board_Sale extends Component {

  render() {
    return (
      <div>
        <div className="container my-5 pt-5">
          <div className="row justify-content-between">
            <ul className="list-unstyled col-md- d-inline mt-4">
              <Link to="/shop_main" className="d-inline text-dark py-3">OUR PRODUCTS</Link>
              <li className="d-inline text-dark"> > </li>
              <li className="d-inline text-dark">JUICE GROOVE CUTTING BOARD</li>
              {/* <Link to="/shop_main/cutting_boards" className="d-inline text-dark py-3">JUICE GROOVE CUTTING BOARD</Link> */}
            </ul>
            <ul className="list-unstyled col d-inline mt-4 text-right">
                <Link to="/shop_main/coasters_sale" className="d-inline text-dark py-3"> PREVIOUS</Link>
                <li className="d-inline text-dark"> / </li>
                <Link to="/shop_main/desk_organizer_sale" className="d-inline text-dark py-3">NEXT</Link>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1>Juice Groove Cutting Board</h1>
              <h3 className="py-4">$70.00</h3>
              <p>Whether you are a culinary professional or a hero in the kitchen at home, this Juice Groove Cutting Board is perfect for you. Treated with a food-safe mineral oil, this chopping block is ready for some action! This product was crafted by the Magic City Woodworks crew right here in our home city of Birmingham, AL.</p>
              <p className="py-1">Specs:</p>
              <p className="py-1">- Assorted Wood (Every Board is Beautifully Different)</p>
              <p className="py-1">- 12 in x 18 in. x 1.25 in.</p>
              <p className="py-1">- Food Safe</p>
              <p className="m-0 pt-3">QUANTITY:</p>
              <input type="number" className="rounded grey lighten-2 border-0 px-3 py-2" /> <br />
              <Button outline color="elegant mt-5 px-5 py-3">ADD TO CART</Button> <br />
              <Fa icon="facebook" className="my-4 mr-4" />
              <Fa icon="twitter" className="my-4 mr-4" />              
              <Fa icon="linkedin" className="my-4 mr-4" /> <br />

            </div>

            <div className="col-md-7">
            <img src="../pics/groove_1.jpg" className="img-fluid rounded mb-2" alt="" />
            <img src="../pics/groove_2_big.jpg" className="img-fluid rounded mb-2" alt="" />
            <img src="../pics/groove_3_big.jpg" className="img-fluid rounded mb-2" alt="" />
            <img src="../pics/groove_4_big.jpg" className="img-fluid rounded mb-2" alt="" />
            <img src="../pics/groove_5_big.jpg" className="img-fluid rounded mb-2" alt="" />
            <img src="../pics/groove_6_big.jpg" className="img-fluid rounded mb-2" alt="" />
            <img src="../pics/groove_7_big.jpg" className="img-fluid rounded mb-2" alt="" />
            <img src="../pics/groove_8_big.jpg" className="img-fluid rounded mb-2" alt="" />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
