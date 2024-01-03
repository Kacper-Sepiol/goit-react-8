import { lazy, Suspense } from "react";
import mainSectionStyle from "./mainSection/mainSectionStyle.module.css";
import secondSectionStyle from "./secondSection/secondSectionStyle.module.css";
import ourTeamSectionStyle from "./ourTeamSection/ourTeamSectionStyle.module.css";
import ourCustomersStyle from "./ourCustomersSection/ourCustomersStyle.module.css";

// import stron

const Header = lazy(() => import("./header/Header"));
const MainSection = lazy(() => import("./mainSection/MainSection"));
const SecondSection = lazy(() => import("./secondSection/SecondSection"));
const OurTeamSection = lazy(() => import("./ourTeamSection/OurTeamSection"));
const OurCustomersSection = lazy(() =>
    import("./ourCustomersSection/ourCustomersSection")
);

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
                <footer>{/* tutaj trzeba wstawic footer */}</footer>
            </Suspense>
        </>
    );
};

export default MobileView;
