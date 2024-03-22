import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth';
import Header from '../../components/Header/Header';
import './Login.css'; // Import your CSS file

const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      alert('Invalid email or password');
      return;
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    } else {
      alert('Invalid email or password');
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login">
      <Header />
      <Paper className="paper-container">
        <Typography variant="h5">Login to client account</Typography>
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="E-Mail"
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
            type="email"
            {...register('email', { required: 'Please enter your email' })}
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            {...register('password', { required: 'Please enter your password' })}
            fullWidth
          />
          <Button
            className="button-login"
            disabled={!isValid || isSubmitting}
            type="submit"
            size="large"
            variant="contained"
            fullWidth
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
        </form>
        <Typography variant="body2" className="link-register">
          Don't have an account? <Link to="/register">Register here</Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default Login;
