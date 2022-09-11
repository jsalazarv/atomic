import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { UserProcess } from './pages/UserProcess/UserProcess';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-process" element={<UserProcess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
