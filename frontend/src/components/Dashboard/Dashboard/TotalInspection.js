
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DotLoader } from 'react-spinners';
import "./totalinspection.css"
import axios from 'axios'


export const TotalInspection = () => {
    let [inspection, setInspection] = useState([])
    let [isLoading, setIsLoading] = useState(true);
    let move=useNavigate()
    useEffect(() => {
        axios.get("/inspections").then((res) => {
            setInspection(res.data)
            setIsLoading(false);
        }).catch((error) => {
            console.error("Error fetching data:", error);
            setIsLoading(false);
        });
    }, [])

    return <>
        <div className='container-fluid'>
            <div className='row my-5'>
                <div className='col-lg-12 col-sm-12'>
                    <h1 style={{ color: "rgb(2, 2, 94)", fontWeight: "700" }}> Total Inspections </h1>
                </div>
            </div>
            <div className='row px-5 my-5 d-flex gap-5 justify-content-center row'>
                {isLoading ? (
                    <DotLoader
                        color="rgb(2, 2, 94)"
                        loading
                        size={100}
                        speedMultiplier={1}
                    />
                ) : (inspection.map((data) => {
                    return <>
                            <div className="col-lg-5 col-sm-12 py-3 px-4 recent" onClick={()=>{
                                move("/report/"+data._id)
                            }}>
                                <div><p className='text-center' style={{ fontSize: "30px", fontWeight: "700", color: "rgb(2, 2, 94)", }}>Inspection Done</p></div>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p style={{ fontWeight: "600" }}>Client Name :</p>
                                    </div>
                                    <div>
                                        <p>{data.clientName}</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p style={{ fontWeight: "600" }}>Client Number :</p>
                                    </div>
                                    <div>
                                        <p>{data.clientNumber}</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p style={{ fontWeight: "600" }}>Vehicle Make :</p>
                                    </div>
                                    <div>
                                        <p>{data.vehicleMake}</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p style={{ fontWeight: "600" }}>Vehicle Model :</p>
                                    </div>
                                    <div>
                                        <p>{data.vehicleModel}</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p style={{ fontWeight: "600" }}>Location :</p>
                                    </div>
                                    <div>
                                        <p>{data.inspectionLocation}</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p style={{ fontWeight: "600" }}>Inspector Name :</p>
                                    </div>
                                    <div>
                                        <p>{data.inspectorName}</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p style={{ fontWeight: "600" }}>Inspector Number:</p>
                                    </div>
                                    <div>
                                        <p>{data.inspectorNumber}</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p style={{ fontWeight: "600" }}>Date :</p>
                                    </div>
                                    <div>
                                        <p>{data.date.slice(0, 19)}</p>
                                    </div>
                                </div>
                            </div>
                    </>
                })
                )}

            </div>
        </div>

    </>
}
