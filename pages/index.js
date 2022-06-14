import React from "react";
import { useAuth } from "../context/AuthProvider";
export default function Index() {
    const { signout } = useAuth();
  return <div onClick={signout}>click me to sign out</div>;
}
