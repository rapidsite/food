import Link from "next/link";

const DefaultFooter = () => {
  return (
    <footer className="footer-dark dark-black-bg text-white p-r z-1 pt-80">
      {/*=== Footer Widget ===*/}
      <div className="footer-widget-area pb-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="footer-widget about-company-widget pr-lg-30 mb-40 wow fadeInUp">
                <div className="footer-content">
                  <Link legacyBehavior href="/">
                    <a className="footer-logo mb-30">
                      <img
                        src="assets/images/logo/logo-white.png"
                        alt="Brand Logo"
                      />
                    </a>
                  </Link>
                  <p>
                  Experience the best of american flavor at our table.
                  </p>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <label>
                        <i className="far fa-arrow-right" />
                      </label>
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            
            <div className="col-lg-5 col-md-6">
              <div className="footer-widget contact-info-widget pl-lg-70 mb-40 wow fadeInDown">
                <div className="contact-info-box mb-20">
                  <span className="title">Call to order:</span>
                  <h3>
                    <a href="tel:+125865892">(207) 200-1127</a>
                  </h3>
                  <p>
                    <a href="mailto:hello@example.com">admin@rapidsite.us</a>
                  </p>
                </div>
                <div className="contact-info-box mb-20">
                  <span className="title">Location :</span>
                  <p>212 W TROY ST, STE B, DOTHAN AL 36303</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Copyright Area ===*/}
      <div className="copyright-area border-top-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text">
                <p>© 2023 Rapidsite, All Rights Reserved</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyright-nav float-lg-end">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default DefaultFooter;
