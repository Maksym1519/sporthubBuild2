import ut from './subscribeUser.module.scss';
import { Link } from 'react-router-dom';
import SubscribeBg from '../../images/subscribe-bg.webp'
import { useState, useEffect, useRef } from "react";
import {useAppDispatch, useAppSelector} from '../../App/hooks';
import { Text32600 } from '../atoms/Text';
import { Text24600 } from '../atoms/Text';
import { Text12300 } from '../atoms/Text';
import { Text18700 } from '../atoms/Text';
import { Text16600 } from '../atoms/Text';
import { Button18044 } from '../atoms/Buttons';
import ColumnTemplate from '../molecules/ColumnTemplate';
import Bio from './Bio';
import Store from './Store';
import Playlist from './Playlist';
import Main from '../pages/Main/Main';
import HeaderCreator from './HeaderCreator';
import { showVideo, showBio, showStore, showPlaylist } from '../../features/videoSwitcherSlice';
import { subscribe, unsubscribe } from '../../features/subscribeButtonSlice';
import VideoUser from '../molecules/VideoUser';
import People from '../../images/people-icon.svg';
import Camera from '../../images/camera.svg';
import Eye from '../../images/eye-icon.svg'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectVideoInfo } from '../../features/videoInfoSlice';
import { setSubscriptions } from '../../features/subscriptionSlice';



const SubscribeUser = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setActiveIndex(0);
  }, []);
  const handleSwitcher = (index) => {
    setActiveIndex(index);
  };
  //---------------------------------------------------
  const [showMore, setShowMore] = useState(false);
  const toggleMessages = () => {
    setShowMore(!showMore);
  };
   //redux---------------------------------------------------------
   const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
   const isMobile = screenWidth <= 1024;
   //redux---------------------------------------------------------
   const dispatch = useDispatch()
   const currentComponent = useSelector((state) => state.videoSwitcher.currentComponent)
   const currentSubscribeButton = useSelector((state) => state.subscribeButton.currentSubscribeButton)
   const handleVideoClick = () => {
    dispatch(showVideo())
     }
   const handleBioClick = () => {
    dispatch(showBio())
   }
   const handleStoreClick = () => {
    dispatch(showStore())
   }
   const handlePlaylistClick = () => {
    dispatch(showPlaylist())
   }
   const handleSubscribeClick = () => {
    dispatch(subscribe())
   }
   const handleUnSubscribeClick = () => {
    dispatch(unsubscribe())
   }
   //selectVideo---------------------------------------------------
   const [selectedVideoImage, setSelectedVideoImage] = useState(false);
   const chooseVideo = () => {
    setSelectedVideoImage(true)
   }
 //info-from-video-click------------------------------------------------------------------------
 const videoInfo = useSelector(selectVideoInfo);
 console.log(videoInfo)
 //subscriptions-------------------------------------------------------------
//  const handleSubscriptionClick = (subscriptionData) => {
//   dispatch(setSubscriptions(subscriptionData));
//   };
  //--mySubscriptions--------------------------------------------------------
// const subscriptionInfo = useSelector(setSubscriptions);
// const subscriptionInfoText = subscriptionInfo.payload.videoInfoUser.videoInfo
//  console.log(subscriptionInfoText)
 //post-mySubscriptions------------------------------------------------------------
 const [mySubscriptions,setMySubscriptions] = useState([]);
 useEffect(() => {
  async function postDataSubscriptions () {
    try {
      const requestData = {
       data: {
         avatar: videoInfo.avatar,
         name: videoInfo.userName
       }
      } 
      console.log(requestData)
      const response = await axios.post("http://localhost:1337/api/subscriptions",requestData)
     } catch (error) {
       console.error("post data failed")
     }
    }
 },[videoInfo])
 
    return (
      <>
         <div className={ut.wrapper}>
           <div className={ut.main}>
            <div className={ut.bg__wrapper}>
                <div className={ut.overlay}></div>
                <div className={ut.gradient}></div>
              <img src={videoInfo.cover} alt="bg" />
              <div className={ut.statistics__wrapper}>
              <div className={ut.statistics__header}>
                {isMobile ? (<img src={videoInfo.avatar}/>) : (<img src={videoInfo.avatar} alt="ava" />)}

                {isMobile ?  (<Text24600 text={videoInfo.usersName}/>) : (<Text32600 text={videoInfo.userName}/>)}
              </div>
              <div className={ut.statistics__body}>
                <div className={ut.statistics__body__item}>
                   <img src={People} alt="logo" />
                   <ColumnTemplate row1={<Text18700 text='6.4K'/>} row2={<Text12300 text='Subscribers' color='rgba(187, 187, 187, 1)'/>} alignItems='center'/>
                </div>
                <div className={ut.statistics__body__item}>
                   <img src={Camera} alt="logo" />
                   <ColumnTemplate row1={<Text18700 text='257'/>} row2={<Text12300 text='Videos' color='rgba(187, 187, 187, 1)'/>} alignItems='center'/>
                </div>
                <div className={ut.statistics__body__item}>
                   <img src={Eye} alt="logo" />
                   <ColumnTemplate row1={<Text18700 text='15K'/>} row2={<Text12300 text='Views' color='rgba(187, 187, 187, 1)'/>} alignItems='center'/>
                </div>
              </div>
              {currentSubscribeButton === 'subscribe' &&
              <div className={ut.button__wrapper}  onClick={() => {handleUnSubscribeClick();postDataSubscriptions();}}>
               <Button18044 text={<Text16600 text='Subscribe'/>} borderRadius='8px'/>
               </div>
              }
              {currentSubscribeButton === 'unsubscribe' &&
              <div className={ut.button__wrapper} onClick={() => handleSubscribeClick()}>
               <Button18044 text={<Text16600 text='Unsubscribe'/>} borderRadius='8px'/>
               </div>
              }
            </div>
            </div>
           </div>
          <div className={ut.video__navigation}>
            <div className={ut.videoSwitcher__wrapper}>
            <div className={`${ut.switcher__item} ${activeIndex === 0 ? ut.active : ""}`} onClick={() => {handleSwitcher(0), handleVideoClick()}}>
              Video
              </div>
               <div className={`${ut.switcher__item} ${activeIndex === 1 ? ut.active : ""}`} onClick={() => {handleSwitcher(1), handleBioClick()}}>
               Bio
               </div>
               <div className={`${ut.switcher__item} ${activeIndex === 2 ? ut.active : ""}`} onClick={() => {handleSwitcher(2), handleStoreClick()}}>
               Store
               </div>
               <div className={`${ut.switcher__item} ${activeIndex === 3 ? ut.active : ""}`} onClick={() => {handleSwitcher(3), handlePlaylistClick()}}>
               Playlists
               </div>
            </div>
          </div>
          <div className={ut.main__wrapper}>
       <div className={ut.container}>
        {currentComponent === 'video' &&
        <div className={ut.videos__wrapper}>
         <div className={ut.videos__body}>
         {props.link && props.link.map((link, index) => (
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
        </div>
          }
          {currentComponent === 'bio' && <Bio />}
          {currentComponent === 'store' && <Store />}
          {currentComponent === 'playlist' && <Playlist />}
      </div>
    </div>
   </div>
   </>
    )
}

export default SubscribeUser;