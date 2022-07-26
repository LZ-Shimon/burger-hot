import Joi from "joi";
import { useFormik } from "formik";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Input from "./common/Input";
import Header from "./common/Header";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";

const SignUp = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
    },
    validate: formikValidateUsingJoi({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .label("Email"),
      password: Joi.string().required().min(6).label("Password"),
      fullName: Joi.string().required().min(2).label("Full-Name"),
      phone: Joi.string().required().min(9).max(10).label("Phone"),
    }),
  });
  return (
    <>
      <Header
        title={"Sign Up and Join the Force!"}
        description={"Sign Up and Enjoy from discount and deals 😊❤️"}
      />
      <br />
      <form noValidate autoComplete="off" onSubmit={form.handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}

        <Input
          type="text"
          label={"Full Name"}
          error={form.touched.fullName && form.errors.fullName}
          {...form.getFieldProps("fullName")}
        />
        <Input
          type="email"
          label="Email"
          error={form.touched.email && form.errors.email}
          {...form.getFieldProps("email")}
        />

        <Input
          type="password"
          label="Password"
          error={form.touched.password && form.password.email}
          {...form.getFieldProps("password")}
        />

        <Input
          type="phone"
          label="Phone"
          error={form.touched.phone && form.phone.email}
          {...form.getFieldProps("phone")}
        />

        <div className="my-2">
          <button disabled={!form.isValid} className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};
export default SignUp;
