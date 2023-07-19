// npm install react-bootstrap bootstrap
// npm i react-router-dom 

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/LOGIN/Header';
import Home from './Component/LOGIN/Registration';
import { Route,Routes } from 'react-router-dom';
import Login from './Component/LOGIN/Login';
import Details from './Component/LOGIN/Details';
import Error from './Component/LOGIN/Error';
import MyComponent from './Component/List/ListItem';


function App() {
  return (
    <>
      {/* <Header/>
      <Routes>
        <Route path='/registration' element={<Home/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes> */}
      <MyComponent/>
      </>
  );
}

export default App;
