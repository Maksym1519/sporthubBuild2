import React from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import m from "./main.module.scss";
import { useState, useEffect, useRef } from "react";
import {useAppDispatch, useAppSelector} from '../../../App/hooks';
import { increment, incrementByAmount } from '../../../features/counter/counterSlice';
import { updateScreenWidth } from '../../../features/headerSlice';
import { Text14400 } from "../../atoms/Text";
import { Text16400 } from "../../atoms/Text";
import { Text12600 } from "../../atoms/Text";
import { Text16500 } from "../../atoms/Text";
import { Text24500 } from "../../atoms/Text";
import { Text18500 } from "../../atoms/Text";
import { Text14500 } from "../../atoms/Text";
import Avatext from "../../molecules/Avatext";
import ColumnTemplate from "../../molecules/ColumnTemplate";
import Header from "../../organisms/Header";
import Ava1 from "../../../images/ava24-1.svg";
import Ava2 from "../../../images/ava24-2.svg";
import Ava3 from "../../../images/ava24-3.svg";
import Ava4 from "../../../images/ava24-4.svg";
import Ava5 from "../../../images/ava24-5.svg";
import Ava6 from "../../../images/ava24-6.svg";
import Ava7 from "../../../images/ava24-7.svg";
import Ava8 from "../../../images/ava24-8.svg";
import Ava9 from "../../../images/ava24-9.svg";
import Ava10 from "../../../images/ava24-10.svg";
import Arrow from "../../../images/arrow-down-yellow.svg";
import VideoMore1 from "../../../images/videoMore1.webp";
import VideoMore2 from "../../../images/videoMore2.webp";
import VideoMore3 from "../../../images/videoMore3.webp";
import Video1 from "../../../images/video1-main.webp";
import Video2 from "../../../images/video2-main.webp";
import Video3 from "../../../images/video3-main.webp";
import Video4 from "../../../images/video4-main.webp";
import Video5 from "../../../images/video5-main.webp";
import Video6 from "../../../images/video6-main.webp";
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
//------------------------------------------------------------------------

