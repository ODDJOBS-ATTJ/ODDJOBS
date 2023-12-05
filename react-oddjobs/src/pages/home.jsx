import Header from "../components/home-components/header";

import HomeCarousel from "../components/home-components/home-carousel";
import Purpose from "../components/home-components/purpose";
import Team from "../components/home-components/team";
import WorkFooter from "../components/home-components/work-footer";
import Featured from "../components/home-components/featured";

import { Helmet } from "react-helmet";


function Home() {
    return(
        <>
            <Header />
            <HomeCarousel />
            <Purpose />
            <Featured />
            <Team />
            <WorkFooter />
            <Helmet>
                <script src="../../../ODDJOBS/General/home/CSS+JS/home.js"></script>
            </Helmet>
        </>
    )
}

export default Home