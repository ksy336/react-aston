import React, { useContext, useState } from 'react';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '../../components/Button/Button';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthorizationContext } from '../../../store/context/context';
import {setUser} from "../../../store/userSlice/userSlice";
import { useDispatch } from 'react-redux';
import openNotification from '../../helpers/notification';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {handleSubmit, register, reset, formState: {errors}} = useForm({mode: "onChange"});
  const {login, password} = useContext(AuthorizationContext);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmLogin, setConfirmLogin] = useState("");
  const [isNotMatch, setIsNotMatch] = useState(false);

  const formSigninHandle = () => {
    if(confirmPassword === password && confirmLogin === login) {
      openNotification("success", "Вы успешно вошли!")
      dispatch(setUser(login));
      navigate("/");
    } else {
      openNotification("error", "Произошла ошибка. Попробуйте еще раз!")
      setIsNotMatch(true);
    }
    reset();
  }
  return (
    <section className="registration-container">
      <div className="register">Войти</div>
      <div className="login-container">
        <Container maxWidth="sm">
          <form className="form-signup" onSubmit={handleSubmit(formSigninHandle)}>
            <Box mb={2} className="input-block">
              <TextField
                className="input-value"
                variant="outlined"
                label="Логин"
                fullWidth
                autoFocus
                autoComplete="Логин"
                {...register("login", {
                  required: "Введите логин",
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {setConfirmLogin(e.target.value)}
                })}
              />
            </Box>
            {errors?.login && <div className="error-text">{errors?.login?.message}</div>}
            <Box mb={2} className="input-block">
              <TextField
                className="input-value"
                variant="outlined"
                label="Пароль"
                fullWidth
                autoFocus
                type="password"
                autoComplete="Пароль"
                {...register("password", {
                  required: "Введите пароль, минимум 6 символов",
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {setConfirmPassword(e.target.value)}
                })}
              />
            </Box>
            {isNotMatch && <div className="error-text">Пароль или логин не совпадают</div>}
            {errors?.password && <div className="error-text">{errors?.password.message}</div>}
            <div className="button-register">
              <Button type="submit">Войти</Button>
            </div>
          </form>
        </Container>
      </div>
      <div className="not-submit-text">Еще не зарегистрированы? <Link to="/signup">Регистрация</Link></div>
    </section>
  );
};

export default SignIn;