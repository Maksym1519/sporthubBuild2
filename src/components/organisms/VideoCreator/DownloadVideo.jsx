import dv from "./downloadVideo.module.scss";
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
import { useState } from "react";

const DownloadVideo = () => {
  const [category, setCategory] = useState(false);
  const toggleCategory = () => {
    setCategory(!category);
  };
  return (
    <div className={dv.container}>
      <div className={dv.functions__wrapper}>
        <Text24500 text="Adding a new video" />
        <div className={dv.buttons__wrapper}>
          <Button18044
            text={<Text16600 text="Publish" color="#fff" />}
            width="180px"
            bg="#AD7955"
            borderRadius="8px"
          />
          <img src={Icones.orangeDots} alt="dots" />
        </div>
      </div>
      <div className={dv.preview__wrapper}>
        <img src={Preview.previewVimeo} alt="bg" className={dv.previewVimeo} />
        <div className={dv.previewVimeo__info}>
          <Text36500 text="Processing will begin shortly" lineHeight="42px" />
          <span>
            <Text18500 text="File_Name.mp4" />
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
