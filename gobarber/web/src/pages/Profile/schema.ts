import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  old_password: Yup.string(),
  password: Yup.string().when('old_password', {
    is: (val) => !!val.length,
    then: Yup.string().required('Campo obrigatório'),
  }),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'Confirmação incorreta')
    .when('old_password', {
      is: (val) => !!val.length,
      then: Yup.string().required('Campo obrigatório'),
    }),
});
