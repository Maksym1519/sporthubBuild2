import vs from "./video.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import Avatext from "../molecules/Avatext";
import ColumnTemplate from "../molecules/ColumnTemplate";
import MenuDots from "../molecules/MenuDots";
import { VideoUserArray } from "../../Data";
import { AvaArray } from "../../Data";
import { getShowMore } from "../functions/getShowMore";
import { Text14400 } from "../atoms/Text";
import { Text16400 } from "../atoms/Text";
import { Text12600 } from "../atoms/Text";
import { Text16500 } from "../atoms/Text";
import { Text24500 } from "../atoms/Text";
import { Text18500 } from "../atoms/Text";
import { Text14500 } from "../atoms/Text";
import More from "../../images/more.svg";
import Play from "../../images/play-btn.svg";
import Video1 from '../../images/video1.mp4'

const Video = (props) => {
  //redux-state-video-------------------------------------------
  const dispatch = useAppDispatch();
  const currentComponent = useSelector(
    (state) => state.videoUser.currentComponent
  );

  //redux-menu-Dots------------------------------------------------
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenuDots = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const handleMouseEnter = () => {
    setIsMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsMenuVisible(false);
  };
  //redux---------------------------------------------------------
  const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;

  return (
    <div
      className={vs.item + " " + vs.itemMenu}
      onClick={() => {
        toggleMenuDots();
      }}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={vs.video__wrapper}>
        {/* <img src={props.img} alt="video" className={vs.video}/> */}
        <video controls className={vs.video}>
          <source src={props.videoUrl} type="video/mp4" />
          
        </video>
        <img src={Play} alt="play" className={vs.play} />
      </div>
      <div className={vs.video__description}>
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
          row2={<Text14400 text="3h ago" color="rgba(153, 153, 153, 1)" />}
        />
      </div>
      {isMenuVisible && (
        <div className={vs.dotsMenu}>
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
  );
};

export default Video;
