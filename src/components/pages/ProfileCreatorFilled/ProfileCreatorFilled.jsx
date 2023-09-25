import p from "./profileCreatorFilled.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
//redux------------------------------------------
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { useDispatch, useSelector } from "react-redux";
import { showMale, showFemale, showNone } from "../../../features/genderSlice";
//components------------------------------------
import Header from "../../organisms/Header";
import { Button18044 } from "../../atoms/Buttons";
import { Button10644 } from "../../atoms/Buttons";
import ColumnTemplate from "../../molecules/ColumnTemplate";
import Avatext from '../../molecules/Avatext';
import { Icones } from "../../../Data";
//text-----------------------------------------
import { Text24500 } from "../../atoms/Text";
import { Text16600 } from "../../atoms/Text";
import { Text16400 } from "../../atoms/Text";
import { Text12400 } from "../../atoms/Text";
import { Text14400 } from "../../atoms/Text";
import { Text18500 } from "../../atoms/Text";
//images---------------------------------------
import AvaFrame from "../../../images/avaFrame.svg";
import CoverFrame from "../../../images/coverFrame.svg";
import Radio from "../../../images/Radiobutton.svg";
import RadioActive from "../../../images/Radiobutton-active.svg";

const ProfileCreatorFilled = () => {
   //redux-gender---- ------------------------------------------
   const dispatch = useAppDispatch();
   const currentComponent = useSelector(
     (state) => state.genderSlice.currentComponent
   );
   const maleClick = () => {
     dispatch(showMale());
     };
   const femaleClick = () => {
     dispatch(showFemale());
     
   };
   const noneClick = () => {
     dispatch(showNone());
     
   };
   //redux-isMobile---------------------------------------------------------
   const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
   const isMobile = screenWidth <= 1024;
 
   //form-data--------------------------------------------------
   const [avatar, setAvatar] = useState();
   const [cover, setCover] = useState();
   const [formData, setFormData] = useState({
     firstName: null,
     genderMale: null,
     genderFemale: null,
     genderNone: null,
     lastName: null,
     dateOfBirthday: null,
     address: null,
     LLC: null,
     description: null,
     vimeoAccount: null,
     instagramAccount: null,
     facebookAccount: null,
     twitterAccount: null,
     avatar: null
   });
   const [placeholderData, setPlaceholderData] = useState({
     firstName: "",
     genderMale: '',
     genderFemale: "",
     genderNone: "",
     lastName: "",
     dateOfBirthday: "",
     address: "",
     LLC: "",
     description: "",
     vimeoAccount: "",
     instagramAccount: "",
     facebookAccount: "",
     twitterAccount: "",
   });
   const handleUploadAndSubmit = (e) => {
     const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
   };
   const handleSubmit = async (e) => {
     e.preventDefault();
     
     try {
       const formDataServer1 = new FormData();
       const formDataServer2 = new FormData();
       formDataServer1.append("files", avatar[0]);
       formDataServer2.append("files", cover[0]);
       
       
       const responseAvatar = await axios.post("http://localhost:1337/api/upload", formDataServer1);
       const responseCover = await axios.post("http://localhost:1337/api/upload", formDataServer2);
       


       if (responseAvatar.status === 200) {
         // If the image upload is successful, get the image ID
         const imageAvatar = responseAvatar.data[0].id;
         const imageCover = responseCover.data[0].id;
         console.log(imageAvatar);
   
         // Now, you can send the rest of the data to the server
         const requestData = {
           data: {
             firstName: formData.firstName,
             gender: "male",
             lastName: formData.lastName,
             dateOfBirthday: formData.dateOfBirthday,
             address: formData.address,
             LLC: formData.LLC,
             description: formData.description,
             vimeoAccount: formData.vimeoAccount,
             instagramAccount: formData.instagramAccount,
             facebookAccount: formData.facebookAccount,
             twitterAccount: formData.twitterAccount,
             avatar: imageAvatar, // Add the image ID to the requestData
             cover: imageCover,  // Add the image ID as cover as well, if needed
           },
         };
   
         // Now, send the requestData to the server
         const profileResponse = await axios.post("http://localhost:1337/api/profiles", requestData);
   
         if (profileResponse.status === 200) {
           setFormData({
             firstName: "",
             genderMale: "",
             genderFemale: "",
             genderNone: "",
             lastName: "",
             dateOfBirthday: "",
             address: "",
             LLC: "",
             description: "",
             vimeoAccount: "",
             instagramAccount: "",
             facebookAccount: "",
             twitterAccount: "",
             avatar: "",
           });
           
           setPlaceholderData({
             firstName: "Your First Name",
             genderMale: "Male",
             genderFemale: "Female",
             genderNone: "None",
             lastName: "Your Last Name",
             dateOfBirthday: "MM.DD.YYYY",
             address: "Address",
             LLC: "Your LLC",
             description: "Description",
             vimeoAccount: "Add your Vimeo account",
             instagramAccount: "Add your Instagram account",
             facebookAccount: "Add your Facebook account",
             twitterAccount: "Add your Twitter account",
           });
           console.log("Registration successful");
           // You can also reset your form data and placeholders here if needed
         } else {
           // Handle any errors from the profile creation
           console.error("Profile creation failed");
         }
       } else {
         // Handle any errors from the image upload
         console.error("Image upload failed");
       }
     } catch (error) {
       // Handle any other errors
       console.error("Error registering user:", error);
     }
   };
   //get-values----------------------------------------------------
   //get-values---------------------------------------------------
   useEffect(() => {
    // Выполняйте GET-запрос на сервер при загрузке страницы
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:1337/api/profiles?populate=*");
        
        if (response.status === 200) {
          const profileData = response.data.data; // Полученные данные с сервера
          console.log(profileData[0])
          // Заполните форму данными с сервера
          setFormData({
            firstName: profileData[0].attributes.firstName,
            lastName: profileData[0].attributes.lastName,
            gender: profileData[0].attributes.gender,
            dateOfBirthday: profileData[0].attributes.dateOfBirthday,
            address: profileData[0].attributes.address,
            LLC: profileData[0].attributes.LLC,
            description: profileData[0].attributes.description,
            vimeoAccount: profileData[0].attributes.vimeoAccount,
            instagramAccount: profileData[0].attributes.instagramAccount,
            facebookAccount: profileData[0].attributes.facebookAccount,
            twitterAccount: profileData[0].attributes.twitterAccount,
            avatar: profileData[0].attributes.avatar.data.attributes.url,
      
            // ... и так далее для остальных полей
          });
          console.log(formData.avatar)
          //Можете также обновить данные placeholderData, если это необходимо
          setPlaceholderData({
            //firstName: profileData[0].id.attributes.firstName,
            });
        } else {
          console.error("Failed to fetch profile data");
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    }
    
    fetchData(); // Вызывайте функцию для выполнения GET-запроса при загрузке компонента
  }, []);
   //-------------------------------------------------------------- ...
  return (
    <div className={p.profileCreator__wrapper}>
      <Header />
      <div className={p.container}>
        <div className={p.main}>
          <form
            onSubmit={handleSubmit}
            className={p.form__wrapper}
          >
            <div className={p.main__header}>
              {isMobile ? (
                <Text18500 text="Edit profile" />
              ) : (
                <Text24500 text="Edit profile" />
              )}

              <button
                className={p.button__wrapper}
                type="submit"
                value="Submit"
              >
                {isMobile ? (
                  <Button10644
                    text={<Text16600 text="Save" />}
                    borderRadius="8px"
                  />
                ) : (
                  <Button18044
                    text={<Text16600 text="Save" />}
                    borderRadius="8px"
                  />
                )}
              </button>
            </div>
            <div className={p.profile__wrapper}>
              <div className={p.item__wrapper}>
                <input
                  type="file"
                  className={p.filepeaker}
                  onChange={(e) => setAvatar(e.target.files)}
                />
                <img src={"http://localhost:1337" + formData.avatar} alt="ava" />
                <ColumnTemplate
                  row1={<Avatext img={Icones.greenBird} text1={<Text16600 text={'File_name.jpeg'} lineHeight="normal"/>}/>}
                  row2={
                    <Text14400
                      text="Change file"
                      color="rgba(173, 121, 85, 1)"
                      underline={true}
                    />
                  }
                />
                <img src={Icones.bucket} alt="bucket" className={p.bucket}/>
              </div>
              <div className={p.item__wrapper}>
                <input type="file" className={p.filepeaker} onChange={(e) => setCover(e.target.files)}/>
                <img src={CoverFrame} alt="ava" />
                <ColumnTemplate
                  row1={<Avatext img={Icones.greenBird} text1={<Text16600 text={'File_name.jpeg'} lineHeight="normal"/>}/>}
                  row2={
                    <Text14400
                      text="Change file"
                      color="rgba(173, 121, 85, 1)"
                      underline={true}
                    />
                  }
                />
                <img src={Icones.bucket} alt="bucket" className={p.bucket}/>
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
                  onChange={handleUploadAndSubmit}
                />
              </div>
              {/* //input-------------------------------------------------------------------------*/}
              <div className={p.input__wrapper}>
                <span className={p.label}>
                  <Text14400 text="Gender" color="rgba(153, 153, 153, 1)" />
                </span>
                <div className={p.inputGender__wrapper}>
                  <div
                    className={p.inputRadio__wrapper}
                    onClick={() => maleClick()}
                  >
                    <img src={Radio} alt="radio" className={p.radioButton} />
                    {currentComponent === "male" && (
                      <img src={RadioActive} className={p.radioButton} />
                    )}
                    <input
                      type="text"
                      className={p.input + " " + p.inputGender}
                      placeholder={placeholderData.genderMale}
                      name="genderMale"
                      value={formData.genderMale}
                      onChange={handleUploadAndSubmit}
                    />
                  </div>
                  <div
                    className={p.inputRadio__wrapper}
                    onClick={() => femaleClick()}
                  >
                    <img src={Radio} alt="radio" className={p.radioButton} />
                    {currentComponent === "female" && (
                      <img src={RadioActive} className={p.radioButton} />
                    )}
                    <input
                      type="text"
                      className={p.input + " " + p.inputGender}
                      placeholder={placeholderData.genderFemale}
                      name="genderFemale"
                      value={formData.genderFemale}
                      onChange={handleUploadAndSubmit}
                    />
                  </div>
                  <div
                    className={p.inputRadio__wrapper}
                    onClick={() => noneClick()}
                  >
                    <img src={Radio} alt="radio" className={p.radioButton} />
                    {currentComponent === "none" && (
                      <img src={RadioActive} className={p.radioButton} />
                    )}
                    <input
                      type="text"
                      className={p.input + " " + p.inputGender}
                      placeholder={placeholderData.genderNone}
                      name="genderNone"
                      value={formData.genderNone}
                      onChange={handleUploadAndSubmit}
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
                  onChange={handleUploadAndSubmit}
                />
              </div>
              {/* //input-------------------------------------------------------------------------*/}
              <div className={p.input__wrapper}>
                <span className={p.label}>
                  <Text14400
                    text="Date of birthday"
                    color="rgba(153, 153, 153, 1)"
                  />
                </span>
                <input
                  type="text"
                  className={p.input}
                  placeholder={placeholderData.dateOfBirthday}
                  name="dateOfBirthday"
                  value={formData.dateOfBirthday}
                  onChange={handleUploadAndSubmit}
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
                  placeholder={placeholderData.address}
                  name="address"
                  value={formData.address}
                  onChange={handleUploadAndSubmit}
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
                  onChange={handleUploadAndSubmit}
                />
              </div>
              {/* //input-------------------------------------------------------------------------*/}
              <div className={p.input__wrapper + " " + p.input_fullWidth}>
                <span className={p.label}>
                  <Text14400
                    text="Description"
                    color="rgba(153, 153, 153, 1)"
                  />
                </span>
                <input
                  type="text"
                  className={p.input}
                  placeholder={placeholderData.description}
                  name="description"
                  value={formData.description}
                  onChange={handleUploadAndSubmit}
                />
              </div>
              {/* //input-------------------------------------------------------------------------*/}
              <div className={p.input__wrapper}>
                <span className={p.label}>
                  <Text14400
                    text="Vimeo account"
                    color="rgba(153, 153, 153, 1)"
                  />
                </span>
                <input
                  type="text"
                  className={p.input}
                  placeholder={placeholderData.vimeoAccount}
                  name="vimeoAccount"
                  value={formData.vimeoAccount}
                  onChange={handleUploadAndSubmit}
                />
              </div>
              {/* //input-------------------------------------------------------------------------*/}
              <div className={p.input__wrapper}>
                <span className={p.label}>
                  <Text14400
                    text="Instagram account"
                    color="rgba(153, 153, 153, 1)"
                  />
                </span>
                <input
                  type="text"
                  className={p.input}
                  placeholder={placeholderData.instagramAccount}
                  name="instagramAccount"
                  value={formData.instagramAccount}
                  onChange={handleUploadAndSubmit}
                />
              </div>
              {/* //input-------------------------------------------------------------------------*/}
              <div className={p.input__wrapper}>
                <span className={p.label}>
                  <Text14400
                    text="Facebook account"
                    color="rgba(153, 153, 153, 1)"
                  />
                </span>
                <input
                  type="text"
                  className={p.input}
                  placeholder={placeholderData.facebookAccount}
                  name="facebookAccount"
                  value={formData.facebookAccount}
                  onChange={handleUploadAndSubmit}
                />
              </div>
              {/* //input-------------------------------------------------------------------------*/}
              <div className={p.input__wrapper}>
                <span className={p.label}>
                  <Text14400
                    text="Twitter account"
                    color="rgba(153, 153, 153, 1)"
                  />
                </span>
                <input
                  type="text"
                  className={p.input}
                  placeholder={placeholderData.twitterAccount}
                  name="twitterAccount"
                  value={formData.twitterAccount}
                  onChange={handleUploadAndSubmit}
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

export default ProfileCreatorFilled;
