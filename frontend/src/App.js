import { Startinspection } from './components/Dashboard/Start Inspection/Startinspection';
import { Navbar } from "./components/navbar/Navbar";
import {Techwheels} from "./components/home/Techwheels";
import About from "./components/about/About";
import Appointment from "./components/appointment/Appointment";
import Career from './components/career/Career';
import Samplereport from "./components/sampleReports/Samplereport"
import Sidebar from "./components/Dashboard/Dashboard/Sidebar"
import {Report} from "./components/singlePage/Report"
import { Footer } from "./components/footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  return <div className="main_body">

    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route exact path="/" element={<Techwheels />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/appointment" element={<Appointment />}></Route>
          <Route exact path="/career" element={<Career />}></Route>
          <Route exact path="/sampleReport" element={<Samplereport />}></Route>
          <Route exact path="/admin" element={<Sidebar />}></Route>
          <Route exact path="/start/:apointment" element={<Startinspection />}></Route>
          <Route exact path="/report/:reportId" element={<Report />}></Route>
        </Routes>
      </main>
      <Footer />

    </BrowserRouter>
    <ToastContainer></ToastContainer>


  </div>

}

export default App;
