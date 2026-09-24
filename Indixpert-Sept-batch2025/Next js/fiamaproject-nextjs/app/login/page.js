import { Suspense } from "react";
import Login from "../../component/login/LoginPage";

export default function Page() {
  return <Suspense fallback={null}><Login /></Suspense>;
}
