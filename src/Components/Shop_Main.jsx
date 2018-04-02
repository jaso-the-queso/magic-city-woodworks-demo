import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

export default class Shop_Main extends Component {
  
  render() {
    return (
      <div className="container mt-5 pt-5">
        <div className="row justify-content-start">
            <ul className="list-unstyled d-inline mt-4">
                <Link to="" className="d-inline text-dark p-3">Apparel</Link>
                <Link to="" className="d-inline text-dark p-3">Cutting Boards</Link>
                <Link to="" className="d-inline text-dark p-3">Company Gifts</Link>
                <Link to="" className="d-inline text-dark p-3">Custom Work</Link>
            </ul>
        </div>
       
        {/* Row 1 */}
        <div className="row justify-content-around pt-2">
            <Card className="col-md-3 border-0 text-left">
                <Link to="" className="text-dark">
                <CardImage className="img-fluid rounded" src="../pics/small_3.jpg" />
                <CardBody>
                    <CardTitle>Wooden Coasters</CardTitle>
                    <CardText>$20.00</CardText>
                </CardBody>
                </Link>
            </Card>
            
            <Card className="col-md-3 border-0">
                <CardImage className="img-fluid rounded" src="../pics/groove_1.jpg" />
                <CardBody>
                    <CardTitle>Juice Groove Cutting Board</CardTitle>
                    <CardText>$70.00</CardText>
                </CardBody>
            </Card>
            
            <Card className="col-md-3 border-0">
                <CardImage className="img-fluid rounded" src="../pics/organizer_1.jpg" />
                <CardBody>
                    <CardTitle>Desk Organizer</CardTitle>
                    <CardText>$30.00</CardText>
                </CardBody>
            </Card>
        </div>

        {/* Row 2 */}
        <div className="row justify-content-around pt-2">
            <Card className="col-md-3 border-0 text-left">
                <CardImage className="img-fluid rounded" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                <CardBody>
                    <CardTitle>Assorted Wood End Grain Chopping Block</CardTitle>
                    <CardText>from $90.00</CardText>
                </CardBody>
            </Card>
            
            <Card className="col-md-3 border-0">
                <CardImage className="img-fluid rounded" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                <CardBody>
                    <CardTitle>Walnut + Oak End Grain Chopping Block</CardTitle>
                    <CardText>from $90.00</CardText>
                </CardBody>
            </Card>
            
            <Card className="col-md-3 border-0">
                <CardImage className="img-fluid rounded" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                <CardBody>
                    <CardTitle>Oak End Grain Chopping Block</CardTitle>
                    <CardText>from $90.00</CardText>
                </CardBody>
            </Card>
        </div>

        {/* Row 3 */}
        <div className="row justify-content-around pt-2">
            <Card className="col-md-3 border-0 text-left">
                <CardImage className="img-fluid rounded" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                <CardBody>
                    <CardTitle>Measure Twice Cut Once Tee</CardTitle>
                    <CardText>$20.00</CardText>
                </CardBody>
            </Card>
            
            <Card className="col-md-3 border-0">
                <CardImage className="img-fluid rounded" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                <CardBody>
                    <CardTitle>Build Magic City Tee <br /> (Heather Grey & Navy)</CardTitle>
                    <CardText>$20.00</CardText>
                </CardBody>
            </Card>
            
            <Card className="col-md-3 border-0">
                <CardImage className="img-fluid rounded" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                <CardBody>
                    <CardTitle>Classic Tee (Oatmeal)</CardTitle>
                    <CardText>$20.00</CardText>
                </CardBody>
            </Card>
        </div>

        {/* Row 4 */}
        <div className="row justify-content-around pt-2">
            <Card className="col-md-3 border-0 text-left">
                <CardImage className="img-fluid rounded" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                <CardBody>
                    <CardTitle>Build Magic City Tee (Heather Grey)</CardTitle>
                    <CardText>$15.00</CardText>
                </CardBody>
            </Card>
            
            <Card className="col-md-3 border-0">
                <CardImage className="img-fluid rounded" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                <CardBody>
                    <CardTitle>Build Magic City Tee (Navy)</CardTitle>
                    <CardText>$15.00</CardText>
                </CardBody>
            </Card>
            
            <Card className="col-md-3 border-0">
                <CardImage className="img-fluid rounded" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                <CardBody>
                    <CardTitle>Classic Tee (Navy)</CardTitle>
                    <CardText>$30.00</CardText>
                </CardBody>
            </Card>
        </div>

        

        {/* Row 5 */}
        <div className="row justify-content-around pt-2">
            <Card className="col-md-3 border-0 text-left">
                <CardImage className="img-fluid rounded" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                <CardBody>
                    <CardTitle>Classic Sweatshirt (Dark Grey)</CardTitle>
                    <CardText>$40.00</CardText>
                </CardBody>
            </Card>
            
            <Card className="col-md-3 border-0">
                <CardImage className="img-fluid rounded" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                <CardBody>
                    <CardTitle>Classic Sweatshirt (Light Grey)</CardTitle>
                    <CardText>$40.00</CardText>
                </CardBody>
            </Card>
            
            <Card className="col-md-3 border-0">
                <CardImage className="img-fluid rounded" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
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
