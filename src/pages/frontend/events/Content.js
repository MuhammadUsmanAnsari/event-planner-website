import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, doc, getDocs, query, serverTimestamp, setDoc, where } from "firebase/firestore/lite";
import { auth, firestore } from 'config/Firebase';
import { useAuthContext } from 'context/AuthContext';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const initialState = {
    title: "",
    location: "",
    description: "",
    date: "",
    time: "",
}

export default function Content() {
    const [state, setState] = useState(initialState)
    const { isAuthenticated, userDetail } = useAuthContext()
    const [data, setData] = useState([])
    const [added, setAdded] = useState(false)
    const [loading, seIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        handleGetEvents()
    }, [added, userDetail])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!isAuthenticated) {
            return navigate("/auth/login")
        }
        // const { title, location, description, time, date } = state
        state.dateCreated = serverTimestamp()
        state.id = window.getRandomId()
        state.createdBy = {
            email: auth.currentUser.email,
            uid: auth.currentUser.uid
        }
        console.log(state);
        setAdded(false)
        seIsLoading(true)

        // Add a new document in collection "cities"
        await setDoc(doc(firestore, "events", state.id), state)
            .then(() => {
                window.toastify("Event added successfully", "success")
                setAdded(true)
                setState(initialState)
            })
        seIsLoading(false)

    }


    const handleGetEvents = async () => {
        let array = []
        seIsLoading(true)
        const q = query(collection(firestore, "events"), where("createdBy.email", "==", userDetail.email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let data = { firebaseId: doc.id, ...doc.data() }
            array.push(data)
            setData(array)
        });
        seIsLoading(false)
    }

    const handleDelete = async (get) => {
        await deleteDoc(doc(firestore, "events", get));
        handleGetEvents()
        window.toastify("Deleted successfully", "success")
    }

    return (
        <>
            <div className='container bg-light p-4 mt-5 mt-md-0'>
                <div className="row mt-5 mt-md-0">
                    <div className="col">
                        <h2 className='text-info'>Events</h2>
                    </div>
                    <div className="col text-end">
                        <button type="button" class="btn btn-primary px-1 px-md-5 py-1 py-md-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Add an event</button>

                        <div class="modal  fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header ">
                                        <h1 class="modal-title ms-auto text-info fs-3" id="exampleModalLabel">Add Event</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="container px-3 py-4">
                                                <div className="row">
                                                    <div className="col">
                                                        <input type="text" className='form-control' placeholder='Enter title here' value={state.title} name='title' onChange={handleChange} />
                                                    </div>
                                                    <div className="col">
                                                        <input type="text" className='form-control' placeholder='Enter location here' value={state.location} name='location' onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="row my-3">
                                                    <div className="col">
                                                        <input type="date" className='form-control' placeholder='Enter date here' value={state.date} name='date' onChange={handleChange} />
                                                    </div>
                                                    <div className="col">
                                                        <input type="time" className='form-control' placeholder='Enter time of event' name='time' value={state.time} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="row my-3">
                                                    <div className="col">
                                                        <textarea type="text" className='form-control' rows="5" placeholder='Enter Description here' value={state.description} name='description' onChange={handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-info text-white px-4 py-2 me-3" data-bs-dismiss="modal">Add Event</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='container bg-light p-4 mt-5 '>
                <div className="row ">
                    <div className="col">
                        <h3 >Added Events</h3>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <div className="table-responsive">
                            <table class="table ">
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Time</th>
                                    </tr>
                                </thead>
                                {loading
                                    ?
                                    <tr className='mt-5'>
                                        <td colSpan="4" className='text-center'>
                                            <div className='loader '>
                                                <div className="spinner-grow text-primary" role="status">
                                                </div>
                                                <div className="spinner-grow text-secondary mx-3" role="status">
                                                </div>
                                                <div className="spinner-grow text-success" role="status">
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    : <tbody>
                                        {data.map((events, i) => {
                                            return <tr key={i}>
                                                <th scope="row">{events.title}</th>
                                                <td>{events.location}</td>
                                                <td>{events.date}</td>
                                                <td>{events.time}</td>
                                                <td><button className='btn' onClick={() => handleDelete(events.firebaseId)}><DeleteIcon /></button></td>
                                            </tr>
                                        })}

                                    </tbody>
                                }

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
