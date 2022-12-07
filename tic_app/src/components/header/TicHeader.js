import React, { useEffect, useState } from "react";

import "../../css/navBar.css";

const Nav = () => {
  return (
    <div>
      <div className="navContainer">
        <div className="row">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-12">
              <div className="navBar">
                <h1 className="ticLogoTxt">T I C</h1>

                <img
                  className="WorldLogo"
                  src={require("../../css/images/icons8-globe-100.png")}
                  alt="WorldLogo"
                ></img>

                <div className="iconContainer">
                  <div className="iconWrapper">
                    <i className="fa-solid fa-bars" aria-hidden="true"></i>
                  </div>
                  <div className="iconWrapperContact">
                    <i className="fa-solid fa-phone" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DropDown = () => {
  const [show, setShow] = useState("");
  useEffect(() => {
    const burger = document.querySelector(".iconWrapper");
    const menu = document.querySelector(".MenuContainer");
    const show = () => {
      setShow("burger");
      menu.classList.toggle("hidden");
      if (!menu.classList.contains("hidden")) {
        if (!menu.getAttribute("open")) {
          menu.setAttribute("open", true);
          menu.removeAttribute("close");
        }
      }
      if (menu.classList.contains("hidden")) {
        if (menu.getAttribute("open")) {
          menu.removeAttribute("open");
          menu.setAttribute("close", true);
        }
      }
    };

    burger.addEventListener("click", show);

    return () => {
      burger.removeEventListener("click", show);
    };
  });
  useEffect(() => {
    const phone = document.querySelector(".iconWrapperContact");
    const menu = document.querySelector(".MenuContainer");
    const show = () => {
      setShow("phone");
      menu.classList.toggle("hidden");
      if (!menu.classList.contains("hidden")) {
        if (!menu.getAttribute("open")) {
          menu.setAttribute("open", true);
          menu.removeAttribute("close");
        }
      }
      if (menu.classList.contains("hidden")) {
        if (menu.getAttribute("open")) {
          menu.removeAttribute("open");
          menu.setAttribute("close", true);
        }
      }
    };

    phone.addEventListener("click", show);

    return () => {
      phone.removeEventListener("click", show);
    };
  });

  return (
    <div className="MenuContainer hidden">
      <div className="row">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-12">{show}</div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <Nav />
      <DropDown />
    </div>
  );
};

export default Header;
