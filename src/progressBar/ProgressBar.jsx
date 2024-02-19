import React, { useEffect, useState } from "react";

function ProgressBar() {

    const [scrollPercentage,setScrollPercentage] = useState(20);

    useEffect(()=>{
      
        const handleScroll = () =>{
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;
            const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;
            setScrollPercentage(scrollPercentage)
           
        }

        window.addEventListener("scroll",handleScroll);
    return ()=>{
        window.removeEventListener("scroll",handleScroll);
        }
    },[])

  return <div id="progress-container" 
  style={{height:"4px" ,width:"100%", backgroundColor:"white" ,position: "fixed", top:"0",left:"0",right:"0"}}>
    <div className="progress-fill" 
    style={{height:"100%",backgroundColor:"red",width:`${scrollPercentage}%`}}></div>
  </div>;
}

export default ProgressBar;
