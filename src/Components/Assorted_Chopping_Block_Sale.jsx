import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Fa } from 'mdbreact';

export default class Assorted_Chopping_Block_Sale extends Component {

    render() {
        return (
            <div>
                <div className="container my-5 pt-5">
                    <div className="row justify-content-between">
                        <ul className="list-unstyled col-md- d-inline mt-4">
                            <Link to="/shop_main" className="d-inline text-dark py-3">OUR PRODUCTS</Link>
                            <li className="d-inline text-dark"> > </li>
                            <li className="d-inline text-dark">ASSORTED WOOD END GRAIN CHOPPING BLOCK</li>
                        </ul>
                        <ul className="list-unstyled col d-inline mt-4 text-right">
                            <Link to="/shop_main/desk_organizer_sale" className="d-inline text-dark py-3"> PREVIOUS</Link>
                            <li className="d-inline text-dark"> / </li>
                            <Link to="/shop_main/walnut_chopping_block_sale" className="d-inline text-dark py-3">NEXT</Link>
                        </ul>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h1>Assorted Wood End Grain Chopping Block</h1>
                            <h3 className="py-4">$90.00</h3>
                            <p>Whether you are a culinary professional or a hero in the kitchen at home, this end grain choppin block is perfect for you. Treated with a food-safe mineral oil, this chopping block is ready for some action! This product was crafted by the Magic City Woodworks crew right here in our home city of Birmingham, AL.</p>
                            <p className="py-1">Specs:</p>
                            <p className="py-1">- Walnut and White Oak</p>
                            <p className="py-1">- 11 in. x 13 in. x 1.75 in.</p>
                            <p className="py-1">- Food Safe</p>
                            <p className="m-0 pt-3 grey-text" >SIZE:</p>
                            <select className="rounded grey lighten-2 border-0 pl-2 py-2" disabled>
                                <option value="10x11">10" x 11"</option>
                                <option value="11x13">11" x 13"</option>
                            </select> <br />
                            <p className="m-0 pt-3 grey-text lighten-5" >QUANTITY:</p>
                            <input type="number" className="rounded grey lighten-2 border-0 px-3 py-2 " disabled /> <br />
                            <h3 className="grey-text pt-5">SOLD OUT</h3>
                            <Button outline color="grey lighten-4 mt-5 px-5 py-3">ADD TO CART</Button> <br />
                            <Fa icon="facebook" className="my-4 mr-4" />
                            <Fa icon="twitter" className="my-4 mr-4" />
                            <Fa icon="linkedin" className="my-4 mr-4" /> <br />
                        </div>
                        <div className="col-md-7">
                            <img src="../pics/assorted_block_1_big.jpg" className="img-fluid rounded mb-2" alt="" />
                            <img src="../pics/assorted_block_2_big.jpg" className="img-fluid rounded mb-2" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
