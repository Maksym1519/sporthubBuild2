import m from "./mind.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
//components---------------------------------------------
import Video from "../../molecules/Video";

const Mind = () => {
  //get-mindStyle-data-----------------------------------------------
  const [link, setVideoLinks] = useState([]);
  useEffect(() => {
    async function fetchData() {
        try {
         const response = await axios.get("http://localhost:1337/api/Maksyms?populate=*");
         if(response.status === 200) {
            const videosData = response.data.data;
            console.log(videosData)
            const filteredLinks = [];
            videosData.forEach((video) => {
                if(video.attributes.videos &&
                    video.attributes.videos.data.length > 0 &&
                    video.attributes.category === "mind"
                    ) {
                const links = video.attributes.videos.data.map((videoData) => {
                    return "http://localhost:1337" + videoData.attributes.url;
                })
                filteredLinks.push(...links)
                }
            });
            setVideoLinks(filteredLinks)
         } else {
            console.error("Failed to fetch video data");
          }
        } catch(error) {
          console.error('failed request')
        }
    }
    fetchData()
  }, []);
  return (
    <div className={m.mind__wrapper}>
      <div className={m.videos__body}>
      {link.map((item, index) => (
                  <Video key={index} videoUrl={item} />
                ))}
      </div>
    </div>
  );
};

export default Mind;
