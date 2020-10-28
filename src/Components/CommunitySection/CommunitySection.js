import React from "react";
import  "reactstrap";
import Particles from 'react-particles-js'
function CommunitySection() {

  return (
    <>
        <section className="">
          <div className="comm-back">
            <div className="container">
              <Particles
                      style={{ position: "absolute" , top:"0", left:"0"}}
                      height="100%"
                      width="100%"

                      params={{
                      particles: {
                              color: {
                              value: "#ffffff"
                              },
                              line_linked: {
                              color: {
                                  value: "#ffffff"
                              }
                              },
                              number: {
                              value: 50,
                              density:{
                                enable:true,
                                value_area:300
                              }
                              },
                              size: {
                              value: 4
                          }
                      },
                      "interactivity": {
                          "detect_on": "window",
                          "events": {
                              "onhover": {
                                  "enable": true,
                                  "mode": "repulse"
                              },
                              "onclick": {
                                  "enable": false,
                                  "mode": "bubble"
                              },
                              "resize": true
                          }
                      }
                      }}


                  ></Particles>
              <div className="row align-items-center justify-content-between p-100">
                <div className="col-md-7">
                  <div className="content text-white">
                    <h2>
                      BECOME A PART OF OUR KICKASS COMMUNITY
                    </h2>
                    <p className="lead">
                      We can't do this alone, so we need each other, especially you
                      <br/>
                      Join our community and get started on your investing journey!
                    </p>
                    <div className="bttn bttn-six text-white">
                        Join Now
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section> 
    </>
  );
}

export default CommunitySection;
