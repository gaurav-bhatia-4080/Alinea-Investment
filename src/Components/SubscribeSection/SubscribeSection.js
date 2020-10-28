import React from "react";
import  "reactstrap";
function SubscribeSection() {

  return (
    <>
        <div className="shape-img subscribe-wrap">
            <img src={require("../../Assets/img/footer-top-shape.svg")} className="img-fluid" alt=""/>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form method="post" className="subscribe-form subscribe-form-footer d-none d-md-block d-lg-block">
                        <div className="d-flex align-items-center">
                            <input type="text" class="form-control input" id="email-footer" name="email" placeholder="Enter Email Address" value="" style={{zIndex:"9"}}/>
                            <input type="submit" class="button btn solid-btn" id="submit-footer" value="Subscribe" style={{zIndex:"9"}}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
}

export default SubscribeSection;
