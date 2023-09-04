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