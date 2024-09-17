import * as Yup from 'yup';

export const AuthPageSchema = Yup.object().shape({
  email: Yup.string()
    .email('Укажите корректный email')
    .required('Укажите email'),
  password: Yup.string()
    .required('Укажите пароль'),
});
