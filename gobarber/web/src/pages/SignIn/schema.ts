import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  password: Yup.string().min(6, 'No mínimo 6 dígitos'),
});
