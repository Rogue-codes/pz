import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="slick">
        <h2>Available in 6 countries today, with many more coming soon</h2>
        <Slider {...settings}>
          <div className="cards">
            <img src="https://www.nationsonline.org/flags_big/Nigeria_lgflag.gif" alt="" />
          </div>

          <div className="cards">
            <img src="https://www.worldometers.info/img/flags/gh-flag.gif" alt="" />
          </div>

          <div className="cards">
            <img src="https://www.worldometers.info/img/flags/ke-flag.gif" alt="" />
          </div>

          <div className="cards">
            <img src="https://www.nationsonline.org/flags_big/Uganda_lgflag.gif" alt="" />
          </div>

          <div className="cards">
            <img src="https://www.worldometers.info/img/flags/uk-flag.gif" alt="" />
          </div>
            
          <div className="cards">
            <img src="https://www.worldometers.info/img/flags/us-flag.gif" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}