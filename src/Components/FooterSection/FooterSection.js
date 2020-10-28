import React from "react";
import  "reactstrap";
import Particles from 'react-particles-js'
function FooterSection() {

  return (
      <footer className="foot-secton">
          <div class="footer-top pt-150 pb-5 background-img2">
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
                  <div className="row justify-content-between">
                      <div className="col-lg-3 mb-3 mb-lg-0">
                          <div className="footer-nav-wrap text-white">
                            <img src={require("../../Assets/img/logo-white-1x.png")} alt="footer logo" width="220" class="img-fluid mb-3"/>
                            <p>Alinea Invest makes responsible investing fun, easy, and social with learning features.</p>
                            <div className="soc-wrapper">
                                <ul className="social-list list-inline list-unstyled">
                                    <li className="list-inline-item">
                                        <a href="https://www.instagram.com/alineainvest/" target="__blank">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/company/alineainvest/" target="__blank">
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://twitter.com/alineainvest_" target="__blank">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/alineainvest/" target="__blank">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://alineainvest.medium.com/" target="__blank">
                                            <i class="fab fa-medium"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="footer-bottom gray-light-bg pt-4 pb-4">
              <div className="container">
                  <div className="row text-center justify-content-center">
                      <div className="col-md-auto col-lg-auto">
                          <p style={{color:"#a59d97"}}>
                          This website is for informational purposes only, and is not intended to serve as a recommendation to
                           buy or sell any security in any account, and is not an offer or sale of a security. 
                           They are also not research reports and are not intended to serve as the basis for any investment decision. 
                           Any third-party information provided therein does not reflect the views of Alinea Invest, LLC.
                            All investments involve risk and the past performance of a security or financial product does not guarantee 
                            future results or returns. Keep in mind that while diversification may help spread risk, it does not assure
                             a profit or protect against loss. There is always the potential of losing money when you invest in securities
                              or other financial products. Investors should consider their investment objectives and risks carefully before
                              investing. The price of a given security may increase or decrease based on market conditions 
                              and customers may lose money, including their original investment. Alinea Invest, LLC is not a registered 
                              investment adviser or broker-dealer.
                          </p>
                      </div>
                      <div className="col-md-6 col-lg-5">
                          <div className="copyright pb-0 mb-0">
                            <p style={{color:"#a59d97"}}>Copyright © 2020. All rights reserved by Alinea Invest</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  );
}

export default FooterSection;
