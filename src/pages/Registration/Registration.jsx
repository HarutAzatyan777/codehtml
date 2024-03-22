import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { selectIsAuth, fetchRegister } from '../../redux/slices/auth';
import Header from '../../components/Header/Header';
import './Registration.css'; // Import your CSS file

const Registration = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      avatarUrl: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      alert('Registration failed');
      return;
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="reggister">
      <Header />
      <div className="container-register">
        <h2 className="title-register">Account Creation</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="field-register"
            {...register('fullName', { required: 'Please enter your name' })}
            placeholder="Full Name"
          />
          {errors.fullName && <p>{errors.fullName.message}</p>}
          <input
            className="field-register"
            type="email"
            {...register('email', { required: 'Please enter your email' })}
            placeholder="E-Mail"
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            className="field-register"
            type="password"
            {...register('password', { required: 'Please enter a password' })}
            placeholder="Password"
          />
          {errors.password && <p>{errors.password.message}</p>}
          <input
            className="field-register"
            {...register('avatarUrl', { pattern: { value: /https?:\/\/.+/i, message: 'Please enter a valid URL' } })}
            placeholder="Avatar URL"
          />
          {errors.avatarUrl && <p className="avatarUrl-error">{errors.avatarUrl.message}</p>}
          <button className="button-register" disabled={!isValid} type="submit">
            Register
          </button>
        </form>
        <p className="registerText">Some additional text or links here...</p>
      </div>
    </div>
  );
};

export default Registration;
