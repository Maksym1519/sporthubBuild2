import React from "react";
import ul from "./userLatest.module";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { updateScreenWidth } from "../../features/headerSlice";
import { Text14400 } from "../atoms/Text";
import { Text16500 } from "../atoms/Text";
import { Text14500 } from "../atoms/Text";
import Avatext from "../molecules/Avatext";
import ColumnTemplate from "../molecules/ColumnTemplate";
import { AvaArray } from "../../Data";
import { VideoUserArray } from "../../Data";
import VideoUser from "../molecules/VideoUser";
import MenuDots from "../molecules/MenuDots";
//images------------------------------------------------------------------------
import More from "../../images/more.svg";

const UserLatest = (props) => {
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
      {props.link.map((link, index) => (
        <VideoUser
          key={index}
          videoUrl={link}
          update={props.propsTime}
          index={index}
          avatar={props.avatars[index]}
          fileName={props.fileNames[index]}
          usersName={props.usersName[index]}
        />
      ))}
    </div>
        </div>
      </div>
    </div>
  );
};
export default UserLatest;
