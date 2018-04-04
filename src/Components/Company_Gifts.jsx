import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardImage, CardText } from 'mdbreact';

export default class Company_Gifts extends Component {

    render() {
        return (
            <div className="container mt-5 pt-5">
                <div className="row justify-content-start">
                    <ul className="list-unstyled d-inline mt-4">
                        <Link to="/shop_main" className="d-inline text-dark p-3">Shop Home</Link>
                        <Link to="/shop_main/apparel" className="d-inline text-dark p-3">Apparel</Link>
                        <Link to="/shop_main/cutting_boards" className="d-inline text-dark p-3">Cutting Boards</Link>
                        <Link to="/shop_main/custom_work" className="d-inline text-dark p-3">Custom Work</Link>
                    </ul>
                </div>

                <div className="text-center">
                    <h3 className="py-4">FACT: 100% OF PEOPLE ENJOY RECEIVING A NICE GIFT</h3>
                    <h5 className="py-4">COMPANY GIFTS MADE AS EASY AS:</h5>
                </div>

                <div className="row justify-content-around my-4">
                    <Card className="col-md-3 border-0 text-left">
                        <p>1. BUY COASTERS</p>
                        <Link to="/shop_main/coasters_sale" className="text-dark">
                            <CardImage className="img-fluid rounded" src="../pics/small_3.jpg" />
                            <CardBody>
                                <h6>Wooden Coasters</h6>
                                <CardText>$20.00</CardText>
                            </CardBody>
                        </Link>
                    </Card>

                    <Card className="col-md-3 border-0">
                        <p>2. BUY DESK ORG.</p>
                        <Link to="/shop_main/desk_organizer_sale" className="text-dark">
                            <CardImage className="img-fluid rounded" src="../pics/organizer_1.jpg" />
                            <CardBody>
                                <h6>Desk Organizer</h6>
                                <CardText>$30.00</CardText>
                            </CardBody>
                        </Link>
                    </Card>

                    <Card className="col-md-3 border-0">
                        <p>3. BUY CUTTING BOARDS</p>
                        <Link to="/shop_main/juice_groove_cutting_board_sale" className="text-dark">
                            <CardImage className="img-fluid rounded" src="../pics/groove_1.jpg" />
                            <CardBody>
                                <h6>Juice Groove Cutting Board</h6>
                                <CardText>$70.00</CardText>
                            </CardBody>
                        </Link>
                    </Card>
                </div>

                <div className="text-center">
                    <Link to="/contact">
                        <Button outline color="elegant" className="my-3">
                            QUESTIONS? WE CAN HELP!
                        </Button>
                    </Link>

                    <h3 className="mt-4">"THE MOST MEANINGFUL GIFT WE'VE EVER GIVEN"</h3>
                    <img src="../pics/peter_greer.jpg" className="mt-3" />
                    <blockquote className="text-left font-italic mt-4">“We are thrilled with the cutting boards we purchased from Magic City Woodworks! We presented them as gifts to several organizational leaders, staff members, and interns—and based on the feedback, it was the most meaningful gift we’ve ever given. Truly, a remarkable gift from a company with a remarkable mission.”</blockquote>
                    <h5 className="text-left font-italic">- Peter Greer</h5>
                    <h6 className="text-left font-italic">CEO of HOPE International</h6>
                </div>
            </div>
        );
    }
}
