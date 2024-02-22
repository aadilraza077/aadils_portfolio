import React from 'react'
import profile from "../images/profile.png"
const AboutMe = () => {
  return (
    <div className='AboutMeContainer'>
        <h3>About Me</h3>
      <div className='bio'>
        
        <img src= {profile} alt="giff" />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto consectetur ipsum, consequatur illum a fugiat vero repudiandae. Autem non sequi fugiat dolorem minima modi porro obcaecati ex atque provident? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, provident expedita quasi quod quisquam non, deleniti saepe cupiditate corrupti aliquid pariatur laborum, ut eius aspernatur in molestias. Possimus, aliquam assumenda. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus fuga eius, eum doloremque dolorem earum deserunt vitae obcaecati, nesciunt dolorum, debitis sit. Quod commodi, aut ipsum iure molestias doloremque veniam saepe eos voluptas reiciendis dolores unde possimus ipsa, quos perferendis?
        </p>
      </div>

      <div className='skillset'>
        <h3>My Skill Set</h3>
        <img src="" alt="React JS" />
        <img src="" alt="Html5" />
        <img src="" alt="JavaScript" />
        <img src="" alt="Python" />
        <img src="" alt="CSS3" />
        <img src="" alt="C" />
        <img src="" alt="C++" />
      </div>
    </div>
  )
}

export default AboutMe
