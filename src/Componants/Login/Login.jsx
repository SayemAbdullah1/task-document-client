import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');


    const handleLoginForm = data => {
        console.log(data);
        setLoginError('');
       
    }

    // const handleLoginWithGoogle = () => {
    //     googleLogin()
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             navigate('/')
    //         })
    //         .catch(err => console.error(err));
    // }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center text-secondary font-bold mb-6'>Login</h2>
                <form onSubmit={handleSubmit(handleLoginForm)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <button type="button" class=" w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><input className='w-full' value="Login" type="submit" /></button>
                    
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Task manager <Link className='text-blue-800' to="/signup">Create new Account</Link></p>
                {/* <div className="divider">OR</div>
                <button onClick={handleLoginWithGoogle} className='btn btn-outline w-full'>LOGIN WITH GOOGLE</button> */}
            </div>
        </div>
    );
};

export default Login;