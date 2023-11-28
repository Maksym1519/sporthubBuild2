import React from "react";
import m from "./main.module.scss";
//slider------------------------------------------------------------------
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/effect-fade";
import "swiper/scss/effect-cards";
import "swiper/css/effect-creative";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";
register();
//------------------------------------------------------------------------

const Main = (props) => {
 const styled = {
    width: props.width
 }
  return (
    <div className={m.main__wrapper}>
       <div  className={m.container}>
      
        {/* //redux-video-state-------------------------------------------------------- */}
        <div className={m.videos__wrapper}>
            <div className={m.slider__wrapper} style={styled}>
              <Swiper
                //init="false"
                //ref={mainSlider}
                slidesPerView={1}
                speed={1000}
                loop={true}
                //css-mode="true"
                //class="mainSlider"
              >
                <SwiperSlide className={m.slide__wrapper}>
                  <div className={m.video__wrapper}>
                    <img
                      src={
                        "https://res.cloudinary.com/duk3bewdr/image/upload/v1700658466/video_More1_8ffa9a5eec.webp"
                      }
                      alt="video"
                    />
                  </div>
                  <div className={m.video__wrapper}>
                    <img
                      src={
                        "https://res.cloudinary.com/duk3bewdr/image/upload/v1700658486/video_More2_5981aa980f.webp"
                      }
                      alt="video"
                    />
                  </div>
                  <div className={m.video__wrapper}>
                    <img
                      src={
                        "https://res.cloudinary.com/duk3bewdr/image/upload/v1700658504/video_More3_cbb7c02142.webp"
                      }
                      alt="video"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={m.slide__wrapper}>
                  <div className={m.video__wrapper}>
                    <img
                      src={
                        "https://res.cloudinary.com/duk3bewdr/image/upload/v1700658466/video_More1_8ffa9a5eec.webp"
                      }
                      alt="video"
                    />
                  </div>
                  <div className={m.video__wrapper}>
                    <img
                      src={
                        "https://res.cloudinary.com/duk3bewdr/image/upload/v1700658486/video_More2_5981aa980f.webp"
                      }
                      alt="video"
                    />
                  </div>
                  <div className={m.video__wrapper}>
                    <img
                      src={
                        "https://res.cloudinary.com/duk3bewdr/image/upload/v1700658504/video_More3_cbb7c02142.webp"
                      }
                      alt="video"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            </div>
        </div>
    </div>
  );
};
export default Main;
