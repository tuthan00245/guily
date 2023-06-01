import React from "react";

import SwiperCore, { Autoplay, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./heroSlide.scss";



const data = ["https://asset.cloudinary.com/cloudformearncdct/06da4cdd46395fdfe81637f7124449ce",
"https://asset.cloudinary.com/cloudformearncdct/60156bc097e3158efcae72bebb8b71de",
"https://asset.cloudinary.com/cloudformearncdct/c4a5c61e98711f49c0018647d1d0eaec"
];
const movieItems = [
  "https://res.cloudinary.com/nghia285diem/image/upload/v1655100632/images_frontend/hero-1_bf7gkc.jpg",
  "https://res.cloudinary.com/nghia285diem/image/upload/v1655100632/images_frontend/hero-1_bf7gkc.jpg",
  "https://res.cloudinary.com/nghia285diem/image/upload/v1655100635/images_frontend/hero-2_sns3xy.jpg",
];
const HeroSlide = () => {
  return (
    
    <div className="hero-slide">
      <Swiper
                modules={[Autoplay, Thumbs, Navigation]}
                className="slides"
                spaceBetween={12}
                speed={1000}
                tag="div"
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >

        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const HeroSlideItem = (props) => {
  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${props.item})` }}
    >
      <div className="hero-slide__item__content container">
          <div className="hero-slide__item__content__register">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
          </div>
        {/* <Link
          className="fix-display"
          to={link}
          style={{ position: "relative", zIndex: 100000 }}
        >
          <div className="hero-slide__item__content__poster">
            <img src={apiConfig.w500Image(item.poster_path)} alt="" />
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default HeroSlide;
