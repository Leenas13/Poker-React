import React from "react";
// material-ui components
// @material-ui/icons

// core components
import Carousel from "react-slick";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import { makeStyles } from "@material-ui/core/styles";


import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import CardBody from "components/Card/CardBody";

import 'views/Reg/Reg.css';
import styles from "assets/jss/material-kit-react/components/cardBodyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel(){
  const classes = useStyles();
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
   return (
   
       <div>
<h1>Poker</h1>
   <GridContainer>
      <GridItem className="Regfull1">
        <Card >
          <Carousel {...settings}>
            <div>
              <card>
                <CardBody>
                <p className="h61" >Advanced</p>
                <h1 className="h11">Coming soon...</h1>
                <p className="p1" >Buy-in :  0.199 ETH</p>
                <p className="P3-input" >
                <input className="input1" type="TEXT" placeholder="Your email address..."/>
                  {/* <CustomInput className="input1"
                  inputProps={{
                  placeholder: "Your email address..."
                             }}
                  formControlProps={{
                  fullWidth: true
                                    }}
                  /> */}
                </p>
                <Button>SIGN UP TO BE NOTIFIED </Button>
                </CardBody>
              </card>
              
            </div>
            <div>
            <card>
                
                <CardBody>
                <h4 className="h61">Amateur</h4>
                <h2  className="h11">Open for registration</h2>
                <p className="p1">Buy-in: 0.0199 ETH</p>
                <p className="p2">Players registered: 5</p>
                <p className="p3">Tournament begins once 6 Players buy-in.</p>
                <Button >PAY  0.0199  ETH & BUY-IN </Button>
                </CardBody>
              </card>
            </div>
            <div>
            <card>
                
                <CardBody>
                <h4 className="h61">Expert</h4>
                <h2  className="h11">Coming Soon...</h2>
                <p className="p1">Buy-in: 1.99 ETH</p>
                <p className="P3-input" >
                <input className="input1" type="TEXT" placeholder="Your email address..."/>
                </p>
                <Button>SIGN UP TO BE NOTIFIED </Button>
                </CardBody>
              </card>
            </div>
          </Carousel>
        </Card>
      </GridItem>
    </GridContainer>
    </div>
  );
}