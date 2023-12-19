import headerStyle from "./headerStyle.module.css";

const Header = () => {
    return (
        <div
            className="container"
            style={{ height: 60, display: "flex", alignItems: "center" }}
        >
            <a className={headerStyle.header__logo} href="#">
                WebStudio
            </a>

            {/* tutaj powinna byc ikona */}
        </div>
    );
};

export default Header;
