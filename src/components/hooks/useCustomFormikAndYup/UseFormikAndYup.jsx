import { useFormik } from "formik";
import { ContactFormValidation } from "../../pages/contact/contact-form/ContacFromSchema";
import { formValidation } from "../../schemas/CheckoutFormSchema";

const useFormikAndYup = (initialValues, onSubmit, validationSchemaType) => {
  let schemaValidation;

  if (validationSchemaType === "checkout") {
    schemaValidation = formValidation;
  } else {
    schemaValidation = ContactFormValidation;
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schemaValidation,
    onSubmit: (values) => {
      if (onSubmit) {
        onSubmit(values);
      }
    },
  });

  return { ...formik };
};

export default useFormikAndYup;

// Intial values
// onBlur
// value
// onchange
