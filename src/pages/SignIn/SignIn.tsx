import React from 'react';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '../../components/Button/Button';
import { useForm } from 'react-hook-form';

const SignIn = () => {
  const {handleSubmit, register, reset, formState: {errors}} = useForm({mode: "onChange"});
  const formSigninHandle = () => {

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
              />
            </Box>
            {/*{errors?.login && <div className="error-text">{errors?.login?.message}</div>}*/}
            <Box mb={2} className="input-block">
              <TextField
                className="input-value"
                variant="outlined"
                label="Пароль"
                fullWidth
                autoFocus
                type="password"
                autoComplete="Пароль"
              />
            </Box>
            {/*{errors?.password && <div className="error-text">{errors?.password.message}</div>}*/}
            <div className="button-register">
              <Button type="submit">Зарегистрироваться</Button>
            </div>
          </form>
        </Container>
      </div>
    </section>
  );
};

export default SignIn;