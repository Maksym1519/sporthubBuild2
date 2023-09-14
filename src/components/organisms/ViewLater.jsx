import React from "react";
import ul from "./userLatest.module";
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
import Avatext from "../molecules/Avatext";
import ColumnTemplate from "../molecules/ColumnTemplate";
import { AvaArray } from "../../Data";
import { VideoUserArray } from "../../Data";
//------------------------------------------------------------------------

const ViewLater = (props) => {
  const [activeIndex, setActiveIndex] = useState(true);
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
  //---------------------------------------------------------
  return (
    <div className={ul.main__wrapper}>
       <div className={ul.container}>
        <div className={ul.videos__wrapper}>
          {/* //item1--------------------------------------------------------------- */}
        <div className={ul.videos__body}>
        
          {/* //item2--------------------------------------------------------------- */}
         {props.selected &&
          <div className={ul.item}>
            <div className={ul.video__wrapper}>
              <img src={VideoUserArray[0]} alt="video" />
            </div>
            <div className={ul.video__description}>
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
          <div className={ul.item}>
            <div className={ul.video__wrapper}>
              <img src={VideoUserArray[1]} alt="video" />
            </div>
            <div className={ul.video__description}>
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
          <div className={ul.item}>
            <div className={ul.video__wrapper}>
              <img src={VideoUserArray[2]} alt="video" />
            </div>
            <div className={ul.video__description}>
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
          
          {/* //item6--------------------------------------------------------------- */}
          
          {/* //item7--------------------------------------------------------------- */}
         
          {/* //item8--------------------------------------------------------------- */}
         
          {/* //item9--------------------------------------------------------------- */}
         
          {/* //item--------------------------------------------------------------- */}
          </div>
        
        </div>
      </div>
    </div>
  );
};
export default ViewLater;
