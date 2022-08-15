import Swiperjs from "./Swiperjs";



const Testimonials = () => {


    return ( 
        
        <section className="testimonials-section">
            <div className="container">
                
                <div className="top-testimonial-section">
                    <h1 className="testimoial-section-heading">
                            Did You Hear About Our
                            <br />
                        <span className="bold-main-heading">
                            Customers Testimonials
                        </span>
                   </h1>
                   <p className="description">
                        This should be used to tell a story and let your users know a little more about your product or service. How can you benefit them?
                   </p>
                </div>


                <div className="testimonials-slide-container">
                    <Swiperjs/>
                </div>

            </div>
        </section>
     );
}
 
export default Testimonials;