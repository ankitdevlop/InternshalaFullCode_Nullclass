import React from 'react'
import { Link } from 'react-router-dom'
import { RiSendPlaneFill } from "react-icons/ri";

function DownNav() {
  return (
    <>

    <div className='hideforbigs'>
 
<div class="">
	
	<section id="bottom-navigation" class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
		<div id="tabs" class="flex justify-between">
			<Link to={"/"} class="w-full justify-center inline-block text-center pt-2 pb-1">
			<i class="bi bi-house-door text-xl hover:text-blue-400"></i>
				<span class="tab tab-home block text-xs">Home</span>
			</Link>
			<Link to={'/internships'} class="w-full justify-center inline-block text-center pt-2 pb-1">
			<RiSendPlaneFill className='text-2xl ml-24 hover:text-blue-400'/>
				<span class="tab tab-home block text-xs">Internship</span>
			</Link>
            
		
			<Link to={"/Jobs"} class="w-full justify-center inline-block text-center pt-2 pb-1">
			<i class="bi bi-briefcase text-xl hover:text-blue-400"></i>
				<span class="tab tab-explore block text-xs">Jobs</span>
			</Link>
			
		</div>
	</section>
</div>
    </div>
    </>
  )
}

export default DownNav
