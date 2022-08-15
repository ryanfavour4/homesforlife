// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";




const Swiperjs = () => {

    const users = [
        {   "id":1,
            "img":"assets/pngwing.com.png",  
            "comment":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ullam totam nostrum. Nihil repellendus nam ab.",
            "name":"Larry Todd",
            "title":"Art Director, Evanto Market "
        },
        {   "id":2,
            "img":"assets/pngwing.com.png",
            "comment":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ullam totam nostrum. Nihil repellendus nam ab.",
            "name":"Paul Scrivens",
            "title":"Web Developer, Google"
        },
        {   "id":3,
            "img":"assets/pngwing.com.png",
            "comment":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ullam totam nostrum. Nihil repellendus nam ab.",
            "name":"Larry Todd",
            "title":"Team Leader, Facebook"
        },
        {   "id":4,
            "img":"assets/pngwing.com.png",
            "comment":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ullam totam nostrum. Nihil repellendus nam ab.",
            "name":"Larry Todd",
            "title":"Art Director, Evanto Market "
        }
    ]



    return ( 
        <div className="swiper-box">
            <div className="container">
            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                      {users.map((user)=>{
                            return <>
                                <SwiperSlide className="user-box-parent" key={user.id}>
                                    <div className="inner-testimonial-box">
                                        <div className="top-comment-testimonial">
                                            <p className="description">
                                                {user.comment}
                                            </p>
                                        </div>
                                        <div className="bottom-user-profile">
                                            <div className="profile-box">
                                                <img src={user.img} alt="" />
                                            </div>
                                            <div className="name-title">
                                                <h3>{user.name}</h3>
                                                <p><small>{user.title}</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide> 
                            </>
                      })}
                </Swiper>
            </>
            </div>
        </div>
     );
}

export default Swiperjs;