import React from 'react';
import logo from "../../assets/free-icon-video-camera-10519540.jpg";
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import "./Header.scss";

const Header = () => {

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="icon" />
      </div>
      <div className="buttons-container">
        <div className="button-signin">
          <Button>Вход</Button>
        </div>
        <div className="button-signup">
          <Link to="/signup">
            <Button>Регистрация</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;