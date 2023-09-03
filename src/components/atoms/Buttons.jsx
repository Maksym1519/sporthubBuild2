import b from './buttons.module.scss';

export const Button13040 = (props) => {
    const styled = {
        background: props.bg
    }
    return (
        <div className={b.wrapper__13040}>
           {props.text}
        </div>
    )
}