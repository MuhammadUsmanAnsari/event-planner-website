import React, { useState } from 'react'
import { Input } from 'antd'
import { auth, firestore } from 'config/Firebase'
import { useAuthContext } from 'context/AuthContext'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore/lite'

const initialValue = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
}
export default function Register() {
    const [value, setValue] = useState(initialValue)
    const { isAuthenticated, setAuthenticated } = useAuthContext()

    const [ isLoading, setIsLoading ] = useState(false)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setValue(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, password, confirmPassword } = value;
        if (password !== confirmPassword) {
            return window.toastify("Password doesn't match!", "error")

        }

        setIsLoading(true)

        createUserWithEmailAndPassword(auth, email, confirmPassword)
            .then((userCredential) => {
                setAuthenticated(true)
                const user = userCredential.user;
                setDocument(user, name)
                navigate("/")
                window.toastify("Registered successfully", "success")
            })
            .catch((error) => {
                window.toastify(error.message, "error")
            });

    }
    //setting document
    const setDocument = async (user, name) => {
        try {
            await addDoc(collection(firestore, "users"), {
                email: user.email,
                uid: user.uid,
                date: serverTimestamp(),
                fullName: name
            });
        } catch (e) {
            window.toastify(e.message, "error")
        }
        setIsLoading(false)
    }

    return (
        <>
            <div className="container top-space py-5 ">
                <div className="row g-0 ">
                    <div className="col-12 col-md-8 col-lg-6 offset-0 offset-lg-1  shadow-lg">
                        <div className="card rounded-5 text-center py-5 h-100 border-0">
                            <h2>REGISTER</h2>
                            <form className='mt-5 mb-4 w-75 mx-auto' onSubmit={handleSubmit} >

                                <Input placeholder="Enter your Name" className='shadow-none input-fields mb-4' name='name' onChange={handleChange} id="email" required="required" />
                                <Input placeholder="Enter your email" className='shadow-none input-fields' name='email' onChange={handleChange} id="email" required="required" />
                                <div className=' password-inputs'>
                                    <Input.Password className='py-2 mt-4 input-fields ' placeholder="Password" name='password' onChange={handleChange} id="password" required="required" />
                                    <Input.Password className='py-2 mt-4 input-fields' placeholder="Confirm Password" onChange={handleChange} name='confirmPassword' required="required" />
                                </div>
                                <div className='text-start mt-5'>Already have account?<Link className='text-dark fw-bold ms-2' to="/auth/login">Login</Link></div>
                                <button className="btn btn-outline-info w-75 py-2 rounded-0 mt-5" disabled={isLoading}>
                                    {isLoading
                                        ? <div className='spinner-border spinner-border-sm'></div>
                                        : "REGISTER"
                                    }
                                </button>
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
