import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import m from "./main.module.scss";
import { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { updateScreenWidth } from "../../../features/headerSlice";
import { getShowMore } from "../../functions/getShowMore";
import { Text14400 } from "../../atoms/Text";
import { Text16400 } from "../../atoms/Text";
import { Text12600 } from "../../atoms/Text";
import { Text24500 } from "../../atoms/Text";
import { Text18500 } from "../../atoms/Text";
import Avatext from "../../molecules/Avatext";
import Header from "../../organisms/Header";
import HeaderCreator from '../../organisms/HeaderCreator';
import SubscribeUser from "../../organisms/SubscribeUser";
import VideoUser from "../../molecules/VideoUser";
import {
  showHome,
  showLatest,
  showViewLater,
  showSubscribe,
} from "../../../features/videoUserSlice";
import { AvaArray } from "../../../Data";
import { VideoUserArray } from "../../../Data";
import UserLatest from "../../organisms/UserLatest";
import ViewLater from "../../organisms/ViewLater";
import Arrow from "../../../images/arrow-down-yellow.svg";
import More from "../../../images/more.svg";

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
//------------------------------------------------------------------------

const Main = () => {
  //-----------------------------------------------------------------------
  const [activeIndex, setActiveIndex] = useState(true);
  useEffect(() => {
    setActiveIndex(0);
  }, []);
  const handleSwitcher = (index) => {
    setActiveIndex(index);
  };
  //---------------------------------------------------
  const [showMore, setShowMore] = useState(false);
  const toggleMessages = () => {
    setShowMore(!showMore);
  };

  //redux---------------------------------------------------------
  const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;

  //redux-state-video-------------------------------------------
  const dispatch = useAppDispatch();
  const currentComponent = useSelector(
    (state) => state.videoUser.currentComponent
  );
  const handleHomeClick = () => {
    dispatch(showHome());
  };
  const handleLatestClick = () => {
    dispatch(showLatest());
  };
  const handleViewLaterClick = () => {
    dispatch(showViewLater());
  };
  const handleSubscribeClick = () => {
    dispatch(showSubscribe());
  };

  //redux-menu-Dots------------------------------------------------
  
  //strapi-getShowMore---------------------------------------------
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getShowMoreFromApi = async () => {
      try {
        const result = await getShowMore(); // Вызываем функцию для получения данных
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getShowMoreFromApi();
  }, []);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }
  //video-menu-----------------------------------------------
const num = 555
  return (
    <div className={m.main__wrapper}>
      <HeaderCreator num={num}/>
      <div className={m.container}>
        <div className={m.sidebar__wrapper}>
          <div className={m.switcher__wrapper}>
            <div
              className={`${m.switcher__item} ${
                activeIndex === 0 ? m.active : ""
              }`}
              onClick={() => {
                handleSwitcher(0), handleHomeClick();
              }}
            >
              <Text16400 text="Home" color="rgba(187, 187, 187, 1)" />
            </div>
            <div
              className={`${m.switcher__item} ${
                activeIndex === 1 ? m.active : ""
              }`}
              onClick={() => {
                handleSwitcher(1), handleLatestClick();
              }}
            >
              <Text16400 text="Latest" color="rgba(187, 187, 187, 1)" />
            </div>
            <div
              className={`${m.switcher__item} ${
                activeIndex === 2 ? m.active : ""
              }`}
              onClick={() => {
                handleSwitcher(2), handleViewLaterClick();
              }}
            >
              <Text16400 text="View later" color="rgba(187, 187, 187, 1)" />
            </div>
          </div>
          <div className={m.mySubscription__wrapper}>
            <div className={m.title}>
              <Text12600 text="MY SUBSCRIPTION" color="rgba(173, 121, 85, 1)" />
            </div>
            <div className={m.items__wrapper}>
              {/* //item1-------------------------------------------------------------- */}
              <div className={m.item}>
                <Avatext
                  img={AvaArray[0]}
                  text1={
                    <Text14400
                      text="Marvin McKinney"
                      color="rgba(187, 187, 187, 1)"
                    />
                  }
                />
              </div>
              {/* //item2-------------------------------------------------------------- */}
              <div
                className={`${m.item} ${activeIndex === 4 ? m.active : ""}`}
                onClick={() => {
                  handleSwitcher(4), handleSubscribeClick();
                }}
              >
                <Avatext
                  img={AvaArray[1]}
                  text1={
                    <Text14400
                      text="Eleanor Pena"
                      color="rgba(187, 187, 187, 1)"
                    />
                  }
                />
                <div className={m.messages}></div>
              </div>
             {/* //item-------------------------------------------------------------- */}
            </div>
            <div className={m.showMore__wrapper}>
              <div className={m.showMore__button} onClick={toggleMessages}>
                <Text14400
                  text="Show moreShow more"
                  color="rgba(173, 121, 85, 1)"
                />
                <img
                  src={Arrow}
                  alt="arrow"
                  className={`${showMore ? m.rotate : ""}`}
                />
              </div>
              {showMore && (
                <div className={m.item}>
                  <Avatext
                    img={AvaArray[9]}
                    text1={
                      <Text14400
                        text="Floyd Miles"
                        color="rgba(187, 187, 187, 1)"
                      />
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* //redux-video-state-------------------------------------------------------- */}
        {currentComponent === "home" && (
          <div className={m.videos__wrapper}>
            {currentComponent === "subscribe" && <SubscribeUser />}
            <div className={m.slider__wrapper}>
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
                        "http://localhost:1337/uploads/video_More1_6a77d41eb9.webp"
                      }
                      alt="video"
                    />
                  </div>
                  <div className={m.video__wrapper}>
                    <img
                      src={
                        "http://localhost:1337/uploads/video_More2_6106767343.webp"
                      }
                      alt="video"
                    />
                  </div>
                  <div className={m.video__wrapper}>
                    <img
                      src={
                        "http://localhost:1337/uploads/video_More3_e0e9300cfd.webp"
                      }
                      alt="video"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={m.slide__wrapper}>
                  <div className={m.video__wrapper}>
                    <img
                      src={
                        "http://localhost:1337/uploads/video_More1_6a77d41eb9.webp"
                      }
                      alt="video"
                    />
                  </div>
                  <div className={m.video__wrapper}>
                    <img
                      src={
                        "http://localhost:1337/uploads/video_More2_6106767343.webp"
                      }
                      alt="video"
                    />
                  </div>
                  <div className={m.video__wrapper}>
                    <img
                      src={
                        "http://localhost:1337/uploads/video_More3_e0e9300cfd.webp"
                      }
                      alt="video"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            {isMobile ? (
              <h3 className={m.title}>
                <Text18500 text="Video List" />
              </h3>
            ) : (
              <h3 className={m.title}>
                <Text24500 text="Video List" />
              </h3>
            )}
            {/* //item4--------------------------------------------------------------- */}
            {currentComponent === "home" && (
              <div className={m.videos__body}>
             <VideoUser img={VideoUserArray[0]} ava={AvaArray[0]}/>
             <VideoUser img={VideoUserArray[1]} ava={AvaArray[1]}/>
             <VideoUser img={VideoUserArray[2]} ava={AvaArray[2]}/>
             <VideoUser img={VideoUserArray[3]} ava={AvaArray[3]}/>
             <VideoUser img={VideoUserArray[4]} ava={AvaArray[4]}/>
             <VideoUser img={VideoUserArray[5]} ava={AvaArray[5]}/>
              </div>
            )}
            {/* //item--------------------------------------------------------------- */}
          </div>
        )}
        {currentComponent === "latest" && <UserLatest />}
        {currentComponent === "viewLater" && <ViewLater />}
        {currentComponent === "subscribe" && <SubscribeUser />}
        {/* //------------------------------------------------------------------------------------- */}
      </div>
    </div>
  );
};
export default Main;
