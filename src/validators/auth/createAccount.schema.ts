import yup from 'src/libs/yup';

export default yup.object().shape({
  name: yup.string().required(),
  user: yup.string().required(),
  password: yup.string().required(),
  password_confirmation: yup
    .string()
    .equals([yup.ref('password'), null], 'Passwords must match')
    .required(),
});
