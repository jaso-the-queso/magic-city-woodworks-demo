import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

export default class Apparel extends Component {
  
  render() {
    return (
      <div className="container mt-5 pt-5">
        <div className="row justify-content-start">
            <ul className="list-unstyled d-inline mt-4">
                <Link to="/shop_main/cutting_boards" className="d-inline text-dark p-3">Cutting Boards</Link>
                <Link to="" className="d-inline text-dark p-3">Company Gifts</Link>
                <Link to="" className="d-inline text-dark p-3">Custom Work</Link>
            </ul>
        </div>

        {/* Row 1 */}
        <div className="row justify-content-around pt-2">
            <Card className="col-md-3 border-0 text-left">
                <CardImage className="img-fluid rounded" src="../pics/tee_1_small.png" />
                <CardBody>
                    <CardTitle>Measure Twice Cut Once Tee</CardTitle>
                    <CardText>$20.00</CardText>
                </CardBody>
            </Card>
            
            <Card className="col-md-3 border-0">
                <CardImage className="img-fluid rounded" src="../pics/tee_2.png" />
                <CardBody>
                    <CardTitle>Build Magic City Tee <br /> (Heather Grey & Navy)</CardTitle>
                    <CardText>$20.00</CardText>
                </CardBody>
            </Card>
            
            <Card className="col-md-3 border-0">
                <CardImage className="img-fluid rounded" src="../pics/tee_3_small.png" />
                <CardBody>
                    <CardTitle>Classic Tee (Oatmeal)</CardTitle>
                    <CardText>$20.00</CardText>
                </CardBody>
            </Card>
        </div>

        {/* Row 2 */}
        <div className="row justify-content-around pt-2">
            <Card className="col-md-3 border-0 text-left">
                <CardImage className="img-fluid rounded" src="../pics/tee_4_small.png" />
                <CardBody>
                    <CardTitle>Build Magic City Tee (Heather Grey)</CardTitle>
                    <CardText>$15.00</CardText>
                </CardBody>
            </Card>
            
            <Card className="col-md-3 border-0">
                <CardImage className="img-fluid rounded" src="../pics/tee_5_small.png" />
                <CardBody>
                    <CardTitle>Build Magic City Tee (Navy)</CardTitle>
                    <CardText>$15.00</CardText>
                </CardBody>
            </Card>
            
            <Card className="col-md-3 border-0">
                <CardImage className="img-fluid rounded" src="../pics/tee_6.png" />
                <CardBody>
                    <CardTitle>Classic Tee (Navy)</CardTitle>
                    <CardText>$30.00</CardText>
                </CardBody>
            </Card>
        </div>

        

        {/* Row 3 */}
        <div className="row justify-content-around pt-2">
            <Card className="col-md-3 border-0 text-left">
                <CardImage className="img-fluid rounded" src="../pics/sweat_1_small.png" />
                <CardBody>
                    <CardTitle>Classic Sweatshirt (Dark Grey)</CardTitle>
                    <CardText>$40.00</CardText>
                </CardBody>
            </Card>
            
            <Card className="col-md-3 border-0">
                <CardImage className="img-fluid rounded" src="../pics/sweat_2.png" />
                <CardBody>
                    <CardTitle>Classic Sweatshirt (Light Grey)</CardTitle>
                    <CardText>$40.00</CardText>
                </CardBody>
            </Card>
            
            <Card className="col-md-3 border-0">
                <CardImage className="img-fluid rounded" src="../pics/patch_1_small.jpg" />
                <CardBody>
                    <CardTitle>Magic City Woodworks Patch</CardTitle>
                    <CardText>$30.00</CardText>
                </CardBody>
            </Card>
        </div>
      </div>
    );
  }
}
