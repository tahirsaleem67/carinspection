import React, { useEffect, useState } from 'react';
import { TiTickOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import "./new.css"
import axios from 'axios';

export const NewInspection = () => {

  let [recentClicked, setRecentClicked] = useState(false);
  let [newInspection, setNewInspection] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let move=useNavigate()

  let handleRecentClick = () => {
    setRecentClicked(true);
  };

  useEffect(() => {
    axios.get("/appointment")
      .then((res) => {
        setNewInspection(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);


  return (
    <>
      <div className='container-fluid '>
        <div className='row my-5'>
          <div className='col-lg-12 col-sm-12'>
            <h1 style={{ color: "rgb(2, 2, 94)", fontWeight: "700" }}> Recent Inspection Request </h1>
          </div>
        </div>
        <div className='row px-5 my-5 d-flex gap-5 justify-content-center new_row'>
          {isLoading ? (
            <DotLoader
              color="rgb(2, 2, 94)"
              loading
              size={100}
              speedMultiplier={1}
            />
          ) : (
            newInspection.length === 0 ? (
              <h1>No New Inspection Request</h1>
            ) : (
              newInspection.map((data) => (
                <div key={data._id} className={`col-lg-5 col-sm-12 py-3 px-4  recent ${recentClicked ? 'recent-clicked' : ''}`}>
                  <div>
                    <p className='text-center' style={{ fontSize: "30px", fontWeight: "700", color: "rgb(2, 2, 94)" }}>New Inspection Request</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <p style={{ fontWeight: "600" }}>Client Name :</p>
                    </div>
                    <div>
                      <p>{data.name}</p>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <p style={{ fontWeight: "600" }}>Client Number :</p>
                    </div>
                    <div>
                      <p>{data.number}</p>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <p style={{ fontWeight: "600" }}>Client Email :</p>
                    </div>
                    <div>
                      <p>{data.email}</p>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <p style={{ fontWeight: "600" }}>Problem :</p>
                    </div>
                    <div>
                      <p>{data.problem}</p>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <p style={{ fontWeight: "600" }}>Client City :</p>
                    </div>
                    <div>
                      <p>{data.city}</p>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <p style={{ fontWeight: "600" }}>Client Location :</p>
                    </div>
                    <div>
                      <p >{data.location}</p>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <div >
                      <p style={{ fontWeight: "600" }}>Date :</p>
                    </div>
                    <div>
                      <p >{data.date.slice(0, 19)}</p>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <button onClick={() => {
                      move("/start/" + data._id)
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
                      <span>Start</span>
                    </button>
                    <div className='tick' onClick={() => {
                      axios.delete("/deleteAppointment?id=" + data._id).then(() => {
                        setNewInspection(newInspection.filter(inpect => data._id !== inpect._id))
                      })
                    }}>
                      <TiTickOutline />
                    </div>
                  </div>
                </div>
              ))
            )
          )}
        </div>
      </div>
    </>
  );
};
