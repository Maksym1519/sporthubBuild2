import React from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import ul from "./userLatest.module";
import { useState, useEffect, useRef } from "react";
import {useAppDispatch, useAppSelector} from '../../App/hooks';
import { increment, incrementByAmount } from '../../features/counter/counterSlice';
import { updateScreenWidth } from '../../features/headerSlice';
import { Text14400 } from "../atoms/Text";
import { Text16400 } from "../atoms/Text";
import { Text12600 } from "../atoms/Text";
import { Text16500 } from "../atoms/Text";
import { Text24500 } from "../atoms/Text";
import { Text18500 } from "../atoms/Text";
import { Text14500 } from "../atoms/Text";
import Avatext from "../molecules/Avatext";
import ColumnTemplate from "../molecules/ColumnTemplate";
import { AvaArray } from "../../Data";
import { VideoUserArray } from "../../Data";
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
       <div className={ul.container}>
        <div className={ul.videos__wrapper}>
          {/* //item1--------------------------------------------------------------- */}
        <div className={ul.videos__body}>
          <div className={ul.item}>
            <div className={ul.video__wrapper}>
              <img src={VideoUserArray[0]} alt="video" />
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
                    img={AvaArray[0]}
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
              <img src={VideoUserArray[1]} alt="video" />
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
                    img={AvaArray[6]}
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
              <img src={VideoUserArray[2]} alt="video" />
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
                    img={AvaArray[4]}
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
              <img src={VideoUserArray[3]} alt="video" />
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
                    img={AvaArray[1]}
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
              <img src={VideoUserArray[4]} alt="video" />
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
                    img={AvaArray[6]}
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
              <img src={VideoUserArray[5]} alt="video" />
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
                    img={AvaArray[8]}
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
          {/* //item7--------------------------------------------------------------- */}
          <div className={ul.item}>
            <div className={ul.video__wrapper}>
              <img src={VideoUserArray[6]} alt="video" />
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
                    img={AvaArray[8]}
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
          {/* //item8--------------------------------------------------------------- */}
          <div className={ul.item}>
            <div className={ul.video__wrapper}>
              <img src={VideoUserArray[7]} alt="video" />
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
                    img={AvaArray[8]}
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
          {/* //item9--------------------------------------------------------------- */}
          <div className={ul.item}>
            <div className={ul.video__wrapper}>
              <img src={VideoUserArray[8]} alt="video" />
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
                    img={AvaArray[8]}
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
          {/* //item--------------------------------------------------------------- */}
          </div>
        
        </div>
      </div>
    </div>
  );
};
export default UserLatest;
