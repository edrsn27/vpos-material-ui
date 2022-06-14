import { useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { useRouter } from "next/router";
export default function Auth({ children }) {
  const { currentUser, loading } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (!loading && currentUser) push("/");
  }, [currentUser, loading]);

  if (loading) return <div>Loading...</div>;

  return children;
}
