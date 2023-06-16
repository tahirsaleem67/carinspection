import React from 'react'
import './navbar.css'

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light shadow">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img className='image1' src="logo.png" /></a>
                <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href='/'>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href='/about'>About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href='/samplereport'>Sample Report</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href='/career'>Career</a>
                        </li>
                        <li class="nav-item">
                            <a href="/appointment">
                                <button class="btn btn-danger mx-3" >Appointment</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
