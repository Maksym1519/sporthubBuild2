import vs from "./video.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import ColumnTemplate from "../molecules/ColumnTemplate";
import MenuDots from "../molecules/MenuDots";
import { Text14400 } from "../atoms/Text";
import { Text16500 } from "../atoms/Text";
import { Text14500 } from "../atoms/Text";
import More from "../../images/more.svg";
import Play from "../../images/play-btn.svg";


const Video = (props) => {
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
//-------------------------------------------------------------------

//set-Time------------------------------------------------------------------
const getTimeDifference = (updateTime) => {
  const currentDate = new Date();
  const latestUpdate = new Date(updateTime);

  const timeDifference = currentDate - latestUpdate;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day ago`;
  } else if (hours > 0) {
    return `${hours} hour(s) ago`;
  } else if (minutes > 0) {
    return `${minutes} minute(s) ago`;
  } else {
    return `${seconds} second ago`;
  }
};

// Используем функцию для каждого элемента массива props.update
const timeDifferences = props.update.map(updateTime => getTimeDifference(updateTime));


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
        <video controls className={vs.video}>
          <source src={props.videoUrl} type="video/mp4" />
        </video>
        <img src={Play} alt="play" className={vs.play} />
      </div>
      <div className={vs.video__description}>
   <div className={vs.avatar__wrapper}>
      <img src={props.avatar} className={vs.avatar}/> 
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
        row2={<Text14400 text={timeDifferences[props.index]} color="rgba(153, 153, 153, 1)" />}
        //row2={<Text14400 text={'frcrfrfrf'} color="rgba(153, 153, 153, 1)" />}
        />
</div>
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
