import headerStyle from './headerStyle.module.css';

const Header = () => {
    return (
        <div>
            <a className={headerStyle.header__logo} href="#">
                WebStudio
            </a>

            {/* tutaj powinna byc ikona */}
        </div>
    );
};

export default Header;
