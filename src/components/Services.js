import { FaRegLightbulb } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";



const Services = () => {
    return ( 
        <section className="what-we-deliver">
            <div className="container">
                <div className="flex-section">
                    <div className="service-boxes m-b">
                        <h3>
                            <span className="light-font">What</span> <br/>
                            <span className="bold-font">We Deliver</span> <br/>
                            <span className="light-font">to Our Users</span>
                        </h3>
                    </div>

                    <div className="service-boxes">
                        <div className="box-icon">
                            <div className="icon">
                                <FaRegLightbulb className="fa-icon"/>
                            </div>
                        </div>
                        <div className="box-content">
                            <h3 className="content-heading">
                                Strategy & Planning
                            </h3>
                            <p className="content-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus.
                            </p>
                        </div>
                    </div>
                    
                    <div className="service-boxes">
                        <div className="box-icon">
                            <div className="icon">
                                <FaChartLine className="fa-icon"/>
                            </div>
                        </div>
                        <div className="box-content">
                            <h3 className="content-heading">
                                 Fast Development
                            </h3>
                            <p className="content-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus.
                            </p>
                        </div>
                    </div>
                    
                    <div className="service-boxes">
                        <div className="box-icon">
                            <div className="icon">
                                <FaCheck className="fa-icon"/>
                            </div>
                        </div>
                        <div className="box-content">
                            <h3 className="content-heading">
                                 Product Launch
                            </h3>
                            <p className="content-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
     );
}
 
export default Services;