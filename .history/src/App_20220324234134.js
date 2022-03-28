import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Layouts/Header/Header';
import Error from './Pages/Error/Error';
import Gallery from './Pages/Gallery/Gallery';
import Home from './Pages/Home/Home';
import Rooms from './Pages/Rooms/Rooms';
import Services from './Pages/Services/Services';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="*" element={<Error />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
