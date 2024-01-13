
import './App.css';
import Navbar from './Componets/Navbars/Navbar';
import { Route, Routes } from 'react-router-dom';

import { auth } from './firebase/firebaseConfig';
import Home from './Componets/Home/Home';
import Internships from './Componets/internships/Internships';

import Footer from './Componets/Footer/Footer';
import DetailsPage from './Componets/internships/DetailsPage';
import Jobs from './Componets/Jobs/Jobs';
import Detailspage from './Componets/Jobs/DetailspageJob';
import Register from './Componets/Auth/Register';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './Features/Userslice';
import { useEffect } from 'react';
import Profile from './Componets/Profile/Profile';
import Application from './Componets/Applications/Application';

import DownNav from './Componets/Navbars/DownNav';
import DeatilOfApplication from './Componets/Applications/DeatilOfApplication';
import Admin from './Componets/Applications/Admin';
import AdminPanel from './Componets/Admin/AdminPanel';
import PostJob from './Componets/Admin/PostJob';
import PostInternship from './Componets/Admin/PostInternship';
import UserApplications from './Componets/Applications/UserApplications';


function App() {
  const user=useSelector(selectUser);
 
  const dispatch=useDispatch();

  useEffect(() => {
  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      dispatch(login({

        uid:authUser.uid,
        photo:authUser.photoURL,
        name:authUser.displayName,
        email:authUser.email,
        phoneNumber:authUser.phoneNumber
      }))
    }
      else{
        dispatch(logout())
      }
  })
  },[dispatch] );
  
  return (

    <>
<Navbar/>
{/* <Example/> */}

<Routes>

    <Route path='/register' element={<Register />} />
    <Route path='/internships' element={<Internships />} />
    <Route path='/Jobs' element={<Jobs />} />
    <Route path="/details" Component={DetailsPage} />
    <Route path="/detailsJob" Component={Detailspage} />
    <Route path='/' element={<Home/>} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='/applications' element={<Application/>} />
    <Route path='/applicationsDetail' element={<DeatilOfApplication/>} />
    <Route path='/adminLog' element={<Admin/>} />
    <Route path='/adminPanel' element={<AdminPanel/>} />
    <Route path='/postJob' element={<PostJob/>} />
    <Route path='/postInternship' element={<PostInternship/>} />
    <Route path='/userApplication' element={<UserApplications/>} />
  
  </Routes>
  <DownNav/>
  <Footer/>
   </>
  );
}

export default App;
