import React from 'react'
import './Contact.css'
import foto_linkedin from '../../Assets/LinkedIn.png'
import foto_git from '../../Assets/Git.png'
import foto_insta from '../../Assets/Insta.png'
import foto_youtube from '../../Assets/Youtube.png'

const Contact = () => {
return (
    <div>

        <div className='contact' id='contact'>

            <div className='box1'>

                <div className='teks-1'>

                    <h3>Let's Connect</h3>
                    <p>
                        Let's get to know each
                        other on social media!
                        Let's build a closer
                        and more connected 
                        community together!
                    </p>

                </div> {/*Tutup teks-1 */}

                <div className='kotak'>

                    <div className='row1'>

                        <div className='col-1'>

                            <a href="https://www.linkedin.com/in/muhammad-david-firmansyah-5760282a4/"><img src={foto_linkedin} alt="LinkedIn" /></a>
                            <a href="https://www.linkedin.com/in/muhammad-david-firmansyah-5760282a4/"><p>@davidfrsy</p></a>

                        </div> {/*Tutup col-1 */}

                        <div className='col-2'> 

                            <a href="https://github.com/davidfrsy"><img src={foto_git} alt="Git" /></a>
                            <a href="https://github.com/davidfrsy"><p>@davidfrsy</p></a>

                        </div> {/*Tutup col-2 */}

                    </div> {/*Tutup row-1 */}

                    <div className='row2'> 

                        <div className='col-1'>

                            <a href="https://www.instagram.com/davidfrsy/"><img src={foto_insta} alt="Instagram" /></a>
                            <a href="https://www.instagram.com/davidfrsy/"><p>@davidfrsy</p></a>

                        </div> {/*Tutup col-1 */}

                        <div className='col-2'>

                            <a href="https://www.youtube.com/channel/UCSsEyRtd_qik57gBXIqIxpQ"><img src={foto_youtube} alt="Youtube" /></a>
                            <a href="https://www.youtube.com/channel/UCSsEyRtd_qik57gBXIqIxpQ"><p>Muhammad David Firmansyah</p></a>

                        </div> {/*Tutup col-2 */}

                    </div> {/*Tutup row-2 */}

                </div>

                <br /><br />

            </div> {/*Tutup box-1 */}

            <br /><br /><br /><br /><br />

        </div> {/*Tutup Contact */}

    </div>
)
}

export default Contact
