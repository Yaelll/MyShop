import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Spinner from "../components/Spinner";
import { auth } from "../services/Auth-service";
import { showErrorDialog, showSuccessDialog } from "../dialogs/dialogs";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const navigate = useNavigate();
  const { login } = useAuth();

  const validationSchema = Yup.object({
    email: Yup.string().email("Bad Email!").required("The email is required"),
    password: Yup.string()
      .required()
      .min(8)
      .max(20)
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_-]).{8,30}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
      ),
  });

  const InithialValues = {
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={InithialValues}
      validationSchema={validationSchema}
      onSubmit={(o) => {
        setIsLoading(true);
        auth
          .login(o.email, o.password)
          .then((response) => {
            showSuccessDialog("Login Successful").then(() => {
              login(response.data.token);
              navigate("/");
            });
          })
          .catch((error) => {
            showErrorDialog("Login Failed");
          })
          .finally(() => {
            setIsLoading(false);
          });
      }}
    >
      <Form className="font-bold flex flex-col items-center h-screen bg-light-accent3 dark:bg-dark-accent3">
        {isLoading && <Spinner />}
        {error && <p className="text-red-500">{error}</p>}

        <div className="form-group flex flex-col gap-2 w-1/2 mx-auto text-lg my-4  ">
          <label htmlFor="email">Email Address</label>
          <Field
            id="email"
            name="email"
            type="email"
            className="rounded-md border-black border-2 px-2 py-2 text-black"
          />
          <ErrorMessage
            name="email"
            component={"div"}
            className="text-red-500"
          />
        </div>

        <div className="form-group flex flex-col gap-2 w-1/2 mx-auto text-lg my-4">
          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            type="password"
            className="rounded-md border-black border-2 px-2 py-2 text-black"
          />
          <ErrorMessage
            name="password"
            component={"div"}
            className="text-red-500"
          />
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="bg-light-accent1 dark:bg-dark-accent1 w-1/2 block text-left  text-white font-bold py-2 px-4 rounded my-4"
        >
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default Login;
