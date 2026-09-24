"use client";
import BreadcrumbBanner from "../common/BreadcrumbBanner";
import FromHeader from "../common/FromHeader";
import LoginForm from "./LoginForm";

function Login() {
    return (<>
        <BreadcrumbBanner />
        <FromHeader title={"Sign In"} subtitle={"To Your Account"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Sit aliquid, Non distinctio vel iste."} />
        <LoginForm />
    </>);
}

export default Login;