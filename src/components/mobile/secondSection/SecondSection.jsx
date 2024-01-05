import secondSectionStyle from "./secondSectionStyle.module.css";
// import { IconSvg } from "../../iconSvg/IconSvg";

const SecondSection = () => {
    return (
        <div className="container">
            <ul className={secondSectionStyle.list}>
                <li className={secondSectionStyle.listItem}>
                    <div className={secondSectionStyle.listItemIcon}>
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

                    <p className={secondSectionStyle.title}>Lorem ipsum</p>

                    <p className={secondSectionStyle.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam vel arcu sem. Sed non sodales dui. Interdum et
                        malesuada
                    </p>
                </li>

                <li className={secondSectionStyle.listItem}>
                    <div className={secondSectionStyle.listItemIcon}>
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

                    <p className={secondSectionStyle.title}>Lorem ipsum</p>

                    <p className={secondSectionStyle.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam vel arcu sem. Sed non sodales dui. Interdum et
                        malesuada
                    </p>
                </li>

                <li className={secondSectionStyle.listItem}>
                    <div className={secondSectionStyle.listItemIcon}>
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

                    <p className={secondSectionStyle.title}>Lorem ipsum</p>

                    <p className={secondSectionStyle.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam vel arcu sem. Sed non sodales dui. Interdum et
                        malesuada
                    </p>
                </li>

                <li className={secondSectionStyle.listItem}>
                    <div className={secondSectionStyle.listItemIcon}>
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

                    <p className={secondSectionStyle.title}>Lorem ipsum</p>

                    <p className={secondSectionStyle.description}>
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
