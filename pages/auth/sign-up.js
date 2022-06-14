import React from "react";
import SignUp from "../../components/Auth/SignUp";
import Auth from "../../layouts/Auth";

export default function signUp() {
  return <SignUp />;
}
signUp.layout = Auth;
