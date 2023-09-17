import p from './playlist.module.scss';
import { useDispatch } from 'react-redux';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { showMind, showMind, showSoul } from '../../features/playlistSlice';
import { Text16500 } from '../atoms/Text';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


const Playlist = () => {
    //redux-playlist----------------------------------------
    const dispatch = useDispatch();
    const currentComponent = useSelector((state) => state.playlist.currentComponent)
    //activeIndex-------------------------------------------
    const [activeIndex, setActiveIndex] = useState(true);
    useEffect(() => {
        setActiveIndex(0)
    },[])
    const handleSwitcher = (index) => {
       setActiveIndex(index)
    }
    return (
        <div className={p.playlist__wrapper}>
          <div className={p.playlist__container}>
            <div className={p.state__switcher}>
            {currentComponent === 'mind' &&    
              <div className={`${p.state__item} ${activeIndex === 1 ? p.active : ''}`} onClick={handleSwitcher()}>
                Mind
              </div>
                }
            </div>
            <div className={p.state__switcher}>
            {currentComponent === 'body' &&    
              <div className={`${p.state__item} ${activeIndex === 2 ? p.active : ''}`} onClick={handleSwitcher()}>
                Mind
              </div>
                }
            </div>
            <div className={p.state__switcher}>
            {currentComponent === 'soul' &&    
              <div className={`${p.state__item} ${activeIndex === 3 ? p.active : ''}`} onClick={handleSwitcher()}>
                Mind
              </div>
                }
            </div>
          </div>
        </div>
    )
}

export default Playlist;