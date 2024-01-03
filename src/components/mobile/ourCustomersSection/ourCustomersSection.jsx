import ourCustomersStyle from "./ourCustomersStyle.module.css";
import { IconSvg } from "../../iconSvg/IconSvg";

const ourCustomersSection = () => {
    return (
        <div className="container">
            <h2 className={ourCustomersStyle.mainTitle}>Nasi klienci</h2>

            <ul className={ourCustomersStyle.list}>
                <li className={ourCustomersStyle.listItem}>
                    {/* tutaj powinna byc ikona */}
                    <IconSvg width={106} height={60} />
                </li>

                <li className={ourCustomersStyle.listItem}>
                    {/* tutaj powinna byc ikona */}
                    <IconSvg width={106} height={60} />
                </li>

                <li className={ourCustomersStyle.listItem}>
                    {/* tutaj powinna byc ikona */}
                    <IconSvg width={106} height={60} />
                </li>

                <li className={ourCustomersStyle.listItem}>
                    {/* tutaj powinna byc ikona */}
                    <IconSvg width={106} height={60} />
                </li>

                <li className={ourCustomersStyle.listItem}>
                    {/* tutaj powinna byc ikona */}
                    <IconSvg width={106} height={60} />
                </li>

                <li className={ourCustomersStyle.listItem}>
                    {/* tutaj powinna byc ikona */}
                    <IconSvg width={106} height={60} />
                </li>
            </ul>
        </div>
    );
};

export default ourCustomersSection;
