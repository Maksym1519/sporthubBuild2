import dv from "./downloadVideo.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//components----------------------------------
import { Button18044 } from "../../atoms/Buttons";
import { Text24500 } from "../../atoms/Text";
import { Text16600 } from "../../atoms/Text";
import { Text36500 } from "../../atoms/Text";
import { Text14400 } from "../../atoms/Text";
import { Text16400 } from "../../atoms/Text";
import { Text18500 } from "../../atoms/Text";
import { Text12400 } from "../../atoms/Text";
import { Icones } from "../../../Data";
import { Preview } from "../../../Data";
import AvaText from "../../molecules/Avatext";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";

const DownloadVideo = (props) => {
  //isMobile--------------------------------------------------------------
  const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;
  //dots-menu--------------------------------------------------------------------
  const [dotsMenu, setDotsMenu] = useState(false);
  const toggleDotsMenu = () => {
    setDotsMenu(!dotsMenu);
  };
  //succss-banner-------------------------------------------------------
  const [successBunner, setSuccessBunner] = useState(false);
  const showSuccessBunner = () => {
    setSuccessBunner(true);
  };
  //delete-banner------------------------------------------------------
  const [deleteBanner, setDeleteBanner] = useState(false);
  const showDeleteBanner = () => {
    setDeleteBanner(true);
  };

  //get-data-------------------------------------------------------------
  const [fileName, setFileName] = useState({
    fileVideoName: "",
    videoPlayer: "",
    preview: "",
    title: "",
    category: "",
    description: "",
    addShopifyLink: "",
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://sporthubdeploy2.onrender.com/api/Maksyms?populate=*"
        );
        if (response.status === 200) {
          const profileData = response.data.data;
          console.log(profileData);
          setFileName({
            fileVideoName:
              profileData[profileData.length - 1].attributes.videos.data[0]
                .attributes.name,
            videoPlayer:
              profileData[profileData.length - 1].attributes.videos.data[0]
                .attributes.url,
            preview:
              profileData[profileData.length - 1].attributes.preview.data
                .attributes.url,
            title: profileData[profileData.length - 1].attributes.title,
            category: profileData[profileData.length - 1].attributes.category,
            description:
              profileData[profileData.length - 1].attributes.description,
            addShopifyLink:
              profileData[profileData.length - 1].attributes.addShopifyLink,
          });
          console.log(fileName.videoPlayer);
        } else {
          console.error("Failed to fetch profile data");
        }
      } catch (error) {
        console.error("fetch data failed");
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    // Этот блок кода выполнится после изменения fileName
    console.log(fileName?.fileVideoName);
  }, [fileName]);
  //reload page------------------------------------------------------------
  const handleResetButtonClick = () => {
    window.location.reload();
  };
  //delete-last-video------------------------------------------------------
  const handleDeleteClick = async () => {
    try {
      const response = await axios.get(
        "https://sporthubdeploy2.onrender.com/api/Maksyms?populate=*"
      );
      const profileData = response.data.data;
      const videoId = profileData[profileData.length - 1].id;
      await axios.delete(`https://sporthubdeploy2.onrender.com/api/Maksyms/${videoId}`);
      // Обновляем состояние компонента
      setFileName({
        fileVideoName: "",
        videoPlayer: "",
        preview: "",
        title: "",
        category: "",
        description: "",
        addShopifyLink: "",
      });
      // Закрываем меню
      setDotsMenu(false);
    } catch (error) {
      console.error("Failed to delete video", error);
    }
  };
  return (
    <div className={dv.container}>
      <form>
        <div className={dv.functions__wrapper}>
          {isMobile ? 
          (<Text18500 text="Adding a new video" />) : (<Text24500 text="Adding a new video" />)
          }
          <div className={dv.buttons__wrapper}>
            <button
              type="reset"
              className={dv.buttonSubmit}
              onClick={() => {
                setTimeout(() => {
                  handleResetButtonClick();
                }, 3000);
                showSuccessBunner();
              }}
            >
              Publish
            </button>
            <img
              src={Icones.orangeDots}
              alt="dots"
              onClick={() => toggleDotsMenu()}
            />
            {dotsMenu && (
              <div className={dv.dotsMenu}>
                <div className={dv.item}>Save as draft</div>
                <div
                  className={dv.item}
                  onClick={() => {
                    setTimeout(() => {
                      handleDeleteClick();
                    }, 3000);

                    showDeleteBanner(); // Вызывается сразу после клика

                    setTimeout(() => {
                      handleResetButtonClick();
                    }, 5000);
                  }}
                >
                  Delete
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={dv.preview__wrapper}>
          {fileName.videoPlayer && (
            <video controls className={dv.videoplayer}>
              <source
                src={fileName.videoPlayer}
                type="video/mp4"
              />
            </video>
          )}
          {successBunner && (
            <div className={dv.successBanner}>
              <AvaText
                img={Icones.success}
                text1={
                  <Text18500 text="Your video is successfully published" />
                }
              />
            </div>
          )}
          {deleteBanner && (
            <div className={dv.successBanner}>
              <AvaText
                img={Icones.success}
                text1={<Text18500 text="Your video is deleted" />}
              />
            </div>
          )}
        </div>
        <div className={dv.videoInfo__wrapper}>
          <div className={dv.inputs__wrapper}>
            {/* //input1-------------------------------------------------------- */}
            <div className={dv.input__wrapper}>
              <div className={dv.label__wrapper}>
                <span>
                  <Text14400 text="Title" />
                </span>
                <img src={Icones.question} alt="icon" />
              </div>
              <div className={dv.input__body}>
                <input
                  type="text"
                  className={dv.input}
                  placeholder={fileName.title}
                />
              </div>
            </div>
            {/* //input2-------------------------------------------------------- */}
            <div className={dv.input__wrapper}>
              <div className={dv.label__wrapper}>
                <span>
                  <Text14400 text="Category" />
                </span>
              </div>
              <div className={dv.input__body}>
                <input
                  type="text"
                  className={dv.input}
                  placeholder={fileName.category}
                  name="category"
                />
                <img src={Icones.arrowDown} alt="arrow" className={dv.arrow} />
              </div>
            </div>
            {/* //input3-------------------------------------------------------- */}
            <div className={dv.input__wrapper}>
              <div className={dv.label__wrapper}>
                <span>
                  <Text14400 text="Description" />
                </span>
                <img src={Icones.question} alt="icon" />
              </div>
              <div className={dv.input__body}>
                <input
                  type="text"
                  className={dv.input}
                  placeholder={fileName.description}
                />
              </div>
            </div>
            {/* //input4-------------------------------------------------------- */}
            <div className={dv.input__wrapper}>
              <div className={dv.label__wrapper}>
                <span>
                  <Text14400 text="Add Shopify link" />
                </span>
              </div>
              <div className={dv.input__body}>
                <input
                  type="text"
                  className={dv.input}
                  placeholder={fileName.addShopifyLink}
                />
              </div>
            </div>
            {/* //input-------------------------------------------------------- */}
          </div>
          <div className={dv.filepeaker__wrapper}>
            <img src={fileName.preview} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DownloadVideo;
