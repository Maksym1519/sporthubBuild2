import p from "./playlist.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { showMind, showBody, showSoul } from "../../features/playlistSlice";
import { AvaArray, VideoUserArray } from "../../Data";
import VideoUser from "../molecules/VideoUser";
import { Text16500 } from "../atoms/Text";
import { Text20600 } from "../atoms/Text";
import { Text16600 } from "../atoms/Text";
import { useEffect, useState } from "react";
import More from "../../images/more.svg";

const Playlist = (props) => {
  //redux-playlist----------------------------------------
  const dispatch = useAppDispatch();
  const currentComponent = useSelector(
    (state) => state.playlistSlice.currentComponent
  );
  const handleMindClick = () => {
    dispatch(showMind());
  };
  const handleSoulClick = () => {
    dispatch(showSoul());
  };
  const handleBodyClick = () => {
    dispatch(showBody());
  };
  //activeIndex-------------------------------------------
  const [activeIndex, setActiveIndex] = useState(true);
  useEffect(() => {
    setActiveIndex(1);
  }, []);
  const handleSwitcher = (index) => {
    setActiveIndex(index);
  };
  //viewAll--------------------------------------------------
  const [viewAll, setViewAll] = useState(false);
  const toggleViewAll = () => {
    setViewAll(!viewAll);
  };
  return (
    <div className={p.playlist__wrapper}>
      <div className={p.playlist__container}>
        <div className={p.state__switcher}>
          <div
            className={`${p.state__item} ${activeIndex === 1 ? p.active : ""}`}
            onClick={() => handleSwitcher(1)}
          >
            Mind
          </div>
          <div
            className={`${p.state__item} ${activeIndex === 2 ? p.active : ""}`}
            onClick={() => handleSwitcher(2)}
          >
            Body
          </div>
          <div
            className={`${p.state__item} ${activeIndex === 3 ? p.active : ""}`}
            onClick={() => handleSwitcher(3)}
          >
            Soul
          </div>
        </div>
        <div className={p.video__header}>
          <span className={p.title}>
            <Text20600 text="Fitness training" />
          </span>
          <span className={p.link} onClick={() => toggleViewAll()}>
            {viewAll ? (
              <Text16600 text="Hide all" color="rgba(173, 121, 85, 1)" />
            ) : (
              <Text16600 text="View all" color="rgba(173, 121, 85, 1)" />
            )}
          </span>
        </div>
        {/* //videos----------------------------------------------------------------------------------------- */}
        <div className={p.videos__body}>
          {props.link &&
            props.link.map((link, index) => (
              <VideoUser
                key={index}
                videoUrl={link}
                update={props.propsTime}
                index={index}
                avatar={props.avatars[index]}
                fileName={props.fileNames[index]}
                usersName={props.usersName[index]}
              />
            ))}
           </div>
        {/* //-------------------------------------------------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default Playlist;
