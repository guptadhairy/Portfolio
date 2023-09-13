import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) =>{
    return(
        <motion.div className=' web flex items-center justify-center rounded-full font-semibold  py-3 px-6 shadow-dark cursor-pointer absolute' whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y}}
        transition={{duration:1.6}}>
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <div className='skills'>
      <h1>SKILLS</h1>
      <div className='ecl w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div className=' web flex items-center justify-center rounded-full font-semibold  p-8 shadow-dark cursor-pointer ' whileHover={{scale:1.05}} >
            Web
        </motion.div>
        <Skill name={'CSS'} x={'1vw'} y={'-10vw'} />
        <Skill name={'JavaScript'} x={'-30vw'} y={'0vw'} />
        <Skill name={'React'} x={'30vw'} y={'0vw'} />
        <Skill name={'Next'} x={'1vw'} y={'12vw'} />
        <Skill name={'MongoDB'} x={'-1vw'} y={'-20vw'} />
        <Skill name={'NodeJs'} x={'-20vw'} y={'-12vw'} />
        <Skill name={'ExpressJs'} x={'20vw'} y={'-12vw'} />
        <Skill name={'GSAP'} x={'-20vw'} y={'8vw'} />
        <Skill name={'Tailwind'} x={'1vw'} y={'21vw'} />
        <Skill name={'Canva'} x={'21vw'} y={'8vw'} />
      </div>
    </div>
  )
}

export default Skills
