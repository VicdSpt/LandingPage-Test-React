import React from "react";
import BannerBackground from "../images/home-banner-background.png";
import BannerImage from "../images/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import NavbarPage from "./NavbarPage";

function HomePage() {
  return (
    <div className="home-container">
      <NavbarPage />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="#" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Food Delivery Hot, Fresh & Good </h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni amet
            accusamus eaque magnam voluptates dolorem!
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="#" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
