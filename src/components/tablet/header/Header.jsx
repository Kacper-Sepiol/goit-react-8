import headerStyleTablet from "./headerStyleTablet.module.css";

const Header = () => {
    return (
        <div className="container">
            <div className={headerStyleTablet.header}>
                <a href="#" className={headerStyleTablet.mainText}>
                    <span style={{ color: "var(--acent-color)" }}>Web</span>
                    Studio
                </a>

                <ul className={headerStyleTablet.list}>
                    <li className={headerStyleTablet.listItem}>Agencja</li>
                    <li className={headerStyleTablet.listItem}>Portfolio</li>
                    <li className={headerStyleTablet.listItem}>Kontakt</li>
                </ul>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div>
                        {/* tutaj trzeba wstawic ikonke koperty */}
                        <a
                            href="mailto:info@devstudio.com"
                            className={headerStyleTablet.contactDetails}
                        >
                            info@devstudio.com
                        </a>
                    </div>

                    <div>
                        {/* tutaj trzeba wstawic ikonke telefonu */}
                        <a
                            href="tel:+48 111 111 111"
                            className={headerStyleTablet.contactDetails}
                        >
                            +48 111 111 111
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
