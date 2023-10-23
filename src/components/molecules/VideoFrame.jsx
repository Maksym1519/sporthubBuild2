import vs from "./video.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import ColumnTemplate from "../molecules/ColumnTemplate";
import MenuDots from "../molecules/MenuDots";
import { Text14400 } from "../atoms/Text";
import { Text16500 } from "../atoms/Text";
import { Text14500 } from "../atoms/Text";
import More from "../../images/more.svg";
import Play from "../../images/play-btn.svg";
import { Icones } from "../../Data";

const VideoFrame = (props) => {
  //mobile--------------------------------------------------------
  const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;
  //toggle-menu-dots---------------------------------------------------
  const [menu, setMenu] = useState(false);
  const clickMenu = () => {
    setMenu(!menu);
  };
  //choose-------------------------------------------------------------
  const [choose, setChoose] = useState(false);
  const chooseFile = () => {
    setChoose(!choose);
    setBorder(!border)
  };
  const deleteFile = () => {
    setChoose(false);
  };
  //deleteMenu----------------------------------------------
  const [addFile, setAddFile] = useState(false);
  const deleteMenu = () => {
    setAddFile(true);
  };
  //add-border------------------------------------------
  const [border,setBorder] = useState(false);

   return (
    <div className={`${vs.item} ${vs.itemMenu} ${choose && border ? (vs.clickBorder) : ("")}`}>
      <div className={vs.video__wrapper}>
        <video controls className={vs.video}>
          <source src={props.videoUrl} type="video/mp4" />
        </video>
        <img src={Play} alt="play" className={vs.play} />
      </div>
      <div className={vs.video__description}>
        <ColumnTemplate
          row1={
            isMobile ? (
              <Text14500
                text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                lineHeight="16px"
              />
            ) : (
              <Text16500
                text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                lineHeight="18px"
              />
            )
          }
          row2={<Text14400 text="3h ago" color="rgba(153, 153, 153, 1)" />}
        />
      </div>
      <div className={vs.dotsMenu}>
        {!choose && (
          <img
            src={More}
            alt="menu"
            onClick={() => {
              clickMenu();
            }}
          />
        )}
        {choose  && <img src={Icones.approved} alt="choose" onClick={chooseFile}/>}
      </div>

      {(menu || addFile) && (
        <div
          className={vs.addToPlaylist__wrapper}
          onClick={() => {
            props.onVideoClick();
            chooseFile();
            clickMenu();
            }}
        >
          Add to playlist
        </div>
      )}
    </div>
  );
};

export default VideoFrame;
