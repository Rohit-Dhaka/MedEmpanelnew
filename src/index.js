import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import ServicesOne from './components/ServicesOne.jsx';
import ServicesTwo from './components/ServicesTwo.jsx';
import ServicesThree from './components/ServicesThree.jsx';
import ServicesFour from './components/ServicesFour.jsx';
import ServicesFive from './components/ServicesFive.jsx';
import ServicesSix from './components/ServicesSix.jsx';
import ServicesSeven from './components/ServicesSeven.jsx';
import ServicesEight from './components/ServicesEight.jsx';
import ServicesNine from './components/ServicesNine.jsx';
import HomePages from './page/HomePages.jsx';
import AyushmanInfo from './components/AyushmanInfo.jsx';





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* <Route path='' element={<Home />} /> */}
      <Route path='' element={<HomePages/>} />
      <Route path='resources' element={<AyushmanInfo/>} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='servicesOne' element={<ServicesOne/>}/>
      <Route path='servicesTwo' element={<ServicesTwo/>}/>
      <Route path='servicesThree' element={<ServicesThree/>}/>
      <Route path='servicesFour' element={<ServicesFour/>}/>
      <Route path='servicesFive' element={<ServicesFive/>}/>
      <Route path='servicesSix' element={<ServicesSix/>}/>
      <Route path='servicesSeven' element={<ServicesSeven/>}/>
      <Route path='servicesEight' element={<ServicesEight/>}/>
      <Route path='servicesNine' element={<ServicesNine/>}/>
       
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
