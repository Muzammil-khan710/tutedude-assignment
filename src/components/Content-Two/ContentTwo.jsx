import React from 'react'
import "./ContentTwo.css"

const ContentTwo = () => {
  return (
    <div>
        <div className='content-two-container'>
            <div className='content-two'>
                <div className='content-two-referral'>
                    <div className='content-two-title'>Your Referral Code</div>
                    <input className='content-two-input' type="text" />
                </div>
                <div className='wallet-box'>
                    <div className='wallet-title'>Wallet Balance</div>
                    <div>₹ 500</div>
                </div>
            </div>

            <div className='content-two-stitle'>Friends who Enrolled <span>(3)</span> </div>

            <div className='card-container'>
                
                <div className='card'>
                    <div className='card-name'>Dhiraj Saxena <span>14 Sep, 2022</span></div>
                    <div className='card-course-header'>Courses Enrolled(6)</div>
                    <div className='card-course-container'>
                        <ul className='course-list'>
                            <li>UI/UX</li>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>Python</li>
                            <li>MERN</li>
                            <li>Java</li>
                        </ul>
                    </div>
                    <div className='card-course-header'>Referral Amount <span>₹185</span></div>
                </div>

                <div className='card'>
                    <div className='card-name'>Subhash Mishra <span>15 Sep, 2022</span></div>
                    <div className='card-course-header'>Courses Enrolled(23)</div>
                    <div className='card-course-container'>
                        <ul className='course-list'>
                            <li>UI/UX</li>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>Python</li>
                            <li>MERN</li>
                            <li>Java</li>
                            <li>C++</li>
                            <li>React</li>
                            <li>Angular</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                            <li>React Native</li>
                            <li>Flutter</li>
                            <li>Android</li>
                            <li>IOS</li>
                        </ul>
                    </div>
                    <div className='card-course-header'>Referral Amount <span>₹485</span></div>
                </div>


                <div className='card'>
                    <div className='card-name'>Prafull kumar <span>14 Sep, 2022</span></div>
                    <div className='card-course-header'>Courses Enrolled(23)</div>
                    <div className='card-course-container'>
                        <ul className='course-list'>
                            <li>UI/UX</li>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>Python</li>
                            <li>MERN</li>
                            <li>Java</li>
                            <li>React</li>
                            <li>Angular</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                            <li>React Native</li>
                            <li>Flutter</li>
                            <li>Android</li>
                            <li>IOS</li>
                        </ul>
                    </div>
                    <div className='card-course-header'>Referral Amount <span>₹485</span></div>
                </div>
            </div>

            <div className='content-heading'>Terms & Conditions</div>

        </div>
    </div>
  )
}

export { ContentTwo }