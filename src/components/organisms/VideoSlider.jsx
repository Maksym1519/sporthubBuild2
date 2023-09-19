import vs from "./videoSlider.module.scss";
import {useAppDispatch, useAppSelector} from '../../App/hooks';
import VideoUser from "../molecules/VideoUser";
import { Text24500 } from "../atoms/Text";
import { Text18500 } from "../atoms/Text";
import { VideoUserArray } from "../../Data";
import { AvaArray } from "../../Data";
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
register();

const VideoSlider = () => {
  const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;

  return (
    <div className={vs.videoSlider__wrapper}>
{isMobile ? (<h3 className={vs.title}>
        <Text18500 text="View later " />
      </h3>) :
      (<h3 className={vs.title}>
        <Text24500 text="Video List Name" />
      </h3>)
}
      <div className={vs.swiper__wrapper}>
            <Swiper slidesPerView={3.5} speed={500} loop={true} direction={isMobile ? ('vertical') : ('horizontal')} className={vs.swiper__container}>
            <SwiperSlide className={vs.swiperSlide}>
            <VideoUser img={VideoUserArray[0]} ava={AvaArray[0]}/>
            </SwiperSlide>
            <SwiperSlide className={vs.swiperSlide}>
            <VideoUser img={VideoUserArray[1]} ava={AvaArray[1]}/>
            </SwiperSlide>
            <SwiperSlide className={vs.swiperSlide}>
            <VideoUser img={VideoUserArray[2]} ava={AvaArray[2]}/>
            </SwiperSlide>
            <SwiperSlide className={vs.swiperSlide}>
            <VideoUser img={VideoUserArray[3]} ava={AvaArray[3]}/>
            </SwiperSlide>
            <SwiperSlide className={vs.swiperSlide}>
            <VideoUser img={VideoUserArray[4]} ava={AvaArray[4]}/>
            </SwiperSlide>
            <SwiperSlide className={vs.swiperSlide}>
            <VideoUser img={VideoUserArray[5]} ava={AvaArray[5]}/>
            </SwiperSlide>
            <SwiperSlide className={vs.swiperSlide}>
            <VideoUser img={VideoUserArray[2]} ava={AvaArray[6]}/>
            </SwiperSlide>
            <SwiperSlide className={vs.swiperSlide}>
            <VideoUser img={VideoUserArray[3]} ava={AvaArray[6]}/>
            </SwiperSlide>
            <SwiperSlide className={vs.swiperSlide}>
            <VideoUser img={VideoUserArray[4]} ava={AvaArray[6]}/>
            </SwiperSlide>
            <SwiperSlide className={vs.swiperSlide}>
            <VideoUser img={VideoUserArray[5]} ava={AvaArray[6]}/>
            </SwiperSlide>
            <SwiperSlide className={vs.swiperSlide}>
            <VideoUser img={VideoUserArray[0]} ava={AvaArray[6]}/>
            </SwiperSlide>
            <SwiperSlide className={vs.swiperSlide}>
            <VideoUser img={VideoUserArray[1]} ava={AvaArray[6]}/>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default VideoSlider;
