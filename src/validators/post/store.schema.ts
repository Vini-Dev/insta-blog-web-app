import yup from 'src/libs/yup';

export default yup.object().shape({
  image: yup.string().required(),
  description: yup.string().required(),
});
