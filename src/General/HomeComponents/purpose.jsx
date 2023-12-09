import React from "react"
import { ReactDOM } from "react"
import Lawn from           '../IMAGE/Lawn.png'

function Purpose() {
    return(
        <>
        <section className="ourpurpose" id="ourpurpose">
        <style
            scoped=""
            dangerouslySetInnerHTML={{
            __html: '\n            @import "index.css";\n        '
            }}
        />
        <div className="leftbox">
            <div className="innerbox">
            <div className="section-heading">
                <h6>Our Purpose</h6>
                <h2>Connecting You with Diverse Services</h2>
            </div>
            <p>
                At ODDJOBS, we're dedicated to providing a platform where you can easily
                book and access a wide range of services.
                <br />
                <br />
                Whether you need help with household tasks, professional assistance, or
                creative projects, ODDJOBS is your go-to destination for finding
                reliable and skilled service providers.
                <br />
                <br />
                Our goal is to simplify the process of sourcing and booking services,
                making it convenient and efficient for both service seekers and
                providers.
            </p>
            </div>
        </div>
        <div className="rightbox">
            <img className="ourpurposeimg" src={ Lawn } />
            <div className="imgbackground" />
        </div>
        </section>
        </>
    )
}

export default Purpose