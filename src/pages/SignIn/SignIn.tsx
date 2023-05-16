import React, { useContext, useState } from 'react';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '../../components/Button/Button';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Context } from '../../../store/context/context';

const SignIn = () => {
  const {handleSubmit, register, reset, formState: {errors}, watch} = useForm({mode: "onChange"});
  const {login, password} = useContext(Context);
  const [confirmPassword, setConfirmPassword] = useState("");
  const validatePassword = () => {
    if(confirmPassword === password)
      // return "Passwords do not match"
      console.log("Success password");
  }
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
                {...register("password", {
                  required: "Введите пароль",
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {setConfirmPassword(e.target.value)},
                  validate: validatePassword
                })}
              />
            </Box>
            {errors?.password && errors?.password.type === "validate" && <div className="error-text">Passwords do not match</div>}
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