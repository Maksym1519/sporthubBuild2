import p from "./playlist.module.scss";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//components--------------------------------------
import HeaderCreator from "../../organisms/HeaderCreator";
import { Button18044 } from "../../atoms/Buttons";
import { Text16600, Text20600 } from "../../atoms/Text";
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
import { showPlaylist,showEditPlaylist,showResultPlaylist,showEditResultPlaylist } from "../../../features/createPlaylistSlice";
import Mind from "../../organisms/Mind/Mind";
import Body from "../../organisms/Body/Body";
import Soul from "../../organisms/Soul/Soul";
import PlaylistEdit from "../../organisms/PlaylistEdit/PlaylistEdit";
import PlaylistResult from "../../organisms/PlaylistResult/PlaylistResult";
import PlaylistEditResult from "../../organisms/PlaylistEditResult/PlaylistEditResult";
//images-------------------------------------------
import Plus from "../../../images/Plus.svg";
import axios from "axios";

const Playlist = () => {
  //viewAll/hideAll------------------------------------------------------
  const [showMore, setShowMore] = useState(true);
  const toggleVideos = () => {
    setShowMore(!showMore);
  };
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
  //redux-videoCreate----------------------------------------------------
  const currentStep = useSelector(
    (state) => state.createPlaylistSlice.currentStep
  );
  const clickPlaylist = () => {
    dispatch(showPlaylist())
  }
  const clickEditPlaylist = () => {
    dispatch(showEditPlaylist())
  }
  const clickResultPlaylist = () => {
    dispatch(showResultPlaylist())
  }
  const clickEditResultPlaylist = () => {
    dispatch(showEditResultPlaylist())
  }
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
    <div className={p.videoCreator__wrapper}>
      <HeaderCreator />
      <div className={p.videoCreator__container}>
        {/* //video-Menu-------------------------------------------------------------------------- */}
        {currentStep === "init" && (
          <div>
            <div className={p.videoNavigation__wrapper}>
              <div className={p.videoSwitcher__wrapper}>
                <div
                  className={`${p.item} ${activeIndex === 2 ? p.active : ""}`}
                  onClick={() => switchVideo(2)}
                >
                  Your video
                </div>
                <div
                  className={`${p.item} ${activeIndex === 1 ? p.active : ""}`}
                  onClick={() => {
                    switchVideo(1);clickPlaylist();
                  }}
                >
                  Playlists
                </div>
              </div>
              <div onClick={clickAddVideo} className={p.button__wrapper}>
                {isMobile ? (
                 <div  onClick={clickEditPlaylist}> 
                  <Button18044
                    img={Plus}
                    text={<Text16600 text="" />}
                    columnGap="0px"
                    borderRadius="8px"
                    width="54px"
                  />
                </div>) : (<div onClick={clickEditPlaylist}>
                  <Button18044
                    img={Plus}
                    text={<Text16600 text="Create new playlist" />}
                    columnGap="10px"
                    borderRadius="8px"
                    width="217px"
                    />
                </div>)}
              </div>
            </div>
            {/* //video-subMenu-------------------------------------------------------------------------- */}
            <div className={p.video__navigation}>
              <div className={p.videoSwitcher__wrapper}>
                <div
                  className={`${p.switcher__item} ${
                    activeSubIndex === 1 ? p.active : ""
                  }`}
                  onClick={() => {
                    switchSubVideo(1);
                    clickAll();
                  }}
                >
                  All
                </div>
                <div
                  className={`${p.switcher__item} ${
                    activeSubIndex === 2 ? p.active : ""
                  }`}
                  onClick={() => {
                    switchSubVideo(2);
                    clickMind();
                  }}
                >
                  Mind
                </div>
                <div
                  className={`${p.switcher__item} ${
                    activeSubIndex === 3 ? p.active : ""
                  }`}
                  onClick={() => {
                    switchSubVideo(3);
                    clickBody();
                  }}
                >
                  Body
                </div>
                <div
                  className={`${p.switcher__item} ${
                    activeSubIndex === 4 ? p.active : ""
                  }`}
                  onClick={() => {
                    switchSubVideo(4);
                    clickSoul();
                  }}
                >
                  Soul
                </div>
              </div>
            </div>
            {/* //----------------------------------------------------------------------------- */}
            <div className={p.playlistItem__header}>
              <Text20600 text="Fitness training" />
              {showMore ? (
                <div onClick={toggleVideos}>
                  <Text16600 text="View all" color="rgba(173, 121, 85, 1)" />
                </div>
              ) : (
                <div onClick={toggleVideos}>
                  <Text16600
                    text="Hide all"
                    color="rgba(173, 121, 85, 1)"
                    onClick={toggleVideos}
                  />
                </div>
              )}
            </div>
            {/* //--------------------------------------------------------------------- */}
            (
            {currentStyle === "all" && (
              <div className={p.videos__body}>
                {link.map((link, index) => (
                  <Video key={index} videoUrl={link} />
                ))}
              </div>
            )}
            {currentStyle === "mind" && <Mind />}
            {currentStyle === "body" && <Body />}
            {currentStyle === "soul" && <Soul />})
          </div>
        )}
         {currentStep=== "edit" && <PlaylistEdit clickResult={clickResultPlaylist}/>}
         {currentStep === "result" && <PlaylistResult clickEditResult={clickEditResultPlaylist}/>}
         {currentStep === "editResult" && <PlaylistEditResult />}
      </div>
    </div>
  );
};

export default Playlist;
