import yup from 'src/libs/yup';

export default yup.object().shape({
  name: yup.string().required(),
  biography: yup.string().required(),
});
