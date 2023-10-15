import hc from "./headerCreator.module.scss";
import { useSelector } from "react-redux";
import { selectData } from "../../features/getIdSlice";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { Text16400 } from "../atoms/Text";
import Avatext from "../molecules/Avatext";
import Header from "../organisms/Header";
import { showLogOut, showLogIn } from "../../features/headerStateSlice";
import { Icones } from "../../Data";
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
  //get-global-state-for-avatar--------------------------------
const data = useSelector(selectData)
console.log(data)
//post-request-for-avatar-----------------------------------------------
const [userData,setUserData] = useState([])
useEffect(() => {
const fetchData = async () => {
  try {
      const response = await axios.get("http://localhost:1337/api/clients?populate=*");
      const usersData = response.data.data;
      const allUsers = [];
      usersData.forEach((user) => {
        return allUsers.push(user)
      })
      const filteredData = allUsers.filter((client) => {
       client.identifier === id
      })
      console.log(allUsers)

  } catch(error) {
   console.error("fetchData failed",error)
  }
}
fetchData()
},[])

  return (
    <>
      {currentComponent === "logout" &&
        (isMobile ? (
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
              <img src={SearchSmall} alt="icon" />
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
                  <img src={EleonaraPena.ava} alt="ava" />
                  <Text16400 text="Profile" color="rgba(187, 187, 187, 1)" />
                </div>
              </div>
            </div>
            {menu && (
              <div className={hc.headerProfile__wrapper}>
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
                <div
                  onClck={clickShowLogIn}
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
              </div>
            )}
          </div>
        ))}
      {currentComponent === "login" && <Header />}
    </>
  );
};

export default HeaderCreator;
