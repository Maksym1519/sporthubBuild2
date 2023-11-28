import hc from "./headerCreator.module.scss";
import { Link } from "react-router-dom";
//components---------------------------------------------------------------
import { Text16400 } from "../atoms/Text";
import Avatext from "../molecules/Avatext";
import { Icones } from "../../Data";
//images----------------------------------------------------

const HeaderProfileStory = (props) => {
    const styled = {
        marginRight: props.margin,
        textDecoration: "none",
        //whiteSpace: "nowrap"
    }
    const linked = {
        textDecoration: "none",
        whiteSpace: "nowrap"
    }
    return (
        <div className={hc.headerProfile__wrapper} style={styled}>
        <Link to="/ProfileCreator" style={linked}>
          <div className={hc.item}>
            <Avatext
              img={Icones.hammer}
              text1={
                <Text16400
                  text="Create profile"
                  color="rgba(187, 187, 187, 1)"
                />
              }
            />
          </div>
        </Link>
        <Link to="/ProfileCreatorFilled" style={linked}>
          <div className={hc.item}>
            <Avatext
              img={Icones.edit}
              text1={
                <Text16400
                  text="Edit profile"
                  color="rgba(187, 187, 187, 1)"
                />
              }
            />
          </div>
        </Link>
        <Link to="/VideoCreator" style={linked}>
          <div className={hc.item}>
            <Avatext
              img={Icones.videoIcon}
              text1={
                <Text16400
                  text="Create video"
                  color="rgba(187, 187, 187, 1)"
                />
              }
            />
          </div>
        </Link>
        <div className={hc.item}>
          <Avatext
            img={Icones.diamond}
            text1={
              <Text16400
                text="Switch to business account"
                color="rgba(187, 187, 187, 1)"
              />
            }
          />
        </div>
        <Link to="/" style={styled}>
          <div
            //onClick={clickShowLogIn}
            className={hc.item + " " + hc.lastItem}
          >
            <Avatext
              img={Icones.logOut}
              text1={
                <Text16400
                  text="Log out"
                  color="rgba(187, 187, 187, 1)"
                />
              }
            />
          </div>
        </Link>
      </div>
    )
}

export default HeaderProfileStory;