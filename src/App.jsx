import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { UserProcess } from './pages/UserProcess/UserProcess';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-process" element={<UserProcess />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
