import s from "./soul.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
//components---------------------------------------------
import Video from "../../molecules/Video";

const Soul = () => {
  //get-soulData--------------------------------------------------------
   //get-mindStyle-data-----------------------------------------------
   const dataStorage = localStorage.getItem("id");
   const [playlistLinks, setPlaylistLinks] = useState([]);
   const [playlists, setPlaylists] = useState([]);
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
         console.log(filteredData)
         const mindFilteredData = filteredData.filter((mind) => mind.attributes.category === "soul")
         console.log(mindFilteredData)
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
    <div className={s.body__wrapper}>
      <div className={s.videos__body}>
      {playlists.map((playlist) => (
          <div key={playlist.id} className={s.playlistContainer}>
            {playlist.links.map((link, index) => (
              <Video
                key={index}
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

export default Soul;
