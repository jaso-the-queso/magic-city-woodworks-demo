import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImage, CardText, View } from "mdbreact";

export default class Shop_Main extends Component {
  render() {
    return (
      <div className="container mt-5 pt-5">
        <div className="row justify-content-start">
          <ul className="list-unstyled d-inline mt-4">
            <Link to="/shop_main/apparel" className="d-inline p-3 Nav_link">
              Apparel
            </Link>
            <Link
              to="/shop_main/cutting_boards"
              className="d-inline p-3 Nav_link"
            >
              Cutting Boards
            </Link>
            <Link
              to="/shop_main/company_gifts"
              className="d-inline p-3 Nav_link"
            >
              Company Gifts
            </Link>
            <Link
              to="/shop_main/custom_work"
              className="d-inline p-3 Nav_link"
            >
              Custom Work
            </Link>
          </ul>
        </div>

        {/* Row 1 */}
        <div className="row justify-content-around pt-2">
          <Card className="col-md-3 border-0 text-left">
            <Link to="/shop_main/coasters_sale" className="text-dark">
              <View zoom>
                <CardImage
                  className="img-fluid rounded"
                  src="../pics/small_3.jpg"
                  alt="Wooden Coasters"
                />
              </View>
              <CardBody>
                <h6>Wooden Coasters</h6>
                <CardText>$20.00</CardText>
              </CardBody>
            </Link>
          </Card>

          <Card className="col-md-3 border-0">
            <Link
              to="/shop_main/juice_groove_cutting_board_sale"
              className="text-dark"
            >
              <View zoom>
                <CardImage
                  className="img-fluid rounded"
                  src="../pics/groove_1.jpg"
                  alt="Juice Groove Cutting Board"
                />
              </View>
              <CardBody>
                <h6>Juice Groove Cutting Board</h6>
                <CardText>$70.00</CardText>
              </CardBody>
            </Link>
          </Card>

          <Card className="col-md-3 border-0">
            <Link to="/shop_main/desk_organizer_sale" className="text-dark">
              <View zoom>
                <CardImage
                  className="img-fluid rounded"
                  src="../pics/organizer_1.jpg"
                  alt="Desk Organizer"
                />
              </View>
              <CardBody>
                <h6>Desk Organizer</h6>
                <CardText>$30.00</CardText>
              </CardBody>
            </Link>
          </Card>
        </div>

        {/* Row 2 */}
        <div className="row justify-content-around pt-2">
          <Card className="col-md-3 border-0 text-left">
            <Link
              to="/shop_main/assorted_chopping_block_sale"
              className="text-dark"
            >
              <View zoom>
                <CardImage
                  className="img-fluid rounded"
                  src="../pics/block_1.jpg"
                  alt="Assorted Wood Chopping Block"
                />
              </View>
              <CardBody>
                <h6>Assorted Wood End Grain Chopping Block</h6>
                <CardText>from $90.00</CardText>
              </CardBody>
            </Link>
          </Card>

          <Card className="col-md-3 border-0">
            <Link
              to="/shop_main/walnut_chopping_block_sale"
              className="text-dark"
            >
              <View zoom>
                <CardImage
                  className="img-fluid rounded"
                  src="../pics/block_2.jpg"
                  alt="Walnut Chopping Block"
                />
              </View>
              <CardBody>
                <h6>Walnut + Oak End Grain Chopping Block</h6>
                <CardText>from $90.00</CardText>
              </CardBody>
            </Link>
          </Card>

          <Card className="col-md-3 border-0">
            <Link to="/shop_main/oak_chopping_block_sale" className="text-dark">
              <View zoom>
                <CardImage
                  className="img-fluid rounded"
                  src="../pics/block_3.jpg"
                  alt="Oak Chopping Block"
                />
              </View>
              <CardBody>
                <h6>Oak End Grain Chopping Block</h6>
                <CardText>from $90.00</CardText>
              </CardBody>
            </Link>
          </Card>
        </div>

        {/* Row 3 */}
        <div className="row justify-content-around pt-2">
          <Card className="col-md-3 border-0 text-left">
            <Link to="/shop_main/measure_twice_tee_sale" className="text-dark">
              <View zoom>
                <CardImage
                  className="img-fluid rounded"
                  src="../pics/tee_1_small.png"
                  alt="Measure Twice Cut Once Tee"
                />
              </View>
              <CardBody>
                <h6>Measure Twice Cut Once Tee</h6>
                <CardText>$20.00</CardText>
              </CardBody>
            </Link>
          </Card>

          <Card className="col-md-3 border-0">
            <Link
              to="/shop_main/magic_city_tee_grey_navy_sale"
              className="text-dark"
            >
              <View zoom>
                <CardImage
                  className="img-fluid rounded"
                  src="../pics/tee_2.png"
                  alt="Magic City Tee Grey and Navy"
                />
              </View>
              <CardBody>
                <h6>
                  Build Magic City Tee <br /> (Heather Grey & Navy)
                </h6>
                <CardText>$20.00</CardText>
              </CardBody>
            </Link>
          </Card>

          <Card className="col-md-3 border-0">
            <Link
              to="/shop_main/classic_tee_oatmeal_sale"
              className="text-dark"
            >
              <View zoom>
                <CardImage
                  className="img-fluid rounded"
                  src="../pics/tee_3_small.png"
                  alt="Classic Tee Oatmeal"
                />
              </View>
              <CardBody>
                <h6>Classic Tee (Oatmeal)</h6>
                <CardText>$20.00</CardText>
              </CardBody>
            </Link>
          </Card>
        </div>

        {/* Row 4 */}
        <div className="row justify-content-around pt-2">
          <Card className="col-md-3 border-0 text-left">
            <Link
              to="/shop_main/magic_city_tee_grey_sale"
              className="text-dark"
            >
              <View zoom>
                <CardImage
                  className="img-fluid rounded"
                  src="../pics/tee_4_small.png"
                  alt="Magic City Tee Grey"
                />
              </View>
              <CardBody>
                <h6>Build Magic City Tee (Heather Grey)</h6>
                <CardText>$15.00</CardText>
              </CardBody>
            </Link>
          </Card>

          <Card className="col-md-3 border-0">
            <Link
              to="/shop_main/magic_city_tee_navy_sale"
              className="text-dark"
            >
              <View zoom>
                <CardImage
                  className="img-fluid rounded"
                  src="../pics/tee_5_small.png"
                  alt="Magic City Tee Navy"
                />
              </View>
              <CardBody>
                <h6>Build Magic City Tee (Navy)</h6>
                <CardText>$15.00</CardText>
              </CardBody>
            </Link>
          </Card>

          <Card className="col-md-3 border-0">
            <Link to="/shop_main/classic_tee_navy_sale" className="text-dark">
              <View zoom>
                <CardImage
                  className="img-fluid rounded"
                  src="../pics/tee_6.png"
                  alt="Classic Tee Navy"
                />
              </View>
              <CardBody>
                <h6>Classic Tee (Navy)</h6>
                <CardText>$30.00</CardText>
              </CardBody>
            </Link>
          </Card>
        </div>

        {/* Row 5 */}
        <div className="row justify-content-around pt-2">
          <Card className="col-md-3 border-0 text-left">
            <Link to="/shop_main/sweatshirt_dark_sale" className="text-dark">
              <View zoom>
                <CardImage
                  className="img-fluid rounded"
                  src="../pics/sweat_1_small.png"
                  alt="Sweatshirt Dark Grey"
                />
              </View>
              <CardBody>
                <h6>Classic Sweatshirt (Dark Grey)</h6>
                <CardText>$40.00</CardText>
              </CardBody>
            </Link>
          </Card>

          <Card className="col-md-3 border-0">
            <Link to="/shop_main/sweatshirt_light_sale" className="text-dark">
              <View zoom>
                <CardImage
                  className="img-fluid rounded"
                  src="../pics/sweat_2.png"
                  alt="Sweatshirt Light Grey"
                />
              </View>
              <CardBody>
                <h6>Classic Sweatshirt (Light Grey)</h6>
                <CardText>$40.00</CardText>
              </CardBody>
            </Link>
          </Card>

          <Card className="col-md-3 border-0">
            <Link to="/shop_main/patch_sale" className="text-dark">
              <View zoom>
                <CardImage
                  className="img-fluid rounded"
                  src="../pics/patch_1_small.jpg"
                  alt="Magic City Woodworks Patch"
                />
              </View>
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
