import { IconSvg } from "../../iconSvg/IconSvg";
import firstPicture from "../../../img/teamPicture1.jpg";
import secondPicture from "../../../img/teamPicture2.jpg";
import thirdPicture from "../../../img/teamPicture3.jpg";
import fourthPicture from "../../../img/teamPicture4.jpg";
import ourTeamSectionStyle from "./ourTeamSectionStyle.module.css";

const OurTeamSection = () => {
    return (
        <div className="container">
            <h2 className={ourTeamSectionStyle.title}>Nasz zespół</h2>

            <ul className={ourTeamSectionStyle.list}>
                <li className={ourTeamSectionStyle.listItem}>
                    {/* tutaj trzeba dac zdjecie tego goscia */}
                    <img
                        src={firstPicture}
                        alt="usmiechniety mezczyzna w czerwonej koszuli"
                    />

                    <p className={ourTeamSectionStyle.name}>John Doe</p>

                    <p className={ourTeamSectionStyle.occupation}>
                        Product Designer
                    </p>

                    {/* tutaj trzeba dac ikonki */}
                    <ul className={ourTeamSectionStyle.listIcons}>
                        <li className={ourTeamSectionStyle.listIconsListItem}>
                            <IconSvg width={20} height={20} />
                        </li>
                        <li className={ourTeamSectionStyle.listIconsListItem}>
                            <IconSvg width={20} height={20} />
                        </li>
                        <li className={ourTeamSectionStyle.listIconsListItem}>
                            <IconSvg width={20} height={20} />
                        </li>
                        <li className={ourTeamSectionStyle.listIconsListItem}>
                            <IconSvg width={20} height={20} />
                        </li>
                    </ul>
                </li>

                <li className={ourTeamSectionStyle.listItem}>
                    {/* tutaj trzeba dac zdjecie tej laski */}
                    <img
                        src={secondPicture}
                        alt="usmiechniety mezczyzna w czerwonej koszuli"
                    />

                    <p className={ourTeamSectionStyle.name}>John Doe</p>

                    <p className={ourTeamSectionStyle.occupation}>
                        Product Designer
                    </p>

                    {/* tutaj trzeba dac ikonki */}
                    <ul className={ourTeamSectionStyle.listIcons}>
                        <li className={ourTeamSectionStyle.listIconsListItem}>
                            <IconSvg width={20} height={20} />
                        </li>
                        <li className={ourTeamSectionStyle.listIconsListItem}>
                            <IconSvg width={20} height={20} />
                        </li>
                        <li className={ourTeamSectionStyle.listIconsListItem}>
                            <IconSvg width={20} height={20} />
                        </li>
                        <li className={ourTeamSectionStyle.listIconsListItem}>
                            <IconSvg width={20} height={20} />
                        </li>
                    </ul>
                </li>

                <li className={ourTeamSectionStyle.listItem}>
                    {/* tutaj trzeba dac zdjecie tego goscia */}
                    <img
                        src={thirdPicture}
                        alt="usmiechniety mezczyzna w czerwonej koszuli"
                    />

                    <p className={ourTeamSectionStyle.name}>John Doe</p>

                    <p className={ourTeamSectionStyle.occupation}>
                        Product Designer
                    </p>

                    {/* tutaj trzeba dac ikonki */}
                    <ul className={ourTeamSectionStyle.listIcons}>
                        <li className={ourTeamSectionStyle.listIconsListItem}>
                            <IconSvg width={20} height={20} />
                        </li>
                        <li className={ourTeamSectionStyle.listIconsListItem}>
                            <IconSvg width={20} height={20} />
                        </li>
                        <li className={ourTeamSectionStyle.listIconsListItem}>
                            <IconSvg width={20} height={20} />
                        </li>
                        <li className={ourTeamSectionStyle.listIconsListItem}>
                            <IconSvg width={20} height={20} />
                        </li>
                    </ul>
                </li>

                <li className={ourTeamSectionStyle.listItem}>
                    {/* tutaj trzeba dac zdjecie tego goscia */}
                    <img
                        src={fourthPicture}
                        alt="usmiechniety mezczyzna w czerwonej koszuli"
                    />

                    <p className={ourTeamSectionStyle.name}>John Doe</p>

                    <p className={ourTeamSectionStyle.occupation}>
                        Product Designer
                    </p>

                    {/* tutaj trzeba dac ikonki */}
                    <ul className={ourTeamSectionStyle.listIcons}>
                        <li className={ourTeamSectionStyle.listIconsListItem}>
                            <IconSvg width={20} height={20} />
                        </li>
                        <li className={ourTeamSectionStyle.listIconsListItem}>
                            <IconSvg width={20} height={20} />
                        </li>
                        <li className={ourTeamSectionStyle.listIconsListItem}>
                            <IconSvg width={20} height={20} />
                        </li>
                        <li className={ourTeamSectionStyle.listIconsListItem}>
                            <IconSvg width={20} height={20} />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default OurTeamSection;
