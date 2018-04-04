import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

export default class Cutting_Boards extends Component {
  
  render() {
    return (
      <div className="container mt-5 pt-5">
        <div className="row justify-content-start">
            <ul className="list-unstyled d-inline mt-4">
                <Link to="/shop_main/apparel" className="d-inline text-dark p-3">Apparel</Link>
                <Link to="/shop_main/company_gifts" className="d-inline text-dark p-3">Company Gifts</Link>
                <Link to="/shop_main/custom_work" className="d-inline text-dark p-3">Custom Work</Link>
            </ul>
        </div>

        {/* Row 1 */}
        <div className="row justify-content-around pt-2">
            <Card className="col-md-3 border-0 text-left">
                <CardImage className="img-fluid rounded" src="../pics/block_1.jpg" />
                <CardBody>
                    <CardTitle>Assorted Wood End Grain Chopping Block</CardTitle>
                    <CardText>from $90.00</CardText>
                </CardBody>
            </Card>
            
            <Card className="col-md-3 border-0">
                <CardImage className="img-fluid rounded" src="../pics/block_2.jpg" />
                <CardBody>
                    <CardTitle>Walnut + Oak End Grain Chopping Block</CardTitle>
                    <CardText>from $90.00</CardText>
                </CardBody>
            </Card>
            
            <Card className="col-md-3 border-0">
                <CardImage className="img-fluid rounded" src="../pics/block_3.jpg" />
                <CardBody>
                    <CardTitle>Oak End Grain Chopping Block</CardTitle>
                    <CardText>from $90.00</CardText>
                </CardBody>
            </Card>
        </div>
      </div>
    );
  }
}
