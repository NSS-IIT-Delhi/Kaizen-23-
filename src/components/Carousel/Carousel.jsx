import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
// import Fab from "@material-ui/core/Fab";
import Fab from "@mui/material/Fab";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import { images } from "../../assets/images/imageIndex";
import "./Carousel.css";

export const data = [
  {
    cover: images.slideshow1,
    title: "Image",
  },
  {
    cover: images.slideshow2,
    title: "Image",
  },
  {
    cover: images.slideshow2,
    title: "Image",
  },

  // {
  //   cover: images.slideshow2,
  //   title: "Image",
  // },
  // {
  //   cover: images.slideshow3,
  //   title: "Image",
  // },
  // {
  //   cover: images.slideshow4,
  //   title: "Image",
  // },
  // {
  //   cover: images.slideshow5,
  //   title: "Image",
  // },
  // {
  //   cover: images.slideshow6,
  //   title: "Image",
  // },
  // {
  //   cover: images.slideshow7,
  //   title: "Image",
  // },
  // {
  //   cover: images.slideshow8,
  //   title: "Image",
  // },
];

export default function ResponsiveCarousel(props) {
  const ref = React.useRef();
  return (
    <>
      <div
        className="app__container app__flex app__carousel"
        style={{ width: "100%", position: "relative" }}
      >
        <h2 className="head-text text-gradient">
          Our Sweetest <span className="accent ">Memories</span>
        </h2>

        <ResponsiveContainer
          carouselRef={ref}
          render={(parentWidth, carouselRef) => {
            let currentVisibleSlide = 5;
            if (parentWidth <= 1440) currentVisibleSlide = 3;
            if (parentWidth < 600) currentVisibleSlide = 1;
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Card}
                slideWidth={parentWidth < 600 ? parentWidth - 20 : 500}
                carouselWidth={parentWidth}
                data={data}
                currentVisibleSlide={currentVisibleSlide}
                maxVisibleSlide={5}
                useGrabCursor
              />
            );
          }}
        />
        <div className="fab-cont">
          <Fab
            style={{ position: "absolute", top: "60%", left: 30, zIndex: 10 }}
            size="small"
            color="primary"
            onClick={() => {
              ref.current?.goBack();
            }}
          >
            <ArrowBackIcon />
          </Fab>
          <Fab
            style={{ position: "absolute", top: "60%", right: 30, zIndex: 10 }}
            size="small"
            color="primary"
            onClick={() => {
              ref.current?.goNext(6);
            }}
          >
            <ArrowForwardIcon />
          </Fab>
        </div>
      </div>
    </>
  );
}

export const Card = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];
  return (
    <div
      style={{
        width: "100%",
        height: 300,
        overflow: "hidden",
        userSelect: "none",
      }}
      className="my-slide-component"
    >
      <img
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
        draggable={false}
        src={cover}
      />
    </div>
  );
});
