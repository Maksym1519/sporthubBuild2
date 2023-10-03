import vc from "./videoCreator.module.scss";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//components--------------------------------------
import HeaderCreator from "../../organisms//HeaderCreator";
import { Button18044 } from "../../atoms/Buttons";
import { Text16600 } from "../../atoms/Text";
import Video from "../../molecules/Video";
import { VideoUserArray } from "../../../Data";
import { AvaArray } from "../../../Data";
import {
  showYourVideo,
  showAddVideo,
  showNewVideo,
  showDowloading,
  showPlayer,
} from "../../../features/addVideoCreator";
import AddVideo from "../../organisms/VideoCreator/AddVideo";
import DownloadVideo from "../../organisms/VideoCreator/DownloadVideo";
import {
  showAll,
  showMind,
  showBody,
  showSoul,
} from "../../../features/videoStyleSlice";
import Mind from "../../organisms/Mind/Mind";
import Body from "../../organisms/Body/Body";
//images-------------------------------------------
import Plus from "../../../images/Plus.svg";
import axios from "axios";

const VideoCreator = () => {
  //isMobile--------------------------------------------------------------
  const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;
  //redux-video-states------------------------------------------------------
  const dispatch = useDispatch();
  const currentComponent = useSelector(
    (state) => state.addVideoSlice.currentComponent
  );
  const clickYourVideo = () => {
    dispatch(showYourVideo());
  };
  const clickAddVideo = () => {
    dispatch(showAddVideo());
  };
  const clickNewVideo = () => {
    dispatch(showNewVideo());
  };
  const clickDownloading = () => {
    dispatch(showDowloading());
  };
  const clickPlayer = () => {
    dispatch(showPlayer());
  };
  //redux-video-style----------------------------------------------------
  const currentStyle = useSelector(
    (state) => state.videoStyleSlice.currentStyle
  );
  const clickAll = () => {
    dispatch(showAll());
  };
  const clickMind = () => {
    dispatch(showMind());
  };
  const clickBody = () => {
    dispatch(showBody());
  };
  const clickSoul = () => {
    dispatch(showSoul());
  };
  //video-switcher---------------------------------------------------------
  const [activeIndex, setActiveIndex] = useState(true);
  useEffect(() => {
    setActiveIndex(1);
  }, []);
  const switchVideo = (index) => {
    setActiveIndex(index);
  };
  //video-subSwitcher---------------------------------------------------------
  const [activeSubIndex, setActiveSubIndex] = useState(true);
  useEffect(() => {
    setActiveSubIndex(1);
  }, []);
  const switchSubVideo = (index) => {
    setActiveSubIndex(index);
  };
  //data-get-------------------------------------------------------------------
  const [link, setVideoLinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/Maksyms?populate=*"
        );

        if (response.status === 200) {
          const videosData = response.data.data;
          const allLinks = [];

          videosData.forEach((video) => {
            if (
              video.attributes.videos &&
              video.attributes.videos.data.length > 0
            ) {
              const links = video.attributes.videos.data.map((videoData) => {
                return "http://localhost:1337" + videoData.attributes.url;
              });
              allLinks.push(...links);
            }
          });

          setVideoLinks(allLinks);
        } else {
          console.error("Failed to fetch video data");
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    }

    fetchData();
  }, []);

  //----------------------------------------------------------------------------
  return (
    <div className={vc.videoCreator__wrapper}>
      <HeaderCreator />
      <div className={vc.videoCreator__container}>
        {/* //video-Menu-------------------------------------------------------------------------- */}
        {currentComponent === "yourVideo" && (
          <div>
            <div className={vc.videoNavigation__wrapper}>
              <div className={vc.videoSwitcher__wrapper}>
                <div
                  className={`${vc.item} ${activeIndex === 1 ? vc.active : ""}`}
                  onClick={() => switchVideo(1)}
                >
                  Your video
                </div>
                <div
                  className={`${vc.item} ${activeIndex === 2 ? vc.active : ""}`}
                  onClick={() => switchVideo(2)}
                >
                  Playlists
                </div>
              </div>
              <div onClick={clickAddVideo} className={vc.button__wrapper}>
                {isMobile ? (
                  <Button18044
                    img={Plus}
                    text={<Text16600 text="" />}
                    columnGap="0px"
                    borderRadius="8px"
                    width="54px"
                  />
                ) : (
                  <Button18044
                    img={Plus}
                    text={<Text16600 text="Add new video" />}
                    columnGap="10px"
                    borderRadius="8px"
                    width="180px"
                  />
                )}
              </div>
            </div>
            {/* //video-subMenu-------------------------------------------------------------------------- */}
            <div className={vc.video__navigation}>
              <div className={vc.videoSwitcher__wrapper}>
                <div
                  className={`${vc.switcher__item} ${
                    activeSubIndex === 1 ? vc.active : ""
                  }`}
                  onClick={() => {
                    switchSubVideo(1);clickAll()
                  }}
                >
                  All
                </div>
                <div
                  className={`${vc.switcher__item} ${
                    activeSubIndex === 2 ? vc.active : ""
                  }`}
                  onClick={() => {
                    switchSubVideo(2);
                    clickMind();
                  }}
                >
                  Mind
                </div>
                <div
                  className={`${vc.switcher__item} ${
                    activeSubIndex === 3 ? vc.active : ""
                  }`}
                  onClick={() => {
                    switchSubVideo(3);clickBody()
                  }}
                >
                  Body
                </div>
                <div
                  className={`${vc.switcher__item} ${
                    activeSubIndex === 4 ? vc.active : ""
                  }`}
                  onClick={() => {
                    switchSubVideo(4);
                  }}
                >
                  Soul
                </div>
              </div>
            </div>
            {/* //--------------------------------------------------------------------- */}
            {currentStyle === "all" && (
              <div className={vc.videos__body}>
                {link.map((link, index) => (
                  <Video key={index} videoUrl={link} />
                ))}
              </div>
            )}
             {currentStyle === "mind" && <Mind />}
             {currentStyle === "body" && <Body />}
          </div>
        )}
        {currentComponent === "addVideo" && (
          <AddVideo
            click={clickDownloading}
            clickBack={clickYourVideo}
            clickNext={clickDownloading}
          />
        )}
        {currentComponent === "downloading" && <DownloadVideo />}
       
      </div>
    </div>
  );
};

export default VideoCreator;
