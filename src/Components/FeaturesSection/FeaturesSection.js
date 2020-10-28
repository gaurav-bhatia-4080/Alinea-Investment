import React from "react";
import  "reactstrap";
function FeaturesSection() {

  return (
    <>
        <section className="p-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8">
                        <div className="section-heading text-center mb-5 wgi">
                            <span className="underline-from-center">What does Alinea offer?</span>
                        </div>
                    </div>
                </div>
                <div className="row row-grid align-items-center">
                    <div className="col-lg-4">
                        <div className="d-flex align-items-start mb-5 ic-e">
                            <div className="pr-4">
                                <div className="icon icon-shape icon-color-1 rounded-circle">
                                    <span role="img" aria-label="donut">🍩</span>
                                </div>
                            </div>
                            <div class="icon-text">
                                <h5>Custom Portfolios</h5>
                                <p class="mb-0">Pre-packaged portfolios for you.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mb-5 ic-e">
                            <div className="pr-4">
                                <div className="icon icon-shape icon-color-1 rounded-circle">
                                    <span role="img" aria-label="community">👭</span>
                                </div>
                            </div>
                            <div class="icon-text">
                                <h5>Kickass Community</h5>
                                <p class="mb-0">Our community is here to support you every step of the way.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start ic-e">
                            <div className="pr-4">
                                <div className="icon icon-shape icon-color-1 rounded-circle">
                                    <span role="img" aria-label="rocket">🚀</span>
                                </div>
                            </div>
                            <div class="icon-text">
                                <h5>Speedy Support</h5>
                                <p class="mb-0">We have quick answers to all your investing questions.</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4">
                        <div className="position-relative">
                            <img src={require("../../Assets/img/feature1.gif")} className="img-center img-fluid feature-img" alt="" />
                        </div>

                    </div>


                    <div className="col-lg-4">
                        <div className="d-flex align-items-start mb-5 ic-e">
                            <div className="pr-4">
                                <div className="icon icon-shape icon-color-1 rounded-circle">
                                    <span role="img" aria-label="pizza">🍕</span>
                                </div>
                            </div>
                            <div class="icon-text">
                                <h5>Fractional Shares</h5>
                                <p class="mb-0">Invest in any share with as little as $1.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mb-5 ic-e">
                            <div className="pr-4">
                                <div className="icon icon-shape icon-color-1 rounded-circle">
                                    <span role="img" aria-label="bag">💰</span>
                                </div>
                            </div>
                            <div class="icon-text">
                                <h5>Invest with Intention</h5>
                                <p class="mb-0">We give you the right information to make an impact.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start ic-e">
                            <div className="pr-4">
                                <div className="icon icon-shape icon-color-1 rounded-circle">
                                    <span role="img" aria-label="books">📚</span>
                                </div>
                            </div>
                            <div class="icon-text">
                                <h5>Learn & Grow</h5>
                                <p class="mb-0">We make learning fun and easy.</p>
                            </div>
                        </div>
                    </div>
                </div>
                			
            </div>
        </section> 
    </>
  );
}

export default FeaturesSection;
