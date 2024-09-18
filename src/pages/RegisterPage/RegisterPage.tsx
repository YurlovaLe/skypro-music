/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { handleLoginApi, handleRegisterApi } from '../../api';
import { useUserContext } from '../../App.context';

import { RegisterPageSchema } from './RegisterPage.validation';

import * as S from '../AuthPage/AuthPage.styles';

export function RegisterPage() {
  const { login } = useUserContext();
  const [errorMessage, setErrorMessage] = useState('');

  const {
    handleSubmit,
    errors,
    touched,
    values,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
    setFieldError,
  } = useFormik({
    initialValues: { email: '', password: '', repeatPassword: '' },
    validationSchema: RegisterPageSchema,
    onSubmit: (values) => {
      setErrorMessage('');

      return handleRegisterApi({ email: values.email, password: values.password })
        .then(() => handleLoginApi({ email: values.email, password: values.password }))
        .then((user) => {
          login(user);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    },
  });

  return (
    <S.PageContainer>
      <S.ModalForm onSubmit={handleSubmit}>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        <S.Inputs>
          <div>
            <S.Error $isVisible={!!errors.email}>{errors.email || 'template'}</S.Error>
            <S.ModalInput
              type="text"
              name="email"
              disabled={isSubmitting}
              $isErrored={touched.email && !!errors.email}
              placeholder="Почта"
              value={values.email}
              onChange={(event) => {
                setFieldValue('email', event.target.value);
                setErrorMessage('');
                setFieldError('', 'email');
              }}
              onBlur={() => setFieldTouched('email')}
            />
          </div>
          <div>
            <S.Error $isVisible={!!errors.password}>{errors.password || 'template'}</S.Error>
            <S.ModalInput
              type="password"
              name="password"
              disabled={isSubmitting}
              $isErrored={touched.password && !!errors.password}
              placeholder="Пароль"
              value={values.password}
              onChange={(event) => {
                setFieldValue('password', event.target.value);
                setErrorMessage('');
                setFieldError('', 'password');
              }}
              onBlur={() => setFieldTouched('password')}
            />
          </div>
          <div>
            <S.Error $isVisible={!!errors.repeatPassword}>{errors.repeatPassword || 'template'}</S.Error>
            <S.ModalInput
              type="password"
              name="repeatPassword"
              disabled={isSubmitting}
              $isErrored={touched.repeatPassword && !!errors.repeatPassword}
              placeholder="Повторите пароль"
              value={values.repeatPassword}
              onChange={(event) => {
                setFieldValue('repeatPassword', event.target.value);
                setErrorMessage('');
                setFieldError('', 'repeatPassword');
              }}
              onBlur={() => setFieldTouched('repeatPassword')}
            />
          </div>
        </S.Inputs>
        <S.Buttons>
          <S.Error $isVisible={!!errorMessage}>{errorMessage || 'template'}</S.Error>
          <S.PrimaryButton
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? 'Загрузка...' : 'Зарегистрироваться'}
          </S.PrimaryButton>
          <Link to="/login">
            <S.SecondaryButton>Войти</S.SecondaryButton>
          </Link>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  );
}
