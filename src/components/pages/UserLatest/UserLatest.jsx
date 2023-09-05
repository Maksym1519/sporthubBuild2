import React from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import ul from "./userLatest.module";
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

const UserLatest = () => {
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
  //---------------------------------------------------------
  return (
    <div className={ul.main__wrapper}>
      <Header />
      <div className={ul.container}>
        <div className={ul.sidebar__wrapper}>
          <div className={ul.switcher__wrapper}>
            <div
              className={`${ul.switcher__item} ${
                activeIndex === 0 ? ul.active : ""
              }`}
              onClick={() => handleSwitcher(0)}
            >
              <Text16400 text="Home" color="rgba(187, 187, 187, 1)" />
            </div>
            <div
              className={`${ul.switcher__item} ${
                activeIndex === 1 ? ul.active : ""
              }`}
              onClick={() => handleSwitcher(1)}
            >
              <Text16400 text="Latest" color="rgba(187, 187, 187, 1)" />
            </div>
            <div
              className={`${ul.switcher__item} ${
                activeIndex === 2 ? ul.active : ""
              }`}
              onClick={() => handleSwitcher(2)}
            >
              <Text16400 text="View later" color="rgba(187, 187, 187, 1)" />
            </div>
          </div>
          <div className={ul.mySubscription__wrapper}>
            <div className={ul.title}>
              <Text12600 text="MY SUBSCRIPTION" color="rgba(173, 121, 85, 1)" />
            </div>
            <div className={ul.items__wrapper}>
              {/* //item1-------------------------------------------------------------- */}
              <div className={ul.item}>
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
              <div className={ul.item}>
                <Avatext
                  img={Ava2}
                  text1={
                    <Text14400
                      text="Eleanor Pena"
                      color="rgba(187, 187, 187, 1)"
                    />
                  }
                />
                <div className={ul.messages}></div>
              </div>
              {/* //item3-------------------------------------------------------------- */}
              <div className={ul.item}>
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
              <div className={ul.item}>
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
              <div className={ul.item}>
                <Avatext
                  img={Ava5}
                  text1={
                    <Text14400
                      text="Jenny Wilson"
                      color="rgba(187, 187, 187, 1)"
                    />
                  }
                />
                <div className={ul.messages}></div>
              </div>
              {/* //item6-------------------------------------------------------------- */}
              <div className={ul.item}>
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
              <div className={ul.item}>
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
              <div className={ul.item}>
                <Avatext
                  img={Ava8}
                  text1={
                    <Text14400
                      text="Darrell Steward"
                      color="rgba(187, 187, 187, 1)"
                    />
                  }
                />
                <div className={ul.messages}></div>
              </div>
              {/* //item9-------------------------------------------------------------- */}
              <div className={ul.item}>
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
              <div className={ul.item}>
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
            <div className={ul.showMore__wrapper}>
              <div className={ul.showMore__button} onClick={toggleMessages}>
                <Text14400
                  text="Show moreShow more"
                  color="rgba(173, 121, 85, 1)"
                />
                <img
                  src={Arrow}
                  alt="arrow"
                  className={`${showMore ? ul.rotate : ""}`}
                />
              </div>
              {showMore && (
                <div className={ul.item}>
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
        <div className={ul.videos__wrapper}>
          {/* //item1--------------------------------------------------------------- */}
        <div className={ul.videos__body}>
          <div className={ul.item}>
            <div className={ul.video__wrapper}>
              <img src={Video1} alt="video" />
            </div>
            <div className={ul.video__description}>
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
          {/* //item2--------------------------------------------------------------- */}
          <div className={ul.item}>
            <div className={ul.video__wrapper}>
              <img src={Video2} alt="video" />
            </div>
            <div className={ul.video__description}>
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
          {/* //item3--------------------------------------------------------------- */}
          <div className={ul.item}>
            <div className={ul.video__wrapper}>
              <img src={Video3} alt="video" />
            </div>
            <div className={ul.video__description}>
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
          {/* //item4--------------------------------------------------------------- */}
          <div className={ul.item}>
            <div className={ul.video__wrapper}>
              <img src={Video4} alt="video" />
            </div>
            <div className={ul.video__description}>
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
          {/* //item5--------------------------------------------------------------- */}
          <div className={ul.item}>
            <div className={ul.video__wrapper}>
              <img src={Video5} alt="video" />
            </div>
            <div className={ul.video__description}>
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
          {/* //item6--------------------------------------------------------------- */}
          <div className={ul.item}>
            <div className={ul.video__wrapper}>
              <img src={Video6} alt="video" />
            </div>
            <div className={ul.video__description}>
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
export default UserLatest;
