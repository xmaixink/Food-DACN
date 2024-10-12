import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import loginImage from "../../../asset/img/loginImg.jpeg";
import logo from "../../../asset/img/logo_mealmate.png";
import "./Login.css";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Tên đăng nhập không được để trống"),
  password: Yup.string().required("Mật khẩu không được để trống"),
});

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:6969/api/login", {
          username: values.username,
          password: values.password,
        });
        if (response.status === 200) {
          console.log("Login successful:", response.data);
        } else {
          setErrorMessage("Tên đăng nhập hoặc mật khẩu không chính xác.");
        }
      } catch (error) {
        setErrorMessage("Đã xảy ra lỗi trong quá trình đăng nhập.");
        console.error("Login error:", error);
      }
    },
  });

  return (
    <div className="login-container">
      <div className="logo__wrappwer">
        <img src={logo} alt="Delicious meal" className="meal__logo" />
        <span className="logo__title">MEAL MATE</span>
      </div>

      <div className="login__content">
        <div className="login__wrapper">
          <img src={loginImage} alt="Delicious meal" className="meal-image" />

          <div className="login__form">
            <h2 className="login__title">Đăng nhập</h2>
            <form onSubmit={formik.handleSubmit}>
              <div
                className="input-field"
                style={{
                  borderColor: formik.errors.username ? "red" : null,
                  borderWidth: formik.errors.username ? "1px" : null,
                  borderStyle: formik.errors.username ? "double" : null,
                }}
              >
                <FaUser />
                <input
                  type="text"
                  name="username"
                  placeholder="Tên đăng nhập"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
              </div>

              <div
                className="input-field"
                style={{
                  borderColor: formik.errors.password ? "red" : null,
                  borderWidth: formik.errors.password ? "1px" : null,
                  borderStyle: formik.errors.password ? "double" : null,
                }}
              >
                <FaLock />
                <input
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </div>

              <div className="login-links">
                <a href="#">Quên mật khẩu?</a>
                <Link to="/register">Bạn chưa có tài khoản? Đăng Kí?</Link>
              </div>

              <button type="submit">Đăng nhập</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
