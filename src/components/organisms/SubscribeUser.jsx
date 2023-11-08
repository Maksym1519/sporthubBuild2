import ut from "./subscribeUser.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import SubscribeBg from "../../images/subscribe-bg.webp";
import { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { Text32600 } from "../atoms/Text";
import { Text24600 } from "../atoms/Text";
import { Text12300 } from "../atoms/Text";
import { Text18700 } from "../atoms/Text";
import { Text16600 } from "../atoms/Text";
import { Button18044 } from "../atoms/Buttons";
import ColumnTemplate from "../molecules/ColumnTemplate";
import Bio from "./Bio";
import Store from "./Store";
import Playlist from "./Playlist";
import {
  showVideo,
  showBio,
  showStore,
  showPlaylist,
} from "../../features/videoSwitcherSlice";
import { setVideoInfo } from "../../features/videoInfoSlice";
import { setPlayerInfo } from "../../features/playerInfoSlice";
import { selectSubscribersAmount } from "../../features/subscribersAmountSlice";
import { subscribe, unsubscribe } from "../../features/subscribeButtonSlice";
import VideoUser from "../molecules/VideoUser";
import People from "../../images/people-icon.svg";
import Camera from "../../images/camera.svg";
import Eye from "../../images/eye-icon.svg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectVideoInfo } from "../../features/videoInfoSlice";
import { selectUserPlaylist } from "../../features/userPlaylistSlice";
import { setSubscriptions } from "../../features/subscriptionSlice";

const SubscribeUser = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
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
  //redux---------------------------------------------------------
  const dispatch = useDispatch();
  const currentComponent = useSelector(
    (state) => state.videoSwitcher.currentComponent
  );
  const currentSubscribeButton = useSelector(
    (state) => state.subscribeButton.currentSubscribeButton
  );
  const handleVideoClick = () => {
    dispatch(showVideo());
  };
  const handleBioClick = () => {
    dispatch(showBio());
  };
  const handleStoreClick = () => {
    dispatch(showStore());
  };
  const handlePlaylistClick = () => {
    dispatch(showPlaylist());
  };
  const handleSubscribeClick = () => {
    dispatch(subscribe());
  };
  const handleUnSubscribeClick = () => {
    dispatch(unsubscribe());
  };
  //selectVideo---------------------------------------------------
  const [selectedVideoImage, setSelectedVideoImage] = useState(false);
  const chooseVideo = () => {
    setSelectedVideoImage(true);
  };
  //select-redux-state-----------------------------------------------------------------------
  const videoInfo = useSelector(selectVideoInfo);
  console.log(videoInfo)
  const subscribersListInfo = useSelector(selectSubscribersAmount)
  console.log(subscribersListInfo)
    //get-playlists----------------------------------------------------------------
  const propsPlaylists = useSelector(selectUserPlaylist);
  console.log(propsPlaylists);
  //post-mySubscriptions------------------------------------------------------------
  const [mySubscriptions, setMySubscriptions] = useState([]);
  const requestData = {
    data: {
      avatar: videoInfo.avatar,
      name: videoInfo.userName,
      cover: videoInfo.cover,
      subscribe: true,
      identifier: videoInfo.identifier,
      subscriptionsAmount: 1,
    },
  };
  console.log(requestData);
  async function postDataSubscriptions() {
    try {
      const response = await axios.post(
        "http://localhost:1337/api/subscriptions",
        requestData
      );
    } catch (error) {
      console.error("post data failed");
    }
    console.log(requestData);
  }
   //---------------------------------------------------------------
  const handleUnsubscribeClick = async () => {
    try {
      console.log("Trying to unsubscribe...");
      console.log(videoInfo.id);
      await axios.delete(
        `http://localhost:1337/api/subscriptions/${videoInfo.id}`
      );
      console.log("Unsubscribe successful");
      props.updateSubscriptions(); // Обновляем список подписчиков в Main.js
    } catch (error) {
      console.error("Failed to unsubscribe", error);
    }
  };
  //------------------------------------------------------------------
  const unSubscribed = async () => {
    handleUnSubscribeClick();
  };
  //dataStorage---------------------------------------------------------
  const dataStorage = localStorage.getItem("id");
  //set-links-for-user-videos--------------------------------------------
  const [link, setLink] = useState();
  let arrayLinks = [];
  const baseURL = "http://localhost:1337";

  const matchingClient =
    props.dataFromVideo &&
    props.dataFromVideo.filter(
      (item) => item.attributes.publishedBy === (videoInfo.identifier || "")
    );
  console.log(props.dataFromVideo);
  const matchingClientData = matchingClient.map(
    (item) => item.attributes.videos.data
  );
  arrayLinks = matchingClientData.map((item) => item[0].attributes.url);
  const updatedLinks = arrayLinks.map((link) => baseURL + link);
  //setLink(updatedLinks)
  console.log(matchingClientData);
  console.log(updatedLinks);
  //-----------------------------------------------------------------------------------
  const handleVideoInfoClick = (videoData) => {
    dispatch(setPlayerInfo(videoData));
    // handleSubscribeClick();
  };
  //get-subscriptions-amount---------------------------
  const clickedUserName = videoInfo.userName;
  const numberOfSubscribers = props.subscriptionsAmount.reduce(
    (count, subscriber) => {
      if (subscriber.name === clickedUserName && subscriber.subscribe) {
        return count + 1;
      }
      return count;
    },
    0
  );
  //get-videos-amount-----------------------------------------------
  const videosAmount = updatedLinks.length;
  //get-views-amount---------------------------------------------------------------
  const [views, setViews] = useState([]);
  const viewsData = props.dataFromVideo;
  const videoInfoId = videoInfo.id;
  const foundObject = viewsData.find((item) => item.id === videoInfoId);
  const viewValue = foundObject ? foundObject.attributes.view : null;

  console.log(foundObject);
  console.log(viewValue);

  const postView = async () => {
    try {
      const requestData = {
        data: {
          view: viewValue + 1,
        },
      };
      console.log(videoInfo);
      const response = await axios.put(
        `http://localhost:1337/api/Maksyms/${videoInfo.id}`,
        requestData
      );
    } catch (error) {
      console.error("post views is failed");
    }
  };
  //pass-links-to-playlist------------------------------------
  const propsLinks = props.link;
  //data-storage--------------------------------------------------------------
  const [playlistLinks, setPlaylistLinks] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  console.log(playlists);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:1337/api/Playlists");
        const responseData = response.data.data;
        setTime(responseData);
        const filteredData = responseData.filter(
          (user) => user.attributes.publishedBy === videoInfo.identifier
        );
        const allPlaylists = filteredData.map((playlist) => {
          const selectedArray = JSON.parse(playlist.attributes.selected);
          const links = selectedArray.flat().map((videoData) => {
            return "http://localhost:1337" + videoData;
          });
          setPlaylistLinks(links)
          return {
            id: playlist.id,
            playlistName: playlist.attributes.playlistName,
            links: links,
          };
        });
        setPlaylists(allPlaylists);
      } catch (error) {
        console.error("fetch data is failed", error);
      }
    }
    fetchData();
  }, [dataStorage]);
  //get-time---------------------------------------------------------------------
  const [propsTime, setPropsTime] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    function findLastUpdated(time) {
      if (Object.keys(time).length === 0) {
        return null;
      }
      if ("updatedAt" in time) {
        return time.updatedAt;
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
    console.log(lastUpdatedValues);
  }, [time]);
