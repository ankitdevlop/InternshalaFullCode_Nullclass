import React, { useState ,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

  

function Jobs() {
  //   For Image Slide

const [currentSlide3, setCurrentSlide3] = useState(0);

const handleSlide = (direction) => {
  const container = document.getElementById('container3');
  const step = 100; // Adjust this value based on the width of your images or desired sliding distance

  if (direction === 'left') {
    setCurrentSlide3((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 0));
  } else {
    setCurrentSlide3((prevSlide) => (prevSlide < 3  ? prevSlide + 1 : 3));
  }

  sideScroll2(container, direction, 25, step, 10);
};
    const [selectedCategory, setSelectedCategory] = useState('Big Brands');
    const [JobsData , setJobData]=useState('')

    useEffect(()=>{
      const fecthData=async()=>{
    try {
      const response=await axios.get(`https://internareabackend.onrender.com/api/job`);
      setJobData(response.data.data)
    } catch (error) {
      console.log(error)
    }
      }
      fecthData()
    },[])
    const filteredJobs = Array.isArray(JobsData)
    ? JobsData.filter((item) => !selectedCategory || item.category === selectedCategory)
    : [];
  
  return (
    <div>
      <div className="info-inter mt-12">


<h1 className='text-center text-4xl mt-8 '>Latest jobs on InternArea</h1>
<div className="categories flex flex-wrap mt-5 ">
<p>POPULAR CATEGORIES:</p> 
<span  className={`category mr-4 ml-6 ${
          selectedCategory === 'Big Brands' ? 'bg-blue-500 text-white' : ''
        }`} 
        onClick={() => setSelectedCategory('Big Brands')}
      >Big Brands</span>
<span className={`category mr-4 ml-6 ${
          selectedCategory === 'Work From Home' ? 'bg-blue-500 text-white' : ''
        }`} onClick={() => setSelectedCategory('Work From Home')}>Work from home</span>
<span className={`category mr-4 ml-6 ${
          selectedCategory === 'Part-time' ? 'bg-blue-500 text-white' : ''
        }`} onClick={() => setSelectedCategory('Part-time')}>Part-time</span>
<span className={`category mr-4 ml-6 ${
          selectedCategory === 'MBA' ? 'bg-blue-500 text-white' : ''
        }`} onClick={() => setSelectedCategory('MBA')}>MBA</span>
<span className={`category mr-4 ml-6 ${
          selectedCategory === 'Engineering' ? 'bg-blue-500 text-white' : ''
        }`} onClick={() => setSelectedCategory('Engineering')}>Engineering</span>
<span className={`category mr-4 ml-6 ${
          selectedCategory === 'media' ? 'bg-blue-500 text-white' : ''
        }`} onClick={() => setSelectedCategory('media')}>Media</span>
<span className={`category mr-4 ml-6 ${
          selectedCategory === 'Design' ? 'bg-blue-500 text-white' : ''
        }`} onClick={() => setSelectedCategory('Design')}>Design</span>
<span className={`category mr-4 ml-6 ${
          selectedCategory === 'Data Science' ? 'bg-blue-500 text-white' : ''
        }`} onClick={() => setSelectedCategory('Data Science')}>Data Science</span>

</div>
</div>
{/*  For internship sections */}
<div className="internships " id='container3'>


<div className="internShip-Info flex" id='content2'>
{/*  Firs Container */}
{filteredJobs.map((item) => (
      <div className="int-1 mt-6 " >
      <p className='mb-4 mt-3' id='boxer'> <i class="bi bi-arrow-up-right text-blue-500"></i> Actively hiring </p>
    <p>{item.title}</p> 
 
    <small className='text-slate-400 text-sm'>{item.company}</small>
    <div id='hr'>

    < hr className='mb-2'/>
    </div>
    <p className='mt-1'><i class="bi bi-geo-alt text-slate-400"></i>  {item.location}</p>
    <p className='mt-1'><i class="bi bi-cash-stack text-slate-400"></i> {item.CTC}/year</p>
  
    
    <div className="more flex justify-between mt-14">
      <span className='bg-slate-200 text-black-300 text-sm rounded-sm w-10 text-center' >Jobs</span>
      <Link to={`/detailsJob?q=${item?._id}`}>  <span className='text-blue-500 mr-2'>View details <i class="bi bi-chevron-right"></i> </span></Link>
        </div>
    </div>
    ))}



</div>
</div>
<div className="flex BUttons mt-9">
        <button className='back' onClick={() => handleSlide('left')} id='slideBack'>
          <i className="bi bi-chevron-left"></i>
        </button>
        <button className='next' onClick={() => handleSlide('right')} id='slide'>
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  )
}
function sideScroll2(element, direction, speed, distance, step) {
  let scrollAmount = 0;
  const slideTimer = setInterval(function () {
    if (direction === 'left') {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}


export default Jobs
