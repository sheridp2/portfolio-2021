import React from "react";

import "./AboutDetails.scss";
import { Grid } from "@material-ui/core";
import patBeach from "../assets/images/pat-beach.jpg";
import worldTraveler from "../assets/images/worldtraveler.jpg";
import forestService from "../assets/images/forestservice.JPG";
import forestService2 from "../assets/images/forestservice2.JPG";
import alps from "../assets/images/alps.JPG";
import paint from "../assets/images/paint.jpg";

import Flippy, { FrontSide, BackSide } from "react-flippy";

export default function AboutDetails() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Flippy
          flipOnClick={true}
        >
          <FrontSide
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <img
              alt="Patrick at the beach"
              src={patBeach}
              style={{ maxWidth: '100%', maxHeight: '400px' }}
            />
              PNW native
            <span>

              Click to flip
            </span>
          </FrontSide>
          <BackSide
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }}>
            <img
              alt="Patrick doing a painting class"
              src={paint} 
              style={{ maxWidth: '100%', maxHeight: '400px' }}
            />
            <span >
              (BACK SIDE)
            </span>
          </BackSide>
        </Flippy>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Flippy
          flipOnClick={true}
        >
          <FrontSide
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <img
              alt="Patrick at the beach"
              src={alps}
              style={{ maxWidth: '100%', maxHeight: '400px' }}
            />
            World Traveler
            <span>

            Click to flip
            </span>
          </FrontSide>
          <BackSide
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }}>
            <img
              alt="Patrick doing a painting class"
              src={worldTraveler} 
              style={{ maxWidth: '100%', maxHeight: '400px' }}
            />
            <span >
              (BACK SIDE)
            </span>
          </BackSide>
        </Flippy>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Flippy
          flipOnClick={true}
        >
          <FrontSide
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <img
              alt="Patrick at the beach"
              src={forestService}
              style={{ maxWidth: '100%', maxHeight: '400px' }}
            />
            Former Forest Service Ranger
            <span>

              Click to flip
            </span>
          </FrontSide>
          <BackSide
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }}>
            <img
              alt="Patrick doing a painting class"
              src={forestService2} 
              style={{ maxWidth: '100%', maxHeight: '400px' }}
            />
            <span >
            B.S. in Environmental Science
            </span>
          </BackSide>
        </Flippy>
      </Grid>
    </Grid>
  );
}
