import { FaCoins } from "react-icons/fa";
import { FaSmileBeam } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";


const Achievement = () => {
    return ( 
        <section className="achievement">
            <div className="container achv-flex">
                <div className="achievement-top-row">
                    <h1 className="achv-section-heading">
                           Some Facts of Our
                        <br />
                        <span className="bold-main-heading">
                           Achievements Numbers
                        </span>
                    </h1>

                    <p className="description">
                        This should be used to tell a story and let your users know a little more about your product or service. How can you benefit them?
                    </p>
                    <a href="/quote" className="btn-white">
                        Get Quote
                    </a>
                </div>

                <div className="achievement-bottom-row">
                   <div className="box-parent">

                    <div className="boxes">
                        <div className="icon-box">
                            <FaCoins className="achievement-icons"/>
                        </div>
                        <div className="counter">
                            <h2>1500</h2>
                        </div>
                        <div className="goal">
                            Projects Completed
                        </div>
                    </div>
                    <div className="boxes">
                        <div className="icon-box">
                            <FaSmileBeam className="achievement-icons"/>
                        </div>
                        <div className="counter">
                            <h2>1240</h2>
                        </div>
                        <div className="goal">
                            Happy Players
                        </div>
                    </div>
                    <div className="boxes">
                        <div className="icon-box">
                            <FaCoffee className="achievement-icons"/>
                        </div>
                        <div className="counter">
                            <h2>1250</h2>
                        </div>
                        <div className="goal">
                            Cups of Coffee
                        </div>
                    </div>
                    <div className="boxes">
                        <div className="icon-box">
                            <FaBusinessTime className="achievement-icons"/>
                        </div>
                        <div className="counter">
                            <h2>21600</h2>
                        </div>
                        <div className="goal">
                            Hours of Work
                        </div>
                    </div>
                   
                   </div>
                </div>
            </div>
        </section>
     );
}
 
export default Achievement;