import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FeatureCard from "../FeatureCard";
import "./feature.css";
import inSyncImage from "./img/undraw_in_sync_re_jlqd.svg";
import webDevice from "./img/undraw_web_devices_re_m8sc.svg";
import openSource from "./img/undraw_code_review_re_woeb.svg";

const features = [
  {
    id: 1,
    title: "Using bookmarks?",
    description:
      "You can add various bookmarks and even organize and edit them in groups!",
    img: webDevice,
    grid: "flex-start",
    learnMore: "https://doc.libromarko.xyz/docs/category/how-to-use---web",
  },
  {
    id: 2,
    title: "Using different devices and browsers?",
    description:
      "You can open your bookmarks and groups in different devices and browsers easily!",
    img: inSyncImage,
    grid: "flex-end",
    learnMore: "https://doc.libromarko.xyz/docs/intro",
  },
  {
    id: 3,
    title: "Completely open source!",
    description: "You can start contributing right away.",
    img: openSource,
    grid: "space-between",
    learnMore: "https://github.com/libromarko",
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
