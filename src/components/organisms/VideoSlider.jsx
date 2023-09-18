import vs from './videoSlider.module.scss';
import { Text24500 } from '../atoms/Text';
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
    return (
        <div className={vs.videoSlider__wrapper}>
           <h3 className={vs.title}><Text24500 text='Video List Name'/></h3>
           <div className={vs.swiper__wrapper}>
           <Swiper>
            
           </Swiper>
           </div>
        </div>
    )
}

export default VideoSlider;