import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useFormikAndYup from "../../../hooks/useCustomFormikAndYup/useFormikAndYup";
import Contact_Form from "../contact-form/Contact_Form";
import Contact_Info from "../contact-information/Contact_Info";

const Contact_Parent = () => {
  const initialValues = {
    firstName: "",
    email: "",
    phone: "",
    message: "",
  };

  const onSubmit = (values) => {
    // console.log(values);
    toast.success("Submit Success!!!");

    // resetForm();
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    isValid,
    validateForm,
  } = useFormikAndYup(initialValues, onSubmit, "contact");

  return (
    <>
      <div className="contact min-h-[80vh] sm:min-h-[svh] sm:h-[120vh]   px-28 sm:px-0 relative ">
        <div className="route flex gap-2 absolute sm:top-[11%] top-[4%] left-[6%]">
          <Link to="/">
            <span className="text-[#868686]">Home</span>
          </Link>
          <span className="text-[#868686]">/</span>
          <span>Contact</span>
        </div>
        <div className="flex flex-wrap sm:top-[13%] sm:left-0 sm:p-0  absolute top-[12%] left-[15%] ">
          <div className="left flex-3 sm:order-2 ">
            <Contact_Info />
          </div>
          <div className="right flex-1 ">
            <Contact_Form
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values}
              errors={errors}
              touched={touched}
              handleSubmit={handleSubmit}
              isValid={isValid}
              validateForm={validateForm}
              handleReset={handleReset}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_Parent;
