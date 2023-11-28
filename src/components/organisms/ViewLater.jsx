import React from "react";
import ul from "./userLatest.module.scss";
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
        
        
         </div>
        
        </div>
      </div>
    </div>
  );
};
export default ViewLater;
