import React from 'react'
import Marquee from "react-fast-marquee";
const Marque = () => {
  return (
    <div>
      <Marquee className='marq' style={{marginTop: '10px', width: '50%'}} speed={80} pauseOnHover={true} direction='left'>
           <div className='marq2'>
           <div >
                <h1>Code</h1>
            </div>
            <div>
                <h1>And</h1>
            </div>
            <div>
                <h1>Design.</h1>
            </div>
           </div>
          </Marquee>
    </div>
  )
}

export default Marque
