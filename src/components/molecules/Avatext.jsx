import a from "./avaText.module.scss";

const AvaText = (props) => {
  return (
    <div className={a.wrapper}>
      <div className={a.body}>
        <img src={props.img} />
        {props.text1}
      </div>
      {props.text2}
    </div>
  );
};

export default AvaText;
