import React from "react";
import  "reactstrap";
import Iframe from 'react-iframe'



function MessageIcon() {
  const [overlay, setOverlay] = React.useState(true);


  const toggleOverlay = () => {
      setOverlay(!overlay);
      if (overlay){
        console.log("Hello i am inside if")
        console.log(document.getElementById("overlay"))
        document.getElementById("overlay").classList.add("shown");
        document.getElementById("overlay").classList.remove("hidden");
        document.getElementById("overlay").style.visibility="visible";
      }
      else{
        console.log("Hello i am inside else")
        console.log(document.getElementById("overlay"))
        document.getElementById("overlay").classList.add("hidden");
        document.getElementById("overlay").classList.remove("shown");
        document.getElementById("overlay").style.visibility="hidden";
      }


  };

  return (
    <>
        <div className="message-icon" >
            <button className="message-icon-trigger text-white" onClick={toggleOverlay}>
                <i class="fas fa-comments" style={{fontSize:"1.5em"}}></i>
            </button>

            <div id="overlay" className="message-icon-overlay hidden">
              <button onClick={toggleOverlay}>Close</button>
              {/* <Iframe src="https://circle.alinea-invest.com/c/investwithintention" frameborder="0" aria-hidden="false" tabindex="0"></Iframe> */}
            </div>
        </div>
    </>
  );
}

export default MessageIcon;