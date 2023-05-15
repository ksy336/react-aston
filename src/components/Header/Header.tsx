import React from 'react';
import logo from "../../assets/free-icon-video-camera-10519540.jpg";
import Button from '../Button/Button';
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="icon" />
      </div>
      <div>
        <Button>Вход</Button>
      </div>
      <div>
        <Button>Регистрация</Button>
      </div>
    </header>
  );
};

export default Header;