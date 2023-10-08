import pr from "./playlistResult.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
//components--------------------------------------------
import { Icones } from "../../../Data";
import { Text24500 } from "../../atoms/Text";
import { Text16500 } from "../../atoms/Text";
import { Text16300 } from "../../atoms/Text";
import { Text14400 } from "../../atoms/Text";
import Video from "../../molecules/Video";

const PlaylistResult = () => {
  //get-playlist-info--------------------------------------------------
  const [playlistInfo, setPlaylistInfo] = useState({
    playlistName: "",
    description: "",
    category: "",
    selected: [],
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/Playlists?populate=*"
        );
        if (response.status === 200) {
          const playlistsData = response.data.data[response.data.data.length - 1];
          const getLinks = playlistsData.attributes.selected;
          const parsedLinks = JSON.parse(getLinks);
         
          console.log(getLinks)
            setPlaylistInfo ({
            playlistName: playlistsData.attributes.playlistName,
            description: playlistsData.attributes.description,
            //selected: playlistsData.attributes.selected
            selected: parsedLinks
          })
         
         // console.log(playlistInfo.selected)
        } else {
          console.error("Failed to fetch video data");
        }
      } catch (error) {
        console.error("fetchdata failed",error);
      }
    }
    fetchData()
  }, []);
  useEffect(() => {
    console.log(playlistInfo);
  }, [playlistInfo]);


  return (
    <>
    
    <div className={pr.playlistResult__wrapper}>
      <div className={pr.playlistResult__info}>
        <div className={pr.functions}>
          <Text24500 text={playlistInfo.playlistName} />
          <img src={Icones.orangeDots} alt="menu" />
        </div>
        <div className={pr.statistics__wrapper}>
          <Text16500 text="6 videos" />
          <div className={pr.statistics__viewsTime}>
            <div className={pr.views}>
              <span>
                <Text16300 text="0" color="rgba(187, 187, 187, 1)" />
              </span>
              <span>
                <Text16300 text="views" color="rgba(187, 187, 187, 1)" />
              </span>
            </div>
            <div className={pr.time}>
              <span>
                <Text16300 text="0" color="rgba(187, 187, 187, 1)" />
              </span>
              <span>
                <Text16300 text="ago" color="rgba(187, 187, 187, 1)" />
              </span>
            </div>
          </div>
        </div>
        <div className={pr.description__wrapper}>
          <span className={pr.text}>
            {playlistInfo.description}
          </span>
          <span className={pr.showMore__text}>Show more</span>
        </div>
       </div>
       <div className={pr.videos__body}>
  {Array.isArray(playlistInfo.selected) ? (
    playlistInfo.selected.map((link, index) => (
      <Video key={index} videoUrl={`http://localhost:1337${link}`} />
    ))
  ) : (
    <p>No videos available</p>
  )}
</div>
    </div>
    </>
  );
};

export default PlaylistResult;
