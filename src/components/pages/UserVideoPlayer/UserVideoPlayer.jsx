import up from "./userVideoPlayer.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderCreator from "../../organisms/HeaderCreator";
import AvaText from "../../molecules/Avatext";
import Arrow from "../../../images/arrow-left.svg";
import { AvaArray } from "../../../Data";
import { EleonaraPena } from "../../../Data";
import ColumnTemplate from "../../molecules/ColumnTemplate";
import { Button18044 } from "../../atoms/Buttons";
import VideoSlider from "../../organisms/VideoSlider";
import VideoUser from "../../molecules/VideoUser";
import Chat from "../../organisms/Chat";
import { Icones } from "../../../Data";
import { Text18600 } from "../../atoms/Text";
import { Text18500 } from "../../atoms/Text";
import { Text14400 } from "../../atoms/Text";
import { Text16600 } from "../../atoms/Text";
import { Text20600 } from "../../atoms/Text";
import { Text16500 } from "../../atoms/Text";
import { Text16300 } from "../../atoms/Text";
import { Text12300 } from "../../atoms/Text";
import { Text14500 } from "../../atoms/Text";
import { selectVideoInfo } from "../../../features/videoInfoSlice";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  showAll,
  showLess,
  //showChat,
} from "../../../features/videoDescriptionChatSlice";
import { showSlider, showChat } from "../../../features/chatSlice";
import Bell from "../../../images/bell.svg";
import Comment from "../../../images/comment.svg";
import Dots from "../../../images/Dots.svg";
import { selectPlayerInfo } from "../../../features/playerInfoSlice";


