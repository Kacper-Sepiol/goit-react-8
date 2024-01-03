import { lazy, Suspense } from "react";
import mainSectionStyle from "./mainSection/mainSectionStyle.module.css";
import secondSectionStyle from "./secondSection/secondSectionStyle.module.css";
import ourTeamSectionStyle from "./ourTeamSection/ourTeamSectionStyle.module.css";
import ourCustomersStyle from "./ourCustomersSection/ourCustomersStyle.module.css";
import footerStyle from "./footer/footerStyle.module.css";

// import stron

const Header = lazy(() => import("./header/Header"));
const MainSection = lazy(() => import("./mainSection/MainSection"));
const SecondSection = lazy(() => import("./secondSection/SecondSection"));
const OurTeamSection = lazy(() => import("./ourTeamSection/OurTeamSection"));
const OurCustomersSection = lazy(() =>
    import("./ourCustomersSection/ourCustomersSection")
);
const Footer = lazy(() => import("./footer/footer"));

const MobileView = () => {
    return (
        <>
            <Suspense fallback={<h1>loading...</h1>}>
                <header>
                    <Header />
                </header>
                <main>
                    <section className={mainSectionStyle.mainSection}>
                        <MainSection />
                    </section>
                    <section className={secondSectionStyle.secondSection}>
                        <SecondSection />
                    </section>
                    <section className={ourTeamSectionStyle.ourTeamSection}>
                        <OurTeamSection />
                    </section>
                    <section className={ourCustomersStyle.ourCustomers}>
                        <OurCustomersSection />
                    </section>
                </main>
                <footer className={footerStyle.footer}>
                    <Footer />
                </footer>
            </Suspense>
        </>
    );
};

export default MobileView;
