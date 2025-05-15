import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define the Yup schema for validation -> yup.object().shape() method creates the schema
const schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be valid"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const SignUpForm = () => {
  // Initialize React Hook Form with Yup resolver, if we don't use mode: 'onChange', validation is checked on form submit only.
  const {
    register,
    handleSubmit,
    formState: { errors }, //It holds all validation errors that occur after the form is submitted
    reset, //This function resets the entire form to its initial state
  } = useForm({
    resolver: yupResolver(schema),mode: 'onChange', // Validates on every input change
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset(); // Clear form after submission
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      {/* When this form is submitted, React Hook Form should:
Validate the form using Yup. as handleSubmit is part of useForm which will validate automatically.
If it's valid, then call onSubmit(data) with the form values.
If invalid, show errors in formState.errors */}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username Field */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            // Hey form, here’s an input field with the name 'username'. Track its value and validate it
            {...register("username")}
            placeholder="Enter username"
          />
          {errors.username && (
            <p className="error">{errors.username.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            // Hey form, here’s an input field with the name 'email'. Track its value and validate it
            {...register("email")}
            placeholder="Enter email"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Enter password"
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
