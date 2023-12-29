import headerStyle from "./headerStyle.module.css";
import { IconSvg } from "../../iconSvg/IconSvg";

const Header = () => {
    return (
        <div
            className="container"
            style={{
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <a className={headerStyle.header__logo} href="#">
                Web<span style={{ color: "#212121" }}>Studio</span>
            </a>

            {/* blad ikony */}
            <button type="button">
                <IconSvg width={40} height={40} />
            </button>
        </div>
    );
};

export default Header;
