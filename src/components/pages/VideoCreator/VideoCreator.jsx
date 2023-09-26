import vc from "./videoCreator.module.scss";
import { useState } from "react";
import { useEffect } from "react";

//components--------------------------------------
import HeaderCreator from "../../organisms//HeaderCreator";
import { Button18044 } from "../../atoms/Buttons";
import { Text16600 } from "../../atoms/Text";
import Video from "../../molecules/Video";
import { VideoUserArray } from "../../../Data";
import { AvaArray } from "../../../Data";
//images-------------------------------------------
import Plus from "../../../images/Plus.svg";
import axios from "axios";

const VideoCreator = () => {
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
  //data-request---------------------------------------------------------------
  const [formData, setFormData] = useState(null);
  const handleFileChange = (e) => {
    // Обработка выбора файла
    setFormData(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
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
  //----------------------------------------------------------------------------
  return (
    <div className={vc.videoCreator__wrapper}>
      <HeaderCreator />
      <div className={vc.videoCreator__container}>
        {/* //video-Menu-------------------------------------------------------------------------- */}
        <form onSubmit={handleSubmit}>
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
            <div className={vc.button__wrapper}>
              <Button18044
                img={Plus}
                text={<Text16600 text="Add new video" />}
                columnGap="10px"
                borderRadius="8px"
                />
              <input type="file" onChange={(e) => setFormData(e.target.files)} className={vc.addVideo}/>
              <button type="submit" value="Submit" className={vc.buttonSubmit}>send</button>
            </div>
          </div>
        </form>
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
          <Video img={VideoUserArray[0]} ava={AvaArray[0]} />
        </div>
      </div>
    </div>
  );
};

export default VideoCreator;
