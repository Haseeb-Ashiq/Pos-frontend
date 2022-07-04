import React, { useState } from 'react'
import Navbar from '../navbar'
import Sidebar from '../sidebar'
import { HeroContainer ,
HeroContent,
HeroH1,
HeroItems,
HeroP,
HeroBtn
} from './HeroElement'
function HeroSection({isLogedIn}) {
   const [isOpen,setIsOpen]=useState(false);
  const toggle=()=>{
      setIsOpen(!isOpen);
  }
  return (
      <>
      <div style={{position:'relative'}}>
           <HeroContainer>
           <Navbar toggle={toggle} isLogedIn={isLogedIn}/>
               <Sidebar isOpen={isOpen} toggle={toggle}/>
               <HeroContent>
                   <HeroItems>
                       <HeroH1>Greatest Pizza Ever</HeroH1>
                       <HeroP>Ready in 60 seconds</HeroP>
                       <HeroBtn>Order now</HeroBtn>
                   </HeroItems>
               </HeroContent>
           </HeroContainer>
           </div>
      </>
  )
}

export default HeroSection