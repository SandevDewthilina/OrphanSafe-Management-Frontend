import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import { useLoginMutation } from "../slices/userApiSlice";

import "../assets/css/login/login.css";
import "../assets/css/login/login.responsive.css";

import { Form } from "react-bootstrap";
import { toast } from "react-toastify";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      if (
        userInfo.roleName === "orphanageManager" ||
        userInfo.roleName === "orphanageStaff"
      ) {
        console.log("in");
        navigate("/");
      } else if (
        userInfo.roleName === "systemManager" ||
        userInfo.roleName === "systemAdministrator"
      ) {
        console.log("in");
        navigate("/dashboard/Admin");
      } else if (
        userInfo.roleName === "parent" ||
        userInfo.roleName === "socialWorker"
      ) {
        console.log("in");
        navigate("/dashboard/External");
      }
      console.log(userInfo.roleName);
      // navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(e.nativeEvent.submitter.id === 'reg_btn')
    if (e.nativeEvent.submitter.id === "reg_btn") {
      navigate("/registration/OrphanageRegistration");
    } else {
      try {
        const res = await login({ email: email, password: password }).unwrap();
        dispatch(setCredentials(res.userInfo));
      } catch (error) {
        toast.error(error.data.message);
      }
    }
  };

  return (
    <div className="login-container-wrapper">
      <Form onSubmit={submitHandler}>
        <div className="login-main-container">
          <img
            className="login-main-logo"
            src="/app-icon.png"
            alt="orphansafe logo"
          />

          <p className="login-header mb-4 mt-3">Login to OrphanSafe Platform</p>

          <div className="col">
            <div className="text-danger"></div>
            <div className="my-input-label mb-1">IAM User email address</div>
            <div className="my-input-footer-label mb-2">
              Choose a name for your account. You can change this name in your
              account settings after you sign up.
            </div>
            <input
              className="form-control"
              type="email"
              placeholder="e.g. example@evision.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-4"></div>
            <div className="my-input-label mb-1">IAM User password</div>
            <div className="my-input-footer-label mb-2">
              Enter your secured password to access features
            </div>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col text-center">
            <button type="submit" className="verify-btn mt-5 mb-3">
              Verify Credentials
            </button>
          </div>

          <div className="row col">
            <div className="col-sm-5">
              <hr />
            </div>
            <div className="col-sm-2 text-center" style={{ color: "gray" }}>
              OR
            </div>
            <div className="col-sm-5">
              <hr />
            </div>
          </div>

          <button className="mt-3 my-btn-lg" id="reg_btn">
            Create a new OrphanSafe account
          </button>

          <small className="mt-3">version 1.0.0</small>
        </div>
      </Form>
    </div>
  );
};

export default LoginScreen;
