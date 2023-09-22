import p from "./profileCreator.module.scss";
import { useState } from "react";
import axios from "axios";
import { FilePicker } from 'react-file-picker';
import { ImagePicker } from 'react-file-picker';
//redux------------------------------------------
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { useDispatch, useSelector } from "react-redux";
import { showMale, showFemale, showNone } from "../../../features/genderSlice";
//components------------------------------------
import Header from "../../organisms/Header";
import { Button18044 } from "../../atoms/Buttons";
import ColumnTemplate from "../../molecules/ColumnTemplate";
//text-----------------------------------------
import { Text24500 } from "../../atoms/Text";
import { Text16600 } from "../../atoms/Text";
import { Text16400 } from "../../atoms/Text";
import { Text12400 } from "../../atoms/Text";
import { Text14400 } from "../../atoms/Text";
//images---------------------------------------
import AvaFrame from "../../../images/avaFrame.svg";
import CoverFrame from "../../../images/coverFrame.svg";
import Radio from '../../../images/Radiobutton.svg';
import RadioActive from '../../../images/Radiobutton-active.svg'

const ProfileCreator = () => {
  //strapi-post-images--------------------------------------------------  
const [image, setImage] = useState('');
const handleImage = (e) => {
   setImage(e.target.files[0]);
   console.log(image)
  }
 const handleApi = async () => {
  try {
  const formDataServer = new FormData();
  formDataServer.append('test', image)
    await axios.post("http://localhost:1337/api/profiles",  {
      data: formDataServer,
      headers: {
        "Content-Type": "multipart/form-data",
         },
    });
    console.log("Изображение успешно загружено");
  } catch (error) {
    console.error("Ошибка загрузки изображения:", error);
  }
 }


  //redux-gender---- ------------------------------------------
  const dispatch = useAppDispatch();
  const currentComponent = useSelector((state) => state.genderSlice.currentComponent);
  const maleClick = () => {
    dispatch(showMale())
  }  
  const femaleClick = () => {
    dispatch(showFemale())
  }  
  const noneClick = () => {
    dispatch(showNone())
  }  
  //form-data--------------------------------------------------
  const [formData, setFormData] = useState({
    firstName: null,
    genderMale: null,
    genderFemale: null,
    genderNone: null,
    lastName: null,
    dateOfBirthaday: null,
    address: null,
    LLC: null,
    description: null,
    vimeoAccount: null,
    instagramAccount: null,
    facebookAccount: null,
    twitterAccount: null,
    });
  const [placeholderData, setPlaceholderData] = useState({
    firstName: "Your First Name",
    genderMale: "Male",
    genderFemale: "Female",
    genderNone: "None",
    lastName: "Your Last Name",
    dateOfBirthaday: "MM.DD.YYYY",
    address: "Address",
    LLC: "Your LLC",
    description: "Description",
    vimeoAccount: "Add your Vimeo account",
    instagramAccount: "Add your Instagram account",
    facebookAccount: "Add your Facebook account",
    twitterAccount: "Add your Twitter account"
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requestData = {
        data: {
          firstName: formData.firstName,
          genderMale: formData.genderMale,
          genderFemale: formData.genderFemale,
          genderNone: formData.genderNone,
          lastName: formData.lastName,
          dateOfBirthaday: formData.dateOfBirthaday,
          address: formData.address,
          LLC: formData.LLC,
          description: formData.description,
          vimeoAccount: formData.vimeoAccount,
          instagramAccount: formData.instagramAccount,
          facebookAccount: formData.facebookAccount,
          twitterAccount: formData.twitterAccount,
          },
      };
      
      const response = await axios.post("http://localhost:1337/api/profiles", requestData,  {
        headers: {
            "Content-Type": "application/json",
          },
         });

      if (response.status === 200) {
        setFormData({
          firstName: "",
          genderMale: "",
          genderFemale: "",
          genderNone: "",
          lastName: "",
          dateOfBirthaday: "",
          address: "",
          LLC: "",
          description: "",
          vimeoAccount: "",
          instagramAccount: "",
          facebookAccount: "",
          twitterAccount: "",
          avatar: ""
        });
        setPlaceholderData({
            firstName: "Your First Name",
            genderMale: "Male",
            genderFemale: "Female",
            genderNone: "None",
            lastName: "Your Last Name",
            dateOfBirthaday: "MM.DD.YYYY",
            address: "Address",
            LLC: "Your LLC",
            description: "Description",
            vimeoAccount: "Add your Vimeo account",
            instagramAccount: "Add your Instagram account",
            facebookAccount: "Add your Facebook account",
            twitterAccount: "Add your Twitter account"
          });

        console.log("Registration successful");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className={p.profileCreator__wrapper}>
      <Header />
      <div className={p.container}>
        <div className={p.main}>
        <form onSubmit={handleSubmit} className={p.form__wrapper}>
          <div className={p.main__header}>
            <Text24500 text="Edit profile" />
            <button className={p.button__wrapper} type="submit" onClick={handleApi}>
              <Button18044
                text={<Text16600 text="Save" />}
                borderRadius="8px"
              />
            </button>
          </div>
          <div className={p.profile__wrapper}>
            <div className={p.item__wrapper}>
            <input type="file" className={p.filepeaker}  name="test" onChange={handleImage}/>
             <img src={AvaFrame} alt="ava" />
              <ColumnTemplate
                row1={<Text16400 text="Information about adding photo" />}
                row2={
                  <Text12400
                    text="Information about adding photo. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit"
                    color="rgba(153, 153, 153, 1)"
                  />
                }
              />
            </div>
            <div className={p.item__wrapper}>
            <input type="file" className={p.filepeaker} />
              <img src={CoverFrame} alt="ava" />
              <ColumnTemplate
                row1={<Text16400 text="Information about adding cover" />}
                row2={
                  <Text12400
                    text="Information about adding photo. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
                    color="rgba(153, 153, 153, 1)"
                  />
                }
              />
            </div>
          </div>
         
            <div className={p.inputs__wrapper}>
              {/* //input-------------------------------------------------------------------------*/}
              <div className={p.input__wrapper}>
                <span className={p.label}>
                  <Text14400 text="First Name" color="rgba(153, 153, 153, 1)" />
                </span>
                <input
                  type="text"
                  className={p.input}
                  placeholder={placeholderData.firstName}
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              {/* //input-------------------------------------------------------------------------*/}
              <div className={p.input__wrapper}>
                <span className={p.label}>
                  <Text14400 text="Gender" color="rgba(153, 153, 153, 1)" />
                </span>
                <div className={p.inputGender__wrapper}>
                  <div className={p.inputRadio__wrapper} onClick={() => maleClick()}>
                    <img src={Radio} alt="radio"  className={p.radioButton}/>
                    {currentComponent === 'male' && <img src={RadioActive} className={p.radioButton}/>}
                  <input
                    type="text"
                    className={p.input + " " + p.inputGender}
                    placeholder={placeholderData.genderMale}
                    name="genderMale"
                    value={formData.genderMale}
                    onChange={handleChange}
                  />
                 </div>
                 <div className={p.inputRadio__wrapper} onClick={() => femaleClick()}>
                 <img src={Radio} alt="radio"  className={p.radioButton}/>
                 {currentComponent === 'female' && <img src={RadioActive} className={p.radioButton}/>}
                  <input
                    type="text"
                    className={p.input + " " + p.inputGender}
                    placeholder={placeholderData.genderFemale}
                    name="genderFemale"
                    value={formData.genderFemale}
                    onChange={handleChange}
                    />
                  </div>
                  <div className={p.inputRadio__wrapper} onClick={() => noneClick()}>
                  <img src={Radio} alt="radio"  className={p.radioButton}/>
                  {currentComponent === 'none' && <img src={RadioActive} className={p.radioButton}/>}
                  <input
                    type="text"
                    className={p.input + " " + p.inputGender}
                    placeholder={placeholderData.genderNone}
                    name="genderNone"
                    value={formData.genderNone}
                    onChange={handleChange}
                  />
                  </div>
                </div>
              </div>
              {/* //input-------------------------------------------------------------------------*/}
              <div className={p.input__wrapper}>
                <span className={p.label}>
                  <Text14400 text="Last Name" color="rgba(153, 153, 153, 1)" />
                </span>
                <input
                  type="text"
                  className={p.input}
                  placeholder={placeholderData.lastName}
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              {/* //input-------------------------------------------------------------------------*/}
              <div className={p.input__wrapper}>
                <span className={p.label}>
                  <Text14400 text="Date of birthday" color="rgba(153, 153, 153, 1)" />
                </span>
                <input
                  type="text"
                  className={p.input}
                  placeholder={placeholderData.dateOfBirthaday}
                  name="dateOfBirthday"
                  value={formData.dateOfBirthaday}
                  onChange={handleChange}
                />
                </div>
              {/* //input-------------------------------------------------------------------------*/}
              <div className={p.input__wrapper}>
                <span className={p.label}>
                  <Text14400 text="Address" color="rgba(153, 153, 153, 1)" />
                </span>
                <input
                  type="text"
                  className={p.input}
                  placeholder={placeholderData.lastname}
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              {/* //input-------------------------------------------------------------------------*/}
              <div className={p.input__wrapper}>
                <span className={p.label}>
                  <Text14400 text="LLC" color="rgba(153, 153, 153, 1)" />
                </span>
                <input
                  type="text"
                  className={p.input}
                  placeholder={placeholderData.LLC}
                  name="LLC"
                  value={formData.LLC}
                  onChange={handleChange}
                />
              </div>
              {/* //input-------------------------------------------------------------------------*/}
              <div className={p.input__wrapper + " " + p.input_fullWidth}>
                <span className={p.label}>
                  <Text14400 text="Description" color="rgba(153, 153, 153, 1)" />
                </span>
                <input
                  type="text"
                  className={p.input}
                  placeholder={placeholderData.description}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              {/* //input-------------------------------------------------------------------------*/}
              <div className={p.input__wrapper}>
                <span className={p.label}>
                  <Text14400 text="Vimeo account" color="rgba(153, 153, 153, 1)" />
                </span>
                <input
                  type="text"
                  className={p.input}
                  placeholder={placeholderData.vimeoAccount}
                  name="vimeoAccount"
                  value={formData.vimeoAccount}
                  onChange={handleChange}
                />
              </div>
              {/* //input-------------------------------------------------------------------------*/}
              <div className={p.input__wrapper}>
                <span className={p.label}>
                  <Text14400 text="Instagram account" color="rgba(153, 153, 153, 1)" />
                </span>
                <input
                  type="text"
                  className={p.input}
                  placeholder={placeholderData.instagramAccount}
                  name="instagramAccount"
                  value={formData.instagramAccount}
                  onChange={handleChange}
                />
              </div>
              {/* //input-------------------------------------------------------------------------*/}
              <div className={p.input__wrapper}>
                <span className={p.label}>
                  <Text14400 text="Facebook account" color="rgba(153, 153, 153, 1)" />
                </span>
                <input
                  type="text"
                  className={p.input}
                  placeholder={placeholderData.facebookAccount}
                  name="facebookAccount"
                  value={formData.facebookAccount}
                  onChange={handleChange}
                />
              </div>
              {/* //input-------------------------------------------------------------------------*/}
              <div className={p.input__wrapper}>
                <span className={p.label}>
                  <Text14400 text="Twitter account" color="rgba(153, 153, 153, 1)" />
                </span>
                <input
                  type="text"
                  className={p.input}
                  placeholder={placeholderData.twitterAccount}
                  name="twitterAccount"
                  value={formData.twitterAccount}
                  onChange={handleChange}
                />
              </div>
              {/* //input-------------------------------------------------------------------------*/}
              
              {/* //input-------------------------------------------------------------------------*/}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreator;
