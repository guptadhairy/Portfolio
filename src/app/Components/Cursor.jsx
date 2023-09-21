import React from 'react'
import dynamic from 'next/dynamic';
const Cursor = () => {

    const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
        ssr: false, 
      });
  return (
    <div>
      <AnimatedCursor
        innerSize={15}
        outerSize={16}
        color='110,144,190'
        outerAlpha={0.2}
        innerScale={0.9}
        outerScale={8}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.custom',
            options: {
              innerSize: 12,
              outerSize: 12,
              color: '255, 255, 255',
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 4
            }
          }
        ]}
      />
    </div>
  )
}

export default Cursor
