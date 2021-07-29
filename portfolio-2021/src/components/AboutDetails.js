import React from "react";
import "./AboutDetails.scss";
import { Grid } from "@material-ui/core";
import patBeach from "../assets/images/pat-beach.jpg";
import snowShoe from "../assets/images/snowshoe2.jpg";
import worldTraveler from "../assets/images/worldtraveler.jpg";
import forestService from "../assets/images/forestservice.JPG";
import forestService2 from "../assets/images/forestservice2.JPG";
import alps from "../assets/images/alps.JPG";
import paint from "../assets/images/paint.jpg";

import { Fade } from "react-reveal";

import Flippy, { FrontSide, BackSide } from "react-flippy";

export default function AboutDetails() {
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Flippy>
          <FrontSide
            style={{
              padding: 0,
              boxShadow: "none",
            }}
          >
            <div className="property-card">
              <div
                className="property-image"
                style={{
                  backgroundImage: `url(${patBeach})`,
                }}
              ></div>

              <div className="property-description">
                <h5> Full-Stack Web Developer </h5>
                <p>
                  Currently building a theme park wait time API for predicting
                  waittimes
                </p>
              </div>
              <a href="#">
                <div className="property-social-icons"></div>
              </a>
            </div>
          </FrontSide>
          <BackSide style={{ padding: 0, boxShadow: "none" }}>
            <div className="property-card">
              <div
                className="property-image-back"
                style={{
                  backgroundImage: `url(${paint})`,
                }}
              ></div>
            </div>
          </BackSide>
        </Flippy>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Flippy>
          <FrontSide style={{ padding: 0, boxShadow: "none" }}>
            <div className="property-card">
              <div
                className="property-image"
                style={{
                  backgroundImage: `url(${worldTraveler})`,
                }}
              ></div>

              <div className="property-description">
                <h5> World Traveler </h5>
                <p>18 countries and counting</p>
              </div>
              <a href="#">
                <div className="property-social-icons"></div>
              </a>
            </div>
          </FrontSide>
          <BackSide style={{ padding: 0, boxShadow: "none" }}>
            <div className="property-card">
              <div
                className="property-image-back"
                style={{
                  backgroundImage: `url(${alps})`,
                }}
              ></div>
            </div>
          </BackSide>
        </Flippy>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Flippy>
          <FrontSide style={{ padding: 0, boxShadow: "none" }}>
            <div className="property-card">
              <div
                className="property-image"
                style={{
                  backgroundImage: `url(${forestService})`,
                }}
              ></div>

              <div className="property-description">
                <h5> Former Forest Ranger/ Environment Scientist </h5>
                <p>
                  Someday I'd love to use my coding skills to help protet the
                  natureal world
                </p>
              </div>
              <a href="#">
                <div className="property-social-icons"></div>
              </a>
            </div>
          </FrontSide>
          <BackSide style={{ padding: 0, boxShadow: "none" }}>
            <div className="property-card">
              <div
                className="property-image-back"
                style={{
                  backgroundImage: `url(${forestService2})`,
                }}
              ></div>
            </div>
          </BackSide>
        </Flippy>
      </Grid>
    </>
  );
}
