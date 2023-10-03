import b from "./body.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
//components---------------------------------------------
import Video from "../../molecules/Video";

const Body = () => {
    const [link,setVideoLinks] = useState([]);
    useEffect(() => {
        async function fetchData () {
            try {
              const response = await axios.get("http://localhost:1337/api/Maksyms?populate=*");
              if(response.status === 200) {
                const videosData = response.data.data
                const filteredLinks = []
              }
            } catch(error) {
                console.log("fetchdata failed")
            }
        }

    },[])
    return (
        <div className={b.body__wrapper}>

        </div>
    )
}

export default Body;