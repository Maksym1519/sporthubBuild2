import p from "./profileCreator.module.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FilePicker } from "react-file-picker";
import { ImagePicker } from "react-file-picker";
//redux------------------------------------------
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { useDispatch, useSelector } from "react-redux";
import { showMale, showFemale, showNone } from "../../../features/genderSlice";
//components------------------------------------
import Header from "../../organisms/Header";
import HeaderCreator from "../../organisms/HeaderCreator";
import { Button18044 } from "../../atoms/Buttons";
import { Button10644 } from "../../atoms/Buttons";
import ColumnTemplate from "../../molecules/ColumnTemplate";
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
 

const ProfileCreator = () => {
  //redux-gender---- ------------------------------------------
  const dispatch = useAppDispatch();
  const currentComponent = useSelector(
    (state) => state.genderSlice.currentComponent
  );
  const maleClick = () => {
    dispatch(showMale());
    setFormData((prevData) => ({
      ...prevData,
      genderMale: "male",
      firstName: prevData.firstName, // Сохраняем текущее значение firstName
    }));
  };
  
  const femaleClick = () => {
    dispatch(showFemale());
    setFormData((prevData) => ({
      ...prevData,
      genderFemale: "female",
      firstName: prevData.firstName,
    }));
  };
  
  const noneClick = () => {
    dispatch(showNone());
    setFormData((prevData) => ({
      ...prevData,
      genderNone: "none",
      firstName: prevData.firstName,
    }));
  };
  
  //redux-isMobile---------------------------------------------------------
  const screenWidth = useAppSelector((state) => state.screenWidth.screenWidth);
  const isMobile = screenWidth <= 1024;
  //get-data-storage--------------------------------------------
  const dataStorage = localStorage.getItem('id')
  //get-data-from-profiles-------------------------------------
  useEffect(() => {
    async function requestToProfiles () {
      try {
        const dataFromProfiles = await axios.get("http://localhost:1337/api/profiles?populate=*")
        if (dataFromProfiles.status === 200) {
          const responseData = dataFromProfiles.data.data
          const matchingData = responseData.find((data) => data.attributes.identifier === dataStorage)
          console.log(matchingData)
          if (matchingData) {
           alert('User with such identifier already created please proceed to edit your profile')
          } else {
            console.log("there is no profile with such identifier")
          }
        }
      } catch(error) {
        console.error("dataFromProfiles is failed")
      }
    }
    requestToProfiles()
   },[])
  //form-data--------------------------------------------------
  const navigate = useNavigate();
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
  });
  const [placeholderData, setPlaceholderData] = useState({
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
  const handleUploadAndSubmit = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  
  const handleSubmit = async (e) => {
    //e.preventDefault();

    try {
      const formDataServer1 = new FormData();
      const formDataServer2 = new FormData();
      formDataServer1.append("files", avatar[0]);
      formDataServer2.append("files", cover[0]);

      const responseAvatar = await axios.post(
        "http://localhost:1337/api/upload",
        formDataServer1
      );
      const responseCover = await axios.post(
        "http://localhost:1337/api/upload",
        formDataServer2
      );

     
        const imageAvatar = responseAvatar.data[0].id;
        const imageCover = responseCover.data[0].id;
        console.log(imageAvatar);

         const requestData = {
          data: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            dateOfBirthday: formData.dateOfBirthday,
            address: formData.address,
            LLC: formData.LLC,
            description: formData.description,
            vimeoAccount: formData.vimeoAccount,
            instagramAccount: formData.instagramAccount,
            facebookAccount: formData.facebookAccount,
            twitterAccount: formData.twitterAccount,
            avatar: imageAvatar, 
            cover: imageCover, 
            identifier: dataStorage,
            genderMale: formData.genderMale,
            genderFemale: formData.genderFemale,
            genderNone: formData.genderNone,
          },
        };

        // Now, send the requestData to the server
        const profileResponse = await axios.post(
          "http://localhost:1337/api/profiles",
          requestData
        );

        if (profileResponse.status === 200) {
          setFormData({
            firstName: "",
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
            genderMale: "",
            genderFemale: "",
            genderNone: "",
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
          
        } else {
          console.error("Profile creation failed");
        }
    
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };
//directTo-------------------------------------------
  const directTo = async (e) => {
    e.preventDefault(); // Остановить стандартное поведение формы
    try {
      await handleSubmit();
      navigate("/ProfileCreatorFilled");
    } catch (error) {
      // Обработка ошибок, если отправка данных не удалась
      console.error("Произошла ошибка при отправке данных:", error);
    }
  };



  return (
    <div className={p.profileCreator__wrapper}>
      <HeaderCreator />
      <div className={p.container}>
        <div className={p.main}>
          <form
            // onSubmit={(e) => {
            //   uploadImage(e), handleSubmit(e);
            // }}
            onSubmit={handleSubmit}
            className={p.form__wrapper}
          >
            <div className={p.main__header}>
              {isMobile ? (
                <Text18500 text="Create profile" />
              ) : (
                <Text24500 text="Create profile" />
              )}

              <button
                className={p.button__wrapper}
                type="submit"
                value="Submit"
                onClick={directTo}
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
                    width='180px'
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
                <input
                  type="file"
                  className={p.filepeaker}
                  onChange={(e) => setCover(e.target.files)}
                />
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

export default ProfileCreator;
