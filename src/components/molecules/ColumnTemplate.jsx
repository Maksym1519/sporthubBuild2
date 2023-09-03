import c from './columnTemplate.module.scss';

const ColumnTemplate = (props) => {
    const styled = {
        rowGap: props.rowGap
    }
    return (
        <div className={c.wrapper} style={styled}>
           {props.row1}
           {props.row2}
        </div>
    )
}

export default ColumnTemplate;