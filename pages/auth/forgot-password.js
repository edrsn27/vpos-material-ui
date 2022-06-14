import React from "react";
import ForgotPassword from "../../components/Auth/ForgotPassword";
import Auth from "../../layouts/Auth";

export default function forgotPassword() {
  return <ForgotPassword />;
}

forgotPassword.layout = Auth;
