import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import m from "./main.module.scss";
import { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { updateScreenWidth } from "../../../features/headerSlice";
import { getShowMore } from "../../functions/getShowMore";
import { Text14400 } from "../../atoms/Text";
import { Text16400 } from "../../atoms/Text";
import { Text12600 } from "../../atoms/Text";
import { Text24500 } from "../../atoms/Text";
import { Text18500 } from "../../atoms/Text";
import Avatext from "../../molecules/Avatext";
import Header from "../../organisms/Header";
import Video from "../../molecules/Video";
import HeaderCreator from "../../organisms/HeaderCreator";
import SubscribeUser from "../../organisms/SubscribeUser";
import Subscribe from "../Subscribe/Subscribe";
import VideoUser from "../../molecules/VideoUser";
import UserVideoPlayer from "../UserVideoPlayer/UserVideoPlayer";
import {
  showHome,
  showLatest,
  showViewLater,
  showSubscribe,
  showSubscribePlayer,
} from "../../../features/videoUserSlice";
import { setVideoInfo } from "../../../features/videoInfoSlice";
import { setSubscribersAmount } from "../../../features/subscribersAmountSlice";
import { setSubscriptions } from "../../../features/subscriptionSlice";
import { AvaArray } from "../../../Data";
import { VideoUserArray } from "../../../Data";
import UserLatest from "../../organisms/UserLatest";
import ViewLater from "../../organisms/ViewLater";
import Arrow from "../../../images/arrow-down-yellow.svg";
import More from "../../../images/more.svg";

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
import { Link } from "react-router-dom";
register();
//------------------------------------------------------------------------

const Main = (props) => {
  //-----------------------------------------------------------------------
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
  const handleSubscribePlayerClick = () => {
    dispatch(showSubscribePlayer());
  };

  //redux-menu-Dots------------------------------------------------

  //strapi-getShowMore---------------------------------------------
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getShowMoreFromApi = async () => {
      try {
        const result = await getShowMore(); // Вызываем функцию для получения данных
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getShowMoreFromApi();
  }, []);

  //video-menu-----------------------------------------------
  const num = 555;
  //data-storage-----------------------------------------------
  const dataStorage = localStorage.getItem("id");
  //get-videos-------------------------------------------------
  const [time, setTime] = useState([]);
  const [link, setVideoLinks] = useState([]);
  const [foundVideo, setFoundVideo] = useState([]);
  const [publishedBy, setPublishedBy] = useState([]);
  const [avatars, setAvatars] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [usersName, setUsersName] = useState([]);
  const [covers, setCovers] = useState([]);
  const [id, setId] = useState([]);
  const [dataFromVideo, setDataFromVideo] = useState();
  const [views, setViews] = useState();
  const [chatAvatar, setChatAvatar] = useState("");
  const arrayCovers = [];
  const allNamesArray = [];
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/Maksyms?populate=*"
        );
        const responseProfiles = await axios.get(
          "http://localhost:1337/api/Profiles?populate=*"
        );

        if (response.status === 200) {
          const videosData = response.data.data;
          setDataFromVideo(videosData);
          const profilesData = responseProfiles.data.data;

          const identifiers = profilesData.map(
            (client) => client.attributes.identifier
          );
          const allLinks = [];
          const avatarArray = [];
          const allNames = [];
          setTime(videosData);
          //names-----------------------------------------------------
          const arrayFound = videosData.map(
            (item) => item.attributes.videos.data
          );
          const arrayFoundNames = arrayFound.map(
            (item) => item[0].attributes.name
          );
          setFoundVideo(arrayFoundNames);
          //published-------------------------------------------------
          const arrayPublished = videosData.map(
            (item) => item.attributes.publishedBy
          );
          setPublishedBy(arrayPublished);
          //id-------------------------------------------------------
          const arrayId = videosData.map((item) => item.id);
          setId(arrayId);
          //views---------------------------------------------------------
          const arrayViews = videosData.map((item) => item.attributes.view);
          setViews(arrayViews);

          videosData.forEach((video) => {
            if (
              video.attributes &&
              video.attributes.videos &&
              video.attributes.videos.data &&
              Array.isArray(video.attributes.videos.data)
            ) {
              const links = video.attributes.videos.data.map((videoData) => {
                if (videoData.attributes && videoData.attributes.url) {
                  return "http://localhost:1337" + videoData.attributes.url;
                }
                return null;
              });
              allLinks.push(...links.filter((link) => link !== null));
              const names = video.attributes.videos.data.map((namesData) => {
                return namesData.attributes.name;
              });
              allNames.push(...names);
              setFileNames(allNames);
              const previewUrl =
                video.attributes.preview &&
                video.attributes.preview.data &&
                video.attributes.preview.data.attributes &&
                video.attributes.preview.data.attributes.url;
              const allCovers = videosData.map((video) => {
                const previewUrl =
                  video.attributes.preview &&
                  video.attributes.preview.data &&
                  video.attributes.preview.data.attributes &&
                  video.attributes.preview.data.attributes.url;
                return "http://localhost:1337" + previewUrl || null;
              });
              //arrayCovers.push(allCovers);
              setCovers(allCovers);
            }

            // Set avatar URL for each video based on matching identifier
            const matchingClient = profilesData.find(
              (client) =>
                client.attributes.identifier === video.attributes.publishedBy
            );
            if (matchingClient) {
              if (
                matchingClient.attributes.avatar &&
                matchingClient.attributes.avatar.data &&
                matchingClient.attributes.avatar.data.attributes.url
              ) {
                const avatarUrl =
                  "http://localhost:1337" +
                  matchingClient.attributes.avatar.data.attributes.url;
                avatarArray.push(avatarUrl);
                setChatAvatar(avatarUrl);
              }
              const fullName =
                matchingClient.attributes.firstName +
                " " +
                matchingClient.attributes.lastName;
              allNamesArray.push(fullName);
              setUsersName(allNamesArray);
            }
          });
          setAvatars(avatarArray);
          setVideoLinks(allLinks);
        } else {
          console.error("Не удалось загрузить данные о видео");
        }
      } catch (error) {
        console.error("Ошибка при загрузке данных о видео:", error);
      }
    }

    fetchData();
  }, []);
  //get-time---------------------------------------------------------------------
  const [propsTime, setPropsTime] = useState([]);
  useEffect(() => {
    function findLastUpdated(time) {
      if (Object.keys(time).length === 0) {
        return null;
      }
      if ("createdAt" in time) {
        return time.createdAt;
      }
      for (const key in time) {
        const result = findLastUpdated(time[key]);
        if (result !== null) {
          return result;
        }
      }
      return null;
    }
    const lastUpdatedValues = time.map((item) => findLastUpdated(item));
    setPropsTime(lastUpdatedValues);
  }, [time]);
  //redux-state----------------------------------------------------------
  const handleVideoClick = (videoData) => {
    dispatch(setVideoInfo(videoData));
    handleSubscribeClick();
  };
  const handleAmountClick = (subs) => {
    dispatch(setSubscribersAmount(subs));
    handleSubscribeClick();
  };
  //get-subscriptions----------------------------------------------------------------
  const [subscriptions, setSubscriptions] = useState([]);
  const [subscriptionsAmount, setSubscriptionsAmount] = useState([]);
  const [identifierForVideo, setIdentifierForVideo] = useState();
  console.log(identifierForVideo);
  let arraySubscriptions = [];
  let counter = 0;
  async function getSubscriptions() {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/subscriptions"
      );
      const responseData = response.data.data;
      console.log(responseData);
      arraySubscriptions = responseData.map((item, index) => ({
        avatar: item.attributes.avatar,
        name: item.attributes.name,
        cover: item.attributes.cover,
        subscribe: item.attributes.subscribe,
        id: item.id,
        identifier: item.attributes.identifier,
        subscriptionsAmount: item.attributes.subscriptionsAmount,
        identifierForVideo: item.attributes.identifierForVideo,
      }));
      setSubscriptionsAmount(arraySubscriptions);
      console.log(arraySubscriptions);
      const updatedSubscriptions = arraySubscriptions.filter(
        (item) => item.identifier === dataStorage
      );

      const uniqueSubscriptionsMap = new Map();
      updatedSubscriptions.forEach((item) => {
        uniqueSubscriptionsMap.set(item.id, item);
      });
      const updatedSubscriptionsAmountFromAPI = Array.from(
        uniqueSubscriptionsMap.values()
      ).map((user) => ({
        avatar: user.avatar,
        name: user.name,
        cover: user.cover,
        subscriptionsAmount: user.subscriptionsAmount,
        subscribe: user.subscribe,
        identifier: user.identifier,
        id: user.id,
        identifierForVideo: user.identifierForVideo,
      }));
      setSubscriptions(updatedSubscriptionsAmountFromAPI);
      //identifierForVideo----------------------------------------
      const arrayIdentifierForVideo = updatedSubscriptionsAmountFromAPI.map(
        (item) => item.identifierForVideo
      );
      setIdentifierForVideo(arrayIdentifierForVideo);
    } catch (error) {
      console.error("get subscriptions failed", error);
    }
  }
  //getSubscriptions();
  useEffect(() => {
    getSubscriptions();
  }, []);
  //getting new subsribers list------------------------------------------------------------
  const updateSubscriptions = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/subscriptions"
      );
      const responseData = response.data.data;
      const updatedSubscriptions = responseData.map((item, index) => ({
        avatar: item.attributes.avatar,
        name: item.attributes.name,
        cover: item.attributes.cover,
        subscribe: item.attributes.subscribe,
        id: item.id,
        identifier: item.attributes.identifier,
        subscriptionsAmount: item.attributes.subscriptionsAmount,
      }));
      setSubscriptions(updatedSubscriptions);
    } catch (error) {
      console.error("update subscriptions failed", error);
    }
  };

  return (
    <div className={m.main__wrapper}>
      <HeaderCreator
        num={num}
        goHome={handleHomeClick}
        subscriptions={subscriptions}
        handleVideoClick={handleVideoClick}
        fileNames={fileNames}
        propsTime={propsTime}
        views={views}
      />
      <div
        className={`${m.container} ${
          currentComponent === "subscribePlayer" ? m.containerToPlayer : ""
        }`}
      >
        {currentComponent !== "subscribePlayer" && (
          <div className={m.sidebar__wrapper}>
            <div className={m.switcher__wrapper}>
              <div
                className={`${m.switcher__item} ${
                  activeIndex === 0 ? m.active : ""
                }`}
                onClick={() => {
                  handleSwitcher(0), handleHomeClick();
                }}
              >
                <Text16400 text="Home" color="rgba(187, 187, 187, 1)" />
              </div>
              <div
                className={`${m.switcher__item} ${
                  activeIndex === 1 ? m.active : ""
                }`}
                onClick={() => {
                  handleSwitcher(1), handleLatestClick();
                }}
              >
                <Text16400 text="Latest" color="rgba(187, 187, 187, 1)" />
              </div>
              <div
                className={`${m.switcher__item} ${
                  activeIndex === 2 ? m.active : ""
                }`}
                onClick={() => {
                  handleSwitcher(2), handleViewLaterClick();
                }}
              >
                <Text16400 text="View later" color="rgba(187, 187, 187, 1)" />
              </div>
            </div>
            <div className={m.mySubscription__wrapper}>
              <div className={m.title}>
                <Text12600
                  text="MY SUBSCRIPTION"
                  color="rgba(173, 121, 85, 1)"
                />
              </div>
              <div className={m.items__wrapper}>
                {/* //item1-------------------------------------------------------------- */}
                {subscriptions.map((item, index) => (
                  <div
                    className={`${m.item} ${activeIndex === 4 ? m.active : ""}`}
                    onClick={() =>
                      handleVideoClick({
                        avatar: item.avatar,
                        cover: item.cover,
                        fileName: fileNames,
                        userName: item.name,
                        subscribe: item.subscribe,
                        id: item.id, //?
                        identifier: item.identifier,
                        update: propsTime,
                        identifierForLink: item.identifierForVideo,
                        views: views,
                        view: views[index],
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
                {/* //item-------------------------------------------------------------- */}
              </div>
            </div>
          </div>
        )}
        {/* //redux-video-state-------------------------------------------------------- */}
        {currentComponent === "home" && (
          <div className={m.videos__wrapper}>
            {currentComponent === "subscribe" && <SubscribeUser />}
            <div className={m.slider__wrapper}>
              <Swiper
                //init="false"
                //ref={mainSlider}
                slidesPerView={1}
                speed={1000}
                loop={true}
                //css-mode="true"
                //class="mainSlider"
              >
                <SwiperSlide className={m.slide__wrapper}>
                  <div className={m.video__wrapper}>
                    <img
                      src={
                        "http://localhost:1337/uploads/video_More1_6a77d41eb9.webp"
                      }
                      alt="video"
                    />
                  </div>
                  <div className={m.video__wrapper}>
                    <img
                      src={
                        "http://localhost:1337/uploads/video_More2_6106767343.webp"
                      }
                      alt="video"
                    />
                  </div>
                  <div className={m.video__wrapper}>
                    <img
                      src={
                        "http://localhost:1337/uploads/video_More3_e0e9300cfd.webp"
                      }
                      alt="video"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={m.slide__wrapper}>
                  <div className={m.video__wrapper}>
                    <img
                      src={
                        "http://localhost:1337/uploads/video_More1_6a77d41eb9.webp"
                      }
                      alt="video"
                    />
                  </div>
                  <div className={m.video__wrapper}>
                    <img
                      src={
                        "http://localhost:1337/uploads/video_More2_6106767343.webp"
                      }
                      alt="video"
                    />
                  </div>
                  <div className={m.video__wrapper}>
                    <img
                      src={
                        "http://localhost:1337/uploads/video_More3_e0e9300cfd.webp"
                      }
                      alt="video"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            {isMobile ? (
              <h3 className={m.title}>
                <Text18500 text="Video List" />
              </h3>
            ) : (
              <h3 className={m.title}>
                <Text24500 text="Video List" />
              </h3>
            )}
            {/* //item4--------------------------------------------------------------- */}
            {currentComponent === "home" && (
              <div className={m.videos__body}>
                {link.map((link, index) => (
                  <VideoUser
                    key={index}
                    videoUrl={link}
                    update={propsTime}
                    index={index}
                    avatar={avatars[index]}
                    cover={covers[index]}
                    fileName={fileNames[index]}
                    usersName={usersName[index]}
                    clickToSubscriber={() =>
                      handleVideoClick({
                        avatar: avatars[index],
                        cover: covers[index],
                        fileName: fileNames,
                        userName: usersName[index],
                        identifier: publishedBy[index],
                        videoUrl: link,
                        update: propsTime,
                        id: id[index],
                        views: views,
                        view: views[index],
                        subscribe: subscriptions[index],
                        //identifierForLink: identifierForVideo[index]
                      })
                    }
                  />
                ))}
              </div>
            )}
            {/* //item--------------------------------------------------------------- */}
          </div>
        )}
        {currentComponent === "latest" && (
          <UserLatest
            link={link}
            propsTime={propsTime}
            avatars={avatars}
            fileNames={fileNames}
            usersName={usersName}
          />
        )}
        {currentComponent === "viewLater" && <ViewLater />}
        {currentComponent === "subscribe" && (
          <SubscribeUser
            link={link}
            propsTime={propsTime}
            avatars={avatars}
            fileNames={fileNames}
            usersName={usersName}
            subscribers={subscriptions}
            subscriptionsAmount={subscriptionsAmount} //props with all subscriptions
            updateSubscriptions={updateSubscriptions}
            subscribePlayer={handleSubscribePlayerClick}
            dataFromVideo={dataFromVideo}
            handleVideoClick={handleVideoClick}
            views={views}
            getSubscriptions={getSubscriptions}
          />
        )}
        {currentComponent === "subscribePlayer" && (
          <UserVideoPlayer
            handleToSubscribe={handleSubscribeClick}
            link={link}
            propsTime={propsTime}
            avatars={avatars}
            fileNames={fileNames}
            usersName={usersName}
            subscribers={subscriptions}
            subscriptionsAmount={subscriptionsAmount} //props with all subscriptions
            updateSubscriptions={updateSubscriptions}
            subscribePlayer={handleSubscribePlayerClick}
            dataFromVideo={dataFromVideo}
            handleVideoClick={handleVideoClick}
            views={views}
            chatAvatar={chatAvatar}
          />
        )}
        {/* //------------------------------------------------------------------------------------- */}
      </div>
    </div>
  );
};
export default Main;
