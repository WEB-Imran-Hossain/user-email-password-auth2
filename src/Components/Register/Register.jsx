import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password, accepted);

        // reset error
        setRegisterError("");

        // reset sucess
        setSuccess("");

        // password validation
        if (password.length < 6) {
            setRegisterError("Password should be at least 6 characters or longer");
            return;
        } else if (/[A - Z]/.test(password)) {
            setRegisterError(
                "Your password should have at least one uppercase characters"
            );
            return;
        } else if (!accepted) {
            setRegisterError('Please accept our terms and conditions')
            return;
        }

        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess("User Created Successfully.");
            })
            .catch((error) => {
                console.error(error);
                setRegisterError(error.message);
            });
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <h2 className="text-3xl">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input
                        className="border mt-4"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <br />

                    <div className="relative">
                        <input
                            className="border mt-2"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id=""
                            placeholder="Password"
                            required
                        />

                        <span className="absolute top-3.5 right-2" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? (
                                <MdRemoveRedEye></MdRemoveRedEye>
                            ) : (
                                <AiFillEyeInvisible></AiFillEyeInvisible>
                            )}
                        </span>
                    </div>

                    <br />
                    <div>
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">accept our <a href="">terms and conditions</a></label>
                    </div>
                    <br />
                    <input
                        className="mt-2 btn btn-primary"
                        type="submit"
                        value="Register"
                    />
                </form>
                {registerError && <p className="text-red-600">{registerError}</p>}
                {success && <p className="text-green-600">{success}</p>}
            </div>
        </>
    );
};

export default Register;
