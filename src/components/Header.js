import Nav from "./Nav";
import Adcopy from "./Adcopy";

const Header = () => {
    return ( 
        <header className="header-home">
            <video className="bg-video" autoPlay loop muted >
                <source src="\assets\hero video.mp4" type="video/mp4" />
            </video>
            <div className="overlay"></div>
            <div className="slide-content">
                <div className="hero-section">
                    <Nav/>
                    <Adcopy/>
                </div>
            </div>
        </header>
     );
}
 
export default Header;