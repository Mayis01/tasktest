import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <><BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Rooms" element={<Rooms />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </BrowserRouter></>
  );
}

export default App;
