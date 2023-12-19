import { lazy, Suspense } from 'react';

// import stron

const Header = lazy(() => import('./header/Header'));

const MobileView = () => {
    return (
        <>
            <Suspense fallback={<h1>loading...</h1>}>
                <header>
                    <div className="container" style={{ height: 60 }}>
                        <Header />
                    </div>
                </header>
                <main>
                    <section>{/* tutaj trzeba wstawic sekcje */}</section>
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
