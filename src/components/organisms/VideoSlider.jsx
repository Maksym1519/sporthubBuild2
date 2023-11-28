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

const VideoSlider = (props) => {
  const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;
console.log(props.avatars)
  return (
    <div className={vs.videoSlider__wrapper}>
{isMobile ? (<h3 className={vs.title}>
        <Text18500 text="View later " />
      </h3>) :
      (<h3 className={vs.title}>
        <Text24500 text="Videos" />
      </h3>)
}
      <div className={vs.swiper__wrapper}>
            <Swiper slidesPerView={1} speed={2000} loop={false} direction={isMobile ? ('vertical') : ('horizontal')} className={vs.swiper__container}>
            {props.link.map((link, index) => (
            <SwiperSlide className={vs.swiperSlide}>
                   <VideoUser
                    key={index}
                    videoUrl={link}
                    update={props.propsTime}
                    index={index}
                    avatar={props.avatars[index]}
                    fileName={props.fileNames[index]}
                    usersName={props.usersName[index]}
                    />
            </SwiperSlide>
            ))}
            </Swiper>
      </div>
    </div>
  );
};

export default VideoSlider;
