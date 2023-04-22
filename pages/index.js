import Link from "next/link";
import Slider from "react-slick";
import { ReservationsFromLg12 } from "../src/components/ReservationsFrom";
import Layout from "../src/layout/Layout";
import { testimonialSliderOne } from "../src/sliderProps";
import QichenCounter from "../src/components/QichenCounter";
const Index = () => {
  return (
    <Layout header={1} footer={1}>
      {/*=== Start Banner Section ===*/}
      <section className="banner-one p-r z-1">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/hero/hero-shape-1.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/hero/hero-shape-2.png" alt="shape" />
          </span>
        </div>
        <div className="shape line-shape-one">
          <span>
            <img src="assets/images/shape/line-1.png" alt="shape" />
          </span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              {/*=== Hero Content ===*/}
              <div className="hero-content mb-40 pr-lg-40">
                <h1 className="wow fadeInUp">Crispy Chicken Sandwiches</h1>
                <p className="wow fadeInDown">
                  Delicious crispy chicken sandwiches topped with lettuce, tomatoes, & cheese on a sesame seed bun.
                </p>
                <div className="hero-button wow fadeInUp">
                  <span>
                    <img src="assets/images/down-arrow.png" alt="" />
                  </span>
                  <Link legacyBehavior href="/menu-fastfood">
                    <a className="main-btn btn-red">
                      order now
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
              {/*=== Hero Image ===*/}
              <div className="hero-image-box mb-40 wow fadeInRight">
                <img src="assets/images/hero/hero-1.jpg" alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Banner Section ===*/}
      {/*=== Start Category Section ===*/}
      <section
        className="category-bg-section pt-70 pb-80 p-r z-1"
        style={{ backgroundImage: "url(assets/images/bg/category-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Section Title ===*/}
              <div className="section-title text-center text-white mb-50 wow fadeInDown">
                <span className="sub-title">Our Selection</span>
                <h2>Pick Your Favorite</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Category Item ===*/}
              <div className="single-category-item mb-30 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-1.png" alt="thumb icon" />
                </div>
                <div className="content d-flex">
                  <h3 className="title">
                    <Link legacyBehavior href="/menu-fastfood">
                      <a>Pizza</a>
                    </Link>
                  </h3>
                  <Link legacyBehavior href="/menu-fastfood">
                    <a className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Category Item ===*/}
              <div className="single-category-item mb-30 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-2.png" alt="thumb icon" />
                </div>
                <div className="content d-flex">
                  <h3 className="title">
                    <Link legacyBehavior href="/menu-fastfood">
                      <a>Burger</a>
                    </Link>
                  </h3>
                  <Link legacyBehavior href="/menu-fastfood">
                    <a className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Category Item ===*/}
              <div className="single-category-item mb-30 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-3.png" alt="thumb icon" />
                </div>
                <div className="content d-flex">
                  <h3 className="title">
                    <Link legacyBehavior href="/menu-fastfood">
                      Deserts
                    </Link>
                  </h3>
                  <Link legacyBehavior href="/menu-fastfood">
                    <a className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Category Item ===*/}
              <div className="single-category-item mb-30 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-4.png" alt="thumb icon" />
                </div>
                <div className="content d-flex">
                  <h3 className="title">
                    <Link legacyBehavior href="/menu-fastfood">
                      Seafoods
                    </Link>
                  </h3>
                  <Link legacyBehavior href="/menu-fastfood">
                    <a className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Category Item ===*/}
              <div className="single-category-item mb-30 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-5.png" alt="thumb icon" />
                </div>
                <div className="content d-flex">
                  <h3 className="title">
                    <Link legacyBehavior href="/menu-fastfood">
                      Drinks
                    </Link>
                  </h3>
                  <Link legacyBehavior href="/menu-fastfood">
                    <a className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Category Item ===*/}
              <div className="single-category-item mb-30 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-6.png" alt="thumb icon" />
                </div>
                <div className="content d-flex">
                  <h3 className="title">
                    <Link legacyBehavior href="/menu-fastfood">
                      Chicken
                    </Link>
                  </h3>
                  <Link legacyBehavior href="/menu-fastfood">
                    <a className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              {/*=== Quote Box ===*/}
            
            </div>
          </div>
        </div>
      </section>
      {/*=== End Category Section ===*/}
      {/*=== Start About Section ===*/}
      <section className="about-section pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              {/*=== About Content Box ===*/}
              <div className="about-content-box content-box-gap mb-40 wow fadeInLeft">
                <div className="section-title section-title-left mb-30">
                  <span className="sub-title">About Us</span>
                  <h2>
                    Unleash Your Cravings with our Premium Chicken Delights!
                  </h2>
                </div>
                <p>
                We take fast food to the next level with our premium chicken dishes, made to order with only the best ingredients. From crispy chicken sandwiches to juicy wings and tenders, we've got it all. Come indulge in the ultimate chicken experience and see what all the fuss is about!
                </p>
                <Link legacyBehavior href="/menu-seafood">
                  <a className="main-btn btn-red">
                    learn more
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              {/*=== About Content Box ===*/}
              <div className="about-image-gallery ml-lg-40">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="assets/images/about/image-1.jpg"
                      className="mb-40 wow fadeInUp"
                      alt="About Image"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/images/about/image-2.jpg"
                      className="mb-40 wow fadeInDown"
                      alt="About Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End About Section ===*/}
      {/*=== Start Fact Section ===*/}
      <section className="fact-section dark-red-bg pt-75 pb-35">
        <div className="container">
          <QichenCounter />
        </div>
      </section>
      {/*=== End Fact Section ===*/}
      {/*=== Start Menu Section ===*/}
      <section className="menu-section pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <br/>
                <h2>Some of our options</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/*=== Menu Image Box ===*/}
              <div className="menu-image-box mb-50 pl-lg-30 wow fadeInLeft">
                <img
                  src="assets/images/menu/menu-single-1.jpg"
                  alt="Menu Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Single Content Box ===*/}
              <div className="menu-content-box mb-50">
                {/*=== Single Menu Item ===*/}
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-1.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Cheeseburger</a>
                      </Link>
                      <span className="dot-border" />
                      <span className="price">$15</span>
                    </h3>
                    <p>Topped with lettuce, tomatoes, cheese, pickles, & mayo.</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*=== Single Menu Item ===*/}
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-2.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Chicken Sandwich Pizza</a>
                      </Link>
                      <span className="dot-border" />
                      <span className="price">$13</span>
                    </h3>
                    <p>Topped with lettuce, tomatoes, cheese, pickles, & mayo.</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*=== Single Menu Item ===*/}
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-3.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Baked Chicken Wings</a>
                      </Link>
                      <span className="dot-border" />
                      <span className="price">$19</span>
                    </h3>
                    <p>Served with your choice of seasoning & a side of sauce.</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*=== Single Menu Item ===*/}
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-4.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Buffalo Chicken Pizza</a>
                      </Link>
                      <span className="dot-border" />
                      <span className="price">$12</span>
                    </h3>
                    <p>Buffalo sauce, ranch, onions, jalepeno, oven baked.</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Menu Section ===*/}
      
      
      {/*=== Start Working Section ===*/}
      <section className="working-bg-section pt-130 pb-110 light-red-bg p-r z-1">
        <div
          className="dot-bg bg_cover"
          style={{ backgroundImage: "url(assets/images/bg/dot-bg.png)" }}
        />
        <div
          className="hours-bg bg_cover"
          style={{ backgroundImage: "url(assets/images/bg/hours-bg-1.jpg)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/*=== Working Content Box ===*/}
              <div className="working-content-box wow fadeInLeft">
                <div className="section-title section-title-left mb-50">
                  <span className="sub-title">Hours</span>
                  <h2>Come enjoy 6 days a week!</h2>
                </div>
                <div className="single-hour-box mb-20">
                  <h4 className="title">
                    Monday - Friday <span className="dot-border" />
                    <span className="time">10am-10pm</span>
                  </h4>
                </div>
                <div className="single-hour-box mb-20">
                  <h4 className="title">
                    Saturday
                    <span className="dot-border" />
                    <span className="time">10am-11pm</span>
                  </h4>
                </div>
                <div className="single-hour-box mb-20">
                  <h4 className="title">
                    Sunday
                    <span className="dot-border" />
                    <span className="time">Closed</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Working Section ===*/}
      {/*=== Start Reservation Section ===*/}
      <section className="reservation-line-section p-r z-1 pt-130 pb-80">
        <div className="line-shape line-shape-one">
          <span>
            <img src="assets/images/shape/line-1.png" alt="Shape" />
          </span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/*=== Reservation Image Box ===*/}
              <div className="reservation-image-box wow fadeInLeft mb-50 mb-20">
                <img
                  src="assets/images/contact/contact-1.jpg"
                  alt="Reservation Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Reservation Content Box ===*/}
              <div className="reservation-content-box content-box-gap wow fadeInRight mb-50 pl-lg-70">
                <div className="section-title section-title-left mb-20">
                  <span className="sub-title">Book a table</span>
                  <h2>Make A Reservation</h2>
                </div>
                <p>
                  Secure a spot for a busy evening to guarantee you get a delicious dinner.
                </p>
                {/*=== Reservation Form ===*/}
                <div className="reservation-style-one">
                  <ReservationsFromLg12 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Reservation Section ===*/}
      
      {/*=== Start Instagram Section ===*/}
      <section className="instagram-gallery pt-130 pb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInUp">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-1.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-1.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInDown">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-2.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-2.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInUp">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-3.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-3.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInDown">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-4.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-4.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInUp">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-5.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-5.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInDown">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-6.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-6.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInUp">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-7.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-7.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInDown">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-8.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-8.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInUp">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-9.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-9.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInDown">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-10.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-10.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInUp">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-11.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-11.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInDown">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-12.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-12.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Instagram Section ===*/}
    </Layout>
  );
};
export default Index;
