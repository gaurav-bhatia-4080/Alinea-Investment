import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import IndexNavbar from "./Components/Navbar/IndexNavbar"
import HeroSection from "./Components/HeroSection/HeroSection"
import PromoSection from "./Components/PromoSection/PromoSection"
import FeatureSection from "./Components/FeaturesSection/FeaturesSection"
import CommunitySection from "./Components/CommunitySection/CommunitySection"
import FeaturedInSection from "./Components/FeaturedInSection/FeaturedInSection"
import FooterSection from "./Components/FooterSection/FooterSection"
import SubscribeSection from "./Components/SubscribeSection/SubscribeSection"
import MessageIcon from "./Components/MessageIcon/MessageIcon"

class App extends React.Component {


  async componentDidMount() {
    
    AOS.init({
      duration : 2000
    })
  }



  render() {

    return (
      <>
        <IndexNavbar />
        <br/>
        <br/>
        <br/>
        <HeroSection />
        <PromoSection />
        <FeatureSection />
        <CommunitySection />
        <FeaturedInSection />
        <SubscribeSection />
        <FooterSection />
        <MessageIcon />

      </>
    );
  }
}

export default App;