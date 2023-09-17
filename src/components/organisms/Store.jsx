import s from "./store.module.scss";
import { Text14400 } from "../atoms/Text";
import { Text16500 } from "../atoms/Text";
import { Text12400 } from "../atoms/Text";
import { Text18600 } from "../atoms/Text";
import { Text20600 } from "../atoms/Text";
import { Text16600 } from "../atoms/Text";
import { Button18044 } from "../atoms/Buttons";
import Ava1 from '../../images/store-ava1.svg';
import Ava2 from '../../images/store-ava2.svg';
import Arrow from '../../images/arrow store.svg'

const Store = () => {
  return (
    <div className={s.store__wrapper}>
      <div className={s.store__container}>
        <div className={s.block__item}>
          <div className={s.ava__wrapper}>
            <img src={Ava1} alt="ava" />
          </div>
          <div className={s.block__item__info}>
             <h4 className={s.title}><Text20600 text='Store title'/></h4>
             <p className={s.text}><Text12400 text='Information about adding photo. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ' color='rgba(238, 238, 238, 0.8)' lineHeight='14px'/></p>
            </div>
            <div className={s.button__wrapper}>
               <Text16600 text='Visit store' color='rgba(173, 121, 85, 1)'/>
               <img src={Arrow} alt="arrow" />
             </div>
        </div>
        <div className={s.block__item}>
          <div className={s.ava__wrapper}>
            <img src={Ava2} alt="ava" />
          </div>
          <div className={s.block__item__info}>
             <h4 className={s.title}><Text20600 text='Store title'/></h4>
             <p className={s.text}><Text12400 text='Information about adding photo. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ' color='rgba(238, 238, 238, 0.8)' lineHeight='14px'/></p>
          </div>
          <div className={s.button__wrapper}>
               <Text16600 text='Visit store' color='rgba(173, 121, 85, 1)'/>
               <img src={Arrow} alt="arrow" />
             </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
