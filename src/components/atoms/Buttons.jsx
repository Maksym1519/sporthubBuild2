import b from './buttons.module.scss';

export const Button13040 = (props) => {
    const styled = {
        background: props.bg,
        borderRadius: props.borderRadius
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
        columnGap: props.columnGap
    }
    return (
        <button className={b.wrapper__18044} style={styled} >
           <img src={props.img} />
           {props.text}
        </button>
    )
}
export const Button10644 = (props) => {
    const styled = {
        background: props.bg,
        borderRadius: props.borderRadius,
        border: props.border
    }
    return (
        <button className={b.wrapper__10644} style={styled} >
           {props.text}
        </button>
    )
}