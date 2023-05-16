import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '../Button/Button';
import { useForm } from 'react-hook-form';
type FormData = {
  login: string;
  password: string;
}

const SignUp = () => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm<FormData>({mode: "onChange"});
  const [login, setLogin] = useState(""); // буду сохранять в LS + Context
  const formSubmit = () => {

  }

  return (
    <section className="registration-container">
      <div className="register">Регистрация</div>
      <div className="login-container">
        <Container maxWidth="sm">
          <form className="form-signup" onSubmit={handleSubmit(formSubmit)}>
            <Box mb={2}>
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
                min: 3

              })
              }
                error={!!errors.login}
              />
            </Box>
            {errors?.login && <div>{errors?.login?.message}</div>}
            <Box mb={2}>
              <TextField
                className="input-value"
                variant="outlined"
                label="Пароль"
                fullWidth
                autoFocus
                autoComplete="Пароль"
                {...register("password", {
                  onChange((e: React.ChangeEvent<HTML>) => {})
                })}
              />
            </Box>
            <Button type="submit">Зарегистрироваться</Button>
          </form>
        </Container>
      </div>
    </section>
  );
};

export default SignUp;