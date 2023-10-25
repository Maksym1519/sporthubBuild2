import m from "./mind.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
//components---------------------------------------------
import Video from "../../molecules/Video";

const Mind = (props) => {
  const dataStorage = localStorage.getItem("id");
  const [playlistLinks, setPlaylistLinks] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [playlistsName,setPlaylistsName] = useState([]);
//data-storage--------------------------------------------------------------
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:1337/api/Playlists");
        const responseData = response.data.data;
        setTime(responseData);
        const filteredData = responseData.filter(
          (user) => user.attributes.publishedBy === dataStorage
        );
        const mindFilteredData = filteredData.filter((mind) => mind.attributes.category === "mind")
        console.log(mindFilteredData)
        const arrayPlaylistsName = mindFilteredData.map(item => item.attributes.playlistName)
        setPlaylistsName(arrayPlaylistsName)
        const allPlaylists = mindFilteredData.map((playlist) => {
          const selectedArray = JSON.parse(playlist.attributes.selected);
          const links = selectedArray.flat().map((videoData) => {
            return "http://localhost:1337" + videoData;
          });
          console.log(links)
          return {
            id: playlist.id,
            playlistName: playlist.attributes.playlistName,
            links: links,
          };
        });

        setPlaylists(allPlaylists);
      } catch (error) {
        console.error("fetch data is failed", error);
      }
    }
    fetchData();
  }, [dataStorage]);
//get-time---------------------------------------------------------------------
const [propsTime,setPropsTime] = useState([])
const [time, setTime] = useState([])

useEffect(() => {
  function findLastUpdated(time) {
    if (Object.keys(time).length === 0) {
      return null;
    }
     if ('updatedAt' in time) {
      return time.updatedAt
    }
     for (const key in time) {
      const result = findLastUpdated(time[key]);
      if (result !== null) {
        return result;
      }
    }
    return null;
  }
  const lastUpdatedValues = time.map(item => findLastUpdated(item));
  setPropsTime(lastUpdatedValues)
  console.log(lastUpdatedValues);
  },[time])
  return (
    <div className={m.mind__wrapper}>
     <div className={m.videos__body}>
                {playlists.map((playlist, index) => (
                  <div key={playlist.id} className={m.playlistContainer}>
                    <h3 className={m.title}>{playlistsName[index]}</h3>
                    {playlist.links.map((link, linkIndex) => (
                      <Video
                        key={linkIndex}
                        videoUrl={link}
                        index={index}
                        update={propsTime}
                      />
                    ))}
                  </div>
                ))}
              </div>
    </div>
  );
};

export default Mind;
