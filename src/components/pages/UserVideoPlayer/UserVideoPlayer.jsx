import up from "./userVideoPlayer.module.scss";
import Header from "../../organisms/Header";
import AvaText from "../../molecules/Avatext";
import Arrow from '../../../images/arrow-left.svg'
import { AvaArray } from "../../../Data";
import { EleonaraPena } from "../../../Data";
import ColumnTemplate from "../../molecules/ColumnTemplate";
import { Button18044 } from "../../atoms/Buttons";
import VideoSlider from "../../organisms/VideoSlider";
import { Text18600 } from "../../atoms/Text";
import { Text14400 } from "../../atoms/Text";
import { Text16600 } from "../../atoms/Text";
import { Text20600 } from "../../atoms/Text";
import { Text16500 } from "../../atoms/Text";
import { Text16300 } from "../../atoms/Text";
import Bell from '../../../images/bell.svg';
import Like from '../../../images/like-icon.svg';
import Dislike from '../../../images/Dislike.svg';
import Comment from '../../../images/comment.svg';
import Dots from '../../../images/Dots.svg'

const UserVideoPlayer = () => {
  return (
    <div className={up.userPlayer__wrapper}>
      <Header />
      <div className={up.userPlayer__main}>
        <div className={up.functions__wrapper}>
           <div className={up.profile__wrapper}>
             <img src={Arrow} alt="arrow" className={up.arrowLeft}/>
             <AvaText img={AvaArray[0]} text1={<ColumnTemplate row1={<Text18600 text='Eleanor Pena'/>} row2={<Text14400 text='145.3K subscribers'/>}/>}/>
           </div>
           <div className={up.subscribe__wrapper}>
             <Button18044 text={<Text16600 text='Subscribe'/>} borderRadius='8px'/>
             <img src={Bell} alt="bell" />
           </div>
        </div>
        <div className={up.videoplayer__wrapper}>
           <img src={EleonaraPena.bigVideo} alt="video" />
        </div>
        <div className={up.videoInfo__wrapper}>
           <div className={up.title}><Text20600 text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame'/></div>
           <div className={up.statistics__wrapper}>
              <div className={up.statistics__likes}>
               <div className={up.item + " " + up.item_border}>
                 <AvaText img={Like} text1={<Text16500 text='5.7K'/>}/>
               </div>
               <div className={up.item}>
                 <AvaText img={Dislike} text1={<Text16500 text='469'/>}/>
               </div>
               </div>
            <div className={up.statistics__comments}>
            <div className={up.item + " " + up.item_margin}>
                 <AvaText img={Comment} text1={<Text16500 text='24'/>}/>
               </div>
            </div>
           </div>
           <div className={up.views__wrapper}>
             <Text16300 text='145.3K views' color='rgba(187, 187, 187, 1)'/>
             <Text16300 text='3h ago' color='rgba(187, 187, 187, 1)'/>
           </div>
           <div className={up.dots__wrapper}>
             <img src={Dots} alt="dots" />
           </div>
           <div className={up.description__wrapper}>
              <p className={up.description__whiteText}><Text14400 text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' color='rgba(238, 238, 238, 1)' lineHeight='16px'/></p>
              <p className={up.description__link}><Text14400 text='Show more' color='rgba(173, 121, 85, 1)'/></p>
           </div>
        </div>
      </div>
      <VideoSlider />
    </div>
  );
};

export default UserVideoPlayer;
