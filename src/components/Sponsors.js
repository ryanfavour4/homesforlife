import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";


const Sponsors = () => {
    return ( 
        <div className="sponsors-box">
            <div className="container">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                 <SwiperSlide className="sponsor-parent-innerbox">
                    <a href="https://www.intelligentsiatalk.com" className="sponsor-link">
                        <img src="assets\Icon transparency 2.png" alt="" />
                    </a>
                 </SwiperSlide>
            </Swiper>
            </div>
        </div>
     );
}
 
export default Sponsors;