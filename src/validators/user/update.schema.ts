import yup from 'src/libs/yup';

export default yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  password_confirmation: yup
    .string()
    .equals([yup.ref('password'), null], 'As senhas não coincidem')
    .required(),
});
