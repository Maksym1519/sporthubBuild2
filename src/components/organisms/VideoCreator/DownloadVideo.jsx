import dv from "./downloadVideo.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
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


const DownloadVideo = () => {
  const [category, setCategory] = useState(false);
  const toggleCategory = () => {
    setCategory(!category);
  };
  //get-data-------------------------------------------------------------
  const [fileName,setFileName] = useState('')
  useEffect(() => {
    async function fetchData () {
      try {
        const response = await axios.get("http://localhost:1337/api/Maksyms?populate=*")
        if (response.status === 200) {
          const profileData = response.data.data
          console.log(profileData)
          setFileName({
            fileVideoName: profileData[profileData.length - 1].attributes.videos.data[0].attributes.name
          })
          console.log(fileName.fileVideoName)
        }
        else {
          console.error("Failed to fetch profile data");
        }
      } catch(error) {
         console.error("fetch data failed")
      }
    }
    fetchData()
  },[])
   useEffect(() => {
    // Этот блок кода выполнится после изменения fileName
    console.log(fileName?.fileVideoName);
  }, [fileName]); 
  //post-inputValues----------------------------------------------------------------------
   const [formData,setFormData] = useState({
    title: '',
    category: '',
    description: '',
    addShopifyLink: ''
   })
   const [placeholderData,setPlaceholderData] = useState({
    title: '',
    category: '',
    description: '',
    addShopifyLink: ''
   })
   const handleUploadAndSubmit = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const requestData = {
      data: {
        title: formData.title,
        category: formData.category,
        description: formData.description,
        addShopifyLink: formData.addShopifyLink
      }
    }
  } catch(error) {
    console.error("data fetch failed")
  }
}

  return (
    <div className={dv.container}>
      <div className={dv.functions__wrapper}>
        <Text24500 text="Adding a new video" />
        <div className={dv.buttons__wrapper}>
           <img src={Icones.orangeDots} alt="dots" />
          <button type="button" className={dv.buttonSubmit}>Publish</button>
        </div>
      </div>
      <div className={dv.preview__wrapper}>
        <img src={Preview.previewVimeo} alt="bg" className={dv.previewVimeo} />
        <div className={dv.previewVimeo__info}>
          <Text36500 text="Processing will begin shortly" lineHeight="42px" />
          <span>
            <Text18500 text={fileName.fileVideoName} />
          </span>
        </div>
      </div>
      <div className={dv.videoInfo__wrapper}>
        <div className={dv.inputs__wrapper}>
          {/* //input1-------------------------------------------------------- */}
          <div className={dv.input__wrapper}>
            <div className={dv.label__wrapper}>
              <span>
                <Text14400 text="Title" />
              </span>
            </div>
            <div className={dv.input__body}>
              <input
                type="text"
                className={dv.input}
                placeholder="Video Name"
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
                placeholder="Select category"
              />
              <img src={Icones.arrowDown} alt="arrow" className={`${category ? dv.active : dv.arrow}`} onClick={toggleCategory}/>
            </div>
            {category && (
              <div className={dv.category__menu}>
                <div className={dv.item}>
                  <Text16400 text="Mind" />
                </div>
                <div className={dv.item}>
                  <Text16400 text="Body" />
                </div>
                <div className={dv.item}>
                  <Text16400 text="Soul" />
                </div>
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
              />
            </div>
          </div>
          {/* //input-------------------------------------------------------- */}
        </div>
        <div className={dv.filepeaker__wrapper}>
          <img src={Icones.uploadLogo} alt="logo" />
          <Text16400 text="Drag and drop photo to upload" />
          <Text12400 text="Information about adding photo. Amet minim mollit non deserunt ullamco est sit " />
        </div>
      </div>
    </div>
  );
};

export default DownloadVideo;
