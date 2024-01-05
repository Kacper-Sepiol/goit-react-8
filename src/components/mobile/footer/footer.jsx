import footerStyleMobile from "./footerStyleMobile.module.css";

const footer = () => {
    return (
        <div className="container">
            <h2 className={footerStyleMobile.mainTitle}>
                <span style={{ color: "var(--acent-color)" }}>Web</span>Studio
            </h2>

            <address className={footerStyleMobile.address}>
                m. Warszawa, Aleje Jerozolimskie 21
            </address>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 8,
                }}
            >
                <a
                    href="mailto:info@example.com"
                    className={footerStyleMobile.contactDetails}
                >
                    info@example.com
                </a>

                <a
                    href="tel:+48 111 111 111"
                    className={footerStyleMobile.contactDetails}
                >
                    +48 111 111 111
                </a>
            </div>

            <div>
                <p className={footerStyleMobile.divText}>Dołącz do nas</p>

                <ul className={footerStyleMobile.list}>
                    <li className={footerStyleMobile.listItem}>
                        {/* tutaj powinna byc ikona */}
                    </li>
                    <li className={footerStyleMobile.listItem}>
                        {/* tutaj powinna byc ikona */}
                    </li>
                    <li className={footerStyleMobile.listItem}>
                        {/* tutaj powinna byc ikona */}
                    </li>
                    <li className={footerStyleMobile.listItem}>
                        {/* tutaj powinna byc ikona */}
                    </li>
                </ul>
            </div>

            <p className={footerStyleMobile.text}>Zapisz się do newslettera</p>

            <form className={footerStyleMobile.form}>
                <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    required
                    className={footerStyleMobile.input}
                />

                <button type="submit" className={footerStyleMobile.button}>
                    Zapisz się {/*tutaj powinna byc ikona */}
                </button>
            </form>
        </div>
    );
};

export default footer;
