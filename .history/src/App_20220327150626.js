import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Layouts/Header/Header';
import Error from './Pages/Error/Error';

import Home from './Pages/Home/Home';
import Rooms from './Pages/Rooms/Rooms';
import Services from './Pages/Services/Services';
import Footer from './Layouts/Footer/Footer';
import Gallery from './Pages/Gallery/Gallery';
import Breakfast from './Pages/Services/ServicesMenu/ServicesMenu';
import { AllCards } from './Pages/Components/AllCardsComponent/AllCards';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Services/Breakfasts" element={<Breakfast />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/*" element={<Error />} />
        </Routes> <AllCards />
        <Footer />

      </BrowserRouter>

    </>
  );
}

export default App;
