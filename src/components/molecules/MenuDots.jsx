import d from './menuDots.module.scss';
import { Text16400 } from '../atoms/Text';
import { useState } from 'react';
import ViewLater from '../organisms/ViewLater';

const MenuDots = () => {
   const [selected, setSelected] = useState(false)
   const showContent = () => {
        setSelected(true)
    }
    
      return (
        <div className={d.wrapper}>
           <div className={d.itemMenu} onClick={showContent}>
           View later
           </div>
           <div className={d.itemMenu}>
           Not interested
           </div>
           </div>
    )
}

export default MenuDots;