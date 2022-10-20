import LandingPage from "./Components/Dashboard/landingPage";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Drug from "./Components/Dashboard/Drugs/drug";
import Pharmacy from "./Components/Dashboard/Pharmacy/pharmacy";
import Provider from "./Components/Dashboard/Providers/providers";

function App() {
  return (
   <BrowserRouter>
        <Routes>
        <Route path="/Anthem-Provider" element={<LandingPage />} />
        <Route path="/provider" element={<Provider />} />
        <Route path='/drug' element={<Drug />} />
        <Route path='/pharmacy' element={<Pharmacy/>} />
        </Routes>
    </BrowserRouter>
   );
}

export default App;
