import ourCustomersStyleMobile from "./ourCustomersStyleMobile.module.css";
// import { IconSvg } from "../../iconSvg/IconSvg";

const ourCustomersSection = () => {
    return (
        <div className="container">
            <h2 className={ourCustomersStyleMobile.mainTitle}>Nasi klienci</h2>

            <ul className={ourCustomersStyleMobile.list}>
                <li className={ourCustomersStyleMobile.listItem}>
                    {/* tutaj powinna byc ikona */}
                    {/* <IconSvg width={106} height={60} /> */}
                </li>

                <li className={ourCustomersStyleMobile.listItem}>
                    {/* tutaj powinna byc ikona */}
                    {/* <IconSvg width={106} height={60} /> */}
                </li>

                <li className={ourCustomersStyleMobile.listItem}>
                    {/* tutaj powinna byc ikona */}
                    {/* <IconSvg width={106} height={60} /> */}
                </li>

                <li className={ourCustomersStyleMobile.listItem}>
                    {/* tutaj powinna byc ikona */}
                    {/* <IconSvg width={106} height={60} /> */}
                </li>

                <li className={ourCustomersStyleMobile.listItem}>
                    {/* tutaj powinna byc ikona */}
                    {/* <IconSvg width={106} height={60} /> */}
                </li>

                <li className={ourCustomersStyleMobile.listItem}>
                    {/* tutaj powinna byc ikona */}
                    {/* <IconSvg width={106} height={60} /> */}
                </li>
            </ul>
        </div>
    );
};

export default ourCustomersSection;
