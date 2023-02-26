import React from 'react'
import { Breadcrumb, Button, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { auth } from 'config/Firebase';
import { useAuthContext } from 'context/AuthContext';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'components/header/Navbar';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Topbar() {

    const { isAuthenticated, setAuthenticated } = useAuthContext()

    //handle logout
    const navigate = useNavigate()
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                window.toastify("Log-out successfully.", "success")
                setAuthenticated(false)
                navigate("/")
            }).catch((error) => {
                window.toastify(error.message, "error")
            });
    }
    return (
        <>
            <Header className='d-none d-md-block bg-light' >
                <div className="d-flex  justify-content-between  align-items-center">
                    <Breadcrumb style={{ margin: '16px 0 16px 24px' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Events</Breadcrumb.Item>
                    </Breadcrumb>
                    {isAuthenticated
                    ?<button className='btn btn-info text-white  rounded-pill px-4 ms-3 p-2' onClick={handleLogout}><LogoutIcon className='fs-5' /> Logout</button>
                    :<Link className='btn btn-info text-white  rounded-pill px-4 ms-3 p-2' to="/auth/login">Login</Link>
                    }
                    
                </div>
            </Header>
            <div className='d-block d-md-none'>
        <Navbar background={"bg-dark"}/>
      </div>
        </>
    )
}
