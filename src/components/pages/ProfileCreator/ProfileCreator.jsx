import p from './profileCreator.module.scss';
//components------------------------------------
import Header from '../../organisms/Header';
import { Button18044 } from '../../atoms/Buttons';
//text-----------------------------------------
import { Text24500 } from '../../atoms/Text';
import { Text16600 } from '../../atoms/Text';


const ProfileCreator = () => {
    return (
        <div className={p.profileCreator__wrapper}>
            <Header />
          <div className={p.container}>
            <div className={p.main}>
                <div className={p.main__header}>
                   <Text24500 text='Edit profile'/>
                   <div className={p.button__wrapper}>
                       <Button18044 text={<Text16600 text='Save'/>} borderRadius='8px'/>
                   </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default ProfileCreator;