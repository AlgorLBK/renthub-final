import React from "react";

export const HomeService = () => {
    return (
        <div className="App">
          <div className='container'>
            <p style={{fontSize: '30px'}}>Our Services</p>
            <p style={{fontSize: '25px'}}>Get in touch and let us know how we can help you</p>
        </div>
        <div className="square-container">
            <div className="square">
                <div className="circle">
                <i className="fa-solid fa-house-user"></i>
                </div>
                  <p style={{ fontSize: 22 }} className='infos'>Sales</p>
                  <p style={{ marginTop: '0px', fontSize: '15px' }}>We’d love to talk about how we can work together</p>
                  <a href='https://youtu.be/swKc75vzfMg?si=7GTT9gijLd-EKEPx' className='link'>contact sales &rarr;</a>
            </div>
            <div className="square">
                <div className="circle">
                <i className="fa-solid fa-phone"></i>
                </div>
                <p style={{fontSize: 22}} className='infos'>Help & Support</p>
                <p style={{marginTop: '0px', fontSize: '15px'}}>We’re here to help with any questions or code.</p>
                <a href='https://youtu.be/swKc75vzfMg?si=7GTT9gijLd-EKEPx' className='link'>contact support &rarr;</a>
            </div>
            <div className="square">
                <div className="circle">
                <i className="fa-solid fa-newspaper"></i>
                </div>
                <p style={{fontSize: 22}} className='infos'>Media & Press</p>
                <p style={{marginTop: '0px', fontSize: '15px'}}>Get Renthub news, company info, and media resources.</p>
                <a href='https://youtu.be/swKc75vzfMg?si=7GTT9gijLd-EKEPx' className='link'>visit press page &rarr;</a>
            </div>
        </div>
        <div className="center-container">
      <div className="info-container">
        <div className="info">
          <p>Join us on IRC</p>
          <p>If you have technical questions, chat live with developers in #renthub on freenode</p>
        </div>
        <div className="vertical-line"></div>
        <div className="info">
          <p>General communication</p>
          <p>For general queries, including partnership opportunities, please email info@renthub.ca</p>
        </div>
      </div>
    </div>
    </div>
    );
}