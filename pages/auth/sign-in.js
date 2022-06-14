import React from "react";
import SignInSide from "../../components/Auth/SideSignIn";
import Auth from "../../layouts/Auth";

export default function signIn() {
  return <SignInSide />;
}

signIn.layout = Auth;
