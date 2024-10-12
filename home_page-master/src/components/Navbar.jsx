import React, { useState } from "react";
import "../css/Navbar.css";

import { useNavigate } from "react-router-dom";
import icon from "../asset/icon/location_on.png";
import flag from "../asset/img/Co-Vietnam.webp";
import logo from "../asset/img/logo_mealmate.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Quản lý trạng thái dropdown
  const [location, setLocation] = useState("Tp. HCM"); 
  const navigate = useNavigate(); 
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation); // Thay đổi vị trí khi chọn
    setIsOpen(false); 
  };
  const handleFoodClick = () => {
    navigate("/ListProduct"); // Điều hướng đến trang danh sách sản phẩm
  };
  
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Meal Mate Logo" className="logo-image" />
        Meal Mate
      </div>

      <div className="find_product">
        <input type="text" placeholder="Tìm kiếm" className="search-bar" />
      </div>

      <div
        className="location"
        onClick={toggleDropdown}
        style={{ cursor: "pointer" }}
      >
        <img src={icon} alt="" className="location_icon"></img>
        {location} 
        {isOpen && ( 
          <div className="dropdown">
            <div
              className="dropdown-item"
              onClick={() => handleLocationChange("TP.HCM")}
            >
              TP.HCM
            </div>
            <div
              className="dropdown-item"
              onClick={() => handleLocationChange("Hà Nội")}
            >
              Hà Nội
            </div>
            <div
              className="dropdown-item"
              onClick={() => handleLocationChange("Đà Nẵng")}
            >
              Đà Nẵng
            </div>
          </div>
        )}
      </div>

      <div className="menu">
        <div className="menu-item" onClick={handleFoodClick} style={{ cursor: "pointer" }}>
          <span>Sản phẩm</span>
          <div className="underline"></div>
        </div>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate("/Contactpage") }}>
          Liên Hệ
        </a>
      </div>

      <div className="login">
        <button className="login-button" onClick={() => navigate("/login")}>
          Đăng nhập
        </button>
      </div>

      <div className="language">
        <img src={flag} className="flag" alt="Vietnam Flag"></img>
      </div>
    </nav>
  );
}

export default Navbar;