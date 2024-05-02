import React from 'react'
import './About.css'
import foto_project1 from '../../Assets/foto-project1.jpg'
import foto_project2 from '../../Assets/foto-project2.jpg'

const About = () => {
    return (
        <div>

            <div className='about' id='about'>

                <div className='teks-1'>
                    <h3>About Me</h3>
                    <p>
                        I am a third year student of
                        Dian Nuswantoro University 
                        who is passionate about web development. 
                        I have a special interest in Front-end 
                        development, here are some projects that 
                        I have recently worked on
                    </p>
                </div>

                <div className='project-name1'>

                    <img src={foto_project1} alt="Project 1" />

                    <div className='box-1'>

                        <div className='btn-progress1'>
                            <button>Done</button>
                        </div>

                        <h4>Micro Challenge Infinite Learning</h4>
                        <p>
                            Micro Challenge is one of a 
                            series of projects in the Infinite 
                            learning independent study program. 
                            In this project I worked with a team 
                            to create an application design from 
                            research to design. In this project I 
                            acted as a hacker
                        </p>

                        <div className='view-project1'>
                            <a href="">
                                <button>
                                    View Project&nbsp;&nbsp;<i class="fa-solid fa-chevron-right"></i>
                                </button>
                            </a>
                        </div>

                    </div>

                </div>

                <div className='project-name2'>

                    <div className='box-2'>
                        
                        <div className='btn-progress2'>
                            <button>On Progress</button>
                        </div>

                        <h4>Massive Challenge Infinite Learning</h4>
                        <p>
                            Massive challenge is the last 
                            project in the infinite learning 
                            program. In this project, my team 
                            and I had the opportunity to collaborate 
                            with friends from the mobile and advanced 
                            AI programs. This series of projects starts 
                            from application research, design and 
                            also writing program code. 
                        </p>

                        <div className='view-project2'>
                            <a href="">
                                <button>
                                    View Project&nbsp;&nbsp;<i class="fa-solid fa-chevron-right"></i>
                                </button>
                            </a>
                        </div>

                    </div>
                    
                    <img src={foto_project2} alt="Project 2" />

                </div>

            </div>

        </div>
    )
}

export default About
