import vu from './videoUser.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import Avatext from "../molecules/Avatext";
import ColumnTemplate from "../molecules/ColumnTemplate";
import MenuDots from "../molecules/MenuDots";
import { Text14400 } from "../atoms/Text";
import { Text16500 } from "../atoms/Text";
import { Text14500 } from "../atoms/Text";
import More from "../../images/more.svg";
import Play from '../../images/play-btn.svg'


const VideoUser = (props) => {
  const styled = {
    minWidth: props.width
  }
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

const timeDifferences = props.update.map(updateTime => getTimeDifference(updateTime));
console.log(timeDifferences)

    return (
        <div
        className={vu.item + " " + vu.itemMenu}
        onClick={() => {toggleMenuDots()}}
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={styled}
      >
        <div className={vu.video__wrapper} onClick={props.clickToSubscriber} style={styled}>
        <video controls className={vu.video} onClick={props.clickToSubscriber} >
          <source src={props.videoUrl} type="video/mp4" />
        </video>
          <img src={Play} alt="play" className={vu.play}/>
        </div>
        <div className={vu.video__description} onClick={props.clickToSubscriber}>
                    <ColumnTemplate
                      row1={
                        isMobile ? (
                          <Text14500
                            text={props.fileName}
                            lineHeight="16px"
                          />
                        ) : (
                          <Text16500
                            text={props.fileName}
                            lineHeight="18px"
                          />
                        )
                      }
                      row2={
                        <Avatext
                          img={props.avatar}
                          text1={
                            <Text14400
                              text={props.usersName}
                              color="rgba(153, 153, 153, 1)"
                            />
                          }
                          text2={timeDifferences[props.index]}
                        />
                      }
                    />
                  </div>
        {isMenuVisible && (
          <div className={vu.dotsMenu}>
            <img
              src={More}
              alt="menu"
              onClick={() => {
                toggleMenuDots();
              }}
            />
          </div>
        )}
        {/* {isMenuVisible && <MenuDots />} */}
      </div>
    )
}

export default VideoUser;