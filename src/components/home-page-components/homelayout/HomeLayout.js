import React,{useState} from 'react'
import Navbar from '../navbar'
import Sidebar from '../sidebar';

function HomeLayout({isLogedIn,children}) {
    const [isOpen,setIsOpen]=useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    }
  return (
   <>
   <Navbar toggle={toggle} isLogedIn={isLogedIn}/>
   <Sidebar isOpen={isOpen} toggle={toggle} />
   {children}
   </>
  )
}

export default HomeLayout;