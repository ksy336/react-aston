import React from 'react';
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
  const {register, handleSubmit, formState: {errors}} = useForm<FormData>();
  return (
    <>
      <div className="register">Регистрация</div>
      <div className="login-container">
        <Container maxWidth="sm">
          <form className="form-signup">
            <Box mb={2}>
              <TextField
              className="input-value"
              variant="outlined"
              label="Логин"
              fullWidth
              autoFocus
              autoComplete="Логин"
              />
            </Box>
            <Box mb={2}>
              <TextField
                className="input-value"
                variant="outlined"
                label="Пароль"
                fullWidth
                autoFocus
                autoComplete="Пароль"
              />
            </Box>
            <Button type="submit">Зарегистрироваться</Button>
          </form>
        </Container>
      </div>
    </>
  );
};

export default SignUp;