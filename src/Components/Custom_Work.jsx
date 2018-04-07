import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Input, Button, Fa } from "mdbreact";

export default class Custom_Work extends Component {
    render() {
        return (
            <div className="container pt-5 mt-5">
                <div className="row justify-content-start ">
                    <ul className="list-unstyled d-inline mt-4">
                        <Link to="/shop_main" className="d-inline text-dark p-3">Shop Home</Link>
                        <Link to="/shop_main/apparel" className="d-inline text-dark p-3">Apparel</Link>
                        <Link to="/shop_main/cutting_boards" className="d-inline text-dark p-3">Cutting Boards</Link>
                        <Link to="/shop_main/company_gifts" className="d-inline text-dark p-3">Company Gifts</Link>
                    </ul>
                </div>

                <div className="row main">
                    <div className="col-md-3">
                        <p className="invisible">.</p>
                    </div>
                    <div className="col-md-6 border-bottom text-center">
                        <h1 className="mb-4 mt-4">Custom Work</h1>
                    </div>
                    <div className="col-md-3">
                        <p className="invisible">.</p>
                    </div>
                </div>
                <div className="row main mt-3">
                    <div className="col-md-3">
                        <p className="invisible">.</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <h5 className="mb-4 mt-4">MAKE YOUR TABLE DREAMS COME TRUE</h5>
                    </div>
                    <div className="col-md-3">
                        <p className="invisible">.</p>
                    </div>
                </div>
                <div className="row main pt-5">
                    <div className="col-md-1">
                        <p className="invisible">.</p>
                    </div>
                    <div className="col-md-10  pt-3 ">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <Input label="First Name" />
                                </div>
                                <div className="col-md-6">
                                    <Input label="Last Name" />
                                </div>
                            </div>
                            <Input label="Email Address" />
                            <Input type="textarea" label="Table Description (Please tell us about the table you are wanting custom built. Farmhouse Table, Conference Table, etc...)" />
                            <Input type="textarea" label="Dimensions (ex. 72 in. L x 30 in. W x 30 in. H 1.75 thick top)" />
                            <p className="m-0 pt-3 font-weight-bold" >Wood Type:</p>
                            <select className="rounded grey lighten-2 border-0 pl-2 py-2">
                                <option value="Pine">Pine</option>
                                <option value="Rustic White Oak">Rustic White Oak</option>
                                <option value="Walnut">Walnut</option>
                                <option value="Other">Other (please specify in the "Table Description" field</option>
                            </select> <br />

                            <p className="m-0 pt-3 font-weight-bold" >Stain Color:</p>
                            <select className="rounded grey lighten-2 border-0 mb-3 pl-2 py-2">
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                            </select> <br />
                            <img className="img-fluid rounded mb-3" src="../pics/stain.png" alt="Stain Choices" />

                            <p className="m-0 font-weight-bold">Base:</p>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                                <label class="custom-control-label" for="customRadio1">Steel</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
                                <label class="custom-control-label" for="customRadio2">Wood</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" />
                                <label class="custom-control-label" for="customRadio3">None</label>
                            </div>

                            <div className="text-center">
                                <Button outline color="black">
                                    Click here to make your table dreams come true <Fa icon="magic" className="ml-1" />
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-1">
                        <p className="invisible">.</p>
                    </div>
                </div>

            </div>
        );
    }
}
