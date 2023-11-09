import ch from "./chat.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
//components--------------------------------------------------
import { Text24500 } from "../atoms/Text";
import { Text14400 } from "../atoms/Text";
import { Text12400 } from "../atoms/Text";
import AvaText from "../molecules/Avatext";
import { Icones } from "../../Data";

const Chat = (props) => {
  console.log(props.videoInfo);
  //data-storage-----------------------------------------------
  const dataStorage = localStorage.getItem("id");
  //post-message-----------------------------------------------
  const [formData, setFormData] = useState({ textMessage: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Name:", name, "Value:", value);
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestData = {
        data: {
          textMessage: formData.textMessage,
          identifier: "dsde",
          author: dataStorage,
        },
      };
      const response = await axios.post(
        "http://localhost:1337/api/messages",
        requestData
      );
    } catch (error) {
      console.error("post mesage is failed");
    }
  };
  //get-messages-----------------------------------------------------------
  useEffect(() => {
    async function getMessages() {
      try {
        const response = await axios.get("http://localhost:1337/api/messages");
        const dataResponse = response.data.data
        console.log(dataResponse)
      } catch (error) {
        console.error("getting messages is failed", error);
      }
    }
    getMessages()
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <div className={ch.wrapper}>
        <div className={ch.container}>
          <div className={ch.messagesAmount}>
            <span className={ch.messagesAmount__info}>
              <Text24500 text={"0"} />
            </span>
            <span className={ch.messagesAmount__info}>
              <Text24500 text="Comments" />
            </span>
          </div>
          <div className={ch.messagesSender}>
            <input
              type="text"
              className={ch.chatInput}
              placeholder="Enter your message"
              name="textMessage"
              value={formData.textMessage}
              onChange={handleChange}
            />
            <button type="submit" className={ch.chatButton}>
              Send
            </button>
          </div>
          <div className={ch.messages__body}>
            <div className={ch.message}>
              <div>
                <AvaText img={''} text1={"name"} />
              </div>
              <div className={ch.textMessage}>
                <Text14400 text={"hello"} />
              </div>
              <div className={ch.chatLikes}>
                <div className={ch.like}>
                  <AvaText img={Icones.like} text1={<Text12400 text="0" />} />
                </div>
                <div className={ch.dislike}>
                  <AvaText
                    img={Icones.dislike}
                    text1={<Text12400 text="0" />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Chat;
