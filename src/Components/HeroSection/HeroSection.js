import React from "react";
import  "reactstrap";
import Typing from 'react-typing-animation';
import Particles from 'react-particles-js'
function HeroSection() {

  return (
    <>
        
        <section className="background-img">
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
                            value: 160
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
                <br/><br/><br/><br/>
                <div className="row align-items-center  py-5">
                    <div className="col-md-7 col-lg-6">
                        <div className="hero-text text-white">
                            <h1>
                                Not Your 
                                <span> Typical </span>
                                <br/>
                                 Investing App
                            </h1>
                            <div className="auto-type">
                                <Typing loop={true} hideCursor="true">
                                    <h3>
                                        <span>Connect with Intention</span>
                                        <Typing.Backspace count={23} delay={1000} />
                                        <span>Learn with Intention </span>
                                        <Typing.Backspace count={22} delay={1000} />
                                        <span>Invest with Intention</span>
                                        <Typing.Backspace count={21} delay={1000} />
                                    </h3>                                
                                </Typing>
                                <span role="img" aria-label="rocket" className="emoji">🚀</span>
                            </div>
                            <br/>

                            <p className="para">Alinea makes responsible investing fun, easy, and social.</p>
                            <div className="bttn bttn-six text-white">
                                Start Your Journey
                            </div>

                            <div className="py-4 align-items-center apple">
                                <img src={require("../../Assets/img/apple.png")} alt=""/>
                            </div>



                        </div>
                    </div>
                    <div className="col-md-5 col-lg-6">
                        <div className="hero-img-gif align-items-center">
                            <img src={require("../../Assets/img/app-mobile.gif")} alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="bot-img-wave">
                <img src={require("../../Assets/img/hero-bg-shape-1.svg")} className="img-fluid" alt=""/>
            </div>
        </section> 
    </>
  );
}

export default HeroSection;
