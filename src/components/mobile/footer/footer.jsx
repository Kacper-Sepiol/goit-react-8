import footerStyle from "./footerStyle.module.css";

const footer = () => {
    return (
        <div className="container">
            <h2 className={footerStyle.mainTitle}>
                <span style={{ color: "var(--acent-color)" }}>Web</span>Studio
            </h2>

            <address className={footerStyle.address}>
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
                    className={footerStyle.contactDetails}
                >
                    info@example.com
                </a>

                <a
                    href="tel:+48 111 111 111"
                    className={footerStyle.contactDetails}
                >
                    +48 111 111 111
                </a>
            </div>

            <div>
                <p className={footerStyle.divText}>Dołącz do nas</p>

                <ul className={footerStyle.list}>
                    <li className={footerStyle.listItem}>
                        {/* tutaj powinna byc ikona */}
                    </li>
                    <li className={footerStyle.listItem}>
                        {/* tutaj powinna byc ikona */}
                    </li>
                    <li className={footerStyle.listItem}>
                        {/* tutaj powinna byc ikona */}
                    </li>
                    <li className={footerStyle.listItem}>
                        {/* tutaj powinna byc ikona */}
                    </li>
                </ul>
            </div>

            <p className={footerStyle.text}>Zapisz się do newslettera</p>

            <form className={footerStyle.form}>
                <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    required
                    className={footerStyle.input}
                />

                <button type="submit" className={footerStyle.button}>
                    Zapisz się {/*tutaj powinna byc ikona */}
                </button>
            </form>
        </div>
    );
};

export default footer;
