import React from "react"
import { Link } from "react-router-dom"
import Header from "../components/home-components/header"

import customer from "../../../src/General/IMAGE/customer.png"
import workers from "../../../src/General/IMAGE/workers.png"

function RoleSelect() {
    return(
        <>
        <Header />
        <div className="container">

                <Link className="back-button" onClick={() => navigate(-1)}>
                    &larr; Back
                </Link>

                <div className="container-decision">
                    <Link to="../">
                        <button className="decision-button">
                            <h1>CUSTOMER</h1>
                            <img src={customer} alt="Customer" />
                            <div className="description-decision-button">
                                <p>HIRE WORKERS TO DO CERTAIN ODDJOBS</p>
                            </div>
                        </button>
                    </Link>
                    <Link to="../">
                        <button className="decision-button">
                            <h1>WORKERS</h1>
                            <img src={workers} alt="Workers" />
                            <div className="description-decision-button">
                                <p>WORK AND GET PAID WITH ODDJOBS</p>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default RoleSelect