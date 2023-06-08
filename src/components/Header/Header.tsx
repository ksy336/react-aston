import React, { useContext } from 'react';
import logo from "../../assets/film.png";
import Button from '../Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import image from "../../assets/heart.svg";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store-types';
import { AuthorizationContext } from '../../../store/context/context';
import {setUser} from "../../../store/userSlice/userSlice";
import "./Header.scss";

const Header = () => {
  const { numberOfFavorites } = useSelector((state: RootState) => state.movies);
  const { login, password } = useContext(AuthorizationContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(setUser(""));
    navigate("/signin");
  }

  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="icon" />
        </div>
      </Link>
      <div className="buttons-container">
            <Link to="/favorites">
              <div className="heart-block">
                <img
                  src={image}
                  alt="favorite"
                  width="40"
                  height="40"
                  className="favorite-img"
                />
                <span className="heart-container">
                  <span className="heart-number">{numberOfFavorites}</span>
                </span>
              </div>
            </Link>
            <Link to="/history" className="history-link">
              <Button className="history">
                История
              </Button>
            </Link>
            {(login && password) ? (
              <div className="button-signin">
                  <Button onClick={signoutHandler}>Выход</Button>
              </div>
            ) : (
              <div className="login-buttons">
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
            )}
          </div>
    </header>
  );
};
export default Header;