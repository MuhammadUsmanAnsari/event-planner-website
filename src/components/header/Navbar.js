import React from 'react'
import './_navbar.scss';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'firebase/auth';
import { auth } from 'config/Firebase';


export default function Navbar(props) {
  const { isAuthenticated, setAuthenticated } = useAuthContext()
  const navigate = useNavigate()
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        window.toastify("Logout successfully.", "success")
        setAuthenticated(false)
        navigate("/")
      }).catch((error) => {
        window.toastify(error.message, "error")
      });
  }

  return (
    <nav class={`navbar navbar-expand-lg navbar-dark ${props.background}`} >
      <div class="container">
        <a class="navbar-brand" href="#"><img src="https://www.logodesignteam.com/images/portfolio-images/event-planning-logo-design/event-planning-logo-design17.jpg" className='rounded-circle' width="60" height="60" alt="logo" /></a>

        <a class="btn border navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" href="#offcanvasExample">
          <span class="navbar-toggler-icon"></span>
        </a>

        <div class="collapse navbar-collapse offcanvas offcanvas-start bg-dark" id="navbarSupportedContent">
          <div class="offcanvas-header w-100 d-flex d-lg-none">
            <a class="navbar-brand" href="#"><img src="https://www.logodesignteam.com/images/portfolio-images/event-planning-logo-design/event-planning-logo-design17.jpg" className='rounded-circle' width="60" height="60" alt="logo" /></a>
            <button type="button" class="bg-white btn-close ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className='w-100 d-block d-lg-flex '>
            <ul class="navbar-nav justify-content-end px-4 px-lg-0 py-lg-0 w-50 ">
              <li class="nav-item mx-3 my-1 my-md-0 ">
                <Link class="nav-link active" aria-current="page" to="/">HOME</Link>
              </li>
              <li class="nav-item mx-3 my-1 my-md-0 ">
                <Link class="nav-link " to="see-events">EVENTS</Link>
              </li>
              <li class="nav-item mx-3 my-1 my-md-0 ">
                <a class="nav-link" href="#">CONTACT</a>
              </li>
            </ul>
            <div class="searchBar text-end w-50 px-3 px-lg-0 mt-5 mt-sm-0 " >
              <span className='d-block d-sm-inline mb-3 mb-sm-0'>

                <Link to="https://www.facebook.com/" target="_blank" className='text-white mx-2'><FacebookOutlinedIcon /></Link>
                <Link to="https://www.facebook.com/" target="_blank" className='text-white mx-2'><TwitterIcon /></Link>
                <Link to="https://www.facebook.com/" target="_blank" className='text-white mx-2'><InstagramIcon /></Link>
              </span>
              {isAuthenticated
                ? <button className='btn btn-info text-white  rounded-pill px-4 ms-3 p-2' onClick={handleLogout}><LogoutIcon className='fs-5' /> Logout</button>
                : <Link className='btn btn-info text-white py-2 px-5 ms-3 rounded-pill' to="/auth/login">Login</Link>
              }

            </div>
          </div>
        </div>
      </div>
    </nav>



  )
}
