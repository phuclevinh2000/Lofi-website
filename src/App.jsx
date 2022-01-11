import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import { getUserAuth } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAuth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header /> <Home />
            </>
          }
        />
        <Route path='/login' element={<Login />} exact />
        <Route path='/about' element={<About />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
