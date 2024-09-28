import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
// import Sidebar from "../../img/img1.png";
// import Ecommerce from "../../img/img2.png";
// import HOC from "../../img/img3.png";
// import MusicApp from "../../img/img4.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          
          <img src="https://cdn.pixabay.com/photo/2021/10/11/17/37/smartphone-6701409_1280.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2014/05/30/07/23/pizza-boxes-358029_960_720.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2016/03/03/10/17/social-media-1233873_1280.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2013/03/09/14/38/gym-91849_960_720.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
