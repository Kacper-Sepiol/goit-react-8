import secondSectionStyleMobile from "./secondSectionStyleMobile.module.css";
// import { IconSvg } from "../../iconSvg/IconSvg";

const SecondSection = () => {
    return (
        <div className="container">
            <ul className={secondSectionStyleMobile.list}>
                <li className={secondSectionStyleMobile.listItem}>
                    <div className={secondSectionStyleMobile.listItemIcon}>
                        {/* ikona do poprawy!!! */}
                        {/* <IconSvg width={70} height={70} /> */}
                        <div
                            style={{
                                width: 70,
                                height: 70,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </div>

                    <p className={secondSectionStyleMobile.title}>
                        Lorem ipsum
                    </p>

                    <p className={secondSectionStyleMobile.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam vel arcu sem. Sed non sodales dui. Interdum et
                        malesuada
                    </p>
                </li>

                <li className={secondSectionStyleMobile.listItem}>
                    <div className={secondSectionStyleMobile.listItemIcon}>
                        {/* ikona do poprawy!!! */}
                        {/* <IconSvg width={70} height={70} /> */}
                        <div
                            style={{
                                width: 70,
                                height: 70,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </div>

                    <p className={secondSectionStyleMobile.title}>
                        Lorem ipsum
                    </p>

                    <p className={secondSectionStyleMobile.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam vel arcu sem. Sed non sodales dui. Interdum et
                        malesuada
                    </p>
                </li>

                <li className={secondSectionStyleMobile.listItem}>
                    <div className={secondSectionStyleMobile.listItemIcon}>
                        {/* ikona do poprawy!!! */}
                        {/* <IconSvg width={70} height={70} /> */}
                        <div
                            style={{
                                width: 70,
                                height: 70,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </div>

                    <p className={secondSectionStyleMobile.title}>
                        Lorem ipsum
                    </p>

                    <p className={secondSectionStyleMobile.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam vel arcu sem. Sed non sodales dui. Interdum et
                        malesuada
                    </p>
                </li>

                <li className={secondSectionStyleMobile.listItem}>
                    <div className={secondSectionStyleMobile.listItemIcon}>
                        {/* ikona do poprawy!!! */}
                        {/* <IconSvg width={70} height={70} /> */}
                        <div
                            style={{
                                width: 70,
                                height: 70,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </div>

                    <p className={secondSectionStyleMobile.title}>
                        Lorem ipsum
                    </p>

                    <p className={secondSectionStyleMobile.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam vel arcu sem. Sed non sodales dui. Interdum et
                        malesuada
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default SecondSection;
