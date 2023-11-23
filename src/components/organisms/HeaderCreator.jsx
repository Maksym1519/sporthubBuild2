import hc from "./headerCreator.module.scss";
import { useSelector } from "react-redux";
import { selectData } from "../../features/getIdSlice";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
//components---------------------------------------------------------------
import { Text16400 } from "../atoms/Text";
import Avatext from "../molecules/Avatext";
import Header from "../organisms/Header";
import MobileMenu from "../molecules/MobileMenu";
import { showLogOut, showLogIn } from "../../features/headerStateSlice";
import { Icones } from "../../Data";
import AddVideo from "./VideoCreator/AddVideo";
import VideoCreator from "../pages/VideoCreator/VideoCreator";
//images----------------------------------------------------
import Logo from "../../images/logo.svg";
import SearchSmall from "../../images/search-small.svg";
import Notification from "../../images/notification.svg";
import { useEffect, useState } from "react";

const HeaderCreator = (props) => {
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

  //profileMenu------------------------------------------------
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  //redux-header-state------------------------------------------
  const dispatch = useAppDispatch();
  const currentComponent = useSelector(
    (state) => state.headerStateSlice.currentComponent
  );
  const clickShowLogIn = () => {
    dispatch(showLogIn());
  };
  const clickShowLogOut = () => {
    dispatch(showLogOut());
  };
  //post-request-for-avatar-----------------------------------------------
  const [userData, setUserData] = useState("");
  //mobile-menu-show-----------------------------------------------------
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sporthubdeploy2.onrender.com/api/profiles?populate=*"
        );
        const usersData = response.data.data;
        const matchingUser = usersData.find(
          (user) => user.attributes.identifier === dataStorage
        );
         const avaFromProfile =
          matchingUser.attributes.avatar.data.attributes.url;
          console.log(avaFromProfile)
        if (matchingUser) {
          setUserData(avaFromProfile);
          console.log(
            "Matching user found:",
            matchingUser.attributes.identifier
          );
          const avatarResponse = await axios.get(
            "https://sporthubdeploy2.onrender.com/api/clients?populate[0]=avatars"
          );
        } else {
          console.log("Matching user not found.");
        }
      } catch (error) {
        console.error("fetchData failed", error);
      }
    };
    fetchData();
  }, []);
  //data-storage------------------------------------------------------------------
  const dataStorage = localStorage.getItem("id");
  return (
    AddVideo({ avatar: userData }),
    (
      <>
        {currentComponent === "logout" &&
          (isMobile ? (
            <div className={hc.wrapper__mobile}>
              <div
                className={mobileMenu ? hc.burger__close : hc.burger}
                onClick={toggleMobileMenu}
              >
                <span className={hc.burger__line}>-</span>
              </div>
              <Link to="/" onClick={props.goHome}>
                <div className={hc.logo__wrapper}>
                  <img src={Icones.logo} alt="logo" />
                </div>
              </Link>
              <div className={hc.functions__wrapper}>
                <img src={SearchSmall} alt="icon" />
              </div>
            </div>
          ) : (
            <div className={hc.wrapper}>
              <Link to="/" onClick={props.goHome}>
                <div className={hc.logo__wrapper}>
                  <img src={Icones.logo} alt="logo" />
                </div>
              </Link>
              <div className={hc.allFunctions__wrapper}>
                <div className={hc.functions__wrapper}>
                  <img src={SearchSmall} alt="icon" className={hc.search} />
                  <img src={Notification} alt="icon" />
                </div>
                <div className={hc.navigation}>
                  <div className={hc.videoSwitcher__wrapper}>
                    <div
                      className={`${hc.item} ${
                        activeIndex === 1 ? hc.active : ""
                      }`}
                      onClick={() => switchVideo(1)}
                    >
                      Video
                    </div>
                    <div
                      className={`${hc.item} ${
                        activeIndex === 2 ? hc.active : ""
                      }`}
                      onClick={() => switchVideo(2)}
                    >
                      Store
                    </div>
                  </div>
                  <div className={hc.profile__wrapper} onClick={toggleMenu}>
                    <img
                      src={userData ? userData : Icones.avaEmpty}
                      alt="ava"
                      className={hc.ava}
                    />

                    <Text16400 text="Profile" color="rgba(187, 187, 187, 1)" />
                  </div>
                </div>
              </div>
              {menu && (
                <div className={hc.headerProfile__wrapper}>
                  <Link to="/ProfileCreator">
                    <div className={hc.item}>
                      <Avatext
                        img={Icones.hammer}
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
                    <div className={hc.item}>
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
                  <Link to="/VideoCreator">
                    <div className={hc.item}>
                      <Avatext
                        img={Icones.videoIcon}
                        text1={
                          <Text16400
                            text="Create video"
                            color="rgba(187, 187, 187, 1)"
                          />
                        }
                      />
                    </div>
                  </Link>
                  <div className={hc.item}>
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
                  <Link to="/SignInCreator">
                    <div
                      onClick={clickShowLogIn}
                      className={hc.item + " " + hc.lastItem}
                    >
                      <Avatext
                        img={Icones.logOut}
                        text1={
                          <Text16400
                            text="Log out"
                            color="rgba(187, 187, 187, 1)"
                          />
                        }
                      />
                    </div>
                  </Link>
                </div>
              )}
            </div>
          ))}
        {currentComponent === "login" && <Header />}
        {mobileMenu && (
          <MobileMenu
            userData={userData}
            subscriptions={props.subscriptions}
            handleVideoClick={props.handleVideoClick}
            fileNames={props.fileNames}
            propsTime={props.propsTime}
            views={props.views}
          />
        )}
      </>
    )
  );
};

export default HeaderCreator;
