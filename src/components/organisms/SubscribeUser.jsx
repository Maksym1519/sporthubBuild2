import ut from './subscribeUser.module.scss';
import SubscribeBg from '../../images/subscribe-bg.webp'
import { useState, useEffect, useRef } from "react";
import {useAppDispatch, useAppSelector} from '../../App/hooks';
import { increment, incrementByAmount } from '../../features/counter/counterSlice';
import { updateScreenWidth } from '../../features/headerSlice';
import { Text14400 } from "../atoms/Text";
import { Text16400 } from "../atoms/Text";
import { Text12600 } from "../atoms/Text";
import { Text16500 } from "../atoms/Text";
import { Text24500 } from "../atoms/Text";
import { Text18500 } from "../atoms/Text";
import { Text14500 } from "../atoms/Text";
import { Text32600 } from '../atoms/Text';
import { Text24600 } from '../atoms/Text';
import { Text12300 } from '../atoms/Text';
import { Text18700 } from '../atoms/Text';
import { Text16600 } from '../atoms/Text';
import { Button18044 } from '../atoms/Buttons';
import Avatext from "../molecules/Avatext";
import ColumnTemplate from '../molecules/ColumnTemplate';
import Bio from './Bio';
import Store from './Store';
import Playlist from './Playlist';
import { AvaArray } from "../../Data";
import { VideoUserArray } from "../../Data";
import { showVideo, showBio, showStore, showPlaylist } from '../../features/videoSwitcherSlice';
import { subscribe, unsubscribe } from '../../features/subscribeButtonSlice';
import People from '../../images/people-icon.svg';
import Camera from '../../images/camera.svg';
import Eye from '../../images/eye-icon.svg'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


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
 
    return (
        <div className={ut.wrapper}>
          <div className={ut.main}>
            <div className={ut.bg__wrapper}>
                <div className={ut.overlay}></div>
                <div className={ut.gradient}></div>
              <img src={SubscribeBg} alt="bg" />
              <div className={ut.statistics__wrapper}>
              <div className={ut.statistics__header}>
                {isMobile ? (<img src='http://localhost:1337/uploads/subscribe_mobile_fc07ea0b38.svg'/>) : (<img src={'http://localhost:1337/uploads/photo_cae7ef4294.svg'} alt="ava" />)}

                {isMobile ?  (<Text24600 text='Eleanor Pena'/>) : (<Text32600 text='Eleanor Pena'/>)}
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
              <div className={ut.button__wrapper}  onClick={() => handleUnSubscribeClick()}>
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
         {/* //item2--------------------------------------------------------------- */}
         {props.selected &&
          <div className={ut.item}>
            <div className={ut.video__wrapper}>
              <img src={VideoUserArray[0]} alt="video" />
            </div>
            <div className={ut.video__description}>
              <ColumnTemplate
                    row1={
                    isMobile ? (
                   <Text14500
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                    lineHeight="16px"
                  />
                   ) : <Text16500
                   text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                   lineHeight="18px"
                 />
                }
                row2={
                  <Avatext
                    img={AvaArray[0]}
                    text1={
                      <Text14400
                        text="Adan Lauzon"
                        color="rgba(153, 153, 153, 1)"
                      />
                    }
                    text2={
                      <Text14400 text="3h ago" color="rgba(153, 153, 153, 1)" />
                    }
                  />
                }
              />
            </div>
          </div>
          }
          {/* //item3--------------------------------------------------------------- */}
          <div className={ut.item}>
            <div className={ut.video__wrapper}>
              <img src={VideoUserArray[1]} alt="video" />
            </div>
            <div className={ut.video__description}>
            <ColumnTemplate
                    row1={
                    isMobile ? (
                   <Text14500
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                    lineHeight="16px"
                  />
                   ) : <Text16500
                   text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                   lineHeight="18px"
                 />
                }
                row2={
                  <Avatext
                    img={AvaArray[6]}
                    text1={
                      <Text14400
                        text="Savannah Nguyen"
                        color="rgba(153, 153, 153, 1)"
                      />
                    }
                    text2={
                      <Text14400 text="3h ago" color="rgba(153, 153, 153, 1)" />
                    }
                  />
                }
              />
            </div>
          </div>
          {/* //item4--------------------------------------------------------------- */}
          <div className={ut.item}>
            <div className={ut.video__wrapper}>
              <img src={VideoUserArray[2]} alt="video" />
            </div>
            <div className={ut.video__description}>
            <ColumnTemplate
                    row1={
                    isMobile ? (
                   <Text14500
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                    lineHeight="16px"
                  />
                   ) : <Text16500
                   text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                   lineHeight="18px"
                 />
                }
                row2={
                  <Avatext
                    img={AvaArray[4]}
                    text1={
                      <Text14400
                        text="Theresa Webb"
                        color="rgba(153, 153, 153, 1)"
                      />
                    }
                    text2={
                      <Text14400 text="3h ago" color="rgba(153, 153, 153, 1)" />
                    }
                  />
                }
              />
            </div>
          </div>
          {/* //item5--------------------------------------------------------------- */}
          <div className={ut.item}>
            <div className={ut.video__wrapper}>
              <img src={VideoUserArray[3]} alt="video" />
            </div>
            <div className={ut.video__description}>
            <ColumnTemplate
                    row1={
                    isMobile ? (
                   <Text14500
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                    lineHeight="16px"
                  />
                   ) : <Text16500
                   text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                   lineHeight="18px"
                 />
                }
                row2={
                  <Avatext
                    img={AvaArray[1]}
                    text1={
                      <Text14400
                        text="Kristin Watson"
                        color="rgba(153, 153, 153, 1)"
                      />
                    }
                    text2={
                      <Text14400 text="3h ago" color="rgba(153, 153, 153, 1)" />
                    }
                  />
                }
              />
            </div>
          </div>
          {/* //item6--------------------------------------------------------------- */}
          <div className={ut.item}>
            <div className={ut.video__wrapper}>
              <img src={VideoUserArray[4]} alt="video" />
            </div>
            <div className={ut.video__description}>
            <ColumnTemplate
                    row1={
                    isMobile ? (
                   <Text14500
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                    lineHeight="16px"
                  />
                   ) : <Text16500
                   text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                   lineHeight="18px"
                 />
                }
                row2={
                  <Avatext
                    img={AvaArray[6]}
                    text1={
                      <Text14400
                        text="Jenny Wilson"
                        color="rgba(153, 153, 153, 1)"
                      />
                    }
                    text2={
                      <Text14400 text="3h ago" color="rgba(153, 153, 153, 1)" />
                    }
                  />
                }
              />
            </div>
          </div>
          {/* //item7--------------------------------------------------------------- */}
          <div className={ut.item}>
            <div className={ut.video__wrapper}>
              <img src={VideoUserArray[5]} alt="video" />
            </div>
            <div className={ut.video__description}>
            <ColumnTemplate
                    row1={
                    isMobile ? (
                   <Text14500
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                    lineHeight="16px"
                  />
                   ) : <Text16500
                   text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                   lineHeight="18px"
                 />
                }
                row2={
                  <Avatext
                    img={AvaArray[8]}
                    text1={
                      <Text14400
                        text="Darlene Robertson"
                        color="rgba(153, 153, 153, 1)"
                      />
                    }
                    text2={
                      <Text14400 text="3h ago" color="rgba(153, 153, 153, 1)" />
                    }
                  />
                }
              />
            </div>
          </div>
          {/* //item8--------------------------------------------------------------- */}
          <div className={ut.item}>
            <div className={ut.video__wrapper}>
              <img src={VideoUserArray[6]} alt="video" />
            </div>
            <div className={ut.video__description}>
            <ColumnTemplate
                    row1={
                    isMobile ? (
                   <Text14500
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                    lineHeight="16px"
                  />
                   ) : <Text16500
                   text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                   lineHeight="18px"
                 />
                }
                row2={
                  <Avatext
                    img={AvaArray[8]}
                    text1={
                      <Text14400
                        text="Darlene Robertson"
                        color="rgba(153, 153, 153, 1)"
                      />
                    }
                    text2={
                      <Text14400 text="3h ago" color="rgba(153, 153, 153, 1)" />
                    }
                  />
                }
              />
            </div>
          </div>
          {/* //item9--------------------------------------------------------------- */}
          <div className={ut.item}>
            <div className={ut.video__wrapper}>
              <img src={VideoUserArray[7]} alt="video" />
            </div>
            <div className={ut.video__description}>
            <ColumnTemplate
                    row1={
                    isMobile ? (
                   <Text14500
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                    lineHeight="16px"
                  />
                   ) : <Text16500
                   text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                   lineHeight="18px"
                 />
                }
                row2={
                  <Avatext
                    img={AvaArray[8]}
                    text1={
                      <Text14400
                        text="Darlene Robertson"
                        color="rgba(153, 153, 153, 1)"
                      />
                    }
                    text2={
                      <Text14400 text="3h ago" color="rgba(153, 153, 153, 1)" />
                    }
                  />
                }
              />
            </div>
          </div>
          {/* //item--------------------------------------------------------------- */}
          <div className={ut.item}>
            <div className={ut.video__wrapper}>
              <img src={VideoUserArray[8]} alt="video" />
            </div>
            <div className={ut.video__description}>
            <ColumnTemplate
                    row1={
                    isMobile ? (
                   <Text14500
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                    lineHeight="16px"
                  />
                   ) : <Text16500
                   text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                   lineHeight="18px"
                 />
                }
                row2={
                  <Avatext
                    img={AvaArray[8]}
                    text1={
                      <Text14400
                        text="Darlene Robertson"
                        color="rgba(153, 153, 153, 1)"
                      />
                    }
                    text2={
                      <Text14400 text="3h ago" color="rgba(153, 153, 153, 1)" />
                    }
                  />
                }
              />
            </div>
          </div>
          {/* //item--------------------------------------------------------------- */}
          <div className={ut.item}>
            <div className={ut.video__wrapper}>
              <img src={VideoUserArray[8]} alt="video" />
            </div>
            <div className={ut.video__description}>
            <ColumnTemplate
                    row1={
                    isMobile ? (
                   <Text14500
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                    lineHeight="16px"
                  />
                   ) : <Text16500
                   text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame..."
                   lineHeight="18px"
                 />
                }
                row2={
                  <Avatext
                    img={AvaArray[8]}
                    text1={
                      <Text14400
                        text="Darlene Robertson"
                        color="rgba(153, 153, 153, 1)"
                      />
                    }
                    text2={
                      <Text14400 text="3h ago" color="rgba(153, 153, 153, 1)" />
                    }
                  />
                }
              />
            </div>
          </div>
          {/* //item--------------------------------------------------------------- */}
          </div>
        </div>
          }
          {currentComponent === 'bio' && <Bio />}
          {currentComponent === 'store' && <Store />}
          {currentComponent === 'playlist' && <Playlist />}
      </div>
    </div>
       </div>
    )
}

export default SubscribeUser;