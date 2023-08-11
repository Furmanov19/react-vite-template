import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { simpleFormValidationSchema } from "@/components/index-page/simple-form/validation-schema";

import styles from "./styles.module.css";

type FormData = {
  firstName: string;
  lastName: string;
};

function SimpleForm() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(simpleFormValidationSchema),
  });

  const onSubmit = (data: FormData) => console.log(data);
  const onErrors = (errors: any) => console.error(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onErrors)}
      style={{ display: "flex", flexDirection: "column", width: "300px" }}
    >
      <h1>
        Simple form using <b>react-hook-form</b>
      </h1>

      <label>First Name</label>
      <input {...register("firstName")} />
      <p style={{ color: "red" }}>{errors.firstName?.message}</p>

      <label>Last Name</label>
      <input {...register("lastName")} />
      <p style={{ color: "red" }}>{errors.firstName?.message}</p>

      <button
        type="button"
        onClick={() => {
          setValue("firstName", "firstName");
          setValue("lastName", "lastName");
        }}
        className={styles.button}
      >
        Fill in Form
      </button>
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
}

export default SimpleForm;
