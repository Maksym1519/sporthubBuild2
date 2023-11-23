import b from "./bio.module.scss";
import ColumnTemplate from "../molecules/ColumnTemplate";
import AvaText from "../molecules/Avatext";
import { Text14400 } from "../atoms/Text";
import { Text16500 } from "../atoms/Text";
import { Text12400 } from "../atoms/Text";
import { Text18600 } from "../atoms/Text";
import { Icones } from "../../Data";

const Bio = () => {
  return (
    <div className={b.bio__wrapper}>
      <div className={b.bio__container}>
        <div className={b.bussinessName}>
          <ColumnTemplate
            row1={
              <Text12400 text="Business Name" color="rgba(187, 187, 187, 1)" />
            }
            row2={<Text16500 text="Business Name" />}
          />
        </div>
        <div className={b.adress}>
          <ColumnTemplate
            row1={<Text12400 text="Address" color="rgba(187, 187, 187, 1)" />}
            row2={
              <Text16500 text="4708 Ruecker Wall, Kassandratown, HI 97729" />
            }
          />
        </div>
        <div className={b.about}>
          <h4 className={b.title}>
            <Text12400 text="About" color="rgba(187, 187, 187, 1)" />
          </h4>
          <p className={b.text}>
            <Text14400 text="Praesent ultricies lacus in ligula volutpat feugiat. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Fusce luctus justo eget nisi hendrerit, quis aliquam arcu porta. " lineHeight='14px'/>
          </p>
          <p className={b.text}><Text14400 text='Cras ultricies, elit sit amet cursus consectetur, risus felis ullamcorper nulla, ut scelerisque sapien lorem non sem. Integer vestibulum ornare ligula, a placerat lectus volutpat ultrices.'lineHeight='14px'/></p>
          <div className={b.list}>
          <p className={b.text}><Text14400 text='Aliquam commodo malesuada purus a mollis.' lineHeight='14px'/></p>
          <ul>
            <li><p className={b.text}><Text14400 text='Vestibulum pulvinar aliquam libero eu consequat.' lineHeight='14px'/></p></li>
            <li><p className={b.text}><Text14400 text='Cras massa orci, ultrices' lineHeight='14px'/></p></li>
            <li><p className={b.text}><Text14400 text='Sed scelerisque id, semper vel neque.' lineHeight='14px'/></p></li>
          </ul>
          <p className={b.text}><Text14400 text='Proin a turpis quis nibh cursus hendrerit sit amet vel libero. Nullam sit amet laoreet ante. Mauris sit amet mi vitae arcu dignissim porttitor et in arcu. Nullam eleifend molestie arcu, pretium fermentum orci feugiat eget. Integer dapibus tincidunt ipsum, at rutrum magna rutrum at. Quisque pretium convallis vestibulum.' lineHeight='14px'/></p>
          </div>
        </div>
        <div className={b.socialMedia}>
            <h3 className={b.title}><Text18600 text='My social media'/></h3>
            <div className={b.items__body}>
             <AvaText img={Icones.facebook} text1={<Text14400 text='Facebook' color='rgba(187, 187, 187, 1)'/>}/>
             <AvaText img={Icones.instagram} text1={<Text14400 text='Instagram' color='rgba(187, 187, 187, 1)'/>}/>
             <AvaText img={Icones.twitter} text1={<Text14400 text='Twitter' color='rgba(187, 187, 187, 1)'/>}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
