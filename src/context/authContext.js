import React, { createContext, useState } from "react";
import { apiPost, apiGet } from "../utils/api/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const dataContext = createContext();

const DataProvider = ({ children }) => {

  /**==============Login======= **/
  const Login = async (formdata) => {
    try {
      const loginData = {
        email: formdata.email,
        password: formdata.password,
      };

      await apiPost("/user/login", loginData).then((res) => {
        console.log("loginData", loginData);

        toast.success(res.data.message);
        localStorage.setItem("signature", res.data.token);
      });
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

/**==============Register======= **/
const Register = async (formdata) => {
  try {
    const registerData = {
      userName:formdata.userName,
      email: formdata.email,
      password: formdata.password,
    };

    await apiPost("/user/signup", registerData).then((res) => {
     console.log(res.data)
      window.location.href = "/signup-success";
      
    });
    
  } catch (err) {
    console.log(err.response.data)
    toast.error(err.response.data.message);
  }
};

  /**==============Reset Password======= **/
  const ResetPassword = async (formdata) => {
    try {
      const resetPasswordData = {
        email: formdata.email,
      };

      await apiPost("/user/reset-password", resetPasswordData).then((res) => {
        toast.success(res.data.message);
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (err) {
      toast.error(err.response.data.message);
      setTimeout(() => {
        window.location.href = "/register";
      }, 2000);
    }
  };

  /**==============Create Password======= **/
  const CreatePassword = async (formdata, email) => {
    console.log("email", email)
    try {
      const createPasswordData = {
        newPassword: formdata.newPassword,
      };

      await apiPost(`/user/create-password/${email}`, createPasswordData).then((res) => {
        localStorage.clear()
        window.location.href = "/password-success";
      });
    } catch (err) {
      toast.error(err.response.data.message);
      
    }
  };

  

  return (
    <dataContext.Provider
      value={{
        Login,
        ResetPassword,
        CreatePassword,
        Register
        
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(dataContext);
  if (context === "undefined") {
    throw new Error("useAuth must be used within the auth provider");
  }
  return context;
};

export default DataProvider;
