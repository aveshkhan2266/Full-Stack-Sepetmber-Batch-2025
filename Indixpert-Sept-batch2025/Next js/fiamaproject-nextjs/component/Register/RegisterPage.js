"use client";
import BreadcrumbBanner from "../common/BreadcrumbBanner";
import FromHeader from "../common/FromHeader";
import RegisterForm from "./RegisterForm";

function Register() {
    return (<>
        <BreadcrumbBanner />
        <FromHeader title={"Register"} subtitle={"Your Account"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Sit aliquid, Non distinctio vel iste."} />
        <RegisterForm />
    </>);
}

export default Register;