import React from "react";
import Banner from "./Banner";
import { Cardtp, Cardop } from "../../Components";
import Intro from "./Intro";
import IntroCard from "./IntroCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import tours from "./tours.jpeg";
import hotel from "./hotel.jpeg";
import travel from "./travel.jpeg";
import AppCard from "./AppCard";
import BestPackage from "./BestPackage";
const Home = () => {
  const carouselData = [
    {
      id: 1,
      image: tours,
      title: "Build Package",
      content: "Travel hassle-free with our online transport booking service.",
    },
    {
      id: 2,
      image: hotel,
      title: "Hotel",
      content:
        "Explore diverse culinary experiences with our online meal reservation platform",
    },
    {
      id: 3,
      image: travel,
      title: "Travel",
      content:
        "Embark on unforgettable journeys with our online tour booking platform",
    },
    // Add more items as needed
  ];
  return (
    <div>
      <Banner />
      {/* <Cardtp /> */}
      <div className="flex flex-wrap justify-around p-5 mb-3 sm:flex">
        <Carousel
          autoPlay={true}
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={2000}
          // transitionDuration={2000}
          centerMode={false}
          // className="bg-gray-200"
          containerClass="container mx-auto"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="px-4 py-2 "
          // transitionTimingFunction="ease-in-out"
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              partialVisibilityGutter: 40,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              partialVisibilityGutter: 30,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {carouselData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-orange-700 rounded shadow "
            >
              <div className="flex w-full h-20">
                <div className="w-1/3">
                  <img
                    src={item.image}
                    alt={`Carousel item ${item.id}`}
                    className="object-cover w-full h-20"
                  />
                </div>
                <div className="flex-col w-2/3 p-1">
                  <div className="font-semibold text-gray-700">
                    {item.title}
                  </div>
                  <div className="text-gray-700 text-md">{item.content}</div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <IntroCard />

      <div className="p-7">
        <Intro />
      </div>
      <div className="p-7">
        <AppCard />
      </div>
      <div className="p-7">
        <BestPackage />
      </div>
    </div>
  );
};

export default Home;
