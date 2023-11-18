import React from 'react'
import Marquee from "react-fast-marquee";
const Marque = ({direction="left"}) => {
  return (
    <div>
      <Marquee className='marq' style={{marginTop: '10px', width: '100%'}} speed={80} pauseOnHover={true} direction={direction}>
           <div className='marq2'>
           <div >
                <h1>RectJS</h1>
            </div>
            <div>
                <h1>NextJS</h1>
            </div>
            <div>
                <h1>JavaScipt</h1>
            </div>
            <div>
                <h1>CSS</h1>
            </div>
            <div>
                <h1>HTML</h1>
            </div>
            <div>
                <h1>GSAP  Canvas</h1>
            </div>
           </div>
          </Marquee>
    </div>
  )
}

export default Marque
