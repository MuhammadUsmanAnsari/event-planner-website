import React from 'react'
import { Link } from 'react-router-dom'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <>
      <div className="footer bg-dark">
        <div className="container-fluid footer-container">
          <div className="container text-secondary pt-5 pb-2">
            <div className="row my-5 px-4">
              <div className="col-12 col-md-4">
                <div> <img src="https://www.logodesignteam.com/images/portfolio-images/event-planning-logo-design/event-planning-logo-design17.jpg" className='rounded-circle' width="60" height="60" alt="" /></div>
                <p className='mt-4 mb-5'>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra arnare, eros dolor interdum nulla.</p>
                <div>
                <Link to="https://www.facebook.com/" target="_blank" className='text-white mx-2'><FacebookOutlinedIcon /></Link>
             <Link to="https://www.facebook.com/" target="_blank" className='text-white mx-2'><TwitterIcon /></Link>
             <Link to="https://www.facebook.com/" target="_blank" className='text-white mx-2'><InstagramIcon /></Link>
                </div>
              </div>
              <div className="col-6 col-md-3 mt-5 mt-md-0">
                <h5 className='text-white'>Quick Links</h5>
                <div className='mt-4'><Link className='text-decoration-none text-secondary '>Image Licensin</Link></div>
                <div><Link className='text-decoration-none text-secondary '>Style Guide</Link></div>
                <div><Link className='text-decoration-none text-secondary '>Privacy Policy</Link></div>
              
              </div>
              <div className="col-6 col-md-3 mt-5 mt-md-0">
                <h5 className='text-white'>Shop Chatagory</h5>
                <div className='mt-4'><Link className='text-decoration-none text-secondary '>Image Licensin</Link></div>
                <div><Link className='text-decoration-none text-secondary '>Style Guide</Link></div>
                <div><Link className='text-decoration-none text-secondary '>Privacy Policy</Link></div>
              </div>
              <div className="col-6 col-md-2 mt-5 mt-md-0">
                <h5 className='text-white'>Partners</h5>
                <div className='mt-4'><Link className='text-decoration-none text-secondary '>Image Licensin</Link></div>
                <div><Link className='text-decoration-none text-secondary '>Style Guide</Link></div>
                <div><Link className='text-decoration-none text-secondary '>Privacy Policy</Link></div>
              </div>
            </div><hr />
            <div className="row">
              <div className="col text-center">
                <p>Copyright &copy; 2023. All rights reserved.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
