
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import './appointment.css'
import { toast } from 'react-toastify';

const Appointment = () => {

  let { register, handleSubmit, reset } = useForm();

  function Appointment(data) {
    console.log(data)

    axios.post("/appointment", data).then((res) => {
      try {
        if (res) {
          toast.success("Appointment Done")
          reset()
        }
      } catch (e) {

        toast.error("Some Error Occur Try Again")
      }

    })
  }


  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-lg-12">
            <section className="about-hero-section">
              <div className="heading align-items-center d-flex justify-content-center">
                <h1 className="text-white text-center fw-bolder hero-heading">Appointment</h1>
              </div>
            </section>
          </div>
        </div>
      </div>

      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3 shadow">

                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Schelude Inspection</h3>

                  <form className="px-md-2" onSubmit={handleSubmit(Appointment)}>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example1q">Name</label>
                      <input required {...register("name")} type="text" id="form3Example1q" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example1q">Email *</label>
                      <input required {...register("email")} type="email" id="form3Example1q" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example1q">Phone Number *</label>
                      <input required {...register("number")} type="number" id="form3Example1q" className="form-control" />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example1q">Problem *</label>
                      <input required {...register("problem")} type="text" id="form3Example1q" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example1q">City *</label>
                      <input required {...register("city")} type="text" id="form3Example1q" className="form-control" />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example1q">Location *</label>
                      <input required {...register("location")} type="text" id="form3Example1q" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-success btn-lg mb-1">Submit</button>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
export default Appointment