import React, { useEffect, useState } from 'react'
import Navbar from 'components/header/Navbar'
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore/lite";
import { firestore } from 'config/Firebase';
import './_seeMore.scss'
import Footer from 'components/footer/Footer';

export default function SeeEvents() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    // const [newData, setNewData] = useState("")

    useEffect(() => {
        handleGetEvent()
    }, [])

    const handleGetEvent = async () => {
        let array = []
        setLoading(true)
        const querySnapshot = await getDocs(collection(firestore, "events"));
        querySnapshot.forEach((doc) => {
            let data = { firebaseId: doc.id, ...doc.data() }
            array.push(data)
            setData(array)
        });
        setLoading(false)
    }

    // handle join
    // const handleJoin = async (get) => {
    //     let array = []
    //     const q = query(collection(firestore, "events"), where("id", "==", get.id));
    //     const querySnapshot = await getDocs(q);
    //     querySnapshot.forEach((doc) => {
    //         let data = { ...doc.data() }
    //         array.push(data)
    //         console.log(array);
    //         // updateData(array[0].id)
    //     });

    // }
    // const updateData = (get) => {
    //     const cityRef = doc(firestore, 'events', get);
    //     setDoc(cityRef, { attendies: 3 }, { merge: true });

    // }
    // console.log(newData);
    // console.log(data);
    return (
        <>
            <Navbar background={"bg-dark"} />
            <div className="container top-space mb-5">
                <div className="row">
                    <div className="col">
                        <h1 className="text-info">Popular Events_____</h1>
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
                                        <th scope="col">Created By</th>
                                    </tr>
                                </thead>
                                {loading
                                    ?
                                    <tr className='mt-5'>
                                        <td colSpan="5" className='text-center'>
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

                                    :
                                    <tbody>
                                        {data.map((events, i) => {
                                            return <tr key={i}>
                                                <td scope="row">{events.title}</td>
                                                <td>{events.location}</td>
                                                <td>{events.date}</td>
                                                <td>{events.time}</td>
                                                <td>{events.createdBy.email}</td>
                                                {/* <td className='text-center'><button className='btn btn-info text-white' onClick={() => handleJoin(events)}>Join</button></td> */}
                                            </tr>
                                        })}

                                    </tbody>
                                }

                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
