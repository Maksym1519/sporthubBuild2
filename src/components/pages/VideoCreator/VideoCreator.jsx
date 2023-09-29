import vc from "./videoCreator.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
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
//images-------------------------------------------
import Plus from "../../../images/Plus.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

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
  // data-request---------------------------------------------------------------
  const [formData, setFormData] = useState(null);
  const handleFileChange = (e) => {
    // Обработка выбора файла
    setFormData(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData) {
        // Проверка наличия выбранного файла
        console.error("Please select a file.");
        return;
      }
      const formDataServer = new FormData();
      formDataServer.append("files", formData[0]);
      const response = await axios.post(
        "http://localhost:1337/api/upload",
        formDataServer
      );
      if (response.status === 200) {
        const videoItem = response.data[0].id;
        console.log(videoItem);
        const requestData = {
          data: {
            videos: videoItem,
          },
        };
        const profileResponse = await axios.post(
          "http://localhost:1337/api/Maksyms",
          requestData
        );
      } else {
        ("upload video failed");
      }
    } catch (error) {
      console.error("error");
    }
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
                    className={`${vc.item} ${
                      activeIndex === 1 ? vc.active : ""
                    }`}
                    onClick={() => switchVideo(1)}
                  >
                    Your video
                  </div>
                  <div
                    className={`${vc.item} ${
                      activeIndex === 2 ? vc.active : ""
                    }`}
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
                      width='180px'
                    />
                  )}
                  {/* <input
                    type="file"
                    onChange={(e) => setFormData(e.target.files)}
                    className={vc.addVideo}
                  />
                  <button
                    type="submit"
                    value="Submit"
                    className={vc.buttonSubmit}
                  >
                   </button> */}
                   
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
                    switchSubVideo(1);
                  }}
                >
                  Mind
                </div>
                <div
                  className={`${vc.switcher__item} ${
                    activeSubIndex === 2 ? vc.active : ""
                  }`}
                  onClick={() => {
                    switchSubVideo(2);
                  }}
                >
                  Body
                </div>
                <div
                  className={`${vc.switcher__item} ${
                    activeSubIndex === 3 ? vc.active : ""
                  }`}
                  onClick={() => {
                    switchSubVideo(3);
                  }}
                >
                  Soul
                </div>
              </div>
            </div>
            {/* //--------------------------------------------------------------------- */}
            <div className={vc.videos__body}>
              {link.map((link, index) => (
                <Video key={index} videoUrl={link} />
              ))}
            </div>
          </div>
        )}
        {currentComponent === "addVideo" && <AddVideo click={clickDownloading} clickBack={clickYourVideo} clickNext={clickDownloading}/>}
        {currentComponent === "downloading" && <DownloadVideo />}
      </div>
    </div>
  );
};

export default VideoCreator;
