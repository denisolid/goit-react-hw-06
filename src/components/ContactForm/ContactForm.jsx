import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/components/contactsSlice";
import { nanoid } from "nanoid";

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = { name: "", number: "" };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string().required("Required"),
  });

  const handleSubmit = (values, options) => {
    const newContact = { id: nanoid(), ...values };
    dispatch(addContact(newContact));
    console.log(values);

    options.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" type="text" />
        <ErrorMessage name="name" component="div" />

        <label htmlFor="number">Number</label>
        <Field id="number" name="number" type="text" />
        <ErrorMessage name="number" component="div" />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
