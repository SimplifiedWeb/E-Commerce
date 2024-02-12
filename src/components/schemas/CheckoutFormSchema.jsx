import * as Yup from "yup";

export const formValidation = Yup.object({
  firstName: Yup.string().min(3).max(25).required("Please enter your name"),
  companyName: Yup.string().min(3).max(25),
  message: Yup.string().min(0).max(1000),
  streetAddress: Yup.string()
    .min(3)
    .max(25)
    .required("Please enter your streetAddress"),
  apartMent: Yup.string()
    .min(3)
    .max(25)
    .required("Please enter your apartMent"),
  city: Yup.string().min(3).max(25).required("Please enter your city"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Please enter your phone number"),
  email: Yup.string().email().required("Please enter your email address"),

  //   password: Yup.string()
  //   .min(6, 'Password must be at least 6 characters')
  //   .required('Password is required'),
  // confirmPassword: Yup.string()
  //   .oneOf([Yup.ref('password'), null], 'Passwords must match')
  //   .required('Confirm Password is required'),
});