const Main = () => {
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
  //slider---------------------------------------------------
  register();
  const params = {
    injectStyles: [
      `
      swiper-container {
        width: 100%;
        justify-self: flex-start;
        }
      .swiper-wrapper {
        max-width: 100%;
        display: flex;
        align-items: center;
        column-gap: 24px;
        justify-self: flex-start;
        overflow: hidden;
         }
        swiper-slide {
        max-width: 368px;
      }
      @media (max-width: 767px) {
        swiper-slide {
        width: 214px;
      }
      swiper-container {
        width: 100%;
        justify-self: flex-start;
        }
      .swiper-wrapper {
        display: flex;
        align-items: center;
        column-gap: 16px;
        justify-self: flex-start;
        }
        .swiper-slide-active {
          min-width: 214px;
        }
                `,
    ],
  };

  const mainSlider = useRef("none");

  // useEffect(() => {
  //   Object.assign(mainSlider.current, params);
  //   mainSlider.current.initialize();
  // }, []);

  //redux---------------------------------------------------------
  const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;
  
  return (
    <div className={m.main__wrapper}>
      <Header />
       <div className={m.container}>
        <div className={m.sidebar__wrapper}>
          <div className={m.switcher__wrapper}>
            <div
              className={`${m.switcher__item} ${
                activeIndex === 0 ? m.active : ""
              }`}
              onClick={() => handleSwitcher(0)}
            >
              <Text16400 text="Home" color="rgba(187, 187, 187, 1)" />
            </div>
            <div
              className={`${m.switcher__item} ${
                activeIndex === 1 ? m.active : ""
              }`}
              onClick={() => handleSwitcher(1)}
            >
              <Text16400 text="Latest" color="rgba(187, 187, 187, 1)" />
            </div>
            <div
              className={`${m.switcher__item} ${
                activeIndex === 2 ? m.active : ""
              }`}
              onClick={() => handleSwitcher(2)}
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
                  img={Ava1}
                  text1={
                    <Text14400
                      text="Marvin McKinney"
                      color="rgba(187, 187, 187, 1)"
                    />
                  }
                />
              </div>
              {/* //item2-------------------------------------------------------------- */}
              <div className={m.item}>
                <Avatext
                  img={Ava2}
                  text1={
                    <Text14400
                      text="Eleanor Pena"
                      color="rgba(187, 187, 187, 1)"
                    />
                  }
                />
                <div className={m.messages}></div>
              </div>
              {/* //item3-------------------------------------------------------------- */}
              <div className={m.item}>
                <Avatext
                  img={Ava3}
                  text1={
                    <Text14400
                      text="Robert Fox"
                      color="rgba(187, 187, 187, 1)"
                    />
                  }
                />
              </div>
              {/* //item4-------------------------------------------------------------- */}
              <div className={m.item}>
                <Avatext
                  img={Ava4}
                  text1={
                    <Text14400
                      text="Savannah Nguyen"
                      color="rgba(187, 187, 187, 1)"
                    />
                  }
                />
              </div>
              {/* //item5-------------------------------------------------------------- */}
              <div className={m.item}>
                <Avatext
                  img={Ava5}
                  text1={
                    <Text14400
                      text="Jenny Wilson"
                      color="rgba(187, 187, 187, 1)"
                    />
                  }
                />
                <div className={m.messages}></div>
              </div>
              {/* //item6-------------------------------------------------------------- */}
              <div className={m.item}>
                <Avatext
                  img={Ava6}
                  text1={
                    <Text14400
                      text="Guy Hawkins"
                      color="rgba(187, 187, 187, 1)"
                    />
                  }
                />
              </div>
              {/* //item7-------------------------------------------------------------- */}
              <div className={m.item}>
                <Avatext
                  img={Ava7}
                  text1={
                    <Text14400
                      text="Annette Black"
                      color="rgba(187, 187, 187, 1)"
                    />
                  }
                />
              </div>
              {/* //item8-------------------------------------------------------------- */}
              <div className={m.item}>
                <Avatext
                  img={Ava8}
                  text1={
                    <Text14400
                      text="Darrell Steward"
                      color="rgba(187, 187, 187, 1)"
                    />
                  }
                />
                <div className={m.messages}></div>
              </div>
              {/* //item9-------------------------------------------------------------- */}
              <div className={m.item}>
                <Avatext
                  img={Ava9}
                  text1={
                    <Text14400
                      text="Ralph Edwards"
                      color="rgba(187, 187, 187, 1)"
                    />
                  }
                />
              </div>
              {/* //item10-------------------------------------------------------------- */}
              <div className={m.item}>
                <Avatext
                  img={Ava10}
                  text1={
                    <Text14400
                      text="Floyd Miles"
                      color="rgba(187, 187, 187, 1)"
                    />
                  }
                />
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
                    img={Ava10}
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
        <div className={m.videos__wrapper}>
          {/* //item1--------------------------------------------------------------- */}
          <div className={m.slider__wrapper}>
            <swiper-container
              init="false"
              ref={mainSlider}
              slides-per-view="1.6"
              speed="500"
              loop="true"
              css-mode="true"
              class="mainSlider"
              // swiper={{
              //   // Добавьте параметры для свайпа
              //   touchEventsTarget: 'mainSlider', // Цель для свайпа
              //   simulateTouch: true, // Симулировать свайп на устройствах без поддержки тач-событий
              //   allowTouchMove: true, // Разрешить свайп
              // }}
            >
              <swiper-slide>
                <div className={m.item + " " + m.itemMore}>
                  <div className={m.video__wrapper}>
                    <img src={VideoMore1} alt="video" />
                  </div>
                </div>
              </swiper-slide>

              {/* //item2--------------------------------------------------------------- */}

              <swiper-slide>
                <div className={m.item + " " + m.itemMore}>
                  <div className={m.video__wrapper}>
                    <img src={VideoMore2} alt="video" />
                  </div>
                </div>
              </swiper-slide>

              {/* //item3--------------------------------------------------------------- */}
              <swiper-slide>
                <div className={m.item + " " + m.itemMore}>
                  <div className={m.video__wrapper}>
                    <img src={VideoMore3} alt="video" />
                  </div>
                </div>
              </swiper-slide>
             </swiper-container>
          </div>
          {isMobile ? (
          <h3 className={m.title}>
            <Text18500 text="Video List" />
          </h3>) : ( <h3 className={m.title}>
            <Text24500 text="Video List" />
          </h3>)
          }
          {/* //item4--------------------------------------------------------------- */}
          <div className={m.videos__body}>
          <div className={m.item}>
            <div className={m.video__wrapper}>
              <img src={Video1} alt="video" />
            </div>
            <div className={m.video__description}>
              <ColumnTemplate
                    row1={
                    isMobile ? (
                   <Text14500
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                    lineHeight="16px"
                  />
                   ) : <Text16500
                   text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                   lineHeight="18px"
                 />
                }
                row2={
                  <Avatext
                    img={Ava1}
                    text1={
                      <Text14400
                        text="Adan Lauzon"
                        color="rgba(153, 153, 153, 1)"
                      />
                    }
                    text2={
                      <Text14400 text="3h ago" color="rgba(153, 153, 153, 1)" />
                    }
                  />
                }
              />
            </div>
          </div>
          {/* //item5--------------------------------------------------------------- */}
          <div className={m.item}>
            <div className={m.video__wrapper}>
              <img src={Video2} alt="video" />
            </div>
            <div className={m.video__description}>
            <ColumnTemplate
                    row1={
                    isMobile ? (
                   <Text14500
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                    lineHeight="16px"
                  />
                   ) : <Text16500
                   text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                   lineHeight="18px"
                 />
                }
                row2={
                  <Avatext
                    img={Ava7}
                    text1={
                      <Text14400
                        text="Savannah Nguyen"
                        color="rgba(153, 153, 153, 1)"
                      />
                    }
                    text2={
                      <Text14400 text="3h ago" color="rgba(153, 153, 153, 1)" />
                    }
                  />
                }
              />
            </div>
          </div>
          {/* //item6--------------------------------------------------------------- */}
          <div className={m.item}>
            <div className={m.video__wrapper}>
              <img src={Video3} alt="video" />
            </div>
            <div className={m.video__description}>
            <ColumnTemplate
                    row1={
                    isMobile ? (
                   <Text14500
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                    lineHeight="16px"
                  />
                   ) : <Text16500
                   text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                   lineHeight="18px"
                 />
                }
                row2={
                  <Avatext
                    img={Ava5}
                    text1={
                      <Text14400
                        text="Theresa Webb"
                        color="rgba(153, 153, 153, 1)"
                      />
                    }
                    text2={
                      <Text14400 text="3h ago" color="rgba(153, 153, 153, 1)" />
                    }
                  />
                }
              />
            </div>
          </div>
          {/* //item7--------------------------------------------------------------- */}
          <div className={m.item}>
            <div className={m.video__wrapper}>
              <img src={Video4} alt="video" />
            </div>
            <div className={m.video__description}>
            <ColumnTemplate
                    row1={
                    isMobile ? (
                   <Text14500
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                    lineHeight="16px"
                  />
                   ) : <Text16500
                   text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                   lineHeight="18px"
                 />
                }
                row2={
                  <Avatext
                    img={Ava2}
                    text1={
                      <Text14400
                        text="Kristin Watson"
                        color="rgba(153, 153, 153, 1)"
                      />
                    }
                    text2={
                      <Text14400 text="3h ago" color="rgba(153, 153, 153, 1)" />
                    }
                  />
                }
              />
            </div>
          </div>
          {/* //item8--------------------------------------------------------------- */}
          <div className={m.item}>
            <div className={m.video__wrapper}>
              <img src={Video5} alt="video" />
            </div>
            <div className={m.video__description}>
            <ColumnTemplate
                    row1={
                    isMobile ? (
                   <Text14500
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                    lineHeight="16px"
                  />
                   ) : <Text16500
                   text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                   lineHeight="18px"
                 />
                }
                row2={
                  <Avatext
                    img={Ava7}
                    text1={
                      <Text14400
                        text="Jenny Wilson"
                        color="rgba(153, 153, 153, 1)"
                      />
                    }
                    text2={
                      <Text14400 text="3h ago" color="rgba(153, 153, 153, 1)" />
                    }
                  />
                }
              />
            </div>
          </div>
          {/* //item9--------------------------------------------------------------- */}
          <div className={m.item}>
            <div className={m.video__wrapper}>
              <img src={Video6} alt="video" />
            </div>
            <div className={m.video__description}>
            <ColumnTemplate
                    row1={
                    isMobile ? (
                   <Text14500
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                    lineHeight="16px"
                  />
                   ) : <Text16500
                   text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                   lineHeight="18px"
                 />
                }
                row2={
                  <Avatext
                    img={Ava9}
                    text1={
                      <Text14400
                        text="Darlene Robertson"
                        color="rgba(153, 153, 153, 1)"
                      />
                    }
                    text2={
                      <Text14400 text="3h ago" color="rgba(153, 153, 153, 1)" />
                    }
                  />
                }
              />
            </div>
          </div>
          </div>
          {/* //item--------------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
};
export default Main;
