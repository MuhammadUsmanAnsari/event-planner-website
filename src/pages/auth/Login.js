import React, { useState } from 'react'
import { Input } from 'antd'
import { auth, firestore } from 'config/Firebase'
import { useAuthContext } from 'context/AuthContext'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

const initialValue = {
    email: "",
    password: "",
}
export default function Login() {
    const [value, setValue] = useState(initialValue)
    const { setAuthenticated } = useAuthContext()

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setValue(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { email, password } = value;


        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthenticated(true)
                navigate("/")
                window.toastify("Logged in successfully", "success")
            })
            .catch((error) => {
                window.toastify(error.message, "error")
            });
        setIsLoading(false)

    }

    return (
        <>
            <div className="container top-space py-5 ">
                <div className="row g-0 ">
                    <div className="col-12 col-md-8 col-lg-6 offset-0 offset-lg-1  shadow-lg">
                        <div className="card rounded-5 text-center py-5 border-0 h-100">
                            <h2>LOGIN</h2>
                            <form className='mt-5 mb-4 w-75 mx-auto' onSubmit={handleSubmit} >
                                <div className=''>
                                    <Input placeholder="Enter your email" className='shadow-none input-fields' name='email' onChange={handleChange} id="email" required="required" />
                                    <Input.Password className='py-2 mt-4 input-fields ' placeholder="Password" name='password' onChange={handleChange} id="password" required="required" />
                                </div>
                                <div className='text-start mt-4'>
                                    <Link className='text-dark ' to="/auth/forgot-password">Forgot Password?</Link>
                                </div>
                                <button className="btn btn-outline-info w-75 py-2 rounded-0 mt-5" disabled={isLoading}>
                                    {isLoading
                                        ? <div className='spinner-border spinner-border-sm'></div>
                                        : "LOGIN"
                                    }
                                </button>
                                <div className='text-start mt-5'>Don't have account?<Link className='text-dark fw-bold ms-2' to="/auth/register">Register</Link></div>
                            </form>

                        </div>
                    </div>
                    <div className="col-4 col-md-4 d-none d-md-block">
                        <img src="https://c0.wallpaperflare.com/preview/440/716/49/ceremonial-chairs-daylight-flowers.jpg" className='h-100 w-100' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
