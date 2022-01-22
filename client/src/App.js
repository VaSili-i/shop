import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useContext, useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter.jsx';
import NavBar from './components/NavBar.jsx';
import {observer} from "mobx-react-lite"
import {Context} from './index.js';
import Spinner from 'react-bootstrap/Spinner'
import {check} from './http/userAPI.js';

let App = observer(function () {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
    }, 1000)
  }, [])

  if(loading){
    return <Spinner animation={'grow'}/>
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
})

export default App;
