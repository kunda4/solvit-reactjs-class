import Button from "../components/button";
import Input from "../components/input";
import "./signin.css";
const SignIn = () => {
    const signInText = "Sign in...";
    return <div className="sign-in-page">
        <div className="login-header">
            <img src="/reactlogo.png" />
            <h1>Welcome to ReactLadies</h1>
        </div>
        <form className="signin-form">


            <Input name="email" label="Email" type="email" />

            <Input name="password" label="Password" type="password" />
            <Button label={signInText} />
        </form>
    </div>
}
export default SignIn;