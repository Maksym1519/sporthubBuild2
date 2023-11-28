import i from './inputForSearch.module.scss';
import {Icones} from '../../Data';
import Search from '../../images/Search.svg'

const InputForStory = (props) => {
  const styled = {
    height: props.height,
    border: "none",
    outline: "none",
    marginRight: props.margin
  };
     return (
<>
    <div className={i.signInForm__wrapper} style={styled}>
       <form className={i.signIn__form} >
        <div className={i.inputs__wrapper}>
        <div className={i.search__wrapper}>
              <input
                type="search"
                 />
              <img src={Search} alt="search" />
              </div>
         </div>
     </form>
     </div>
</>
  );
};

export default InputForStory;
