import React from "react"
import { ReactDOM } from "react"
import Delivery from           '../IMAGE/delivery.jpg'

function WorkFooter() {
    return(
        <>
            <section className="workforus" id="workforus">
            <div className="innerbox">
                <div className="leftbox">
                <div className="section-heading">
                    <h6>Work For Us</h6>
                    <h2>Yes we accept workers too!</h2>
                </div>
                <p>
                    One of this website's main goal is to provide, not only to users as a
                    customer, but also as a worker. Each services have their own fixed
                    rates!
                    <br />
                    <br />
                    After signing up as a worker, you can apply for a job with no hassle, no
                    additional payment, all free of charge!
                    <br />
                    <br />
                    You will have access to both views of the website, if you want to access
                    our services, head to customer view! If you want to work for our
                    services, head to worker view!
                </p>
                </div>
                <div className="rightbox">
                <img className="workforusimg" src={ Delivery } />
                <div className="imgbackground" />
                </div>
            </div>
            </section>
        </>
    )
}

export default WorkFooter