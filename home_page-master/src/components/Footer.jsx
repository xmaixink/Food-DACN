// src/Footer.js
import React from "react";
import "../css/Footer.css";
import logo3 from "../asset/img/icn_instargram.jpg";
import logo2 from "../asset/img/icon_facebook.jpg";
import img1 from "../asset/img/link_appstore.png";
import img2 from "../asset/img/link_chplay.png";
import logo1 from "../asset/img/logo_mealmate.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="icon">
        <div className="icon_1">
          <img src={logo1} className="icon1"></img>
        </div>
        <div className="text">Meal Mate</div>
        <div className="icon2_3">
          <img src={logo2} className="icon2"></img>
          <img src={logo3} className="icon3"></img>
        </div>
      </div>

      <div className="link_app">
        <div className="link_appstore">
          <img src={img1} className="img1"></img>
        </div>
        <div className="link_chplay">
          <img src={img2} className="img2"></img>
        </div>
      </div>

      <div className="info_Mealmate">
        <div className="txt1">Công ty TNHH 5TV GROUP11</div>
        <div className="txt2">
          Toà nhà G, 18A Cộng Hoà, phường 7, quận Tân Bình, TPHCM
        </div>
        <div className="txt2">
          Chịu trách nhiệm quản lý nội dung và vấn đề bảo vệ quyền lợi người
          tiêu dùng: Nguyễn Thị Xuân Mai
        </div>
        <div className="txt2">Điện thoại liên hệ: 0#########</div>
        <div className="txt2">
          Email: <a href="#">support@group11.mealmate.com</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