const UserVideoPlayer = (props) => {
  //redux---------------------------------------------------------
  const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;
  //redux-description-chat-----------------------------------------
  const dispatch = useAppDispatch();
  const currentComponent = useSelector(
    (state) => state.videoDescriptionChat.currentComponent
  );
const showAllClick = () => {
  dispatch(showLess())
}
const showLessClick = () => {
  dispatch(showAll())
}
//redux-chat------------------------------------------------------
const chatSliceCurrentComponent = useSelector((state) => state.chat.chatSliceCurrentComponent);
const showChatClick = () => {
  if (chatSliceCurrentComponent === 'slider') {
    dispatch(showChat());
  } else {
    dispatch(showSlider());
  }
};
//----------------------------------------------------------------
const videoInfo = useSelector(selectPlayerInfo);
  console.log(videoInfo);
//handle-with-likes------------------------------------------------------
const [likes, setLikes] = useState(0);
useEffect(() => {
  const viewsData = videoInfo.videoInfoData;
  const videoInfoId = videoInfo.id; 
  const foundObject = viewsData.find(item => item.id === videoInfoId);
  const viewValue = foundObject ? foundObject.attributes.like : null;
  setLikes(viewValue);
}, [videoInfo]);

const postLike = async () => {
  try {
    const requestData = {
      data: {
        like: likes + 1,
      }
    }
    const response = await axios.put(`http://localhost:1337/api/Maksyms/${videoInfo.id}`, requestData)
    setLikes((prevLikes) => prevLikes + 1);
  } catch(error) {
    console.error("post views is failed", error)
  }
}

//get-dislike-----------------------------------------------------------------------------
const [dislikes, setDislikes] = useState(0);
useEffect(() => {
  const viewsData = videoInfo.videoInfoData;
  const videoInfoId = videoInfo.id; 
  const foundObject = viewsData.find(item => item.id === videoInfoId);
  const viewValue = foundObject ? foundObject.attributes.like : null;
  setDislikes(viewValue);
}, [videoInfo]);

const postDislike = async () => {
  try {
    const requestData = {
      data: {
        dislike: dislikes + 1,
      }
    }
    const response = await axios.put(`http://localhost:1337/api/Maksyms/${videoInfo.id}`, requestData)
    setDislikes((prevDisLikes) => prevDisLikes + 1);
  } catch(error) {
    console.error("post views is failed", error)
  }
}
 return (
    <div className={up.userPlayer__wrapper}>
      {/* <HeaderCreator /> */}
      <div className={up.userPlayer__main}>
        <div className={up.functions__wrapper}>
          <div className={up.profile__wrapper}>
              <img src={Arrow} alt="arrow" className={up.arrowLeft} onClick={props.handleToSubscribe}/>
             <AvaText
              img={videoInfo.avatar}
              text1={
                <ColumnTemplate
                  row1={<Text18600 text={''} />}
                  row2={<Text14400 text={videoInfo.subscriptionsAmount + " " + "subscriber(s)"} />}
                />
              }
            />
          </div>
         </div>
        <div className={up.videoplayer__wrapper}>
         <VideoUser videoUrl={videoInfo.videoUrl} update={videoInfo.update} index={0} fileName={videoInfo.fileName} width="100%"/>
        </div>
        <div className={up.videoInfo__wrapper}>
        
          <div className={up.statistics__wrapper}>
            {isMobile ? (
              <div className={up.statistics__likes}>
                <div className={up.item + " " + up.item_border} onClick={postLike}>
                  <AvaText img={Icones.like} text1={<Text14500 text={likes} />} />
                </div>
                <div className={up.item} onClick={postDislike}>
                  <AvaText img={Icones.dislike} text1={<Text14500 text={dislikes} />} />
                </div>
              </div>
            ) : (
              <div className={up.statistics__likes}>
                <div className={up.item + " " + up.item_border} onClick={postLike}>
                <AvaText img={Icones.like} text1={<Text16500 text={likes} />} />
                </div>
                <div className={up.item} onClick={postDislike}>
                  <AvaText img={Icones.dislike} text1={<Text16500 text={dislikes} />} />
                </div>
              </div>
            )}
            {isMobile ? (
              <div className={up.statistics__comments} onClick={() => showChatClick()}>
                <div className={up.item + " " + up.item_margin}>
                  <AvaText img={Comment} text1={<Text14500 text="24" />} />
                </div>
              </div>
            ) : (
              <div className={up.statistics__comments} onClick={() => showChatClick()}>
                <div className={up.item + " " + up.item_margin}>
                  <AvaText img={Comment} text1={<Text16500 text="24" />} />
                </div>
              </div>
            )}
          </div>
          {isMobile ? (
            <div className={up.views__wrapper}>
              <Text12300 text={videoInfo.views + " " + "views"} color="rgba(187, 187, 187, 1)" />
              <Text12300 text="" color="rgba(187, 187, 187, 1)" />
            </div>
          ) : (
            <div className={up.views__wrapper}>
              <Text16300 text={videoInfo.views + " " + "views"} color="rgba(187, 187, 187, 1)" />
              <Text16300 text={""} color="rgba(187, 187, 187, 1)" />
            </div>
          )}
          <div className={up.dots__wrapper}>
            <img src={Dots} alt="dots" />
          </div>
          <div className={up.description__wrapper}>
            {currentComponent === "showAll" && (
              <>
                <span className={up.description__whiteText}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </span>
                <span className={up.description__link} onClick={() => showAllClick()}>Show more</span>
              </>
            )}
            {currentComponent === "showLess" && (
              <div className={up.about}>
                <p className={up.text}>
                  <Text14400
                    text="Praesent ultricies lacus in ligula volutpat feugiat. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Fusce luctus justo eget nisi hendrerit, quis aliquam arcu porta. "
                    lineHeight="14px"
                  />
                </p>
                <p className={up.text}>
                  <Text14400
                    text="Cras ultricies, elit sit amet cursus consectetur, risus felis ullamcorper nulla, ut scelerisque sapien lorem non sem. Integer vestibulum ornare ligula, a placerat lectus volutpat ultrices."
                    lineHeight="14px"
                  />
                </p>
                <div className={up.list}>
                  <p className={up.text}>
                    <Text14400
                      text="Aliquam commodo malesuada purus a mollis."
                      lineHeight="14px"
                    />
                  </p>
                  <ul>
                    <li>
                      <p className={up.text}>
                        <Text14400
                          text="Vestibulum pulvinar aliquam libero eu consequat."
                          lineHeight="14px"
                        />
                      </p>
                    </li>
                    <li>
                      <p className={up.text}>
                        <Text14400
                          text="Cras massa orci, ultrices"
                          lineHeight="14px"
                        />
                      </p>
                    </li>
                    <li>
                      <p className={up.text}>
                        <Text14400
                          text="Sed scelerisque id, semper vel neque."
                          lineHeight="14px"
                        />
                      </p>
                    </li>
                  </ul>
                  <p className={up.text}>
                   <span className={up.text}>Proin a turpis quis nibh cursus hendrerit sit amet vel libero. Nullam sit amet laoreet ante. Mauris sit amet mi vitae arcu dignissim porttitor et in arcu. Nullam eleifend molestie arcu, pretium fermentum orci feugiat eget. Integer dapibus tincidunt ipsum, at rutrum magna rutrum at. Quisque pretium convallis vestibulum.</span>
                   <span className={up.text + " " + up.textBrown} onClick={() => showLessClick()}>Show less</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
{chatSliceCurrentComponent === "slider" &&
      <VideoSlider 
      link={props.link}
      propsTime={props.propsTime}
      avatars={props.avatars}
      fileNames={props.fileNames}
      usersName={props.usersName}
      subscribers={props.subscribers}
      subscriptionsAmount={props.subscriptionsAmount}
      updateSubscriptions={props.updateSubscriptions}
      subscribePlayer={props.subscribePlayer}
      dataFromVideo={props.dataFromVideo}
      handleVideoClick={props.handleVideoClick}
      views={props.views}
      />
}
{chatSliceCurrentComponent === "chat" &&
  <Chat videoInfo={videoInfo}/>
  }
    </div>
  );
};

export default UserVideoPlayer;
