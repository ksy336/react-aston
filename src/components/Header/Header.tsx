import React from 'react';
import logo from "../../assets/film.png";
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
          <Link to="/signin">
            <Button>Вход</Button>
          </Link>
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