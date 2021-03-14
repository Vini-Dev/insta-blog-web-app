import yup from 'src/libs/yup';

export default yup.object().shape({
  user: yup.string().required(),
  password: yup.string().required(),
});
