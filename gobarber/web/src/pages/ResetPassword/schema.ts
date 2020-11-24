import * as Yup from 'yup';

export default Yup.object().shape({
  password: Yup.string()
    .min(6, 'No mínimo 6 dígitos')
    .required('Senha obrigatória'),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref('password')],
    'Confirmação incorreta',
  ),
});
