import p from "./playlistEdit.module.scss";
import { useState } from "react";
//components-----------------------------------------------------
import { Text16600 } from "../../atoms/Text";
import { Text24500 } from "../../atoms/Text";
import { Button18044 } from "../../atoms/Buttons";
import { Text14400 } from "../../atoms/Text";
import { Icones } from "../../../Data";
import Video from "../../molecules/Video";
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
register();

const PlaylistEdit = () => {
    //choose-category-----------------------------------------------------
    const [category, setCategory] = useState(false);
    const toggleCategory = () => {
      setCategory(!category);
    };
//fill-category-input---------------------------------------
const [selectedCategory,setSelectedCategory] = useState("")
const chooseCategory = (value) => {
setSelectedCategory(value)
}

  return (
    <div className={p.playlistEdit__container}>
      <div className={p.functions__wrapper}>
        <Text24500 text="Adding a new video" />
        <div className={p.buttons__wrapper}>
          <Button18044
            text={<Text16600 text="Publish" color="#fff" />}
            width="180px"
            bg="rgba(173, 121, 85, 1)"
            borderRadius="8px"
          />
          <img src={Icones.orangeDots} alt="dots" />
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
                  placeholder= {selectedCategory || "Select category"}
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
                    //onChange={() => handleUploadAndSubmit}
                    type="text"
                    //onClick={() => {handleCategoryClick("mind");chooseCategory('mind')}}
                  />
                  <input
                    className={p.item + " " + p.input}
                    placeholder="Body"
                    name="category"
                    value="body"
                    //onChange={handleUploadAndSubmit}
                    type="text"
                    //onClick={() => {handleCategoryClick("body");chooseCategory('body')}}
                  />
                  <input
                    className={p.item + " " + p.input}
                    placeholder="Soul"
                    name="category"
                    value="soul"
                   // onChange={handleUploadAndSubmit}
                    type="text"
                    //onClick={() => {handleCategoryClick("soul");chooseCategory('soul')}}
                  />
                </div>
              )}
            </div>
          {/* //input-------------------------------------------------------- */}
          </div>
          {/* //playlist-videos---------------------------------------------- */}
          <div className={p.videos__wrapper}>
             <div className={p.search__wrapper}>
                 <input type="search" />
                 <img src={Icones.search} alt="search" />
             </div>
             {/* //slider----------------------------------------------------------- */}
             <Swiper
            slidesPerView={2.5}
            speed={500}
            loop={true}
            direction={"vertical"}
            initialSlide={1}
            className={p.sliderPlaylist}
          >
            <SwiperSlide className={p.swiperSlide + " " + p.firstSlide}>
              <Video videoUrl={""}/>
            </SwiperSlide>
            <SwiperSlide className={p.swiperSlide}>
            <Video videoUrl={""}/>
            </SwiperSlide>
            <SwiperSlide className={p.swiperSlide}>
            <Video videoUrl={""}/>
            </SwiperSlide>
             </Swiper>
             {/* //slider----------------------------------------------------------------- */}
          </div>
      </div>
    </div>
  );
};

export default PlaylistEdit;
