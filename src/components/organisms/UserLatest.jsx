import React from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import ul from "./userLatest.module";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import MenuDots from "../molecules/MenuDots";
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
//images------------------------------------------------------------------------
import More from "../../images/more.svg";

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

  //redux-menu-Dots------------------------------------------------
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuVisible2, setIsMenuVisible2] = useState(false);
  const [isMenuVisible3, setIsMenuVisible3] = useState(false);
  const [isMenuVisible4, setIsMenuVisible4] = useState(false);
  const [isMenuVisible5, setIsMenuVisible5] = useState(false);
  const [isMenuVisible6, setIsMenuVisible6] = useState(false);
  const [isMenuVisible7, setIsMenuVisible7] = useState(false);
  const [isMenuVisible8, setIsMenuVisible8] = useState(false);
  const [isMenuVisible9, setIsMenuVisible9] = useState(false);
  const [isMenuVisible10, setIsMenuVisible10] = useState(false);
  const [isMenuVisible11, setIsMenuVisible11] = useState(false);
  const currentMenu = useSelector((state) => state.menuDots.currentMenu);
  const toggleMenuDots = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const toggleMenuDots2 = () => {
    setIsMenuVisible2(!isMenuVisible2);
  };
  const toggleMenuDots3 = () => {
    setIsMenuVisible3(!isMenuVisible3);
  };
  const toggleMenuDots4 = () => {
    setIsMenuVisible4(!isMenuVisible4);
  };
  const toggleMenuDots5 = () => {
    setIsMenuVisible5(!isMenuVisible5);
  };
  const toggleMenuDots6 = () => {
    setIsMenuVisible6(!isMenuVisible6);
  };
  const toggleMenuDots7 = () => {
    setIsMenuVisible7(!isMenuVisible7);
  };
  const toggleMenuDots8 = () => {
    setIsMenuVisible8(!isMenuVisible8);
  };
  const toggleMenuDots9 = () => {
    setIsMenuVisible9(!isMenuVisible9);
  };
  const handleMouseEnter = () => {
    setIsMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsMenuVisible(false);
  };
  const handleMouseEnter2 = () => {
    setIsMenuVisible2(true);
  };

  const handleMouseLeave2 = () => {
    setIsMenuVisible2(false);
  };
  const handleMouseEnter3 = () => {
    setIsMenuVisible3(true);
  };

  const handleMouseLeave3 = () => {
    setIsMenuVisible3(false);
  };
  const handleMouseEnter4 = () => {
    setIsMenuVisible4(true);
  };

  const handleMouseLeave4 = () => {
    setIsMenuVisible4(false);
  };
  const handleMouseEnter5 = () => {
    setIsMenuVisible5(true);
  };

  const handleMouseLeave5 = () => {
    setIsMenuVisible5(false);
  };
  const handleMouseEnter6 = () => {
    setIsMenuVisible6(true);
  };

  const handleMouseLeave6 = () => {
    setIsMenuVisible6(false);
  };
  const handleMouseEnter7 = () => {
    setIsMenuVisible7(true);
  };

  const handleMouseLeave7 = () => {
    setIsMenuVisible7(false);
  };
  const handleMouseEnter8 = () => {
    setIsMenuVisible8(true);
  };

  const handleMouseLeave8 = () => {
    setIsMenuVisible8(false);
  };
  const handleMouseEnter9 = () => {
    setIsMenuVisible9(true);
  };

  const handleMouseLeave9 = () => {
    setIsMenuVisible9(false);
  };
  //---------------------------------------------------------
  return (
    <div className={ul.main__wrapper}>
       <div className={ul.container}>
        <div className={ul.videos__wrapper}>
          {/* //item1--------------------------------------------------------------- */}
        <div className={ul.videos__body}>

        <div
                  className={ul.item + " " + ul.itemMenu}
                  onClick={() => {
                    toggleMenuDots();
                  }}
                  onMouseOver={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
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
                        ) : (
                          <Text16500
                            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                            lineHeight="18px"
                          />
                        )
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
                            <Text14400
                              text="3h ago"
                              color="rgba(153, 153, 153, 1)"
                            />
                          }
                        />
                      }
                    />
                  </div>
                  {isMenuVisible && (
                    <div className={ul.dotsMenu}>
                      <img
                        src={More}
                        alt="menu"
                        onClick={() => {
                          toggleMenuDots();
                        }}
                      />
                    </div>
                  )}
                  {isMenuVisible && <MenuDots />}
                </div>
          {/* //item2--------------------------------------------------------------- */}
          <div
                  className={ul.item + " " + ul.itemMenu}
                  onClick={() => {
                    toggleMenuDots2();
                  }}
                  onMouseOver={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                >
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
                        ) : (
                          <Text16500
                            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                            lineHeight="18px"
                          />
                        )
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
                            <Text14400
                              text="3h ago"
                              color="rgba(153, 153, 153, 1)"
                            />
                          }
                        />
                      }
                    />
                  </div>
                  {isMenuVisible2 && (
                    <div className={ul.dotsMenu}>
                      <img
                        src={More}
                        alt="menu"
                        onClick={() => {
                          toggleMenuDots2();
                        }}
                      />
                    </div>
                  )}
                  {isMenuVisible2 && <MenuDots />}
                </div>
          {/* //item3--------------------------------------------------------------- */}
          <div
                  className={ul.item + " " + ul.itemMenu}
                  onClick={() => {
                    toggleMenuDots3();
                  }}
                  onMouseOver={handleMouseEnter3}
                  onMouseLeave={handleMouseLeave3}
                >
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
                        ) : (
                          <Text16500
                            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                            lineHeight="18px"
                          />
                        )
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
                            <Text14400
                              text="3h ago"
                              color="rgba(153, 153, 153, 1)"
                            />
                          }
                        />
                      }
                    />
                  </div>
                  {isMenuVisible3 && (
                    <div className={ul.dotsMenu}>
                      <img
                        src={More}
                        alt="menu"
                        onClick={() => {
                          toggleMenuDots3();
                        }}
                      />
                    </div>
                  )}
                  {isMenuVisible3 && <MenuDots />}
                </div>
          {/* //item4--------------------------------------------------------------- */}
          <div
                  className={ul.item + " " + ul.itemMenu}
                  onClick={() => {
                    toggleMenuDots4();
                  }}
                  onMouseOver={handleMouseEnter4}
                  onMouseLeave={handleMouseLeave4}
                >
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
                        ) : (
                          <Text16500
                            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                            lineHeight="18px"
                          />
                        )
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
                            <Text14400
                              text="3h ago"
                              color="rgba(153, 153, 153, 1)"
                            />
                          }
                        />
                      }
                    />
                  </div>
                  {isMenuVisible4 && (
                    <div className={ul.dotsMenu}>
                      <img
                        src={More}
                        alt="menu"
                        onClick={() => {
                          toggleMenuDots4();
                        }}
                      />
                    </div>
                  )}
                  {isMenuVisible4 && <MenuDots />}
                </div>
          {/* //item5--------------------------------------------------------------- */}
          <div
                  className={ul.item + " " + ul.itemMenu}
                  onClick={() => {
                    toggleMenuDots5();
                  }}
                  onMouseOver={handleMouseEnter5}
                  onMouseLeave={handleMouseLeave5}
                >
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
                        ) : (
                          <Text16500
                            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                            lineHeight="18px"
                          />
                        )
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
                            <Text14400
                              text="3h ago"
                              color="rgba(153, 153, 153, 1)"
                            />
                          }
                        />
                      }
                    />
                  </div>
                  {isMenuVisible5 && (
                    <div className={ul.dotsMenu}>
                      <img
                        src={More}
                        alt="menu"
                        onClick={() => {
                          toggleMenuDots5();
                        }}
                      />
                    </div>
                  )}
                  {isMenuVisible5 && <MenuDots />}
                </div>
          {/* //item6--------------------------------------------------------------- */}
          <div
                  className={ul.item + " " + ul.itemMenu}
                  onClick={() => {
                    toggleMenuDots6();
                  }}
                  onMouseOver={handleMouseEnter6}
                  onMouseLeave={handleMouseLeave6}
                >
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
                        ) : (
                          <Text16500
                            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                            lineHeight="18px"
                          />
                        )
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
                            <Text14400
                              text="3h ago"
                              color="rgba(153, 153, 153, 1)"
                            />
                          }
                        />
                      }
                    />
                  </div>
                  {isMenuVisible6 && (
                    <div className={ul.dotsMenu}>
                      <img
                        src={More}
                        alt="menu"
                        onClick={() => {
                          toggleMenuDots6();
                        }}
                      />
                    </div>
                  )}
                  {isMenuVisible6 && <MenuDots />}
                </div>
          {/* //item7--------------------------------------------------------------- */}
          <div
                  className={ul.item + " " + ul.itemMenu}
                  onClick={() => {
                    toggleMenuDots7();
                  }}
                  onMouseOver={handleMouseEnter7}
                  onMouseLeave={handleMouseLeave7}
                >
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
                        ) : (
                          <Text16500
                            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                            lineHeight="18px"
                          />
                        )
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
                            <Text14400
                              text="3h ago"
                              color="rgba(153, 153, 153, 1)"
                            />
                          }
                        />
                      }
                    />
                  </div>
                  {isMenuVisible7 && (
                    <div className={ul.dotsMenu}>
                      <img
                        src={More}
                        alt="menu"
                        onClick={() => {
                          toggleMenuDots7();
                        }}
                      />
                    </div>
                  )}
                  {isMenuVisible7 && <MenuDots />}
                </div>
          {/* //item8--------------------------------------------------------------- */}
          <div
                  className={ul.item + " " + ul.itemMenu}
                  onClick={() => {
                    toggleMenuDots8();
                  }}
                  onMouseOver={handleMouseEnter8}
                  onMouseLeave={handleMouseLeave8}
                >
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
                        ) : (
                          <Text16500
                            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                            lineHeight="18px"
                          />
                        )
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
                            <Text14400
                              text="3h ago"
                              color="rgba(153, 153, 153, 1)"
                            />
                          }
                        />
                      }
                    />
                  </div>
                  {isMenuVisible8 && (
                    <div className={ul.dotsMenu}>
                      <img
                        src={More}
                        alt="menu"
                        onClick={() => {
                          toggleMenuDots8();
                        }}
                      />
                    </div>
                  )}
                  {isMenuVisible8 && <MenuDots />}
                </div>
          {/* //item9--------------------------------------------------------------- */}
          <div
                  className={ul.item + " " + ul.itemMenu}
                  onClick={() => {
                    toggleMenuDots9();
                  }}
                  onMouseOver={handleMouseEnter9}
                  onMouseLeave={handleMouseLeave9}
                >
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
                        ) : (
                          <Text16500
                            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                            lineHeight="18px"
                          />
                        )
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
                            <Text14400
                              text="3h ago"
                              color="rgba(153, 153, 153, 1)"
                            />
                          }
                        />
                      }
                    />
                  </div>
                  {isMenuVisible9 && (
                    <div className={ul.dotsMenu}>
                      <img
                        src={More}
                        alt="menu"
                        onClick={() => {
                          toggleMenuDots9();
                        }}
                      />
                    </div>
                  )}
                  {isMenuVisible9 && <MenuDots />}
                </div>
          {/* //item--------------------------------------------------------------- */}
          </div>
        
        </div>
      </div>
    </div>
  );
};
export default UserLatest;
