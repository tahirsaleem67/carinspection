import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Team1 from '../navbar/chuev.png'
import './carousel.css'

const SliderComponent = () => {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <section className="teambg">
      <div className="teamoverlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="teamheading">Our Team</h1>
              <div>
                <Slider {...settings}>
                  <div className="teamcard px-4">
                    <img className="teamimg" src={Team1} width={200} />
                    <span className="teamspan">Baba pori</span>
                    <p className="teamdisc">lorem ipsum dolor can react js</p>
                  </div>
                  <div style={{ width: 100 }}>
                    <div className="teamcard px-4">
                      <img className="teamimg" src={Team1} width={200} />
                      <span className="teamspan">Baba pori</span>
                      <p className="teamdisc">lorem ipsum dolor can react js</p>
                    </div>
                  </div>
                  <div style={{ width: 100 }}>
                    <div className="teamcard px-4">
                      <img className="teamimg" src={Team1} width={200} />
                      <span className="teamspan">Baba pori</span>
                      <p className="teamdisc">lorem ipsum dolor can react js</p>
                    </div>
                  </div>
                  <div style={{ width: 100 }}>
                    <div className="teamcard px-4">
                      <img className="teamimg" src={Team1} width={200} />
                      <span className="teamspan">Baba pori</span>
                      <p className="teamdisc">lorem ipsum dolor can react js</p>
                    </div>
                  </div>
                  <div style={{ width: 100 }}>
                    <div className="teamcard px-4">
                      <img className="teamimg" src={Team1} width={200} />
                      <span className="teamspan">Baba pori</span>
                      <p className="teamdisc">lorem ipsum dolor can react js</p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default SliderComponent;
