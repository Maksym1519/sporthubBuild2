import mm from "./mobileMenu.module.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { Link } from "react-router-dom";
//components----------------------------------------------
import { Text16400 } from "../atoms/Text";
import { Text12600 } from "../atoms/Text";
import { Text14400 } from "../atoms/Text";
import { Icones } from "../../Data";
import { AvaArray } from "../../Data";
import Avatext from "./Avatext";
import {
  showHome,
  showLatest,
  showViewLater,
  showSubscribe,
} from "../../features/videoUserSlice";

const MobileMenu = (props) => {
  //profileMenu------------------------------------------------
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  //indexes-----------------------------------------------------------------------
  const [activeIndex, setActiveIndex] = useState(true);
  useEffect(() => {
    setActiveIndex(0);
  }, []);
  const handleSwitcher = (index) => {
    setActiveIndex(index);
  };
  //redux-state-video-------------------------------------------
  const dispatch = useAppDispatch();
  const currentComponent = useSelector(
    (state) => state.videoUser.currentComponent
  );
  const handleHomeClick = () => {
    dispatch(showHome());
  };
  const handleLatestClick = () => {
    dispatch(showLatest());
  };
  const handleViewLaterClick = () => {
    dispatch(showViewLater());
  };
  const handleSubscribeClick = () => {
    dispatch(showSubscribe());
  };
  //redux-header-state------------------------------------------
  const currentItem = useSelector(
    (state) => state.headerStateSlice.currentItem
  );
  const clickShowLogIn = () => {
    dispatch(showLogIn());
  };
  const clickShowLogOut = () => {
    dispatch(showLogOut());
  };

  return (
    <div className={mm.wrapper}>
      <div className={mm.navigation__wrapper}>
        <ul>
          <Link to="/">
            <li
              className={`${mm.switcher__item} ${
                activeIndex === 0 ? mm.active : ""
              }`}
              onClick={() => {
                handleSwitcher(0), handleHomeClick();
              }}
            >
              <Text16400 text="Home" color="rgba(187, 187, 187, 1)" />
            </li>
          </Link>
          <li
            className={`${mm.switcher__item} ${
              activeIndex === 1 ? mm.active : ""
            }`}
            onClick={() => {
              handleSwitcher(1), handleLatestClick();
            }}
          >
            <Text16400 text="Latest" color="rgba(187, 187, 187, 1)" />
          </li>
          <li
            className={`${mm.switcher__item} ${
              activeIndex === 2 ? mm.active : ""
            }`}
            onClick={() => {
              handleSwitcher(2), handleViewLaterClick();
            }}
          >
            <Text16400 text="View Later" color="rgba(187, 187, 187, 1)" />
          </li>
          <Link to="/VideoCreator">
            <li
              className={`${mm.switcher__item} ${
                activeIndex === 3 ? mm.active : ""
              }`}
              onClick={() => {
                handleSwitcher(3);
              }}
            >
              <Text16400 text="Video" color="rgba(187, 187, 187, 1)" />
            </li>
          </Link>
          <li>
            <Text16400 text="Store" color="rgba(187, 187, 187, 1)" />
          </li>
        </ul>
      </div>
      <div className={mm.profile}>
        <div className={mm.profile__wrapper} onClick={toggleMenu}>
          <img
            src={props.userData ? props.userData : Icones.avaEmpty}
            alt="ava"
            className={mm.ava}
          />
          <Text16400 text="Profile" color="rgba(187, 187, 187, 1)" />
          <img
            src={Icones.arrowDown}
            alt="arrow"
            className={menu ? mm.arrowClick : mm.arrow}
          />
        </div>
        {/* //profile-menu---------------------------------------------------------------------------------- */}
        {menu && (
          <div className={mm.headerProfile__wrapper}>
            <Link to="/ProfileCreator">
              <div className={mm.item}>
                <Avatext
                  img={Icones.edit}
                  text1={
                    <Text16400
                      text="Create profile"
                      color="rgba(187, 187, 187, 1)"
                    />
                  }
                />
              </div>
            </Link>
            <Link to="/ProfileCreatorFilled">
              <div className={mm.item}>
                <Avatext
                  img={Icones.edit}
                  text1={
                    <Text16400
                      text="Edit profile"
                      color="rgba(187, 187, 187, 1)"
                    />
                  }
                />
              </div>
            </Link>
            <div className={mm.item}>
              <Avatext
                img={Icones.diamond}
                text1={
                  <Text16400
                    text="Switch to business account"
                    color="rgba(187, 187, 187, 1)"
                  />
                }
              />
            </div>
            <div
              onClick={clickShowLogIn}
              className={mm.item + " " + mm.lastItem}
            >
              <Avatext
                img={Icones.logOut}
                text1={
                  <Text16400 text="Log out" color="rgba(187, 187, 187, 1)" />
                }
              />
            </div>
          </div>
        )}
        {/* //----------------------------------------------------------------------------------------------  */}
      </div>

      <div className={mm.mySubscription__wrapper}>
        <div className={mm.title}>
          <Text12600 text="MY SUBSCRIPTION" color="rgba(173, 121, 85, 1)" />
        </div>
        <div className={mm.items__wrapper}>
          <div
            className={`${mm.item} ${activeIndex === 4 ? mm.active : ""}`}
            onClick={() => {
              handleSwitcher(4), handleSubscribeClick();
            }}
          >
          {Array.isArray(props.subscriptions) && props.subscriptions.map((item, index) => (
                  <div
                    className={`${mm.item} ${activeIndex === 4 ? mm.active : ""}`}
                    onClick={() =>
                      props.handleVideoClick({
                        avatar: item.avatar,
                        cover: item.cover,
                        fileName: props.fileNames,
                        userName: item.name,
                        subscribe: item.subscribe,
                        id: item.id,//?
                        identifier: item.identifier,
                        update: props.propsTime,
                        identifierForLink: item.identifierForVideo,
                        views: props.views,
                        view: props.views[index]
                        })
                    }
                  >
                    <Avatext
                      key={index}
                      img={item.avatar}
                      text1={
                        <Text14400
                          text={item.name}
                          color="rgba(187, 187, 187, 1)"
                        />
                      }
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