//get-playlistsName--------------------------------------------------------------
const [playlistsName, setPlaylistsName] = useState([]);
useEffect(() => {
  async function getPlaylistsNames() {
    try {
      const response = await axios.get("http://localhost:1337/api/Playlists");
      const dataResponse = response.data.data;
      const matchingData = dataResponse.filter((item) => item.attributes.publishedBy === videoInfo.identifier)
      console.log(matchingData)
      const arrayResponse = matchingData.map(
        (item) => item.attributes.playlistName
      );
      console.log(dataResponse);
      console.log(arrayResponse);
      setPlaylistsName(arrayResponse);
      console.log(playlistsName);
    } catch (error) {
      console.error("get playlists names are failed");
    }
  }
  getPlaylistsNames();
}, []);


  return (
    <>
      <div className={ut.wrapper}>
        <div className={ut.main}>
          <div className={ut.bg__wrapper}>
            <div className={ut.overlay}></div>
            <div className={ut.gradient}></div>
            <img src={videoInfo.cover} alt="bg" />
            <div className={ut.statistics__wrapper}>
              <div className={ut.statistics__header}>
                {isMobile ? (
                  <img src={videoInfo.avatar} />
                ) : (
                  <img src={videoInfo.avatar} alt="ava" />
                )}

                {isMobile ? (
                  <Text24600 text={videoInfo.usersName} />
                ) : (
                  <Text32600 text={videoInfo.userName} />
                )}
              </div>
              <div className={ut.statistics__body}>
                <div className={ut.statistics__body__item}>
                  <img src={People} alt="logo" />
                  <ColumnTemplate
                    row1={<Text18700 text={numberOfSubscribers} />}
                    row2={
                      <Text12300
                        text="Subscribers"
                        color="rgba(187, 187, 187, 1)"
                      />
                    }
                    alignItems="center"
                  />
                </div>
                <div className={ut.statistics__body__item}>
                  <img src={Camera} alt="logo" />
                  <ColumnTemplate
                    row1={<Text18700 text={videosAmount} />}
                    row2={
                      <Text12300 text="Videos" color="rgba(187, 187, 187, 1)" />
                    }
                    alignItems="center"
                  />
                </div>
                <div className={ut.statistics__body__item}>
                  <img src={Eye} alt="logo" />
                  <ColumnTemplate
                    row1={<Text18700 text={videoInfo.view} />}
                    row2={
                      <Text12300 text="Views" color="rgba(187, 187, 187, 1)" />
                    }
                    alignItems="center"
                  />
                </div>
              </div>
              {videoInfo.subscribe ? (
                <div
                  className={ut.button__wrapper}
                  onClick={() => {
                    handleSubscribeClick();
                    handleUnsubscribeClick();
                  }}
                >
                  <Button18044
                    text={<Text16600 text="Unsubscribe" />}
                    borderRadius="8px"
                    width="100%"
                  />
                </div>
              ) : (
                <>
                  {currentSubscribeButton === "subscribe" && (
                    <div
                      className={ut.button__wrapper}
                      onClick={() => {
                        unSubscribed();
                        postDataSubscriptions();
                        props.updateSubscriptions();
                      }}
                    >
                      <Button18044
                        text={<Text16600 text="Subscribe" />}
                        borderRadius="8px"
                      />
                    </div>
                  )}
                  {currentSubscribeButton === "unsubscribe" && (
                    <div
                      className={ut.button__wrapper}
                      onClick={handleUnsubscribeClick()}
                    >
                      <Button18044
                        text={<Text16600 text="Unsubscribe" />}
                        borderRadius="8px"
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div className={ut.video__navigation}>
          <div className={ut.videoSwitcher__wrapper}>
            <div
              className={`${ut.switcher__item} ${
                activeIndex === 0 ? ut.active : ""
              }`}
              onClick={() => {
                handleSwitcher(0), handleVideoClick();
              }}
            >
              Video
            </div>
            <div
              className={`${ut.switcher__item} ${
                activeIndex === 1 ? ut.active : ""
              }`}
              onClick={() => {
                handleSwitcher(1), handleBioClick();
              }}
            >
              Bio
            </div>
            <div
              className={`${ut.switcher__item} ${
                activeIndex === 2 ? ut.active : ""
              }`}
              onClick={() => {
                handleSwitcher(2), handleStoreClick();
              }}
            >
              Store
            </div>
            <div
              className={`${ut.switcher__item} ${
                activeIndex === 3 ? ut.active : ""
              }`}
              onClick={() => {
                handleSwitcher(3), handlePlaylistClick();
              }}
            >
              Playlists
            </div>
          </div>
        </div>
        <div className={ut.main__wrapper}>
          <div className={ut.container}>
            {currentComponent === "video" && (
              <div className={ut.videos__wrapper}>
                <div
                  className={ut.videos__body}
                  onClick={props.subscribePlayer}
                >
                  {props.link &&
                    updatedLinks.map((link, index) => (
                      <VideoUser
                        onClick={postView()}
                        key={index}
                        videoUrl={link}
                        update={videoInfo.update}
                        index={index}
                        avatar={videoInfo.avatar}
                        fileName={videoInfo.fileName[props.link.indexOf(link)]}
                        usersName={videoInfo.userName}
                        clickToSubscriber={() =>
                          handleVideoInfoClick({
                            avatar: videoInfo.avatar,
                            videoUrl: link,
                            update: videoInfo.update,
                            subscriptionsAmount: numberOfSubscribers,
                            views: viewValue,
                            fileName:
                              videoInfo.fileName[props.link.indexOf(link)],
                            id: videoInfo.id,
                            videoInfoData: viewsData,
                            playlistName: playlistsName[index],
                            subscribe: videoInfo.subscribe
                          })
                        }
                      />
                    ))}
                </div>
              </div>
            )}
            {currentComponent === "bio" && <Bio />}
            {currentComponent === "store" && <Store />}
            {currentComponent === "playlist" && (
              <Playlist
                link={propsLinks}
                playlist={playlistLinks}
                update={videoInfo.update}
                avatar={videoInfo.avatar}
                fileName={videoInfo.fileName}
                playlistName={playlistsName}
                />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeUser;
