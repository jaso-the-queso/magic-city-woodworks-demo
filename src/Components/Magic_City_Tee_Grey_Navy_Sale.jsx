import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Fa } from 'mdbreact';

export default class Magic_City_Tee_Grey_Navy_Sale extends Component {

    render() {
        return (
            <div>
                <div className="container my-5 pt-5">
                    <div className="row justify-content-between">
                        <ul className="list-unstyled col-md- d-inline mt-4">
                            <Link to="/shop_main" className="d-inline text-dark py-3">OUR PRODUCTS</Link>
                            <li className="d-inline text-dark"> > </li>
                            <li className="d-inline text-dark">BUILD MAGIC CITY TEE (HEATHER GREY & NAVY)</li>
                        </ul>
                        <ul className="list-unstyled col d-inline mt-4 text-right">
                            <Link to="/shop_main/measure_twice_tee_sale" className="d-inline text-dark py-3"> PREVIOUS</Link>
                            <li className="d-inline text-dark"> / </li>
                            <Link to="/shop_main/classic_tee_oatmeal_sale" className="d-inline text-dark py-3">NEXT</Link>
                        </ul>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h1>Build Magic City Tee (Heather Grey & Navy)</h1>
                            <h3 className="py-4">$20.00</h3>
                            <p>Who doesn't love a good t-shirt? The Build Magic City Tee is guaranteed to be the perfect balance of style and comfort. Pick one up while supplies last and support your favorite woodshop! This item was produced by the Yellow Hammer Creative crew right here in our home city of Birmingham, AL. </p>
                            <p className="py-1">Specs:</p>
                            <p className="py-1">- Tri-Blend</p>
                            <p className="py-1">- Pre-Shrunk</p>
                            <p className="m-0 pt-3">SIZE:</p>
                            <select className="rounded grey lighten-2 border-0 pl-2 py-2">
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XL">XXL</option>
                            </select> <br />
                            <p className="m-0 pt-3">QUANTITY:</p>
                            <input type="number" className="rounded grey lighten-2 border-0 px-3 py-2" /> <br />
                            <Button outline color="elegant mt-5 px-5 py-3">ADD TO CART</Button> <br />
                            <Fa icon="facebook" className="my-4 mr-4" />
                            <Fa icon="twitter" className="my-4 mr-4" />
                            <Fa icon="linkedin" className="my-4 mr-4" /> <br />
                        </div>

                        <div className="col-md-7">
                            <img src="../pics/grey_navy_tee_1_big.png" className="img-fluid rounded mb-2" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
