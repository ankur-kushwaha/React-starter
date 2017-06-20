import React from "react";
import "./header.scss";

const Header = () => (
  <div className="be-header-main" style={{ background: "#1976D2" }}>
    <div className="wrapper">
      <div className="logo-section bf-logo">
        <a href="/" target="_blank">
          <img src="/common/css/images/logo_white.png" alt="BirdEye" />
        </a>
      </div>
      <div
        className="dashboard-section clearfix-div"
        style={{ color: "#ffffff" }}
      >
        <div className="business-name">David’s Bridal</div>
        <div className="be-user-box">
          <ul className="user-list">
            <li>
              <i className="icon-app_menu" />
              <div className="submenu-box">
                <ul className="smb-list">
                  <li>
                    <a
                      alt="Customer Check-In"
                      href="//demo.birdeye.com/david-s-bridal-149089764896342/checkin"
                      target="_blank"
                      className=""
                    >
                      <i className="icon-checkin" />Check in
                    </a>
                  </li>
                  <li>
                    <a
                      alt="Write A Review"
                      href="//demo.birdeye.com/david-s-bridal-149089764896342/mobile"
                      target="_blank"
                      className=""
                    >
                      <i className="icon-write_review" />Write a review
                    </a>
                  </li>
                  <li>
                    <a
                      alt="Review website"
                      href="//demo.birdeye.com/david-s-bridal-149089764896342"
                      target="_blank"
                      className=""
                    >
                      <i className="icon-app_profile" />Review website
                    </a>
                  </li>
                  <li>
                    <a
                      alt="Deeplinking"
                      href="//demo.birdeye.com/david-s-bridal-149089764896342/mobile-deeplink/1?rid=2&amp;rtype=review"
                      target="_blank"
                      className=""
                    >
                      <i className="icon-deeplink" />Review URL
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <i className="icon-user" />
              <div className="submenu-box">
                <ul className="user-dropdown">
                  <li>
                    Ankur
                    <div className="email-link">
                      ankur.kushwaha@birdeye.com
                    </div>
                  </li>
                  <li><a id="myInfo" href="">User profile</a></li>
                  <li><a id="myPrefs" href="">Alerts</a></li>
                  <li>
                    <a id="chngPswd" href="">Change password</a><span />
                  </li>
                  <li>
                    <a
                      href=""
                      id="btnSignOut"
                      name="signout"
                      className="logout"
                    >
                      <i className="icon-logout" />Logout
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#switch-business"
                className="burgerIcon"
                style={{ color: "#ffffff" }}
              >
                <i className="icon-hamburger" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
);

export default Header;
