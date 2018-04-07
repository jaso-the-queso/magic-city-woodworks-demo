import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImage, CardText } from 'mdbreact';

export default class Apparel extends Component {

    render() {
        return (
            <div className="container mt-5 pt-5">
                <div className="row justify-content-start">
                    <ul className="list-unstyled d-inline mt-4">
                        <Link to="/shop_main" className="d-inline text-dark p-3">Shop Home</Link>
                        <Link to="/shop_main/cutting_boards" className="d-inline text-dark p-3">Cutting Boards</Link>
                        <Link to="/shop_main/company_gifts" className="d-inline text-dark p-3">Company Gifts</Link>
                        <Link to="/shop_main/custom_work" className="d-inline text-dark p-3">Custom Work</Link>
                    </ul>
                </div>

                {/* Row 1 */}
                <div className="row justify-content-around pt-2">
                    <Card className="col-md-3 border-0 text-left">
                        <Link to="/shop_main/measure_twice_tee_sale" className="text-dark">
                            <CardImage className="img-fluid rounded" src="../pics/tee_1_small.png" alt="Measure Twice Cut Once Tee" />
                            <CardBody>
                                <h6>Measure Twice Cut Once Tee</h6>
                                <CardText>$20.00</CardText>
                            </CardBody>
                        </Link>
                    </Card>

                    <Card className="col-md-3 border-0">
                        <Link to="/shop_main/magic_city_tee_grey_navy_sale" className="text-dark">
                            <CardImage className="img-fluid rounded" src="../pics/tee_2.png" alt="Magic City Tee Grey and Navy" />
                            <CardBody>
                                <h6>Build Magic City Tee <br /> (Heather Grey & Navy)</h6>
                                <CardText>$20.00</CardText>
                            </CardBody>
                        </Link>
                    </Card>

                    <Card className="col-md-3 border-0">
                        <Link to="/shop_main/classic_tee_oatmeal_sale" className="text-dark">
                            <CardImage className="img-fluid rounded" src="../pics/tee_3_small.png" alt="Classic Tee Oatmeal" />
                            <CardBody>
                                <h6>Classic Tee (Oatmeal)</h6>
                                <CardText>$20.00</CardText>
                            </CardBody>
                        </Link>
                    </Card>
                </div>

                {/* Row 2 */}
                <div className="row justify-content-around pt-2">
                    <Card className="col-md-3 border-0 text-left">
                        <Link to="/shop_main/magic_city_tee_grey_sale" className="text-dark">
                            <CardImage className="img-fluid rounded" src="../pics/tee_4_small.png" alt="Magic City Tee Grey" />
                            <CardBody>
                                <h6>Build Magic City Tee (Heather Grey)</h6>
                                <CardText>$15.00</CardText>
                            </CardBody>
                        </Link>
                    </Card>

                    <Card className="col-md-3 border-0">
                        <Link to="/shop_main/magic_city_tee_navy_sale" className="text-dark">
                            <CardImage className="img-fluid rounded" src="../pics/tee_5_small.png" alt="Magic City Tee Navy" />
                            <CardBody>
                                <h6>Build Magic City Tee (Navy)</h6>
                                <CardText>$15.00</CardText>
                            </CardBody>
                        </Link>
                    </Card>

                    <Card className="col-md-3 border-0">
                        <Link to="/shop_main/classic_tee_navy_sale" className="text-dark">
                            <CardImage className="img-fluid rounded" src="../pics/tee_6.png" alt="Classic Tee Navy" />
                            <CardBody>
                                <h6>Classic Tee (Navy)</h6>
                                <CardText>$30.00</CardText>
                            </CardBody>
                        </Link>
                    </Card>
                </div>



                {/* Row 3 */}
                <div className="row justify-content-around pt-2">
                    <Card className="col-md-3 border-0 text-left">
                        <Link to="/shop_main/sweatshirt_dark_sale" className="text-dark">
                            <CardImage className="img-fluid rounded" src="../pics/sweat_1_small.png" alt="Sweatshirt Dark Grey" />
                            <CardBody>
                                <h6>Classic Sweatshirt (Dark Grey)</h6>
                                <CardText>$40.00</CardText>
                            </CardBody>
                        </Link>
                    </Card>

                    <Card className="col-md-3 border-0">
                        <Link to="/shop_main/sweatshirt_light_sale" className="text-dark">
                            <CardImage className="img-fluid rounded" src="../pics/sweat_2.png" alt="Sweatshirt Light Grey" />
                            <CardBody>
                                <h6>Classic Sweatshirt (Light Grey)</h6>
                                <CardText>$40.00</CardText>
                            </CardBody>
                        </Link>
                    </Card>

                    <Card className="col-md-3 border-0">
                        <Link to="/shop_main/patch_sale" className="text-dark">
                            <CardImage className="img-fluid rounded" src="../pics/patch_1_small.jpg" alt="Magic City Woodworks Patch" />
                            <CardBody>
                                <h6>Magic City Woodworks Patch</h6>
                                <CardText>$30.00</CardText>
                            </CardBody>
                        </Link>
                    </Card>
                </div>
            </div>
        );
    }
}
