import h from './header.module.scss';
import { Link } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../App/hooks';
import { increment, incrementByAmount } from '../../features/counter/counterSlice';
import { updateScreenWidth } from '../../features/headerSlice';
import { Button13040 } from '../atoms/Buttons';
import { Text14600 } from '../atoms/Text';
import Logo from '../../images/logo.svg';
import Search from '../../images/Search.svg';
import Notification from '../../images/notification.svg'

const Header = () => {
  const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;
    return (
        <>
       
        {isMobile ?(
        <div className={h.wrapper__mobile}>
          <div className={h.burger}>
            <span className={h.burger__line}>-</span>
          </div>
          <Link to='/'>
          <div className={h.logo__wrapper}>
            <img src={Logo} alt="logo" />
          </div>
          </Link>
          <div className={h.functions__wrapper}>
          <img src={Search} alt="icon" />
          </div>
        </div>
         ) : (
          <div className={h.wrapper}>
          <Link to='/'>
          <div className={h.logo__wrapper}>
            <img src={Logo} alt="logo" />
          </div>
          </Link>
          <div className={h.functions__wrapper}>
           <img src={Search} alt="icon" />
           <img src={Notification} alt="icon" />
           <Link to='/SignIn'>
           <Button13040 text={<Text14600 text='Sign in'/>} borderRadius='8px'/>
           </Link>
          </div>
        </div>
         )}
        </>
    )
}

export default Header;