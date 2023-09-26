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
        className={vu.item + " " + vu.itemMenu}
        onClick={() => {
          toggleMenuDots();
        }}
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={vu.video__wrapper}>
          <img src={props.img} alt="video" className={vu.video}/>
          <img src={Play} alt="play" className={vu.play}/>
        </div>
        <div className={vu.video__description}>
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
                          img={props.ava}
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
        {isMenuVisible && <MenuDots />}
      </div>
    )
}

export default VideoUser;