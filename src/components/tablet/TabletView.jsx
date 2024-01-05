import { lazy, Suspense } from "react";
import headerStyleTablet from "./header/headerStyleTablet.module.css";

// import stron

const Header = lazy(() => import("./header/Header"));

const TabletView = () => {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <header>
                <Header />
            </header>
            <main>
                <section>{/* main section */}</section>

                <section>{/* second section */}</section>

                <section>{/* our team section */}</section>

                <section>{/* our customers section */}</section>
            </main>
            <footer>{/* footer */}</footer>
        </Suspense>
    );
};

export default TabletView;
