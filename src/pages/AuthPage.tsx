/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { handleLoginApi, handleRegisterApi } from '../api.ts';
import { useUserContext } from '../App.context.tsx';
import * as S from './AuthPage.styles.ts';

export function AuthPage({ isLoginMode }: {isLoginMode: boolean}) {
  const { login } = useUserContext();
  const [error, setError] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleLogin = async ({ email, password }) => {
    if (!email || !password) {
      setError('Укажите почту/пароль');
      return;
    }

    setIsSubmiting(true);

    handleLoginApi({ email, password })
      .then((user) => {
        setIsSubmiting(false);
        login(user);
      })
      .catch((error) => {
        setIsSubmiting(false);
        setError(error.message);
      });
  };

  const handleRegister = async () => {
    if (!email || !password) {
      setError('Укажите почту/пароль');
      return;
    }

    if (password !== repeatPassword) {
      setError('Пароли не совпадают');
      return;
    }

    setIsSubmiting(true);
    setError('');

    handleRegisterApi({ email, password })
      .then((user) => {
        setIsSubmiting(false);
        login(user);
      })
      .catch((error) => {
        setError(error.message);
        setIsSubmiting(false);
      });
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError('');
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton
                disabled={isSubmiting}
                onClick={() => handleLogin({ email, password })}
              >
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={isSubmiting} onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}
