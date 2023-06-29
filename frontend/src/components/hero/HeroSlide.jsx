import React from "react";

import SwiperCore, { Autoplay, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./heroSlide.scss";

const movieItems = [
  "https://cdn.shopify.com/s/files/1/1679/6063/articles/bmw-aurora-concept-1-thumb-960xauto-94195_1600x750.jpg?v=1545695578",
  "https://as2.ftcdn.net/v2/jpg/05/73/42/09/1000_F_573420967_tTjM82Oa0aDnTRo3BI2wn3Bxl6lHEQzb.jpg",
  "https://motorstore.vn/wp-content/uploads/2022/10/phu-kien-phuot.jpg",
];
const HeroSlide = () => {
  return (
    
    <div className="hero-slide">
      <Swiper
        style={{paddingTop: '4px',height: '900px'}}
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
