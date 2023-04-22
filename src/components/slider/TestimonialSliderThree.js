import Slider from "react-slick";
import { testimonialSliderThree } from "../../sliderProps";

import { Component, Fragment } from "react";

export class TestimonialSliderThree extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <Fragment>
        <div className="row align-items-end">
          <div className="col-md-8">
            <div className="section-title section-title-left mb-50 wow fadeInLeft">
              <span className="sub-title">Reviews</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-arrows wow fadeInRight mb-60">
              <div className="prev slick-arrow" onClick={this.previous}>
                <i className="far fa-arrow-left" />
              </div>
              <div className="next slick-arrow" onClick={this.next}>
                <i className="far fa-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <Slider
          ref={(c) => (this.slider = c)}
          {...testimonialSliderThree}
          className="testimonial-slider-three wow fadeInUp"
        >
          <div className="single-testimonial-three">
            <div className="testimonial-inner-content">
              <div className="rating-quote-box d-flex align-items-center justify-content-between">
                <div className="ratings-box">
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
                  </ul>
                </div>
                <div className="quote">
                  <i className="flaticon-right-quote" />
                </div>
              </div>
              <h3>“An Amazing Experience”</h3>
              <p>
              "I had an amazing experience at this restaurant. The food was exceptional, and the service was impeccable. I highly recommend the steak, cooked to perfection!"{" "}
              </p>
              <div className="author-title-thumb">
                <div className="author-thumb">
                  <img
                    src="assets/images/testimonial/author-thumb-2.jpg"
                    alt="Author Thumb"
                  />
                </div>
                <div className="author-title">
                  <h3 className="title">Hubert J. Johnson</h3>
                  <p className="position">Local Businessman</p>
                </div>
              </div>
            </div>
          </div>
          <div className="single-testimonial-three">
            <div className="testimonial-inner-content">
              <div className="rating-quote-box d-flex align-items-center justify-content-between">
                <div className="ratings-box">
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
                  </ul>
                </div>
                <div className="quote">
                  <i className="flaticon-right-quote" />
                </div>
              </div>
              <h3>“Fantastic”</h3>
              <p>
              "The ambiance at this restaurant was fantastic - cozy yet elegant. The appetizers were delicious, and the entrees were even better. I can't wait to come back!"{" "}
              </p>
              <div className="author-title-thumb">
                <div className="author-thumb">
                  <img
                    src="assets/images/testimonial/author-thumb-3.jpg"
                    alt="Author Thumb"
                  />
                </div>
                <div className="author-title">
                  <h3 className="title">Dwayne S. Gilfillan</h3>
                  <p className="position">Mayor</p>
                </div>
              </div>
            </div>
          </div>
          <div className="single-testimonial-three">
            <div className="testimonial-inner-content">
              <div className="rating-quote-box d-flex align-items-center justify-content-between">
                <div className="ratings-box">
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
                  </ul>
                </div>
                <div className="quote">
                  <i className="flaticon-right-quote" />
                </div>
              </div>
              <h3>“Incredibly Friendly”</h3>
              <p>
              "The staff at this restaurant were incredibly friendly and attentive. The menu had a great selection of dishes to choose from, and the food was presented beautifully. Overall, a great dining experience."{" "}
              </p>
              <div className="author-title-thumb">
                <div className="author-thumb">
                  <img
                    src="assets/images/testimonial/author-thumb-4.jpg"
                    alt="Author Thumb"
                  />
                </div>
                <div className="author-title">
                  <h3 className="title">Michael B. Jorgensen</h3>
                  <p className="position">Businessman</p>
                </div>
              </div>
            </div>
          </div>
          <div className="single-testimonial-three">
            <div className="testimonial-inner-content">
              <div className="rating-quote-box d-flex align-items-center justify-content-between">
                <div className="ratings-box">
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
                  </ul>
                </div>
                <div className="quote">
                  <i className="flaticon-right-quote" />
                </div>
              </div>
              <h3>“Out of This World”</h3>
              <p>
              "I thoroughly enjoyed the meal I had at this restaurant. The seafood pasta was out of this world, and the dessert was a perfect finish to the meal. Highly recommend!"{" "}
              </p>
              <div className="author-title-thumb">
                <div className="author-thumb">
                  <img
                    src="assets/images/testimonial/author-thumb-2.jpg"
                    alt="Author Thumb"
                  />
                </div>
                <div className="author-title">
                  <h3 className="title">Brian A. Barnes</h3>
                  <p className="position">Local</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </Fragment>
    );
  }
}

export default TestimonialSliderThree;
