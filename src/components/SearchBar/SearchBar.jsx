import css from "./SearchBar.module.css";
import { Formik, Field, Form } from "formik";

export default function SearchBar({ onSearch }) {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ topic: "" }}
        onSubmit={(values, actions) => {
          onSearch(values.topic);
          actions.resetForm();
        }}
      >
        <Form>
          <Field
            name="topic"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
}
