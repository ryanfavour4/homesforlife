import Header from "../components/Header";
import Services from "../components/Services";
import Main from "../components/Main";
import Achievement from "../components/Achievements"
import Testimonials from "../components/Testimonials";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

const Home = () => {
    return ( 
        <div className="home-page">
            <Header/>
            <Services/>
            <Main/>
            <Achievement/>
            <Testimonials/>
            <Sponsors/>
            <Footer/>
        </div>
     );
}
 
export default Home;