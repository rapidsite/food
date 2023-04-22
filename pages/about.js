import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import QichenCounter from "../src/components/QichenCounter";
import TestimonialSliderThree from "../src/components/slider/TestimonialSliderThree";
import Layout from "../src/layout/Layout";
const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"About Us"} />
      <section className="about-shape-section pt-130 pb-80 p-r z-1">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/about/shape-1.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/about/shape-2.png" alt="shape" />
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-three_image-box text-lg-end mb-20">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <img
                      src="assets/images/about/image-7.jpg"
                      className="about-img-one mb-30 wow fadeInUp"
                      alt="About Image"
                    />
                    <img
                      src="assets/images/about/image-8.jpg"
                      className="about-img-two mb-30 wow fadeInDown"
                      alt="About Image"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/images/about/image-9.jpg"
                      className="about-img-three mb-30 wow fadeInRight"
                      alt="About Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-three_content-box content-box-gap pl-lg-45 mb-50">
                <div className="section-title section-title-left mb-30 wow fadeInUp">
                  <span className="sub-title">About Rapidsite</span>
                  <h2>The most delicious American cuisine you've ever had.</h2>
                </div>
                <p className="wow fadeInDown">
                  We love what we do and treat every customer like family. 
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="fancy-icon-box mb-50 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-food-serving" />
                      </div>
                      <div className="text">
                        <h5>25+ Popular Menu Items</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-icon-box mb-50 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-discuss" />
                      </div>
                      <div className="text">
                        <h5>6534+ Satisfied Customers</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-icon-box mb-50 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-certificate" />
                      </div>
                      <div className="text">
                        <h5>25+ Years Of Experience</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-icon-box mb-50 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-smartphone" />
                      </div>
                      <div className="text">
                        <h5>450+ Online Orders</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-button wow fadeInUp">
                  
                    
                  <a href="tel:000(123)45689" className="call-button">
                    <div className="icon">
                      <i className="fas fa-headset" />
                    </div>
                    <div className="text">
                      <span>Call For Order</span>
                      <h5>(123) 456 8999</h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End About Section ===*/}
      {/*=== Start Team Section ===*/}
      <section className="team-section light-red-bg p-r z-1 pt-120 pb-100">
        <div
          className="dot-bg bg_cover"
          style={{ backgroundImage: "url(assets/images/bg/dot-bg.png)" }}
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Best food menu</span>
                <h2>Meet Our Experience &amp; Master Chefs</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="chef-img">
                  <img src="assets/images/team/chef-7.jpg" alt="Chef Image" />
                  <div className="chef-overlay" />
                  <div className="hover-content">
                    <h3 className="title">Liam Johnson</h3>
                    <p className="position">Executive Chef</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="chef-img">
                  <img src="assets/images/team/chef-8.jpg" alt="Chef Image" />
                  <div className="chef-overlay" />
                  <div className="hover-content">
                    <h3 className="title">Marcus Rodriguez</h3>
                    <p className="position">Sous Chef</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="chef-img">
                  <img src="assets/images/team/chef-9.jpg" alt="Chef Image" />
                  <div className="chef-overlay" />
                  <div className="hover-content">
                    <h3 className="title">avier Lee</h3>
                    <p className="position">Line Cook</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="chef-img">
                  <img src="assets/images/team/chef-10.jpg" alt="Chef Image" />
                  <div className="chef-overlay" />
                  <div className="hover-content">
                    <h3 className="title">Nathan Thompson</h3>
                    <p className="position">Prep Cook</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              
            </div>
          </div>
        </div>
      </section>
      {/*=== End Team Section ===*/}
     
      {/*=== Start Team Section ===*/}
      <section className="testimonial-section-three pb-130">
        <br/>
        <div className="container">
          <TestimonialSliderThree />
        </div>
      </section>
      {/*=== End Team Section ===*/}
      {/*====== Start Partners Section ======*/}
      <Partners />
    </Layout>
  );
};
export default About;
