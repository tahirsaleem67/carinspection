import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import "./report.css"

export const Report = () => {


  let id = useParams();

  let [data, setData] = useState([])

  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    if (id.reportId) {
      axios.get('/singleReport?id=' + id.reportId).then((res) => {
        setData(res.data)
      })
    }


  }, [])

  return <>
    <div className='container-fluid'>
      <div className='row py-3' style={{ backgroundColor: "rgb(0,0,0,0.2 )" }}>
        <div className='col-lg-6 col-sm-12 border'>
          <div className='' style={{ height: "150px", width: "100%" }}>
            <img src="logo.png" alt="" style={{ height: "100%", width: "100%" }} />
          </div>
        </div>
        <div className='col-lg-6 col-sm-12 border'>
          <div>
            <h1 className='text-uppercase' style={{ color: "rgb(2, 2, 94)", fontWeight: "800" }}>Inspect Karwao</h1>
            <h1 className='text-uppercase' style={{ color: "rgb(2, 2, 94)", fontWeight: "800" }}>Befikar Hojao</h1>
            <button className='text-uppercase d-flex justify-content-center' style={{ width: "90%", fontSize: "20px", fontWeight: "700", backgroundColor: "rgb(2, 2, 94)", color: "white" }}>Inspection Report</button>
          </div>
        </div>
      </div>

      <div className='row my-4 px-4 report_row'>
        <div className='col-lg-12 col-sm-12'>
          <h3 className='R-heading'>Perliminary Investigation</h3>
        </div>
        <div className='col-lg-5 col-md-12 col-sm-12 py-4 border'>
          <div className="d-flex justify-content-between">
            <p>Client Name</p>
            <p className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}>{data.clientName}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Client Number</p>
            <p className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}>{data.clientNumber}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Vehicle Make</p>
            <p className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}>{data.vehicleMake}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Vehicle Model</p>
            <p className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}>{data.vehicleModel}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Vehicle Varient</p>
            <p className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}>{data.vehicleVarient}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Model Year</p>
            <p className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}>{data.vehicleYear}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Transmittion</p>
            <p className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}>{data.vehicleTransmition}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Engine Capacity</p>
            <p className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}>{data.vehicleEngine}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Fuel Type</p>
            <p className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}>{data.vehicleFuel}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Body Color</p>
            <p className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}>{data.bodyColor}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Mileage</p>
            <p className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}>{data.Milaege}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Registration</p>
            <p className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}>{data.registrationNumber}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Registration City</p>
            <p className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}>{data.registrationCity}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Chasis Number</p>
            <p className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}>{data.chasisNumber}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Engine Number</p>
            <p className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}>{data.enegineNumber}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Inspection Location</p>
            <p className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}>{data.inspectionLocation}</p>
          </div>
          <div className='mt-1 pb-2'>
            <h3 className='R-heading'>Accidental Checklist</h3>
          </div>
          <div className="d-flex justify-content-between">
            <p>Engine Room Firewal</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.engineRoom === 'Non Accidented' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.engineRoom}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Right Strut Tower</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.strutTower === 'Non Accidented' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.strutTower}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Left Strut Tower</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.leftStrutTower === 'Non Accidented' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.leftStrutTower}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Right Front Rail</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.rightFrontRail === 'Non Accidented' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.rightFrontRail}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Left Front Rail</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.leftFrontRail === 'Non Accidented' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.leftFrontRail}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Radiator Core Support</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.radiatorCoreSupport === 'Non Accidented' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.radiatorCoreSupport}</p>
          </div >
          <div className="d-flex justify-content-between">
            <p>Right A Pillar</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.rightApillar === 'Non Accidented' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.rightApillar}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Left A Pillarr</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.leftApillar === 'Non Accidented' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.leftApillar}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Right B Pillar</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.rightBpillar === 'Non Accidented' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.rightBpillar}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Left B Pillar</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.leftBpillar === 'Non Accidented' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.leftBpillar}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Right C Pillar</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.rightCpillar === 'Non Accidented' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.rightCpillar}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Left C Pillar</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.leftCpillar === 'Non Accidented' ? '#98FB98' : 'red', height: "20px", width: "40%" }
              }>{data.leftCpillar}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Right D Pillar</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.rightDpillar === 'Non Accidented' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.rightDpillar}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Left D Pillar</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.leftDpillar === 'Non Accidented' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.leftDpillar}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Boot Floor</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.bootFloor === 'Non Accidented' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.bootFloor}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front Underbody</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.frontUnderbody === 'Non Accidented' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.frontUnderbody}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Rear Underbody</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.rearUnderbody === 'Non Accidented' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.rearUnderbody}</p>
          </div>

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}


          <div className='mt-1 pb-2'>
            <h3 className='R-heading'>Mechanical Function</h3>
          </div>
          <div className="d-flex justify-content-between">
            <p>Engine Noisy</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.engineNoisy === 'No' ? '#98FB98' : data.engineNoisy === 'Normal Sound' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.engineNoisy}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Engine Vibrations</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.engineVibration === 'No' ? '#98FB98' : data.engineNoisy === 'Normal Sound' ? "#98FB98" : 'red', height: "20px", width: "40%" }}
            >{data.engineVibration}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Engine Smoke</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.engineSmoke === 'No' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.engineSmoke}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Engine Smoke Color</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.engineSmokeColor === 'N/A' ? 'yellow' : data.engineSmokeColor === 'No' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.engineSmokeColor}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Engine Blow</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.engineBlow === 'Not Present' ? '#8FBC8F' : data.engineBlow === 'No' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.engineBlow}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Coolant Leakagee</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.coolantLeakage === 'No' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.coolantLeakage}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Brake Oil Leakage</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.brakeOilLeakage === 'No' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.brakeOilLeakage}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Transmission Oil Leakage</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.transmissionOilLeakage === 'No' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.transmissionOilLeakage}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Exhaust Sound</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.exhaustSound === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.exhaustSound}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Radiator</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.radiator === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.radiator}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Suction Fan</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.suctionFan === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.suctionFan}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Gear Transmission</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.gearTransmission === 'Smooth' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.gearTransmission}</p>
          </div>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className='mt-1 pb-2'>
            <h3 className='R-heading'>A/C & Heater Operation</h3>
          </div>
          <div className="d-flex justify-content-between">
            <p>A/C Installed</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.acInstalled === 'Yes' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.acInstalled}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>A/C Fan</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.acFan === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.acFan}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Blower Throw</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.blowerThrow === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.blowerThrow}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>A/C Cooling</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.acCooling === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.acCooling}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Heater</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.heater === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.heater}</p>
          </div>

          {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className='mt-1 pb-2'>
            <h3 className='R-heading'>Interior</h3>
          </div>
          <div className="d-flex justify-content-between">
            <p>Steering Wheel Wear And Tear</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.SteeringWheelWearAndTear === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.SteeringWheelWearAndTear}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Steering Wheel Buttons</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.SteeringWheelButtons === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.SteeringWheelButtons}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Lights Lever/ Switch</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.LightsLeverSwitch === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.LightsLeverSwitch}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Dashboard</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.Dashboard === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.Dashboard}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Dash Control Buttons</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.DashControlButtons === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.DashControlButtons}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Interior Lights</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.InteriorLights === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.InteriorLights}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>De-fogger</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.Defogger === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.Defogger}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Hazard Lights</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.Hazardlights === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.Hazardlights}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Multimedia</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.Multimedia === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.Multimedia}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Rear Camera</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RearCamera === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.RearCamera}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front View Camera</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.FrontViewCamera === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.FrontViewCamera}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Trunk Release Lever</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.TrunkReleaseLever === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.TrunkReleaseLever}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Fuel Cap Release Lever</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.FuelCapReleaseLever === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.FuelCapReleaseLever}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Bonnet Release Lever</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.BonnetReleaseLever === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.BonnetReleaseLever}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Side-view Mirror Adjustment</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.SideviewMirrorAdjustment === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.SideviewMirrorAdjustment}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Left Side-view Mirror</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.LeftSideviewMirror === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.LeftSideviewMirror}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Right Side-view Mirror</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RightSideviewMirror === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.RightSideviewMirror}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Retracting Side-view Mirrors</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RetractingSideviewMirrors === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.RetractingSideviewMirrors}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>A/C Grills</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.ACGrills === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.ACGrills}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Accelerator Pedal</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.AcceleratorPedal === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.AcceleratorPedal}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Brake Pedal</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.BrakePedal === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.BrakePedal}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Clutch Pedal</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.ClutchPedal === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.ClutchPedal}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Seats Type</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}
            >{data.SeatsType}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Seats Condition</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.SeatsCondition === 'Clean' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.SeatsCondition}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Driver Seatbelt</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.DriverSeatbelt === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.DriverSeatbelt}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Passenger Seatbelt</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.PassengerSeatbelt === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.PassengerSeatbelt}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Windows Type</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}
            >{data.WindowsType}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front Driver Window</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.FrontDriverWindow === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.FrontDriverWindow}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front Passenger Window</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.FrontPassengerWindow === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.FrontPassengerWindow}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Rear Driver Side Window</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RearDriverSideWindow === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.RearDriverSideWindow}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Rear Passenger Side Window</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RearPassengerSideWindow === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.RearPassengerSideWindow}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Window Safety Lock Button</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.WindowSafetyLockButton === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.WindowSafetyLockButton}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Central Lockingn</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.CentralLocking === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.CentralLocking}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Key Buttons</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.KeyButtons === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.KeyButtons}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Floor Mats</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.FloorMats === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.FloorMats}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front Driver Door Seal</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.FrontDriverDoorSeal === 'Original' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.FrontDriverDoorSeal}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front Passenger Door Seal</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.FrontPassengerDoorSeal === 'Original' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.FrontPassengerDoorSeal}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Rear Driver Side Door Seal</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RearDriverSideDoorSeal === 'Original' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.RearDriverSideDoorSeal}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Rear Passenger Side Door Seal</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RearPassengerSideDoorSeal === 'Original' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.RearPassengerSideDoorSeal}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Bonnet Seal</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.BonnetSeal === 'Original' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.BonnetSeal}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Trunk Seal</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.TrunkSeal === 'Original' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.TrunkSeal}</p>
          </div>
          <div className='mt-1 pb-2'>
            <h3 className='R-heading'>Electronic Function</h3>
          </div>
          <div className="d-flex justify-content-between">
            <p>Battery</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.Battery === 'Strong' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.Battery}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Horn</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.Horn === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.Horn}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Right Headlight Operation</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RightHeadlightOperation === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.RightHeadlightOperation}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Right Headlight Condition</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RightHeadlightCondition === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.RightHeadlightCondition}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Right Headlight</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RightHeadlight === 'Original' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.RightHeadlight}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Left Headlight Operation</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.LeftHeadlightOperation === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.LeftHeadlightOperation}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Left Headlight Condition</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.LeftHeadlightCondition === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.LeftHeadlightCondition}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Left Headlight</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.LeftHeadlight === 'Original' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.LeftHeadlight}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Foglights Operation</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.FoglightsOperation === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.FoglightsOperation}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Left Tail Lights Operation</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.LeftTailLightsOperation === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.LeftTailLightsOperation}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Left Tail Lights Condition</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.LeftTailLightsCondition === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.LeftTailLightsCondition}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Left Tail Lights</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.LeftTailLights === 'Original' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.LeftTailLights}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Right Tail Lights Operation</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RightTailLightsOperation === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.RightTailLightsOperation}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Right Tail Lights Condition</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RightTailLightsCondition === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.RightTailLightsCondition}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Right Tail Lights</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RightTailLights === 'Original' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.RightTailLights}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Windshield Wipers</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.WindshieldWipers === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.WindshieldWipers}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Airbags</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.Airbags === 'Not Present' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.Airbags}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Check Lights</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.CheckLights === 'Off' ? '#98FB98' : '#8FBC8F', height: "20px", width: "40%" }}
            >{data.CheckLights}</p>
          </div>

          {/* ///////////////////////////////////////////////////////////////////////////////////           */}

          <div className='mt-1 pb-2'>
            <h3 className='R-heading'>Suspension Function</h3>
          </div>
          <div className="d-flex justify-content-between">
            <p>Steering Assembly Play</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.SteeringAssemblyPlay === 'yes' ? '#98FB98' : 'yellow', height: "20px", width: "40%" }}
            >{data.SteeringAssemblyPlay}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Axle Boots</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.AxleBoots === 'Normal' ? '#98FB98' : 'yellow', height: "20px", width: "40%" }}
            >{data.AxleBoots}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Right Ball Joint</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RightBallJoint === 'Normal' ? '#98FB98' : 'yellow', height: "20px", width: "40%" }}
            >{data.RightBallJoint}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Left Ball Joint</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.LeftBallJoint === 'Normal' ? '#98FB98' : 'yellow', height: "20px", width: "40%" }}
            >{data.LeftBallJoint}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Tie Rod End</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.TieRodEnd === 'Normal' ? '#98FB98' : 'yellow', height: "20px", width: "40%" }}
            >{data.TieRodEnd}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Right Boot</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RightBoot === 'Normal' ? '#98FB98' : 'yellow', height: "20px", width: "40%" }}
            >{data.RightBoot}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Left Boot</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.LeftBoot === 'Normal' ? '#98FB98' : 'yellow', height: "20px", width: "40%" }}
            >{data.LeftBoot}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Right Bush</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RightBush === 'Normal' ? '#98FB98' : 'yellow', height: "20px", width: "40%" }}
            >{data.RightBush}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Left Bush</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.LeftBush === 'Normal' ? '#98FB98' : 'yellow', height: "20px", width: "40%" }}
            >{data.LeftBush}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Rear Right Shock Absorber</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RearRightShockAbsorber === 'Normal' ? '#98FB98' : 'yellow', height: "20px", width: "40%" }}
            >{data.RearRightShockAbsorber}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Rear Left Shock Absorber</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RearLeftShockAbsorber === 'Normal' ? '#98FB98' : 'yellow', height: "20px", width: "40%" }}
            >{data.RearLeftShockAbsorber}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front Right Shock Absorber</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.FrontRightShockAbsorber === 'Normal' ? '#98FB98' : 'yellow', height: "20px", width: "40%" }}
            >{data.FrontRightShockAbsorber}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front Left Shock Absorber</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.FrontLeftShockAbsorber === 'Normal' ? '#98FB98' : 'yellow', height: "20px", width: "40%" }}
            >{data.FrontLeftShockAbsorber}</p>
          </div>

          {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className='mt-1 pb-2'>
            <h3 className='R-heading'>Exterior Body</h3>
          </div>
          <div className="d-flex justify-content-between">
            <p>Trunk Lock</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.TrunkLock === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.TrunkLock}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front Driver Fender</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.FrontDriverFender === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.FrontDriverFender}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Bonnet</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.Bonnet === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.Bonnet}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front Windshield</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.FrontWindshield === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.FrontWindshield}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front Passenger Fender</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.FrontPassengerFender === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.FrontPassengerFender}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front Passenger Door</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.FrontPassengerDoor === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.FrontPassengerDoor}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Rear Passenger Door</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RearPassengerDoor === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.RearPassengerDoor}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Rear Passenger Fender</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RearPassengerFender === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.RearPassengerFender}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Trunk</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.Trunk === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.Trunk}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Trunk</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.Trunk === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.Trunk}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Rear Windshield</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RearWindshield === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.RearWindshield}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Rear Driver Fender</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RearDriverFender === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.RearDriverFender}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Rear Driver Door</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RearDriverDoor === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.RearDriverDoor}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front Driver Door</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.FrontDriverDoor === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.FrontDriverDoor}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Roof</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.Roof === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.Roof}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Pannels</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.Pannels === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.Pannels}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Driver A Pillar</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.DriverAPillar === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.DriverAPillar}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Driver B Pillar</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.DriverBPillar === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.DriverBPillar}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Driver C Pillar</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.DriverCPillar === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.DriverCPillar}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Driver D Pillar</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.DriverDPillar === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.DriverDPillar}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Passenger A Pillar</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.PassengerAPillar === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.PassengerAPillar}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Passenger B Pillar</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.PassengerBPillar === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.PassengerBPillar}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Passenger C Pillar</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.PassengerCPillar === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.PassengerCPillar}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Passenger D Pillar</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.PassengerDPillar === 'N/A' ? '#8FBC8F' : '#98FB98', height: "20px", width: "40%" }}
            >{data.PassengerDPillar}</p>
          </div>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}


          <div className='mt-1 pb-2'>
            <h3 className='R-heading'>Tyres</h3>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front Passenger Tyre Brand</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}
            >{data.FrontPassengerTyreBrand}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front Passenger Tyre Size</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}
            >{data.FrontPassengerTyreSize}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front Passenger Tyre Condition</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.FrontPassengerTyreCondition === 'Good' ? '#98FB98' : data.FrontPassengerTyreCondition === 'Normal' ? 'Yellow' : 'red', height: "20px", width: "40%" }}

            >{data.FrontPassengerTyreCondition}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front Driver Tyre Brand</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}
            >{data.FrontDriverTyreBrand}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front Driver Tyre Size</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}
            >{data.FrontDriverTyreSize}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front Driver Tyre Condition</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.FrontDriverTyreCondition === 'Good' ? '#98FB98' : data.FrontDriverTyreCondition === 'Normal' ? 'Yellow' : 'red', height: "20px", width: "40%" }}
            >{data.FrontDriverTyreCondition}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Rear Passenger Tyre Brand</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}
            >{data.RearPassengerTyreBrand}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Rear Passenger Tyre Size</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}
            >{data.RearPassengerTyreSize}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Rear Passenger Tyre Condition</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RearPassengerTyreCondition === 'Good' ? '#98FB98' : data.RearPassengerTyreCondition === 'Normal' ? 'Yellow' : 'red', height: "20px", width: "40%" }}
            >{data.RearPassengerTyreCondition}</p>
          </div>

          <div className="d-flex justify-content-between">
            <p>Rear Driver Tyre Brand</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}
            >{data.RearDriverTyreBrand}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Rear Driver Tyre Size</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}
            >{data.RearDriverTyreSize}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Rear Driver Tyre Condition</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RearDriverTyreCondition === 'Good' ? '#98FB98' : data.RearDriverTyreCondition === 'Normal' ? 'Yellow' : 'red', height: "20px", width: "40%" }}
            >{data.RearDriverTyreCondition}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Alloy Rims</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}
            >{data.AlloyRims}</p>
          </div>

          {/* /////////////////////////////////////////////////////////////////////////////////// */}

          <div className='mt-1 pb-2'>
            <h3 className='R-heading'>Accessories</h3>
          </div>
          <div className="d-flex justify-content-between">
            <p>Spare Wheel</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.SpareWheel === 'Not Present' ? '#8FBC8F' : data.SpareWheel === 'Present' ? '#98FB98' : 'yellow', height: "20px", width: "40%" }}
            >{data.SpareWheel}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Tool Kit</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.ToolKit === 'Not Present' ? '#8FBC8F' : data.ToolKit === 'Present' ? '#98FB98' : 'yellow', height: "20px", width: "40%" }}
            >{data.ToolKit}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Jack</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.Jack === 'Not Present' ? '#8FBC8F' : data.Jack === 'Present' ? '#98FB98' : 'yellow', height: "20px", width: "40%" }}
            >{data.Jack}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Puncture Repair Kit</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.PunctureRepairKit === 'Not Present' ? '#8FBC8F' : data.PunctureRepairKit === 'Present' ? '#98FB98' : 'yellow', height: "20px", width: "40%" }}
            >{data.PunctureRepairKit}</p>
          </div>

          {/* ///////////////////////////////////////////////////////////////////////////// */}
          <div className='mt-1 pb-2'>
            <h3 className='R-heading'>Test Drive</h3>
          </div>
          <div className="d-flex justify-content-between">
            <p>Engine Pick</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.EnginePick === 'Normal' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.EnginePick}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Gear Shifting</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.GearShifting === 'Normal' ? '#98FB98' : data.GearShifting === 'Smooth' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.GearShifting}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Differential Noise</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.DifferentialNoise === 'No' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.DifferentialNoise}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>ABS Actuation</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.ABSActuation === 'Timely Response' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.ABSActuation}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Brake Pedal Operation</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.BrakePedalOperation === 'Timely Response' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.BrakePedalOperation}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Front Suspension Noise</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.FrontSuspensionNoise === 'No' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.FrontSuspensionNoise}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Rear Suspension Noise</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.RearSuspensionNoise === 'No' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.RearSuspensionNoise}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Steering Function</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.SteeringFunction === 'No' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.SteeringFunction}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Steering Wheel Alignment</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.SteeringWheelAlignment === 'Center' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.SteeringWheelAlignment}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Speedometer/ Information Cluster</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: data.SpeedometerInformationCluster === 'Working' ? '#98FB98' : 'red', height: "20px", width: "40%" }}
            >{data.SpeedometerInformationCluster}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Test Drive Done By</p>
            <p className='d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#98FB98', height: "20px", width: "40%" }}
            >{data.TestDriveDoneBy}</p>
          </div>







        </div>













        <div className='col-lg-7 col-md-12 col-sm-12 d-flex flex-wrap gap-2'>
          <div className='px-4 py-4 border ' style={{ width: "100%", minHeight: "100vh" }}>
                <img src="section-hero-background-1-1000x500.jpg" alt="" style={{width:"100%", height:"350px"}} />
                <img src="section-hero-background-1-1000x500.jpg" className='my-3' alt="" style={{width:"100%", height:"350px"}} />
                <img src="section-hero-background-1-1000x500.jpg" className='my-3' alt="" style={{width:"250px", height:"350px"}} />
                <img src="section-hero-background-1-1000x500.jpg" className='my-3 mx-3' alt="" style={{width:"250px", height:"350px"}} />
                <img src="section-hero-background-1-1000x500.jpg" className='my-3 mx-3' alt="" style={{width:"100%", height:"350px"}} />
                <img src="section-hero-background-1-1000x500.jpg" className='my-3 mx-3' alt="" style={{width:"300px", height:"350px"}} />
                <img src="section-hero-background-1-1000x500.jpg" className='my-3 mx-3' alt="" style={{width:"300px", height:"350px"}} />
                <img src="section-hero-background-1-1000x500.jpg" className='my-3 mx-3' alt="" style={{width:"180px", height:"350px"}} />
                <img src="section-hero-background-1-1000x500.jpg" className='my-3 mx-3' alt="" style={{width:"180px", height:"350px"}} />
                <img src="section-hero-background-1-1000x500.jpg" className='my-3 mx-3' alt="" style={{width:"180px", height:"350px"}} />
                <img src="section-hero-background-1-1000x500.jpg" alt="" style={{width:"100%", height:"350px"}} />
                <img src="section-hero-background-1-1000x500.jpg" className='my-3' alt="" style={{width:"100%", height:"350px"}} />
                <img src="section-hero-background-1-1000x500.jpg" className='my-3' alt="" style={{width:"250px", height:"200px"}} />
                <img src="section-hero-background-1-1000x500.jpg" className='my-3' alt="" style={{width:"250px", height:"200px"}} />
                <img src="section-hero-background-1-1000x500.jpg" className='my-3' alt="" style={{width:"250px", height:"200px"}} />
                <img src="section-hero-background-1-1000x500.jpg" className='my-3' alt="" style={{width:"250px", height:"200px"}} />
                <img src="section-hero-background-1-1000x500.jpg" className='my-3' alt="" style={{width:"250px", height:"200px"}} />
              
         
          </div>
          


        </div>
      </div>

    </div>
  </>
}
