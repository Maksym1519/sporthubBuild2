import p from "./profileCreatorFilled.module.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
import Avatext from "../../molecules/Avatext";
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
    avatar: null,
    cover: null,
    identifier: null,
    id: null
  });
  const [placeholderData, setPlaceholderData] = useState({
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
  });
   //get-value-from-inputes--------------------------------------------
   const handleUploadAndSubmit = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  
 //get-data-storage----------------------------------------------
 const dataStorage = localStorage.getItem('id')
  //get-values----------------------------------------------------
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/profiles?populate=*"
        );
          if (response.status === 200) {
          const profileData = response.data.data;
          const matchingUser = profileData.find((user) =>
            user.attributes.identifier === dataStorage)
          console.log(matchingUser);
          // Заполнение формы данными с сервера
          setFormData({
            firstName: matchingUser.attributes.firstName,
            lastName: matchingUser.attributes.lastName,
            gender: matchingUser.attributes.gender,
            dateOfBirthday:
              matchingUser.attributes.dateOfBirthday,
            address: matchingUser.attributes.address,
            LLC: matchingUser.attributes.LLC,
            description:
              matchingUser.attributes.description,
            vimeoAccount:
              matchingUser.attributes.vimeoAccount,
            instagramAccount:
              matchingUser.attributes.instagramAccount,
            facebookAccount:
              matchingUser.attributes.facebookAccount,
            twitterAccount:
              matchingUser.attributes.twitterAccount,
            avatar:
              matchingUser.attributes.avatar.data
                .attributes.url,
            cover:
              matchingUser.attributes.cover.data
                .attributes.url,
            imgCoverName:
              matchingUser.attributes.cover.data
                .attributes.name,
            imgAvatarName:
              matchingUser.attributes.avatar.data
                .attributes.name,
                id: matchingUser.id
          });
          console.log(formData.id);
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

    fetchData();
  }, []);
  //data-patch------------------------------------------------------------------
      const changeData = async () => {
      const avatarData = new FormData()
      avatarData.append("files",avatar[0])
      const responseAvatar = await axios.post("http://localhost:1337/api/upload",avatarData)
      const imageAvatar = responseAvatar.data[0].id;
      console.log(imageAvatar)
      const requestData = {
      data: {
        firstName: formData.firstName,
        gender: formData.gender,
        lastName: formData.lastName,
        dateOfBirthday: formData.dateOfBirthday,
        address: formData.address,
        LLC: formData.LLC,
        description: formData.description,
        vimeoAccount: formData.vimeoAccount,
        instagramAccount: formData.instagramAccount,
        facebookAccount: formData.facebookAccount,
        twitterAccount: formData.twitterAccount,
        avatar: imageAvatar
      },
    };
    try {
      const patchResponse = await axios.put(
        `http://localhost:1337/api/profiles/${formData.id}`,
        requestData
      );
    } catch (error) {
      console.error("patch data failed");
    }
  };
//directTo-------------------------------------------
const navigate = useNavigate()
const directTo = async (e) => {
  e.preventDefault();
  try {
    await changeData();
    navigate("/");
  } catch (error) {
    console.error("Произошла ошибка при отправке данных:", error);
  }
};

  return (
    <div className={p.profileCreator__wrapper}>
      <HeaderCreator />
      <div className={p.container}>
        <div className={p.main}>
          <form onSubmit={changeData} className={p.form__wrapper}>
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
                    width="180px"
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
                <img
                  src={"http://localhost:1337" + formData.avatar}
                  alt="ava"
                />
                <ColumnTemplate
                  row1={
                    <Avatext
                      img={Icones.greenBird}
                      text1={
                        <Text16600
                          text={formData.imgAvatarName}
                          lineHeight="normal"
                        />
                      }
                    />
                  }
                  row2={
                    <Text14400
                      text="Change file"
                      color="rgba(173, 121, 85, 1)"
                      underline={true}
                    />
                  }
                />
                <img src={Icones.bucket} alt="bucket" className={p.bucket} />
              </div>
              <div className={p.item__wrapper}>
                <input
                  type="file"
                  className={p.filepeaker}
                  onChange={(e) => setCover(e.target.files)}
                />
                <img src={"http://localhost:1337" + formData.cover} alt="ava" />
                <ColumnTemplate
                  row1={
                    <Avatext
                      img={Icones.greenBird}
                      text1={
                        <Text16600
                          text={formData.imgCoverName}
                          lineHeight="normal"
                        />
                      }
                    />
                  }
                  row2={
                    <Text14400
                      text="Change file"
                      color="rgba(173, 121, 85, 1)"
                      underline={true}
                    />
                  }
                />
                <img src={Icones.bucket} alt="bucket" className={p.bucket} />
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
                  value={formData.firstName || ""}
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
