import { lazy, Suspense } from "react";
import mainSectionStyle from "./mainSection/MainSectionStyle.module.css";

// import stron

const Header = lazy(() => import("./header/Header"));
const MainSection = lazy(() => import("./mainSection/MainSection"));

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
                    <section>{/* tutaj trzeba wstawic sekcje */}</section>
                    <section>{/* tutaj trzeba wstawic sekcje */}</section>
                    <section>{/* tutaj trzeba wstawic sekcje */}</section>
                </main>
                <footer>{/* tutaj trzeba wstawic footer */}</footer>
            </Suspense>
        </>
    );
};

export default MobileView;
