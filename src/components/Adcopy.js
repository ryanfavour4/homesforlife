import { GrMail } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";


const Adcopy = () => {
    return ( 
        <div className="adcopysection">
            <div className="container">
                <div className="col2">

                    <div className="ad-text-input">
                        <div className="ad-text-div">
                        <h1 className="light-weight">
                        We Care to Deliver
                        </h1>
                        <h1 className="bold-weight">
                        Adaptive Solutions
                        </h1>
                        <p className="description">
                        We care to deliver adaptive services and solutions to our customers to achieve and satisfy their needs.
                        </p>
                        </div>
                        <div className="ad-input-div">
                           <form action="" className="form-control">
                            <label htmlFor="email" className="icon-textField">
                            < GrMail className="mail"/>
                                <input type="email" id="email" name="email" placeholder="Email Address" />
                            </label>
                            <div className="submit-box">
                                <input type="submit" className="subscribe" value="Subscribe" />
                            </div>
                           </form>
                        </div>
                    </div>

                    {/*  */}
                    
                    <div className="ad-video-btn">
                        <a className="btn-video center-horizontal md-no-center-horizontal lightbox-iframe" href="https://vimeo.com/45830194">

							<i className="fa fa-play">
                                <FaPlay className="play-icon"/>
                            </i>
						</a>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Adcopy;