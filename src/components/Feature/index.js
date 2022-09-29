import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FeatureCard from "../FeatureCard";
import "./feature.css";
import inSyncImage from "./img/undraw_in_sync_re_jlqd.svg";
import webDevice from "./img/undraw_web_devices_re_m8sc.svg";
import openSource from "./img/undraw_open_source_-1-qxw.svg";

const features = [
  {
    id: 1,
    title: "Using bookmarks?",
    description: "You can add various bookmarks, you can even edit them in groups!",
    img: inSyncImage,
    grid: "flex-start",
    learnMore: '#'
  },
  {
    id: 2,
    title: "Using different devices and browser?",
    description: "You can open your bookmarks and groups in different devices and browser easily!",
    img: webDevice,
    grid: "center",
    learnMore: '#'
  },
  {
    id: 3,
    title: "Completely open source.",
    description: "desc",
    img: openSource,
    grid: "flex-end",
    learnMore: '#'
  },
];

export default function Feature() {
  return (
    <React.Fragment>
      <Box className="box-bg" sx={{ pb: 10 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L30,106.7C60,117,120,139,180,133.3C240,128,300,96,360,69.3C420,43,480,21,540,26.7C600,32,660,64,720,64C780,64,840,32,900,69.3C960,107,1020,213,1080,256C1140,299,1200,277,1260,229.3C1320,181,1380,107,1410,69.3L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
        <Container maxWidth="xl">
          {features.map((cardItem) => (
            <FeatureCard key={cardItem.id} cardItem={cardItem} />
          ))}
        </Container>
      </Box>
    </React.Fragment>
  );
}
