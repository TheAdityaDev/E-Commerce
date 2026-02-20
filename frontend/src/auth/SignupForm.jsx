import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div >
      <p className="text-xl font-bold text-center">SignUp Form</p>
      <div className="p-5 space-y-5  md:p-5">
        <div>
          <TextField
            fullWidth
            id="fullName"
            type="text"
            label="Full Name"
            inputMode="text"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
        </div>
        <div>
          <TextField
            fullWidth
            id="email"
            type="email"
            label="Email"
            inputMode="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
        <div>
          <TextField
            fullWidth
            id="otp"
            type="number"
            label="otp"
            inputMode="numeric"
            name="otp"
            value={formik.values.otp}
            onChange={formik.handleChange}
            error={formik.touched.otp && Boolean(formik.errors.otp)}
            helperText={formik.touched.otp && formik.errors.otp}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button variant="contained" type="submit" className="px-5 py-5 lg:-mt-5">
          Sign UP
        </Button>
      </div>
    </div>
  );
};

export default SignupForm;
