import av from "./addVideo.module.scss";
import dv from "./downloadVideo.module.scss";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
//components----------------------------------
import { Button18044 } from "../../atoms/Buttons";
import { Text24500 } from "../../atoms/Text";
import { Text16600 } from "../../atoms/Text";
import { Text36500 } from "../../atoms/Text";
import { Text14400 } from "../../atoms/Text";
import { Text16400 } from "../../atoms/Text";
import { Text12400 } from "../../atoms/Text";
import { Icones } from "../../../Data";
import DownloadVideo from "./DownloadVideo";
//images----------------------------------------
import Dots from "../../../images/Dots.svg";
import e from "cors";
import axios from "axios";

const AddVideo = (props) => {
  //isMobile--------------------------------------------------------------
  const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;
  //showModal-newVideo-----------------------------------------------
  const [isModal, setModal] = useState(false);
  const showModal = () => {
    setModal(!isModal);
  };
  //post-data-------------------------------------------------------------------
  const [formData, setFormData] = useState(null); //для видео
  const [preview, setPreview] = useState(null); //для preview
  const [formData2, setFormData2] = useState({
    //для inputs инфо про видео
    title: "",
    category: "",
    description: "",
    addShopifyLink: "",
    preview: null,
  });
  const [placeholderData, setPlaceholderData] = useState({
    title: "",
    category: "",
    description: "",
    addShopifyLink: "",
    preview: null,
  });
  const handleUploadAndSubmit = (e) => {
    const { name, value } = e.target;
    setFormData2({ ...formData2, [name]: value });
  };
  //get-values-from-inputs----------------------------------------------------------
  const handleCategoryClick = (categoryValue) => {
    setFormData2({
      ...formData2,
      category: categoryValue,
    });
    toggleCategory(); // Закрыть выпадающее меню после выбора категории, если необходимо
  };
  
  const handleSubmit = async (e) => {
    //e.preventDefault();
    try {
      if (!formData) {
        // Проверка наличия выбранного файла
        console.error("Please select a file.");
        return;
      }
      const formDataServer = new FormData();
      const formDataServer2 = new FormData();
      formDataServer.append("files", formData[0]);
      formDataServer2.append("files", preview[0])
      console.log(formData);

      const responseVideo = await axios.post(
        "http://localhost:1337/api/upload",
        formDataServer
      );
      const responsePreview = await axios.post(
        "http://localhost:1337/api/upload",
        formDataServer2
      );
      if (responseVideo.status === 200) {
        const videoItem = responseVideo.data[0].id;
        const previewItem = responsePreview.data[0].id
        console.log(videoItem);
        const requestData = {
          data: {
            videos: videoItem,
            title: formData2.title,
            category: formData2.category,
            description: formData2.description,
            addShopifyLink: formData2.addShopifyLink,
            preview: previewItem
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
  //post-video-info--------------------------------------------------------------------------
  const [category, setCategory] = useState(false);
  const toggleCategory = () => {
    setCategory(!category);
  };
  //get-data-------------------------------------------------------------
  const [fileName, setFileName] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/Maksyms?populate=*"
        );
        if (response.status === 200) {
          const profileData = response.data.data;
          console.log(profileData);
          setFileName({
            fileVideoName:
              profileData[profileData.length - 1].attributes.videos.data[0]
                .attributes.name,
          });
          console.log(fileName.fileVideoName);
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
//fill-category-input---------------------------------------
const [selectedCategory,setSelectedCategory] = useState("")
const chooseCategory = (value) => {
setSelectedCategory(value)
}
  return (
    <div className={av.container}>
      <div className={av.functions__wrapper}>
        <Text24500 text="Adding a new video" />
        <div className={av.buttons__wrapper}>
          <Button18044
            text={<Text16600 text="Publish" color="rgba(187, 187, 187, 1)" />}
            width="180px"
            bg="#777"
            borderRadius="8px"
          />
          <img src={Icones.dots} alt="dots"/>
        </div>
      </div>
      <div className={av.uploadForm__wrapper}>
        {!isModal && (
          <div className={av.uploadForm__body}>
            <img src={Icones.uploadLogo} alt="logo" className={av.logo} />
            {isMobile ? (
              <Text24500 text="New video" lineHeight="42px" />
            ) : (
              <Text36500
                text="Drag and drop videos to upload"
                lineHeight="42px"
              />
            )}
            <div onClick={showModal}>
              <Button18044
                text={<Text16600 text="Or choose files" />}
                width="180px"
                borderRadius="8px"
              />
            </div>
          </div>
        )}
      </div>
      {isModal && (
        <form>
          <div className={av.modal__wrapper}>
            <div className={av.modal__container}>
              <div className={av.header}>
                <Text24500 text="New video" />
                {isMobile ? (
                  <Text14400 text="Add a link on the video for upload" />
                ) : (
                  <Text14400 text="Add a link on the video for upload" />
                )}
              </div>
              <div className={av.input__wrapper}>
                <label htmlFor="addVideo" className={av.inputLabel}>
                  <Text14400 text="Store link" />
                </label>
                <div className={av.input__body}>
                  <input
                    type="file"
                    className={av.input}
                    onChange={(e) => setFormData(e.target.files)}
                  />
                  <div className={av.placeholder__wrapper}>
                    <img src={Icones.addFile} alt="icon" />
                    <Text16400
                      text="Store link"
                      color="rgba(153, 153, 153, 1)"
                    />
                  </div>
                </div>
              </div>
              <div className={av.buttons__wrapper}>
                <button
                  className={av.button}
                  type="button"
                  onClick={props.clickBack}
                >
                  Cancel
                </button>
                <button
                  className={av.button}
                  type="submit"
                  value="Submit"
                  onClick={async (e) => {
                    e.preventDefault();
                    await handleSubmit();
                    props.clickNext();
                  }}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
      {/* //video-info-------------------------------------------------------------------------------------- */}
      <form onSubmit={handleSubmit} className={dv.form__wrapper}>
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
                  placeholder="Video Name"
                  name="title"
                  value={formData2.title}
                  onChange={handleUploadAndSubmit}
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
                  placeholder= {selectedCategory || "Select category"}
                  name="category"
                />
                <img
                  src={Icones.arrowDown}
                  alt="arrow"
                  className={`${category ? dv.active : dv.arrow}`}
                  onClick={toggleCategory}
                />
              </div>
              {category && (
                <div className={dv.category__menu}>
                  <input
                    className={dv.item + " " + dv.input}
                    placeholder="Mind"
                    name="category"
                    value="mind"
                    onChange={() => handleUploadAndSubmit}
                    type="text"
                    onClick={() => {handleCategoryClick("mind");chooseCategory('mind')}}
                  />
                  <input
                    className={dv.item + " " + dv.input}
                    placeholder="Body"
                    name="category"
                    value="body"
                    onChange={handleUploadAndSubmit}
                    type="text"
                    onClick={() => {handleCategoryClick("body");chooseCategory('body')}}
                  />
                  <input
                    className={dv.item + " " + dv.input}
                    placeholder="Soul"
                    name="category"
                    value="soul"
                    onChange={handleUploadAndSubmit}
                    type="text"
                    onClick={() => {handleCategoryClick("soul");chooseCategory('soul')}}
                  />
                </div>
              )}
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
                  placeholder="Description"
                  name="description"
                  value={formData2.description}
                  onChange={handleUploadAndSubmit}
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
                  placeholder="Add link on product"
                  name="addShopifyLink"
                  value={formData2.addShopifyLink}
                  onChange={handleUploadAndSubmit}
                />
              </div>
            </div>
            {/* //input-------------------------------------------------------- */}
          </div>
          <div className={av.filepeaker__wrapper}>
            <img src={Icones.uploadLogo} alt="logo" />
            <Text16400 text="Drag and drop photo to upload" />
            <Text12400 text="Information about adding photo. Amet minim mollit non deserunt ullamco est sit " />
            <input
              type="file"
              className={av.addPreview}
              onChange={(e) => setPreview(e.target.files)}
            />
          </div>
        </div>
      </form>
      <div className={av.overlay}></div>
    </div>
  );
};

export default AddVideo;
