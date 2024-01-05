import { lazy, Suspense } from "react";
import mainSectionStyleMobile from "./mainSection/mainSectionStyleMobile.module.css";
import secondSectionStyleMobile from "./secondSection/secondSectionStyleMobile.module.css";
import ourTeamSectionStyleMobile from "./ourTeamSection/ourTeamSectionStyleMobile.module.css";
import ourCustomersStyleMobile from "./ourCustomersSection/ourCustomersStyleMobile.module.css";
import footerStyleMobile from "./footer/footerStyleMobile.module.css";

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
                    <section className={mainSectionStyleMobile.mainSection}>
                        <MainSection />
                    </section>

                    <section className={secondSectionStyleMobile.secondSection}>
                        <SecondSection />
                    </section>

                    <section
                        className={ourTeamSectionStyleMobile.ourTeamSection}
                    >
                        <OurTeamSection />
                    </section>

                    <section className={ourCustomersStyleMobile.ourCustomers}>
                        <OurCustomersSection />
                    </section>
                </main>
                <footer className={footerStyleMobile.footer}>
                    <Footer />
                </footer>
            </Suspense>
        </>
    );
};

export default MobileView;
