import p from "./profileCreatorFilled.module.scss";
import { useState } from "react";
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
  const [files, setFiles] = useState();
  const uploadImage = async (e) => {
    e.preventDefault();
    const formDataServer = new FormData();
    formDataServer.append("files", files[0]);

    axios
      .post("http://localhost:1337/api/upload", formDataServer)
      .then((response) => {
        const imageId = response.data[0].id;
        console.log(imageId);

        axios
          .post("http://localhost:1337/api/profiles", { avatar: imageId })
          .then((response) => {
            //handle success
          })
          .catch((error) => {
            //handle error
          });
      })
      .catch((error) => {
        //handle error
      });
  };
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
    genderMale: 'Male',
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
    twitterAccount: "Add your Twitter account",
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

      const response = await axios.post(
        "http://localhost:1337/api/profiles",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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
          avatar: "",
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
          twitterAccount: "Add your Twitter account",
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
          <form
            onSubmit={(e) => {
              uploadImage(e), handleSubmit(e);
            }}
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
                  onChange={(e) => setFiles(e.target.files)}
                />
                <img src={AvaFrame} alt="ava" />
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
                <input type="file" className={p.filepeaker} />
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
                  onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                  <Text14400
                    text="Date of birthday"
                    color="rgba(153, 153, 153, 1)"
                  />
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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

export default ProfileCreatorFilled;
