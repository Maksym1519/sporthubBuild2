import p from "./playlistEdit.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
//components-----------------------------------------------------
import { Text16600 } from "../../atoms/Text";
import { Text24500 } from "../../atoms/Text";
import { Button18044 } from "../../atoms/Buttons";
import { Text14400 } from "../../atoms/Text";
import { Text18500 } from "../../atoms/Text";
import { Icones } from "../../../Data";
import Video from "../../molecules/Video";
import VideoFrame from "../../molecules/VideoFrame";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
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
import e from "cors";
register();

const PlaylistEdit = () => {
  //isMobile--------------------------------------------------------------
  const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;
  //choose-category-----------------------------------------------------
  const [category, setCategory] = useState(false);
  const toggleCategory = () => {
    setCategory(!category);
  };
  //fill-category-input---------------------------------------
  const [selectedCategory, setSelectedCategory] = useState("");
  const chooseCategory = (value) => {
    setSelectedCategory(value);
  };
  //post-data--------------------------------------------------------
  const [formData, setFormData] = useState({
    playlistName: "",
    description: "",
    category: "",
  });
  const handleUploadAndSubmit = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCategoryClick = (categoryValue) => {
    setFormData({
      ...formData,
      category: categoryValue,
    });
    toggleCategory();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestData = {
        data: {
          playlistName: formData.playlistName,
          description: formData.description,
          category: formData.category,
          publishedBy: "Maksym",
        },
      };
      console.log(requestData);
      const playlistResponse = await axios.post(
        "http://localhost:1337/api/Playlists",
        requestData
      );
    } catch (error) {
      console.error("datapost failed");
    }
  };
  //get-data------------------------------------------------------
  const [link, setVideoLinks] = useState([]);
  const [selectedFile, setSelectedFiles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/Maksyms?populate=*"
        );

        if (response.status === 200) {
          const videosData = response.data.data;
          const allLinks = [];
          const allNames = [];
          videosData.forEach((video) => {
            if (
              video.attributes.videos &&
              video.attributes.videos.data.length > 0
            ) {
              const links = video.attributes.videos.data.map((videoData) => {
                return "http://localhost:1337" + videoData.attributes.url;
              });
              allLinks.push(...links);
              const names = video.attributes.videos.data.map((namesData) => {
                return namesData.attributes.name;
              });
              allNames.push(...names);
            }
          });
          setVideoLinks(allLinks);
          setSelectedFiles(allNames);
          console.log(selectedFile);
        } else {
          console.error("Failed to fetch video data");
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    }

    fetchData();
  }, []);
  //selectedFileNames-------------------------------------------------------
  const [selectedVideoNames, setSelectedVideoNames] = useState([]);
  const handleVideoClick = (videoIndex) => {
    const videoName = selectedFile[videoIndex] || "";
    setSelectedVideoNames((prevNames) => [...prevNames, videoName]);
  };
  //delete-choosen-file-------------------------------------------------------
  const handleDeleteClick = (index) => {
    const updatedNames = [...selectedVideoNames];
    updatedNames.splice(index, 1);
    setSelectedVideoNames(updatedNames);
    };
    
   
  return (
    <form onSubmit={handleSubmit}>
      <div className={p.playlistEdit__container}>
        <div className={p.functions__wrapper}>
          {isMobile ? (
            <Text18500 text="Create new playlist" />
          ) : (
            <Text24500 text="Create new playlist" />
          )}
          <div className={p.buttons__wrapper}>
            <button type="submit" className={p.saveButton}>
              Save
            </button>
            <img src={Icones.orangeDots} alt="dots" className={p.menuDots} />
          </div>
        </div>
        <div className={p.playlistEdit__body}>
          <div className={p.inputs__wrapper}>
            {/* //input1-------------------------------------------------------- */}
            <div className={p.input__wrapper}>
              <div className={p.label__wrapper}>
                <span>
                  <Text14400 text="Playlist name" />
                </span>
              </div>
              <div className={p.input__body}>
                <input
                  type="text"
                  className={p.input}
                  placeholder={"Enter playlist name"}
                  name="playlistName"
                  value={formData.playlistName}
                  onChange={handleUploadAndSubmit}
                />
              </div>
            </div>
            {/* //input2-------------------------------------------------------- */}
            <div className={p.input__wrapper}>
              <div className={p.label__wrapper}>
                <span>
                  <Text14400 text="Description" />
                </span>
              </div>
              <div className={p.input__body}>
                <input
                  type="text"
                  className={p.input}
                  placeholder={"Enter playlist name"}
                  name="description"
                  value={formData.description}
                  onChange={handleUploadAndSubmit}
                />
              </div>
            </div>
            {/* //input3-------------------------------------------------------- */}
            <div className={p.input__wrapper}>
              <div className={p.label__wrapper}>
                <span>
                  <Text14400 text="Category" />
                </span>
              </div>
              <div className={p.input__body}>
                <input
                  type="text"
                  className={p.input}
                  placeholder={selectedCategory || "Select category"}
                  name="category"
                />
                <img
                  src={Icones.arrowDown}
                  alt="arrow"
                  className={`${category ? p.active : p.arrow}`}
                  onClick={toggleCategory}
                />
              </div>
              {category && (
                <div className={p.category__menu}>
                  <input
                    className={p.item + " " + p.input}
                    placeholder="Mind"
                    name="category"
                    value="mind"
                    onChange={() => handleUploadAndSubmit}
                    type="text"
                    onClick={() => {
                      handleCategoryClick("mind");
                      chooseCategory("mind");
                    }}
                  />
                  <input
                    className={p.item + " " + p.input}
                    placeholder="Body"
                    name="category"
                    value="body"
                    onChange={handleUploadAndSubmit}
                    type="text"
                    onClick={() => {
                      handleCategoryClick("body");
                      chooseCategory("body");
                    }}
                  />
                  <input
                    className={p.item + " " + p.input}
                    placeholder="Soul"
                    name="category"
                    value="soul"
                    onChange={handleUploadAndSubmit}
                    type="text"
                    onClick={() => {
                      handleCategoryClick("soul");
                      chooseCategory("soul");
                    }}
                  />
                </div>
              )}
            </div>
            {/* //input4-selected-------------------------------------------------------- */}
            <div className={p.input__wrapper + " " + p.inputSelect}>
              <div className={p.label__wrapper}>
                <span>
                  <Text14400 text="Selected" />
                </span>
                <span>0</span>
              </div>
              {/* <div className={p.input__body}>
                <input
                  type="text"
                  className={p.input}
                  placeholder={""}
                  name="description"
                  value={formData.description}
                  onChange={handleUploadAndSubmit}
                />
              </div>
              */}
                <div className={p.videoSelected__wrapper}>
                {selectedVideoNames.map((name, index) => (
                  <div key={index} className={p.selectedFiles__wrapper}>
                  {name}
                  <img src={Icones.close} alt="close" className={p.close} onClick={handleDeleteClick}/>
                  </div>
                  ))}
                 
                </div>
             
            </div>
          </div>
          {/* //playlist-videos---------------------------------------------- */}
          <div className={p.videos__wrapper}>
            <div className={p.search__wrapper}>
              <input type="search" />
              <img src={Icones.search} alt="search" />
            </div>
            <button type="button" className={p.selectVideo__button}>
              Select video
            </button>
            {/* //slider----------------------------------------------------------- */}
            <Swiper
              slidesPerView={1}
              speed={500}
              loop={true}
              direction={"vertical"}
              initialSlide={1}
              className={p.sliderPlaylist}
            >
              {link.map((link, index) => (
                <SwiperSlide
                  className={p.swiperSlide + " " + p.firstSlide}
                  key={index}
                >
                  <VideoFrame
                    videoUrl={link}
                    onVideoClick={() => {handleVideoClick(index);}}
                    />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* //slider----------------------------------------------------------------- */}
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaylistEdit;
