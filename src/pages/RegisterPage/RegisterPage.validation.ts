import * as Yup from 'yup';

export const RegisterPageSchema = Yup.object().shape({
  email: Yup.string()
    .email('Укажите корректный email')
    .required('Укажите email'),
  password: Yup.string()
    .required('Укажите пароль')
    .min(6, 'Пароль должен быть 6 символов'),
  repeatPassword: Yup.string()
    .required('Пароли не совпадают'),
});
