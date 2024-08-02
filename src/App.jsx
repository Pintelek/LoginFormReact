import { Routes, Route } from 'react-router-dom';

import './App.css';
// import LayOut from './components/LayOut';
import FormPage from './components/FormPage';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <div className="login-wrap">
        <div className="login-html">
          <Nav />
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/:type?" element={<FormPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
