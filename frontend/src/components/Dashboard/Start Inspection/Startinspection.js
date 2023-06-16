import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import "./Startinspection.css";
export const Startinspection = () => {

    let move = useNavigate()
    let data = useParams();


    let [inspection, setInspection] = useState({});

    useEffect(() => {

        if (data.apointment) {
            axios.get('/singleInspection?id=' + data.apointment).then((res) => {
                setInspection(res.data)
            })
        }


    }, [])

    let { register, handleSubmit, reset, formState: { errors }, } = useForm();

    function Inspection(data) {
        console.log(data)
        axios.post("/inspection", data).then((res) => {
            try {
                if (res) {
                    toast.success("Inspection Done")
                    reset()
                }
            } catch (e) {

                toast.error("Some Error Occur Try Again")
            }

        })
    }

    return <>
        <div className='container-fluid m-0 p-0'>
            <div className='row'>
                <div className='col'>
                    <h1 style={{ color: "#00008B", fontWeight: "700" }}>----Start Inspection----</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <form onSubmit={handleSubmit(Inspection)} className='px-4 inspection-form'>

                        <div className='row'>
                            <div className='col-lg-12 col-sm-12 my-4'>
                                <h3 className='text-uppercase' style={{ color: "#00008B", fontWeight: "600" }}>Perliminary Information</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Client Name</label> <br />
                                <input required type="text" defaultValue={inspection.name} {...register("clientName")} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Client Number</label> <br />
                                <input required type="number"  defaultValue={inspection.number} {...register("clientNumber")} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Vehicle Make</label> <br />
                                <input required type="text" {...register("vehicleMake")} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Vehicle Model</label> <br />
                                <input required type="text" {...register("vehicleModel")} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Vehicle Varient</label> <br />
                                <input required type="text" {...register("vehicleVarient")} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Model Year</label> <br />
                                <input required type="Number" {...register("vehicleYear")} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Transmittion</label> <br />
                                <input required type="text" {...register("vehicleTransmition")} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Engine Capacity</label> <br />
                                <input required type="text" {...register("vehicleEngine")} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Fuel Type</label> <br />
                                <input required type="text" {...register("vehicleFuel")} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Body Color</label> <br />
                                <input required type="text" {...register("bodyColor")} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Mileage</label> <br />
                                <input required type="text" {...register("Milaege")} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Registration</label> <br />
                                <input required type="text" {...register("registrationNumber")} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Registration City</label> <br />
                                <input required type="text" {...register("registrationCity")} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Chasis Number</label> <br />
                                <input required type="text" {...register("chasisNumber")} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Engine Number</label> <br />
                                <input required type="text" {...register("enegineNumber")} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Inspection Location</label> <br />
                                <input required type="text" {...register("inspectionLocation")} />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-12 col-sm-12 my-4'>
                                <h3 className='text-uppercase' style={{ color: "#00008B", fontWeight: "600" }}>Accidental Checklist</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Engine Room Firewal</label> <br />
                                <select {...register("engineRoom")}>
                                    <option value="Non Accidented">Non Accidented</option>
                                    <option value="Accidented">Accidented</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Right Strut Tower</label> <br />
                                <select {...register("strutTower")}>
                                    <option value="Non Accidented">Non Accidented</option>
                                    <option value="Accidented">Accidented</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Left Strut Tower</label> <br />
                                <select {...register("leftStrutTower")}>
                                    <option value="Non Accidented">Non Accidented</option>
                                    <option value="Accidented">Accidented</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Right Front Rail</label> <br />
                                <select {...register("rightFrontRail")}>
                                    <option value="Non Accidented">Non Accidented</option>
                                    <option value="Accidented">Accidented</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Left Front Rail</label> <br />
                                <select {...register("leftFrontRail")}>
                                    <option value="Non Accidented">Non Accidented</option>
                                    <option value="Accidented">Accidented</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Radiator Core Support</label> <br />
                                <select {...register("radiatorCoreSupport")}>
                                    <option value="Non Accidented">Non Accidented</option>
                                    <option value="Accidented">Accidented</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Right A Pillar</label> <br />
                                <select {...register("rightApillar")}>
                                    <option value="Non Accidented">Non Accidented</option>
                                    <option value="Accidented">Accidented</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Left A Pillar</label> <br />
                                <select {...register("leftApillar")}>
                                    <option value="Non Accidented">Non Accidented</option>
                                    <option value="Accidented">Accidented</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Right B Pillar</label> <br />
                                <select {...register("rightBpillar")}>
                                    <option value="Non Accidented">Non Accidented</option>
                                    <option value="Accidented">Accidented</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Left B Pillar</label> <br />
                                <select {...register("leftBpillar")}>
                                    <option value="Non Accidented">Non Accidented</option>
                                    <option value="Accidented">Accidented</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Right C Pillar</label> <br />
                                <select {...register("rightCpillar")}>
                                    <option value="Non Accidented">Non Accidented</option>
                                    <option value="Accidented">Accidented</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Left C Pillar</label> <br />
                                <select {...register("leftCpillar")}>
                                    <option value="Non Accidented">Non Accidented</option>
                                    <option value="Accidented">Accidented</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Right D Pillar</label> <br />
                                <select {...register("rightDpillar")}>
                                    <option value="Non Accidented">Non Accidented</option>
                                    <option value="Accidented">Accidented</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Left D Pillar</label> <br />
                                <select {...register("leftDpillar")}>
                                    <option value="Non Accidented">Non Accidented</option>
                                    <option value="Accidented">Accidented</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Boot Floor</label> <br />
                                <select {...register("bootFloor")}>
                                    <option value="Non Accidented">Non Accidented</option>
                                    <option value="Accidented">Accidented</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front Underbody</label> <br />
                                <select {...register("frontUnderbody")}>
                                    <option value="Non Accidented">Non Accidented</option>
                                    <option value="Accidented">Accidented</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Underbodyr</label> <br />
                                <select {...register("rearUnderbody")}>
                                    <option value="Non Accidented">Non Accidented</option>
                                    <option value="Accidented">Accidented</option>
                                </select>
                            </div>


                        </div>



                        <div className='row'>
                            <div className='col-lg-12 col-sm-12 my-4'>
                                <h3 className='text-uppercase' style={{ color: "#00008B", fontWeight: "600" }}>Mechanical Functions</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Engine Noisy</label> <br />
                                <select {...register("engineNoisy")}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                    <option value="Not Present">Not Present</option>
                                    <option value="Normal Sound">Normal Sound</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Engine Vibrations</label> <br />
                                <select {...register("engineVibration")}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                    <option value="Normal Sound">Normal Sound</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Engine Smoke</label> <br />
                                <select {...register("engineSmoke")}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Engine Smoke Color</label> <br />
                                <select {...register("engineSmokeColor")}>
                                    <option value="N/A">N/A</option>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Engine Blow</label> <br />
                                <select {...register("engineBlow")}>
                                    <option value="Not Present">Not Present</option>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Coolant Leakagee</label> <br />
                                <select {...register("coolantLeakage")}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Brake Oil Leakage</label> <br />
                                <select {...register("brakeOilLeakage")}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Transmission Oil Leakage</label> <br />
                                <select {...register("transmissionOilLeakage")}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Exhaust Sound</label> <br />
                                <select {...register("exhaustSound")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Not Good">Not Good</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Radiator</label> <br />
                                <select {...register("radiator")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Not Good">Not Good</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Suction Fan</label> <br />
                                <select {...register("suctionFan")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Not Good">Not Good</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Gear Transmission</label> <br />
                                <select {...register("gearTransmission")}>
                                    <option value="Smooth">Smooth</option>
                                    <option value="Not Good">Not Good</option>
                                </select>
                            </div>
                        </div>




                        <div className='row'>
                            <div className='col-lg-12 col-sm-12 my-4'>
                                <h3 className='text-uppercase' style={{ color: "#00008B", fontWeight: "600" }}>A/C & Heater Operation</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>A/C Installed</label> <br />
                                <select {...register("acInstalled")}>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>A/C Fan</label> <br />
                                <select {...register("acFan")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Blower Throw</label> <br />
                                <select {...register("blowerThrow")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>A/C Cooling</label> <br />
                                <select {...register("acCooling")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Heater</label> <br />
                                <select {...register("heater")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>

                        </div>


                        <div className='row'>
                            <div className='col-lg-12 col-sm-12 my-4'>
                                <h3 className='text-uppercase' style={{ color: "#00008B", fontWeight: "600" }}>Interior</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Steering Wheel Wear And Tear</label> <br />
                                <select {...register("SteeringWheelWearAndTear")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Steering Wheel Buttons</label> <br />
                                <select {...register("SteeringWheelButtons")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Lights Lever/ Switch</label> <br />
                                <select {...register("LightsLeverSwitch")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Dashboard</label> <br />
                                <select {...register("Dashboard")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Dash Control Buttons</label> <br />
                                <select {...register("DashControlButtons")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Interior Lights</label> <br />
                                <select {...register("InteriorLights")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>De-fogger</label> <br />
                                <select {...register("Defogger")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Hazard Lights</label> <br />
                                <select {...register("Hazardlights")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Multimedia</label> <br />
                                <select {...register("Multimedia")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Camera</label> <br />
                                <select {...register("RearCamera")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front View Camera</label> <br />
                                <select {...register("FrontViewCamera")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Trunk Release Lever</label> <br />
                                <select {...register("TrunkReleaseLever")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Fuel Cap Release Lever</label> <br />
                                <select {...register("FuelCapReleaseLever")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Bonnet Release Lever</label> <br />
                                <select {...register("BonnetReleaseLever")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Side-view Mirror Adjustment</label> <br />
                                <select {...register("SideviewMirrorAdjustment")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Left Side-view Mirror</label> <br />
                                <select {...register("LeftSideviewMirror")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Right Side-view Mirror</label> <br />
                                <select {...register("RightSideviewMirror")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Retracting Side-view Mirrors</label> <br />
                                <select {...register("RetractingSideviewMirrors")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>A/C Grills</label> <br />
                                <select {...register("ACGrills")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Accelerator Pedal</label> <br />
                                <select {...register("AcceleratorPedal")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                           
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Brake Pedal</label> <br />
                                <select {...register("BrakePedal")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Clutch Pedal</label> <br />
                                <select {...register("ClutchPedal")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Seats Type</label> <br />
                                <select {...register("SeatsType")}>
                                    <option value="Fabric">Fabric</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Seats Condition</label> <br />
                                <select {...register("SeatsCondition")}>
                                    <option value="Clean">Clean</option>
                                    <option value="Bad">Bad</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Driver Seatbelt</label> <br />
                                <select {...register("DriverSeatbelt")}>
                                    <option value="Working">Working</option>
                                    <option value="not Working">Not Working</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Passenger Seatbelt</label> <br />
                                <select {...register("PassengerSeatbelt")}>
                                    <option value="Working">Working</option>
                                    <option value="not Working">Not Working</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Windows Type</label> <br />
                                <select {...register("WindowsType")}>
                                    <option value="Manual">Manual</option>
                                    <option value="Automatic">Automatic</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front Driver Window</label> <br />
                                <select {...register("FrontDriverWindow")}>
                                    <option value="Working">Working</option>
                                    <option value="not Working">not Working</option>
                                </select>
                            </div>


                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front Passenger Window</label> <br />
                                <select {...register("FrontPassengerWindow")}>
                                    <option value="Working">Working</option>
                                    <option value="not Working">not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Driver Side Window</label> <br />
                                <select {...register("RearDriverSideWindow")}>
                                    <option value="Working">Working</option>
                                    <option value="not Working">not Working</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Passenger Side Window</label> <br />
                                <select {...register("RearPassengerSideWindow")}>
                                    <option value="Working">Working</option>
                                    <option value="not Working">not Working</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Window Safety Lock Button</label> <br />
                                <select {...register("WindowSafetyLockButton")}>
                                    <option value="Working">Working</option>
                                    <option value="not Working">not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Central Lockingn</label> <br />
                                <select {...register("CentralLocking")}>
                                    <option value="Working">Working</option>
                                    <option value="not Working">not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Key Buttons</label> <br />
                                <select {...register("KeyButtons")}>
                                    <option value="Working">Working</option>
                                    <option value="not Working">not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Floor Mats</label> <br />
                                <select {...register("FloorMats")}>
                                    <option value="Working">Working</option>
                                    <option value="not Working">not Working</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front Driver Door Seal</label> <br />
                                <select {...register("FrontDriverDoorSeal")}>
                                    <option value="Original">Original</option>
                                    <option value="not Original">Not Original</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front Passenger Door Seal</label> <br />
                                <select {...register("FrontPassengerDoorSeal")}>
                                    <option value="Original">Original</option>
                                    <option value="not Original">Not Original</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Driver Side Door Seal</label> <br />
                                <select {...register("RearDriverSideDoorSeal")}>
                                    <option value="Original">Original</option>
                                    <option value="not Original">Not Original</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Passenger Side Door Seal</label> <br />
                                <select {...register("RearPassengerSideDoorSeal")}>
                                    <option value="Original">Original</option>
                                    <option value="not Original">Not Original</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Bonnet Seal</label> <br />
                                <select {...register("BonnetSeal")}>
                                    <option value="Original">Original</option>
                                    <option value="not Original">Not Original</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Trunk Seal</label> <br />
                                <select {...register("TrunkSeal")}>
                                    <option value="Original">Original</option>
                                    <option value="not Original">Not Original</option>
                                </select>
                            </div>
                        </div>



                        <div className='row'>
                            <div className='col-lg-12 col-sm-12 my-4'>
                                <h3 className='text-uppercase' style={{ color: "#00008B", fontWeight: "600" }}>Electronic Function</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Battery</label> <br />
                                <select {...register("Battery")}>
                                    <option value="Strong">Strong</option>
                                    <option value="Weak">Weak</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Horn</label> <br />
                                <select {...register("Horn")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Right Headlight Operation</label> <br />
                                <select {...register("RightHeadlightOperation")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Right Headlight Condition</label> <br />
                                <select {...register("RightHeadlightCondition")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Fadded & Scratched">Fadded & Scratched</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Right Headlight</label> <br />
                                <select {...register("RightHeadlight")}>
                                    <option value="Original">Original</option>
                                    <option value="Not Original">Not Original</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Left Headlight Operation</label> <br />
                                <select {...register("LeftHeadlightOperation")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Left Headlight Condition</label> <br />
                                <select {...register("LeftHeadlightCondition")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Fadded & Scratched">Fadded & Scratched</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Left Headlight</label> <br />
                                <select {...register("LeftHeadlight")}>
                                    <option value="Original">Original</option>
                                    <option value="Not Original">Not Original</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Foglights Operation</label> <br />
                                <select {...register("FoglightsOperation")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Fadded & Scratched">Fadded & Scratched</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Left Tail Lights Operation</label> <br />
                                <select {...register("LeftTailLightsOperation")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Left Tail Lights Condition</label> <br />
                                <select {...register("LeftTailLightsCondition")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Fadded & Scratched">Fadded & Scratched</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Left Tail Lights</label> <br />
                                <select {...register("LeftTailLights")}>
                                    <option value="Original">Original</option>
                                    <option value="Not Original">Not Original</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Right Tail Lights Operation</label> <br />
                                <select {...register("RightTailLightsOperation")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Right Tail Lights Condition</label> <br />
                                <select {...register("RightTailLightsCondition")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Fadded & Scratched">Fadded & Scratched</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Right Tail Lights</label> <br />
                                <select {...register("RightTailLights")}>
                                    <option value="Original">Original</option>
                                    <option value="Not Original">Not Original</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Windshield Wipers</label> <br />
                                <select {...register("WindshieldWipers")}>
                                    <option value="Working">Working</option>
                                    <option value="Not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Airbags</label> <br />
                                <select {...register("Airbags")}>
                                    <option value="Not Present">Not Present</option>
                                    <option value="Present">Present</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Check Lights</label> <br />
                                <select {...register("CheckLights")}>
                                    <option value="Off">Off</option>
                                    <option value="On">On</option>
                                </select>
                            </div>
                        </div>


                        <div className='row'>
                            <div className='col-lg-12 col-sm-12 my-4'>
                                <h3 className='text-uppercase' style={{ color: "#00008B", fontWeight: "600" }}>Suspension Function</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Steering Assembly Play</label> <br />
                                <select {...register("SteeringAssemblyPlay")}>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Axle Boots</label> <br />
                                <select {...register("AxleBoots")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Damaged">Damaged</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Right Ball Joint</label> <br />
                                <select {...register("RightBallJoint")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Service Require">Service Require</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Left Ball Joint</label> <br />
                                <select {...register("LeftBallJoint")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Service Require">Service Require</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Tie Rod End</label> <br />
                                <select {...register("TieRodEnd")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Service Require">Service Require</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Right Boot</label> <br />
                                <select {...register("RightBoot")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Service Require">Service Require</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Left Boot</label> <br />
                                <select {...register("LeftBoot")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Service Require">Service Require</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Right Bush</label> <br />
                                <select {...register("RightBush")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Service Require">Service Require</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Left Bush</label> <br />
                                <select {...register("LeftBush")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Service Require">Service Require</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Right Shock Absorber</label> <br />
                                <select {...register("RearRightShockAbsorber")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Service Require">Service Require</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Left Shock Absorber </label> <br />
                                <select {...register("RearLeftShockAbsorber")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Service Require">Service Require</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front Right Shock Absorber</label> <br />
                                <select {...register("FrontRightShockAbsorber")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Service Require">Service Require</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front Left Shock Absorber</label> <br />
                                <select {...register("FrontLeftShockAbsorber")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Service Require">Service Require</option>
                                </select>
                            </div>
                        </div>


                        <div className='row'>
                            <div className='col-lg-12 col-sm-12 my-4'>
                                <h3 className='text-uppercase' style={{ color: "#00008B", fontWeight: "600" }}>Exterior Body</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Trunk Lock</label> <br />
                                <select {...register("TrunkLock")}>
                                    <option value="Working">Working</option>
                                    <option value="not Working">Not Working</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front Driver Fender</label> <br />
                                <select {...register("FrontDriverFender")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Bonnet</label> <br />
                                <select {...register("Bonnet")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front Windshield</label> <br />
                                <select {...register("FrontWindshield")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front Passenger Fender</label> <br />
                                <select {...register("FrontPassengerFender")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front Passenger Door</label> <br />
                                <select {...register("FrontPassengerDoor")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Passenger Door</label> <br />
                                <select {...register("RearPassengerDoor")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Passenger Fender</label> <br />
                                <select {...register("RearPassengerFender")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Trunk</label> <br />
                                <select {...register("Trunk")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Windshield</label> <br />
                                <select {...register("RearWindshield")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Driver Fender</label> <br />
                                <select {...register("RearDriverFender")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Driver Door</label> <br />
                                <select {...register("RearDriverDoor")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front Driver Door</label> <br />
                                <select {...register("FrontDriverDoor")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Roof</label> <br />
                                <select {...register("Roof")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Pannels</label> <br />
                                <select {...register("Pannels")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Driver A Pillar</label> <br />
                                <select {...register("DriverAPillar")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Driver B Pillar </label> <br />
                                <select {...register("DriverBPillar")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Driver C Pillar</label> <br />
                                <select {...register("DriverCPillar")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Driver D Pillar</label> <br />
                                <select {...register("DriverDPillar")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Passenger A Pillar</label> <br />
                                <select {...register("PassengerAPillar")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Passenger B Pillar</label> <br />
                                <select {...register("PassengerBPillar")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Passenger C Pillar</label> <br />
                                <select {...register("PassengerCPillar")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Passenger D Pillar</label> <br />
                                <select {...register("PassengerDPillar")}>
                                    <option value="T">T</option>
                                    <option value="P">P</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="E1">E1</option>
                                    <option value="E2">E2</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-12 col-sm-12 my-4'>
                                <h3 className='text-uppercase' style={{ color: "#00008B", fontWeight: "600" }}>Tyres</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front Passenger Tyre Brand </label> <br />
                                <input type="text" required {...register('FrontPassengerTyreBrand')} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front Passenger Tyre Size</label> <br />
                                <input type="text" required {...register('FrontPassengerTyreSize')} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front Passenger Tyre Condition</label> <br />
                                <select {...register("FrontPassengerTyreCondition")}>
                                    <option value="Good">Good</option>
                                    <option value="Normal">Normal</option>
                                    <option value="not Good">Not Good</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front Driver Tyre Brand</label> <br />
                                <input type="text" required {...register('FrontDriverTyreBrand')} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front Driver Tyre Size</label> <br />
                                <input type="text" required {...register('FrontDriverTyreSize')} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front Driver Tyre Condition</label> <br />
                                <select {...register("FrontDriverTyreCondition")}>
                                    <option value="Good">Good</option>
                                    <option value="Normal">Normal</option>
                                    <option value="not Good">Not Good</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Passenger Tyre Brand</label> <br />
                                <input type="text" required {...register('RearPassengerTyreBrand')} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Passenger Tyre Size</label> <br />
                                <input type="text" required {...register('RearPassengerTyreSize')} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Passenger Tyre Condition</label> <br />
                                <select {...register("RearPassengerTyreCondition")}>
                                    <option value="Good">Good</option>
                                    <option value="Normal">Normal</option>
                                    <option value="not Good">Not Good</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Driver Tyre Brand</label> <br />
                                <input type="text" required {...register('RearDriverTyreBrand')} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Driver Tyre Size</label> <br />
                                <input type="text" required {...register('RearDriverTyreSize')} />
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Driver Tyre Condition</label> <br />
                                <select {...register("RearDriverTyreCondition")}>
                                    <option value="Good">Good</option>
                                    <option value="Normal">Normal</option>
                                    <option value="not Good">Not Good</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Alloy Rims</label> <br />
                                <select {...register("AlloyRims")}>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>


                        <div className='row'>
                            <div className='col-lg-12 col-sm-12 my-4'>
                                <h3 className='text-uppercase' style={{ color: "#00008B", fontWeight: "600" }}>Accessories</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Spare Wheel</label> <br />
                                <select {...register("SpareWheel")}>
                                    <option value="Present">Present</option>
                                    <option value="Not Present">Not Present</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Tool Kit</label> <br />
                                <select {...register("ToolKit")}>
                                    <option value="Present">Present</option>
                                    <option value="Not Present">Not Present</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Jack</label> <br />
                                <select {...register("Jack")}>
                                    <option value="Present">Present</option>
                                    <option value="Not Present">Not Present</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Puncture Repair Kit</label> <br />
                                <select {...register("PunctureRepairKit")}>
                                    <option value="Present">Present</option>
                                    <option value="Not Present">Not Present</option>
                                    <option value="N/A">N/A</option>
                                </select>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-12 col-sm-12 my-4'>
                                <h3 className='text-uppercase' style={{ color: "#00008B", fontWeight: "600" }}>Test Drive</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Engine Pick</label> <br />
                                <select {...register("EnginePick")}>
                                    <option value="Normal">Normal</option>
                                    <option value="Service Required">Service Required</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Gear Shifting</label> <br />
                                <select {...register("GearShifting")}>
                                    <option value="Smooth">Smooth</option>
                                    <option value="Normal">Normal</option>
                                    <option value="Service Required">Service Required</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Differential Noise</label> <br />
                                <select {...register("DifferentialNoise")}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Drive Shaft Noise</label> <br />
                                <select {...register("DriveShaftNoise")}>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>ABS Actuation</label> <br />
                                <select {...register("ABSActuation")}>
                                    <option value="Timely Response">Timely Response</option>
                                    <option value="Service Required">Service Required</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Brake Pedal Operation</label> <br />
                                <select {...register("BrakePedalOperation")}>
                                    <option value="Timely Response">Timely Response</option>
                                    <option value="Service Required">Service Required</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Front Suspension Noise</label> <br />
                                <select {...register("FrontSuspensionNoise")}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Rear Suspension Noise </label> <br />
                                <select {...register("RearSuspensionNoise")}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Steering Function</label> <br />
                                <select {...register("SteeringFunction")}>
                                <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Steering Wheel Alignment</label> <br />
                                <select {...register("SteeringWheelAlignment")}>
                                    <option value="Center">Center</option>
                                    <option value="not Center">Not Center</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Speedometer/ Information Cluster </label> <br />
                                <select {...register("SpeedometerInformationCluster")}>
                                    <option value="Working">Working</option>
                                    <option value="not Working">Not Working</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Test Drive Done By</label> <br />
                                <input type="text" {...register("TestDriveDoneBy")} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 col-sm-12 my-4'>
                                <h3 className='text-uppercase' style={{ color: "#00008B", fontWeight: "600" }}>Inspector Detail</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Inspector Name *</label> <br />
                                <input type="text" required {...register("inspectorName")} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Email *</label> <br />
                                <input type="email" required {...register("inspectorEmail")} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Contact No *</label> <br />
                                <input type="number" required {...register("inspectorNumber")} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                                <label>Location *</label> <br />
                                <input type="text" required  {...register("inspectorLocation")} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 col-sm-12 my-5 inspectionButton'>
                                <button onClick={()=>{
                                    move('/admin')
                                }}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </>
}
