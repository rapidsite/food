import Counter from "./Counter";
const QichenCounter = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-counter-item text-white wow fadeInUp mb-40 d-flex justify-content-center">
          <div className="counter-inner-item">
            <div className="icon">
              <i className="flaticon-retention" />
            </div>
            <div className="text">
              <h2 className="number">
                <Counter end={6834} />+
              </h2>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-counter-item text-white wow fadeInUp mb-40 d-flex justify-content-center">
          <div className="counter-inner-item">
            <div className="icon">
              <i className="flaticon-retention" />
            </div>
            <div className="text">
              <h2 className="number">
                <Counter end={8} />+
              </h2>
              <p>Passionate Chef’s</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-counter-item text-white wow fadeInUp mb-40 d-flex justify-content-center">
          <div className="counter-inner-item">
            <div className="icon">
              <i className="flaticon-retention" />
            </div>
            <div className="text">
              <h2 className="number">
                <Counter end={15} />+
              </h2>
              <p>Favorite Dishes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-counter-item text-white wow fadeInUp mb-40 d-flex justify-content-center">
          <div className="counter-inner-item">
            <div className="icon">
              <i className="flaticon-retention" />
            </div>
            <div className="text">
              <h2 className="number">
                <Counter end={1000} />+
              </h2>
              <p>Customer Ratings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QichenCounter;
