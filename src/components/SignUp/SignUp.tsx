import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '../Button/Button';
import { useForm } from 'react-hook-form';
import"./Signup.scss";
import { useNavigate } from 'react-router';

type FormData = {
  login: string;
  password: string;
}

const SignUp = () => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm<FormData>({mode: "onChange"});
  const navigate = useNavigate();
  // TODO: переместить в Сontext, реализовать сохранение в LS
  const [login, setLogin] = useState(""); // буду сохранять в LS + Context
  const [password, setPassword] = useState("");
  const formSubmit = () => {
    navigate("/signin");
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
              />
            </Box>
            {errors?.password && <div className="error-text">{errors?.password.message}</div>}
            <div className="button-register">
              <Button type="submit">Зарегистрироваться</Button>
            </div>
          </form>
        </Container>
      </div>
    </section>
  );
};

export default SignUp;