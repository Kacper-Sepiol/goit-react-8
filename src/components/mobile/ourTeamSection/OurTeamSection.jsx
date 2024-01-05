// import { IconSvg } from "../../iconSvg/IconSvg";
import firstPicture from "../../../img/teamPicture1.jpg";
import secondPicture from "../../../img/teamPicture2.jpg";
import thirdPicture from "../../../img/teamPicture3.jpg";
import fourthPicture from "../../../img/teamPicture4.jpg";
import ourTeamSectionStyleMobile from "./ourTeamSectionStyleMobile.module.css";

const OurTeamSection = () => {
    return (
        <div className="container">
            <h2 className={ourTeamSectionStyleMobile.title}>Nasz zespół</h2>

            <ul className={ourTeamSectionStyleMobile.list}>
                <li className={ourTeamSectionStyleMobile.listItem}>
                    <img
                        src={firstPicture}
                        alt="usmiechniety mezczyzna w czerwonej koszuli"
                    />

                    <p className={ourTeamSectionStyleMobile.name}>John Doe</p>

                    <p className={ourTeamSectionStyleMobile.occupation}>
                        Product Designer
                    </p>

                    {/* tutaj trzeba dac ikonki */}
                    <ul className={ourTeamSectionStyleMobile.listIcons}>
                        <li
                            className={
                                ourTeamSectionStyleMobile.listIconsListItem
                            }
                        >
                            {/* <IconSvg width={20} height={20} /> */}
                        </li>
                        <li
                            className={
                                ourTeamSectionStyleMobile.listIconsListItem
                            }
                        >
                            {/* <IconSvg width={20} height={20} /> */}
                        </li>
                        <li
                            className={
                                ourTeamSectionStyleMobile.listIconsListItem
                            }
                        >
                            {/* <IconSvg width={20} height={20} /> */}
                        </li>
                        <li
                            className={
                                ourTeamSectionStyleMobile.listIconsListItem
                            }
                        >
                            {/* <IconSvg width={20} height={20} /> */}
                        </li>
                    </ul>
                </li>

                <li className={ourTeamSectionStyleMobile.listItem}>
                    <img
                        src={secondPicture}
                        alt="usmiechniety mezczyzna w czerwonej koszuli"
                    />

                    <p className={ourTeamSectionStyleMobile.name}>John Doe</p>

                    <p className={ourTeamSectionStyleMobile.occupation}>
                        Frontend Developer
                    </p>

                    {/* tutaj trzeba dac ikonki */}
                    <ul className={ourTeamSectionStyleMobile.listIcons}>
                        <li
                            className={
                                ourTeamSectionStyleMobile.listIconsListItem
                            }
                        >
                            {/* <IconSvg width={20} height={20} /> */}
                        </li>
                        <li
                            className={
                                ourTeamSectionStyleMobile.listIconsListItem
                            }
                        >
                            {/* <IconSvg width={20} height={20} /> */}
                        </li>
                        <li
                            className={
                                ourTeamSectionStyleMobile.listIconsListItem
                            }
                        >
                            {/* <IconSvg width={20} height={20} /> */}
                        </li>
                        <li
                            className={
                                ourTeamSectionStyleMobile.listIconsListItem
                            }
                        >
                            {/* <IconSvg width={20} height={20} /> */}
                        </li>
                    </ul>
                </li>

                <li className={ourTeamSectionStyleMobile.listItem}>
                    <img
                        src={thirdPicture}
                        alt="usmiechniety mezczyzna w czerwonej koszuli"
                    />

                    <p className={ourTeamSectionStyleMobile.name}>John Doe</p>

                    <p className={ourTeamSectionStyleMobile.occupation}>
                        Marketing
                    </p>

                    {/* tutaj trzeba dac ikonki */}
                    <ul className={ourTeamSectionStyleMobile.listIcons}>
                        <li
                            className={
                                ourTeamSectionStyleMobile.listIconsListItem
                            }
                        >
                            {/* <IconSvg width={20} height={20} /> */}
                        </li>
                        <li
                            className={
                                ourTeamSectionStyleMobile.listIconsListItem
                            }
                        >
                            {/* <IconSvg width={20} height={20} /> */}
                        </li>
                        <li
                            className={
                                ourTeamSectionStyleMobile.listIconsListItem
                            }
                        >
                            {/* <IconSvg width={20} height={20} /> */}
                        </li>
                        <li
                            className={
                                ourTeamSectionStyleMobile.listIconsListItem
                            }
                        >
                            {/* <IconSvg width={20} height={20} /> */}
                        </li>
                    </ul>
                </li>

                <li className={ourTeamSectionStyleMobile.listItem}>
                    <img
                        src={fourthPicture}
                        alt="usmiechniety mezczyzna w czerwonej koszuli"
                    />

                    <p className={ourTeamSectionStyleMobile.name}>John Doe</p>

                    <p className={ourTeamSectionStyleMobile.occupation}>
                        UI Designer
                    </p>

                    {/* tutaj trzeba dac ikonki */}
                    <ul className={ourTeamSectionStyleMobile.listIcons}>
                        <li
                            className={
                                ourTeamSectionStyleMobile.listIconsListItem
                            }
                        >
                            {/* <IconSvg width={20} height={20} /> */}
                        </li>
                        <li
                            className={
                                ourTeamSectionStyleMobile.listIconsListItem
                            }
                        >
                            {/* <IconSvg width={20} height={20} /> */}
                        </li>
                        <li
                            className={
                                ourTeamSectionStyleMobile.listIconsListItem
                            }
                        >
                            {/* <IconSvg width={20} height={20} /> */}
                        </li>
                        <li
                            className={
                                ourTeamSectionStyleMobile.listIconsListItem
                            }
                        >
                            {/* <IconSvg width={20} height={20} /> */}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default OurTeamSection;
