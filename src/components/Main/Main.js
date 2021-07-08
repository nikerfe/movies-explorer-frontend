import Header from '../Header/Header.js';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Techs from '../Techs/Techs';
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';

function Main() {
    return (
        <>
            <Header />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
        </>
    );
}

export default Main;
