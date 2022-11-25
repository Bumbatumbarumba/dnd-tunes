import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { About, AuthProvider, NavBar } from './components';
import { MainPage, MyPage } from './views';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <div className="body-content">
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/about' element={<About />} />
              <Route path='/myPage' element={<MyPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;