import ip from './input.module.scss';

const Input = (props) => {
    return (
     <div className={ip.wrapper}>
         <input type={props.type} placeholder={props.placeholder}/>
         <img src={props.img} />
     </div>
    )
}

export default Input;