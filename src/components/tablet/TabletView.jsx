import { lazy, Suspense } from "react";

// import stron

const TabletView = () => {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <header>{/* miejsce na header */}</header>
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
