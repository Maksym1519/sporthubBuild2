import hc from "./headerCreator.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { Text16400 } from "../atoms/Text";
import Logo from "../../images/logo.svg";
import SearchSmall from "../../images/search-small.svg";
import Notification from "../../images/notification.svg";
import { useEffect, useState } from "react";
import { EleonaraPena } from "../../Data";

const HeaderCreator = () => {
  const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;
  //video-switcher--------------------------------------------
  const [activeIndex, setActiveIndex] = useState(true);
  useEffect(() => {
    setActiveIndex(1);
  }, []);
  const switchVideo = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      {isMobile ? (
        <div className={hc.wrapper__mobile}>
          <div className={hc.burger}>
            <span className={hc.burger__line}>-</span>
          </div>
          <Link to="/">
            <div className={hc.logo__wrapper}>
              <img src={Logo} alt="logo" />
            </div>
          </Link>
          <div className={hc.functions__wrapper}>
            <img src={Search} alt="icon" />
          </div>
        </div>
      ) : (
        <div className={hc.wrapper}>
          <Link to="/">
            <div className={hc.logo__wrapper}>
              <img src={Logo} alt="logo" />
            </div>
          </Link>
          <div className={hc.allFunctions__wrapper}>
            <div className={hc.functions__wrapper}>
              <img src={SearchSmall} alt="icon" className={hc.search}/>
              <img src={Notification} alt="icon" />
            </div>
            <div className={hc.navigation}>
              <div className={hc.videoSwitcher__wrapper}>
                <div
                  className={`${hc.item} ${activeIndex === 1 ? hc.active : ""}`}
                  onClick={() => switchVideo(1)}
                >
                  Video
                </div>
                <div
                  className={`${hc.item} ${activeIndex === 2 ? hc.active : ""}`}
                  onClick={() => switchVideo(2)}
                >
                  Store
                </div>
              </div>
              <div className={hc.profile__wrapper}>
                <img src={EleonaraPena.ava} alt="ava" />
                <Text16400 text="Profile" color='rgba(187, 187, 187, 1)'/>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderCreator;
