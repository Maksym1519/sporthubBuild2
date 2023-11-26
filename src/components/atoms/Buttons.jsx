import b from './buttons.module.scss';
import { Text16600 } from './Text';


export const Button13040 = (props) => {
    const styled = {
        background: props.bg,
        borderRadius: props.borderRadius,
        width: props.width,
        color: props.color,
        fontFamily: props.fontFamily,
        margin: props.margin
    }
    return (
        <div className={b.wrapper__13040} style={styled}>
           {props.text}
        </div>
    )
}
export const Button18044 = (props) => {
    const styled = {
        background: props.bg,
        borderRadius: props.borderRadius,
        border: props.border,
        columnGap: props.columnGap,
        width: props.width,
        color: props.color,
        fontFamily: props.fontFamily,
        margin: props.margin
    }
    return (
        <button className={b.wrapper__18044} style={styled} >
           {props.img && <img src={props.img} />}
           {props.text}
        </button>
    )
}
export const Button10644 = (props) => {
    const styled = {
        background: props.bg,
        borderRadius: props.borderRadius,
        border: props.border,
        width: props.width,
        color: props.color,
        fontFamily: props.fontFamily,
        margin: props.margin
    }
    return (
        <button className={b.wrapper__10644} style={styled} >
           {props.text}
        </button>
    )
}
