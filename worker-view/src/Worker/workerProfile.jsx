import React from "react"
import { ReactDOM } from "react"
import { Link } from "react-router-dom"
import SignedInHeader from "./signedInHeader"
import './CSS/worker-profile.css'
import Johnny from './Image/Johnny.jpg'
import RandomPerson from './Image/randomPerson.png'
import Suitcase from './Image/suitcase.png'

function WorkerProfile(){
    return(
        <>
            <SignedInHeader/>
            <a href="#" className="back-button"> ← Back</a>
            <Link to="/workerProfile/edit" className="edit-button">EDIT</Link>
            <div className="container">
            <div className="workers-profile-container">
              <div className="card-container">
                <div className="profile-card-container">
                  <div className="profile-imgbox">
                    <img src={Johnny} />
                  </div>
                  <div className="profile-card">
                    <h1>Johnny Del Mondo</h1>
                    <h2>Professional Line Standing</h2>
                    <div className="profile-description">
                      <p>Hi, I’m Johnny del Mondo and I’m a professional line-stander with 10+ years of experience. I can stand in line for you for any event, service, or product that you need.
                        Whether it’s a concert, a movie premiere, a restaurant reservation, a product launch, or a government office, I can save you time and hassle by waiting in line for you.
                        I’m reliable and punctual. I always show up on time and stay in line until you arrive. I never leave the line or switch places with someone else. 
                        You can trust me to hold your spot and update you on the progress of the line.
                        <br /><br />
                        If you need a professional line-stander, look no further than me. I’m the best in the business and I guarantee your satisfaction. Contact me today and let me stand in line for you. You won’t regret it.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-container">
                <div className="ratings-card">
                  <h1>RATINGS</h1>
                  <div className="ratings">
                    <table>
                      <tbody><tr>
                          <td>
                            <img src={RandomPerson} />
                          </td>
                          <td>
                            <h1>STEVE JONES</h1>
                            <div className="stars">
                              <span>★</span>
                              <span>★</span>
                              <span>★</span>
                              <span>★</span>
                              <span>★</span>
                            </div>
                            <h3>This guy is a GOD!, when I say God I am not exagerrating. He got to wait in line for 4 whole hours! He didnt move an inch!</h3>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src={RandomPerson} />
                          </td>
                          <td>
                            <h1>PAUL COOK</h1>
                            <div className="stars">
                              <span>★</span>
                              <span>★</span>
                              <span>★</span>
                              <span>★</span>
                              <span>★</span>
                            </div>
                            <h3>This guy.... amazing with the massage. Was able to get a happy ending too!</h3>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src={RandomPerson} />
                          </td>
                          <td>
                            <h1>SID VICIOUS</h1>
                            <div className="stars">
                              <span>★</span>
                              <span>★</span>
                              <span>★</span>
                              <span>★</span>
                              <span>★</span>
                            </div>
                            <h3>God save the queen! A blessing in disguise. Amazing at cleaning toilets, I can finally have my ass a good rest, or should I say, release! A good release!</h3>
                          </td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
                <div className="applied-jobs-card">
                  <h1>APPLIED JOBS</h1>
                  <div className="applied-jobs">
                    <table>
                      <tbody><tr>
                          <td>
                            <img src={Suitcase} />
                          </td>
                          <td>
                            <h1>Professional Line Standing</h1>
                            <h3>A professional line stander provides a service by holding your place in queues or lines, allowing you to attend to other matters.</h3>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src={Suitcase} />
                          </td>
                          <td>
                            <h1>Massage Therapy</h1>
                            <h3>Massage therapy is a holistic approach to health and wellness, utilizing hands-on techniques to promote relaxation, reduce stress, and alleviate muscle tension.</h3>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src={Suitcase} />
                          </td>
                          <td>
                            <h1>STEVE JOBS</h1>
                            <h3>Co-founder of Apple</h3>
                          </td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}

export default WorkerProfile;