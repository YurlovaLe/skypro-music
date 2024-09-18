/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import { handleLoginApi } from '../../api';
import { useUserContext } from '../../App.context';

import { AuthPageSchema } from './AuthPage.validation';

import * as S from './AuthPage.styles';

export function AuthPage() {
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
    initialValues: { email: '', password: '' },
    validationSchema: AuthPageSchema,
    onSubmit: (values) => {
      setErrorMessage('');
      return handleLoginApi(values)
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
        </S.Inputs>
        <S.Buttons>
          <S.Error $isVisible={!!errorMessage}>{errorMessage || 'template'}</S.Error>
          <S.PrimaryButton
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? 'Загрузка...' : 'Войти'}
          </S.PrimaryButton>
          <Link to="/register">
            <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
          </Link>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  );
}
