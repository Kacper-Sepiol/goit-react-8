import mainSectionStyle from "./mainSectionStyle.module.css";

const MainSection = () => {
    return (
        <div className="container">
            <h1 className={mainSectionStyle.mainTitle}>
                efektywne rozwiązanie dla waszego biznesu
            </h1>

            <button type="button" className={mainSectionStyle.mainButton}>
                Zamów usługę
            </button>
        </div>
    );
};

export default MainSection;
