import Header from              "../General/HomeComponents/header";

import HomeCarousel from        "../General/HomeComponents/home-carousel";
import Purpose from             "../General/HomeComponents/purpose";
import Team from                "../General/HomeComponents/team";
import WorkFooter from          "../General/HomeComponents/work-footer";
import Featured from            "../General/HomeComponents/featured";

function Home() {
    return(
        <>
            <Header />
            <HomeCarousel />
            <Purpose />
            <Featured />
            <Team />
            <WorkFooter />
        </>
    )
}

export default Home