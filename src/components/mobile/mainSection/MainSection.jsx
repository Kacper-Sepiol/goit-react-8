import mainSectionStyleMobile from "./mainSectionStyleMobile.module.css";

const MainSection = () => {
    return (
        <div className="container">
            <h1 className={mainSectionStyleMobile.mainTitle}>
                efektywne rozwiązanie dla waszego biznesu
            </h1>

            <button type="button" className={mainSectionStyleMobile.mainButton}>
                Zamów usługę
            </button>
        </div>
    );
};

export default MainSection;
