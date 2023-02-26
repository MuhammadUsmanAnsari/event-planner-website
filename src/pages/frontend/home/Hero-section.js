import React, { useContext } from 'react'
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import { useAuthContext } from 'context/AuthContext';
import { Link } from 'react-router-dom';
export default function HeroSection() {
 const {isAuthenticated}=useAuthContext()
 console.log(isAuthenticated);
    return (
        <>
            <div className="container-fluid hero-section d-flex  align-items-center ">
                <div className="container">
                    <div className="row ">
                        <div className="col-12 col-md-6 col-lg-5 bg-light">
                            <div className='py-5 px-1 px-md-3 px-lg-4'>
                                <h1 className='fw-bold'>ORGANIZING WORLD CLASS EVENTS</h1>
                                <h5 className='my-4'>Let's enjoy an event _______</h5>
                                <Link className="btn btn-info text-white py-2 py-md-3 px-3 px-md-5 rounded-0" to="/events">Add an event</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* card section */}
            <div className="container top-space pt-5">
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col text-center">
                        <div className="card p-5 mt-3 shadow">
                            <div ><VolunteerActivismRoundedIcon className='fs-1' /></div>
                            <h3 className='my-3'>Plan your marriage</h3>
                        </div>

                    </div>
                    <div className="col text-center">
                        <div className="card p-5 mt-3 shadow">
                            <div ><CelebrationRoundedIcon className='fs-1' /></div>
                            <h3 className='my-3'>College party</h3>
                        </div>

                    </div>
                    <div className="col text-center">
                        <div className="card p-5 mt-3 shadow">
                            <div ><EmojiEventsRoundedIcon className='fs-1' /></div>
                            <h3 className='my-3'>Award win event</h3>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
