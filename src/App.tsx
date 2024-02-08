import "./App.scss";
import HeaderFeature from "./components/HeaderFeature/HeaderFeature";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
   return (
      <div className='App'>
         <HeaderFeature />
         <main className='content-container'>
            <BrowserRouter>
               <Routes>
                  <Route path='/' element={<LandingPage />} />
               </Routes>
            </BrowserRouter>
         </main>
      </div>
   );
}

export default App;
