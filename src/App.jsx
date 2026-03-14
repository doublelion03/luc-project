import { Route, Routes } from "react-router"
import LandingPage from "./pages/landing"
import Selection from "./pages/landing/selection"


function App() {


  return (
   <div className=''>
    <Routes>
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/selection" element={<Selection/>}/>
    </Routes>
   </div>
  )
}

export default App
