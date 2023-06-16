import React, { useEffect, useState } from 'react';
import { NewInspection } from './NewInspection';
import { TotalInspection } from "./TotalInspection";
import { Users } from "./Users";
import { FaUsers,FaPowerOff,FaSearch } from "react-icons/fa";
import { FcInspection, FcKindle } from "react-icons/fc";
import axios from 'axios';
import { animateScroll as scroll, scroller } from 'react-scroll'; 
import "./dashboard.css";
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
    let [users, setUsers] = useState([]);
    let [newInspection, setNewInspection] = useState([]);
    let [totalInspection, setTotalInspection] = useState([]);
    let [search, setSearch] = useState('');
    let move=useNavigate()
    useEffect(() => {
        axios.get("/dashboard").then((res) => {
            setNewInspection(res.data.NewInspection);
            setTotalInspection(res.data.TotalInspection);
            setUsers(res.data.newUsers)
        });
    }, []);

    let scrollToComponent = (componentName) => {
        scroller.scrollTo(componentName, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    let data = [
        { title: "Total Users", icon: <FaUsers />, desc: users.length, scrollTarget: 'usersSection' },
        { title: "New Inspection", icon: <FcKindle />, desc: newInspection.length, card: "New", scrollTarget: 'newInspectionSection' },
        { title: "Inspections List", icon: <FcInspection />, desc: totalInspection.length, scrollTarget: 'totalInspectionSection' }
    ];

    return (
        <>
            <div className='container-fluid'>
                <div className='row mt-5 mb-2'>
                    <div className='col-lg-12 col-sm-12'>
                        <div className='search-div'>
                            <input
                                type="search"
                                placeholder='Search Anything'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <div className='search-icon'>
                                <FaSearch />
                            </div>
                            <div className='logout' onClick={()=>{
                                move("/")
                            }}>
                                <FaPowerOff/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row pt-2 pb-5 px-3' style={{ backgroundColor: "rgb(2, 2, 94)", color: "white", borderRadius: "20px" }}>
                    <div className='col-lg-12 col-sm-12 py-4'>
                        <h1>Dashboard</h1>
                    </div>
                    {data.map((item) => {
                        return (
                            <div className='col-lg-4 col-sm-5 p-3' key={item.title}>
                                <div className='dash_card' onClick={() => scrollToComponent(item.scrollTarget)}>
                                    {item.title === "New Inspection" && newInspection.length !== 0 && (
                                        <div>
                                            <p className='color_card'>{item.card}</p>
                                        </div>
                                    )}
                                    <div className='dash_icon' style={{ fontSize: "80px" }}>
                                        {item.icon}
                                    </div>
                                    <div className='dash_detail' style={{ fontSize: "30px" }}>
                                        <div>
                                            <p style={{fontWeight:"600"}}>{item.title}</p>
                                        </div>
                                        <div className='d-flex justify-content-end px-3'>
                                            <p style={{fontWeight:"600"}}>{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className='col-lg-12 col-sm-12' id='newInspectionSection'>
                    <div className='row px-5 my-5 d-flex gap-5 justify-content-center'>
                        <NewInspection />
                    </div>
                </div>
                <div className='col-lg-12 col-sm-12' id='usersSection'>
                    <div className='row px-5 my-5 d-flex gap-5 justify-content-center'>
                        <Users />
                    </div>
                </div>

                <div className='col-lg-12 col-sm-12' id='totalInspectionSection'>
                    <div className='row px-5 my-5 d-flex gap-5 justify-content-center'>
                        <TotalInspection />
                    </div>
                </div>

            </div>
        </>
    );
};
