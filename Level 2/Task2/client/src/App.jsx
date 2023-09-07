import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

import Layout from './scenes/Layout/Layout'
import EmployerDashboard from './scenes/EmployerDashBoard/EmployerDashboard'
import JobListing from './scenes/JobListing/JobListing'
import CandidateDashBoard from './scenes/CandidateDashBoard/CandidateDashBoard'
import Login from './scenes/Login/Login'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path='/' element={<Home /> }/>
          <Route path='/login' element={<Login /> }/>
          <Route path='/employeDash' element={<EmployerDashboard />} />
          <Route path='/jobs' element={<JobListing />} />
          <Route path='/candidateDash' element={<CandidateDashBoard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
