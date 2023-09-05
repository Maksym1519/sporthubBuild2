import i from './inputForm.module.scss';
import { Text14400 } from '../atoms/Text';
import { Text16400 } from '../atoms/Text';
import { Text16400R } from '../atoms/Text';
import { Text16500 } from '../atoms/Text';
import { Text16500R } from '../atoms/Text';
import { Text12400 } from '../atoms/Text';
import { Text14500 } from '../atoms/Text';
import ColumnTemplate from '../molecules/ColumnTemplate';
import Input from '../atoms/Input';
import { Button18044 } from '../atoms/Buttons';
import Eye from '../../images/eye.svg'


const InputForm = (props) => {
    const styled = {
        marginBottom: props.marginBottom,
       }
    return (
        <div className={i.signInForm__body} >
        <h3 className={i.title} style={styled}>{props.title}</h3>
        {props.description}
        <div className={i.inputs__wrapper}>
        {props.row && <ColumnTemplate row1={<Text14400 text={props.label} color='rgba(153, 153, 153, 1)'/>}  row2={<Input placeholder={props.placeholder} />}/>}
        {props.rowEye && (<ColumnTemplate row1={<Text14400 text={props.label2} color='rgba(153, 153, 153, 1)'/>} rightText={<Text14500 text={props.forgot} color='rgba(173, 121, 85, 1)'/>} row2={<Input placeholder={props.placeholder2} img={Eye} type='password'/>}/>)}
        {props.row2 && (<ColumnTemplate row1={<Text14400 text={props.label2} color='rgba(153, 153, 153, 1)'/>}  row2={<Input placeholder={props.placeholder2} type='text'/>}/>)}
        {props.row3 && (<ColumnTemplate row1={<Text14400 text={props.label3} color='rgba(153, 153, 153, 1)'/>}  row2={<Input placeholder={props.placeholder3} type='text'/>}/>)}
        {props.rowEye2 && (<ColumnTemplate row1={<Text14400 text={props.label2} color='rgba(153, 153, 153, 1)'/>} rightText={<Text14500 text={props.forgot} color='rgba(173, 121, 85, 1)'/>} row2={<Input placeholder={props.placeholder2} img={Eye} type='password'/>}/>)}
        {props.button && <div className={i.button__wrapper}><Button18044 text={props.buttonText} bg='rgba(173, 121, 85, 1)' borderRadius='8px'/></div>}
        {props.reminder && <div className={i.reminder}>
            <span className={i.text}><Text16400 text={props.reminderText1} color='rgba(153, 153, 153, 1)'/></span>
            <span className={i.link}><Text16500 text={props.reminderText2} color='rgba(173, 121, 85, 1)' underline={true}/></span>
        </div>}
        </div>
        <div className={i.terms}>By proceeding, you agree to our <span className={i.underline}>Terms of Use</span> and <span className={i.underline}>Privacy Policy</span></div>
     </div>
    )
}

export default InputForm;