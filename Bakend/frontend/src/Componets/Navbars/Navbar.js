 import React, { useState } from 'react'
import logo from '../../Assets/logo.png';
import './nav.css'
import Nav2 from './Nav2'
import { Link, useNavigate } from 'react-router-dom'
import {  signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../../firebase/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../Features/Userslice';






function Navbar() {
 let[email,setEmail]=useState("")
 let [password,setPassword]=useState("")
const Navigate=useNavigate();
  const user=useSelector(selectUser);
  const [isDivVisible, setDivVisible] = useState(false);
  const [isDivVisible3, setDivVisible3] = useState(false);
  const [isDivVisible2, setDivVisible2] = useState(false);
  const [isProfilevisible, setProfileVisible] = useState(false);
//   For Login with Email and pass

const handleSingin=()=>{
  signInWithPopup(auth,provider).then((res)=>{
    console.log(res)
  Navigate("/")
  alert("Sing in Successes Full")
  }).catch((err)=>{
    alert(err)
  })
}

const handleEmailAndPass=()=>{
 if(email==="" || password==="" ) {
alert("Fill The Blanks ")
 }
 else{
  signInWithEmailAndPassword(auth,email,password).then((res)=>{
    console.log(res)
    hideDi3()
    Navigate("/")
    email="";
    password=""
    alert("Sing in Successes Full")
  }).catch((err)=>{
    alert(err)
  })
 }
}

const signOutfunc=()=>{
  try {
signOut(auth);  
  } catch (error) {
    console.log(error)
  }
}
  const showDiv = () => {
    document.getElementById("ico").className="bi bi-caret-up-fill"
    setDivVisible(true);
  };

  
  const hideDiv = () => {
    document.getElementById("ico").className="bi bi-caret-down-fill"
    setDivVisible(false);
  };

  //  For Login
  const showDiv3 = () => {

    setDivVisible3(true);
  };

  
  const hideDi3 = () => {

    setDivVisible3(false);
  };
  const [isStudent, setIsStudent] = useState(true);

  const handleSignInClick = () => {
    setIsStudent(true);
    
  };

  const handleJoinInClick = () => {
    setIsStudent(false);
  };

//   For Jobs sections



  const showDiv2 = () => {
    document.getElementById("ico2").className="bi bi-caret-up-fill"
    setDivVisible2(true);
  };

  
  const hideDiv2 = () => {
    document.getElementById("ico2").className="bi bi-caret-down-fill"
    setDivVisible2(false);
  };

  const [activeContent, setActiveContent] = useState('loc');

  const showContent = (id) => {
    setActiveContent(id);
  };
  const ShowProfileDetialis=()=>{
    document.getElementById("up").className="proName bi bi-caret-up-fill"
    setProfileVisible(true)
  }
  
  const hideProfileDetialis=()=>{
    document.getElementById("up").className="proName bi bi-caret-down-fill"
    setProfileVisible(false)
  }
  


  
  return (
    <div> 
      <nav  className='nav1'>
        
        <ul >
<div className="img">
        <Link to="/">
        <img src={logo} alt="" />
        </Link>  
</div>
<div className="elem">
    <Link to="/internships"  id='int' className=  ' hover:bg-blue-300 hover:text-blue-500' onMouseEnter={showDiv}   onMouseLeave={hideDiv } >internships  <i id='ico' class="bi bi-caret-down-fill"></i></Link>
    <Link to="/Jobs"  id='jb' className='hover:bg-blue-300 hover:text-blue-500' onMouseEnter={showDiv2} onMouseLeave={hideDiv2} >Jobs <i id='ico2' class="bi bi-caret-down-fill"></i> </Link>
</div>
<div className="search">
<i class="bi bi-search"></i>
    <input type="search"  placeholder='Search'/>
</div>

{user?(
  <>
  <div className="profile">
  <Link to={`/profile`} >
    <img className='rounded-full w-10' id='picpro'  src={user?.photo} alt="" srcset="" /> 
    <i id='up' onMouseMoveCapture={ShowProfileDetialis}  onMouseOutCapture={ hideProfileDetialis}class="proName bi bi-caret-up-fill"></i>
    </Link>
    
  </div>
  <Link >
    <button className='logout' onClick={signOutfunc}> Log Out</button></Link>
  </>
):
(

  
  <div className="auth">
    
  <Link onClick={showDiv3}>
    <button className='btn1'>Login</button></Link>
  <Link to="/register">
    <button className='btn2'> Register</button></Link>
<div className="flex mt-7">


Hire talent
</div>

  <div className="admin">

<Link to={"/adminLog"}>
<button id='admin'> Admin Login</button>
</Link>
</div>

</div>
  ) 
}

<div className="hire">
    <hr />

</div>
        </ul>
      </nav>
      <Nav2/>





      
   



<div className="login">


      {isDivVisible3 && (
  <>

<div className="account-auth">
       <button   className='close' id='loginClose' onClick={hideDi3}><i class="bi bi-x"></i></button>
    <h5 id="state" className="mb-4 justify-center text-center" style={{marginTop:"34px"}}>
      <span id="Sign-in" style={{cursor:"pointer"}} className={`auth-tab ${ isStudent? 'active' : ''}`} onClick={handleSignInClick}>
    Student
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span id="join-in" className={`auth-tab ${!isStudent ? 'active' : ''}`} onClick={handleJoinInClick}>
     Employee and T&P
      </span>
    </h5>

    {isStudent ? (
   <div class="py-6">
   <div class="flex bg-white rounded-lg justify-center  overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
      
         <div class="w-full p-8 lg:w-1/2">
            
             <a onClick={handleSingin}  class="flex items-center h-9 justify-center mt-4 text-white bg-slate-100 rounded-lg = hover:bg-gray-100">
                 <div class="px-4 py-3">
                     <svg class="h-6 w-6" viewBox="0 0 40 40">
                         <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"/>
                         <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"/>
                         <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
                         <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"/>
                     </svg>
                 </div>
                 <h1 class="px-4 py-3 w-5/6 text-center text-sm text-gray-600 font-bold">Login with Google</h1>
             </a>
             <div class="mt-4 flex items-center justify-between">
                 <span class="border-b w-1/5 lg:w-1/4"></span>
                 <a href="/" class="text-xs text-center text-gray-500 uppercase">or </a>
                 <span class="border-b w-1/5 lg:w-1/4"></span>
             </div>
             <div class="mt-4">
                 <label class="block text-gray-700 text-sm font-bold mb-2">Email </label>
                 <input class=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='john@example.com'/>
             </div>
             <div class="mt-4">
                 <div class="flex justify-between">
                     <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                     <a href="/" class="text-xs text-blue-500">Forget Password?</a>
                 </div>
                 <input class=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"   placeholder='Must be atleast 6 characters' value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
             </div>
         
   
             <div class="mt-8">
                 <button class="bg-blue-500 h-9 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600" onClick={handleEmailAndPass}>Login</button>
             </div>
             <div class="mt-4 flex items-center justify-between">
               <p className='text-sm'>New to Internshala? Register (<span className='text-blue-500 cursor-pointer ' onClick={hideDiv}>Student</span>/ <span className='text-blue-500 cursor-pointer'>Company</span>)</p>
             </div>
         </div>
     </div>
 </div>
    ):
    (
      <div class="py-6">
      <div class="flex bg-white rounded-lg justify-center  overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
         
            <div class="w-full p-8 lg:w-1/2">
               
            
                <div class="mt-4 flex items-center justify-between">
               
                </div>
                <div class="mt-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Email </label>
                    <input class=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='john@example.com'/>
                </div>
                <div class="mt-4">
                    <div class="flex justify-between">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <a href="/" class="text-xs text-blue-500">Forget Password?</a>
                    </div>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} class=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"   placeholder='Must be atleast 6 characters' type="password"/>
                </div>
                <div class="mt-8">
                    <button class="bg-blue-500 h-9 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">Login</button>
                </div>
                <div class="mt-4 flex items-center justify-between">
                <p className='text-sm'>New to Internshala? Register (<span className='text-blue-500 cursor-pointer ' onClick={hideDiv}>Student</span>/ <span className='text-blue-500 cursor-pointer'>Company</span>)</p>
                </div>
            </div>
        </div>
    </div>
    )}
  </div>

  </>
      )}
      </div>


{isProfilevisible&&(


  <div className="profile-dropdown">
        <p className='font-bold '>{user.name}</p>
        <p className='font-medium text-base mt-2 '>{user.email}</p>
        <hr />
        <p className='mt-8 text-center'>

        <Link to="/applications "  > My Applications</Link>
        </p>
        <p className='text-center'>Home</p>
        <p className='text-center'>Resume</p>

      </div>
)}
      
      {isDivVisible && (
  <>
<div className="profile-dropdown-2">

<div className="left-section">
  <p>Top Locations</p>
  <p>Profile</p>
  <p>Top Category</p>
  <p>Explore More Internships</p>
</div>
<div className="line flex bg-slate-400">

</div>
<div className="right-section">
  <p>Intern at India</p>
  <p>Intern at India</p>
  <p>Intern at India</p>
  <p>Intern at India</p>
  <p>Intern at India</p>
</div>
      </div>

  </>
      )}

      
{isDivVisible2 && (
  <>

<div className="profile-dropdown-1">

<div className="left-section">
  <p>Top Locations</p>
  <p>Profile</p>
  <p>Top Category</p>
  <p>Explore More Internships</p>
</div>
<div className="line flex bg-slate-400">

</div>
<div className="right-section">
  <p>Intern at India</p>
  <p>Intern at India</p>
  <p>Intern at India</p>
  <p>Intern at India</p>
  <p>Intern at India</p>
</div>
      </div>


  </>
      )}
          </div>
  )
}

export default Navbar;
