
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  Container
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [navbarTextColor, setNavbarTextColor] = React.useState("white-nav");


  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 29 ||
        document.body.scrollTop > 29
      ) {
        setNavbarColor("navbar-transparent2");
        setNavbarTextColor("");
      } else if (
        document.documentElement.scrollTop < 30 ||
        document.body.scrollTop < 30
      ) {
        setNavbarColor("navbar-transparent");
        setNavbarTextColor("white-nav");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor, navbarTextColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            title="Alinea Invest"
          >
            <img
                alt="..."
                className="img-no-padding img-responsive"
                src={require("../../Assets/img/logo-white-1x.png")}
              />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
