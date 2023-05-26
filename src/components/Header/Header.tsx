import React from 'react';
import logo from "../../assets/film.png";
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import image from "../../assets/heart.svg";
import "./Header.scss";
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store-types';

const Header = () => {
  const { numberOfFavorites } = useSelector((state: RootState) => state.movies);
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="icon" />
      </div>
      {/*// TODO Избранное и история всегда видны как две кнопки в хэдере -> но роуты будут приватные - с хуком useAuth*/}
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
            <Link to="/favorites">
              <div className="heart-block">
                <img
                  src={image}
                  alt="favorite"
                  width="40"
                  height="40"
                  className="favorite-img"
                />
                <span className="heart-number">{numberOfFavorites}</span>
              </div>
            </Link>
          </div>
    </header>
  );
};
export default Header;