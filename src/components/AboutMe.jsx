import React from 'react'
import profile from "../images/profile.png"
import "./AboutMe.css"
const AboutMe = () => {
  return (
    <div className='AboutMeContainer'>
        <h3>About Me</h3>
      <div className='bio'>
        
        <img src= {profile} alt="giff" />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto consectetur ipsum, consequatur illum a fugiat vero repudiandae. Autem non sequi fugiat dolorem minima modi porro obcaecati ex atque provident? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, provident expedita quasi quod quisquam non, deleniti saepe cupiditate corrupti aliquid pariatur laborum, ut eius aspernatur in molestias. Possimus, aliquam assumenda. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus fuga eius, eum doloremque dolorem earum deserunt vitae obcaecati, nesciunt dolorum, debitis sit. Quod commodi, aut ipsum iure molestias doloremque veniam saepe eos voluptas reiciendis dolores unde possimus ipsa, quos perferendis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit sunt ut mollitia quisquam, voluptatibus exercitationem temporibus corrupti labore sequi quae id sit, ad suscipit ullam tempora nemo accusantium deserunt nisi. Odit praesentium illo accusamus, ratione commodi placeat officiis voluptate, quo ab illum quasi dicta aperiam, minus obcaecati doloribus optio impedit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ipsa est iure doloribus alias quis at quos soluta obcaecati. Ea laboriosam doloremque eius, odit repellendus adipisci, fuga molestiae dolore quibusdam consectetur facilis, veniam autem quas officiis voluptatum cupiditate maxime earum nihil facere voluptas. Quaerat, maxime? Inventore quam deleniti fugit harum.
        </p>
      </div>

      <div className='skillset'>
        <h3>My Skill Set</h3>
        <div className='skills'>
        <img src="" alt="React JS" />
        <img src="" alt="Html5" />
        <img src="" alt="JavaScript" />
        <img src="" alt="Python" />
        <img src="" alt="CSS3" />
        <img src="" alt="C" />
        <img src="" alt="C++" />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
