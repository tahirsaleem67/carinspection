import React from 'react'
import "./samplereport.css"
const Samplereport = () => {
    return (
        <>
            <div class="container-fluid ">
                <div class="row ">
                    <div class="col-lg-12">
                        <section class="about-hero-section">
                            <div class="heading align-items-center d-flex justify-content-center">
                                <h1 class="text-white text-center fw-bolder hero-heading">Sample Report</h1>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-8 m-auto">
                        <p className='disc'>Here is a sample of our inspection report. It will give you an idea of the level of detail we go into while also showcasing how simple and easy to understand our reports are made to be.</p>
                        <div class="d-flex justify-content-center">
                            <a href="ashab asig11.docx" download>
                                <button class="btn btn-danger p-3">Download Report</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Samplereport