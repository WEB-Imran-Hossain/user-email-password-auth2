
const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }


    return (
        <>
            <div className='flex flex-col justify-center items-center h-screen'>
                <h2 className="text-3xl">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="border mt-4" type="email" name="email" placeholder="Email" />
                    <br />
                    <input className="border mt-2" type="password" name="password" id="" placeholder="Password" />
                    <br />
                    <input className="mt-2 btn btn-primary" type="submit" value="Register" />
                </form>
            </div>
        </>
    );
};

export default Register;