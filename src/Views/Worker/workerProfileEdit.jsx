import React from "react"
import { ReactDOM } from "react"
import { Link } from "react-router-dom"
import SignedInHeader from "./signedInHeader"
import Styles from './CSS/worker-profile-edit.module.css'
import Johnny from './Image/Johnny.jpg'
import RandomPerson from './Image/randomPerson.png'
import Suitcase from './Image/suitcase.png'

function WorkerProfileEdit(){
    return(
        <>
            <SignedInHeader/>
            <Link to="/workerProfile" onClick={() => window.history.back()} className={Styles['back-button']}> ← Back</Link>
<Link to="/workerProfile" className={Styles['edit-button']}>SAVE PROFILE</Link>
<div className={Styles['container']}>
  <div className={Styles['workers-profile-container']}>
    <div className={Styles['card-container']}>
      <div className={Styles['profile-card-container']}>
        <div className={Styles['profile-imgbox']}>
          <img src={Johnny} />
        </div>
        <div className={Styles['profile-card']}>
          <h1>Johnny Del Mondo</h1>
          <h2>Professional Line Standing</h2>
          <div className={Styles['profile-description']}>
            <textarea
              className={Styles['line-stander-input']}
              placeholder="Hi, I’m Johnny del Mondo and I’m a professional line-stander with 10+ years of experience. I can stand in line for you for any event, service, or product that you need. Whether it’s a concert, a movie premiere, a restaurant reservation, a product launch, or a government office, I can save you time and hassle by waiting in line for you. I’m reliable and punctual. I always show up on time and stay in line until you arrive. I never leave the line or switch places with someone else. You can trust me to hold your spot and update you on the progress of the line. If you need a professional line-stander, look no further than me. I’m the best in the business and I guarantee your satisfaction. Contact me today and let me stand in line for you. You won’t regret it."
              defaultValue={""}
            />
          </div>
        </div>
      </div>
    </div>
    <div className={Styles['card-container']}>
      <div className={Styles['ratings-card']}>
        <h1>RATINGS</h1>
        <div className={Styles['ratings']}>
          <table>
            <tbody>
              <tr>
                <td>
                  <img src={RandomPerson} />
                </td>
                <td>
                  <h1>STEVE JONES</h1>
                  <div className={Styles['stars']}>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <h3>This guy is a GOD!, when I say God I am not exaggerating. He got to wait in line for 4 whole hours! He didn't move an inch!</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={RandomPerson} />
                </td>
                <td>
                  <h1>PAUL COOK</h1>
                  <div className={Styles['stars']}>
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
                  <div className={Styles['stars']}>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <h3>God save the queen! A blessing in disguise. Amazing at cleaning toilets, I can finally have my ass a good rest, or should I say, release! A good release!</h3>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={Styles['applied-jobs-card']}>
        <h1>APPLIED JOBS</h1>
        <div className={Styles['applied-jobs']}>
          <table>
            <tbody>
              <tr>
                <td className={Styles['descriptions']}>
                  <div>
                    <img src={Suitcase} />
                  </div>
                  <div className={Styles['applied-jobs-descriptions']}>
                    <h1>Professional Line Standing</h1>
                    <h3>A professional line stander provides a service by holding your place in queues or lines, allowing you to attend to other matters.</h3>
                  </div>
                </td>
                <td className={Styles['button-container']}>
                  <a href="remove.html">Remove</a>
                  <border />
                  <a href="default.html" className={Styles['default']}>Default</a>
                </td>
              </tr>
              <tr>
                <td className={Styles['descriptions']}>
                  <div>
                    <img src={Suitcase} />
                  </div>
                  <div className={Styles['applied-jobs-descriptions']}>
                    <h1>Massage Therapy</h1>
                    <h3>Massage therapy is a holistic approach to health and wellness, utilizing hands-on techniques to promote relaxation, reduce stress, and alleviate muscle tension.</h3>
                  </div>
                </td>
                <td className={Styles['button-container']}>
                  <a href="remove.html">Remove</a>
                  <border />
                  <a href="default.html">Make Default</a>
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

export default WorkerProfileEdit;