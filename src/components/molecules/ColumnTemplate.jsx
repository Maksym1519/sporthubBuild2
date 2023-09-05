import c from './columnTemplate.module.scss';

const ColumnTemplate = (props) => {
    const styled = {
        rowGap: props.rowGap
    }
    return (
        <div className={c.wrapper} style={styled}>
           <div className={c.line__wrapper}>{props.row1}{props.rightText}</div>
           {props.row2}
        </div>
    )
}

export default ColumnTemplate;