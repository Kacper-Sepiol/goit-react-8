import headerStyleMobile from "./headerStyleMobile.module.css";

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
            <a className={headerStyleMobile.headerLogo} href="#">
                Web<span style={{ color: "#212121" }}>Studio</span>
            </a>

            {/* blad ikony */}
            <button type="button" className={headerStyleMobile.button}>
                <svg width={40} height={40}>
                    <path d="M6.4 11.736v-2.136h19.2v2.136h-19.2zM6.4 17.064h19.2v-2.128h-19.2v2.128zM6.4 22.4h19.2v-2.136h-19.2v2.136z"></path>
                </svg>
            </button>
        </div>
    );
};

export default Header;
