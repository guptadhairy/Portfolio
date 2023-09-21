import React from 'react'
import Image from "next/image";
const AboutContent = () => {
  return (
    <div>
      <div className="meleft">
        <h1>About Me</h1>
        <p>Hi Im <b>Dhairya Gupta</b> a Full-Stack web developer and UI/UX designer with a passion for creating beautiful functional and user-centered digital experiences. With 2 years of experience in the field. I am always looking for new and innovative ways to bring my clients visions to life.</p>
        <p>I believe that design is about more than just making things look pretty its about solving problems and creating intuitive enjoyable experiences for users</p>
      </div>
      <div className="meImage">
          <Image className="meimg" width={400} height={300} src="/prof3.jpg" alt="profile" />
        </div>
    </div>
  )
}

export default AboutContent
