import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '../../components/Button/Button';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthorizationContext } from '../../../store/context/context';
import"./Signup.scss";
import openNotification from '../../helpers/notification';

type FormData = {
  login: string;
  password: string;
}

const SignUp = () => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm<FormData>({mode: "onChange"});
  const navigate = useNavigate();
  const {setLogin, setPassword} = useContext(AuthorizationContext);
  const formSubmit = () => {
    try {
      openNotification("success", "Вы успешно зарегистрированы!")
      navigate("/signin");
      reset();
    } catch(e) {
      openNotification("error", "Произошла ошибка! Попробуйте позже." )
    }
  }

  return (
    <section className="registration-container">
      <div className="register">Регистрация</div>
      <div className="login-container">
        <Container maxWidth="sm">
          <form className="form-signup" onSubmit={handleSubmit(formSubmit)}>
            <Box mb={2} className="input-block">
              <TextField
              className="input-value"
              variant="outlined"
              label="Логин"
              fullWidth
              autoFocus
              autoComplete="Логин"
              {...register("login", {
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {setLogin(e.target.value)},
                required: "Введите логин",
                pattern: /^[a-zA-Z0-9]+$/i,

              })
              }
                error={!!errors.login}
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
                  onChange:((e: React.ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}),
                  required: "Введите пароль, минимум 6 символов",
                  pattern: /^[A-Za-z]\w{6,14}$/,
                  min: 8,
                  max: 14
                })}
                error={!!errors.password}
              />
            </Box>
            {errors?.password && <div className="error-text">{errors?.password.message}</div>}
            <div className="button-register">
              <Button type="submit">Зарегистрироваться</Button>
            </div>
          </form>
        </Container>
      </div>
      <div className="not-submit-text">Уже зарегистрированы? <Link to="/signin"> Войти</Link></div>
    </section>
  );
};

export default SignUp;