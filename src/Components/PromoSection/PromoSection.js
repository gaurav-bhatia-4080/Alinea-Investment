import React from "react";
import  "reactstrap";
function PromoSection() {

  return (
    <>
        <section className="p-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8">
                        <div className="section-heading text-center mb-5 wgi">
                            <span role="img" aria-label="ehh" className="underline-from-center">We get it.🤷🏽‍♀️</span>
                            <br/>
                            <span className="underline-from-center">Investing is overwhelming,</span>
                            <br/>
                            <span className="underline-from-center">but it doesn't have to be.</span>
                        </div>
                    </div>
                </div>
                <div class="carousel container">
                    <div class="carousel-row row equal">
                        <div class="carousel-tile col-md-4 col-lg-4">
                            <div className="effect">
                                <h1><span role="img" aria-label="Community">👩‍👩‍👧‍👧</span></h1>
                                <h5>Community</h5>
                                <p>We all need someone to lean on and investing is no different.
                                    <br/>As part of our community, you get the support to embark and continue on your journey.</p>
                            </div>
                        </div>
                        <div class="carousel-tile col-md-4 col-lg-4">
                            <div className="effect">
                                <h1><span role="img" aria-label="moneyflies">💸</span></h1>
                                <h5>Responsible Investing</h5>
                                <p>Make your money moves matter!
                                    <br/>Express your values and interests through your investments.</p>
                            </div>
                        </div>
                        <div class="carousel-tile col-md-4 col-lg-4">
                            <div className="effect">
                                <h1><span role="img" aria-label="Learning">🌱</span></h1>
                                <h5>Learning</h5>
                                <p>We eliminate all the unnecessary financial jargon.
                                    <br/>Learn as you go with our interactive mini capsules and before you know it, you’ll be a confident investor.</p>
                            </div>
                        </div>    
                    </div>
                </div>			
            </div>
        </section> 
    </>
  );
}

export default PromoSection;
