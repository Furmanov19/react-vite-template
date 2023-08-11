import * as yup from "yup";

export const simpleFormValidationSchema = yup.object().shape({
  firstName: yup.string().min(8).max(32).required(),
  lastName: yup.string().min(8).max(32).required(),
});
