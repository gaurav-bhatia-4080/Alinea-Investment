import React from "react";
import  "reactstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function FeaturedInSection() {

  return (
    <>
        <section className="ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8" >
                <div className="section-heading text-center mb-5 wgi">
                  <span className="underline-from-center">Featured in</span>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12 text-center">
                <OwlCarousel
                  className="owl-theme"
                  loop="true"
                  margin={10}
                  items={6}
                  autoplay="true"
                  autoplaySpeed= {10000}
                  smartSpeed= {10000}
                >
                  <div class="item">
                    <img className="img-c" alt="" src={require("../../Assets/img/AspireToHer.png")} />
                  </div>
                  <div class="item">
                    <img className="img-c" alt="" src={require("../../Assets/img/ColumbiaUniversity.png")} />
                  </div>
                  <div class="item">
                    <img className="img-c" alt="" src={require("../../Assets/img/IAlsoWantMoney.png")} />
                  </div>
                  <div class="item text-center">
                    <img className="" alt="" src={require("../../Assets/img/InvestedMillennial.png")} style={{width:"35%",textAlign:"center"}} />
                  </div>
                  <div class="item">
                    <img className="img-c" alt="" src={require("../../Assets/img/MayshandGroup.png")} />
                  </div>
                  <div class="item">
                    <img className="img-c" alt="" src={require("../../Assets/img/TheBusinessCasual.png")} />
                  </div>
                  <div class="item">
                    <img className="img-c" alt="" src={require("../../Assets/img/ThePowerThread.png")} />
                  </div>

                </OwlCarousel>
              </div>

            </div>
          </div>

        </section>

    </>
  );
}

export default FeaturedInSection;
