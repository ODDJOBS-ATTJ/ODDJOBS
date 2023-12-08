import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Add this import
import styles from './CSS/services.module.css';
import SignedInHeader from './Signed-In-Header';
import magnifyingGlass from './IMAGE/Icons/magnifying-glass.png';
import samplePhoto from './IMAGE/icons/samplePhoto.png';
import featured from './IMAGE/icons/featured.png';
import house from './IMAGE/icons/home.png';
import event from './IMAGE/icons/event.png';
import health from './IMAGE/icons/health.png';
import mechanical from './IMAGE/icons/mechanical.png';
import misc from './IMAGE/icons/misc.png';


function Services() {
    const [type, setType] = useState(0);

    const chooseType = (num) => {
        setType(num);    
    };

    
    // function random(){
    //     let category;

    //     switch(type){
    //         case 0: category = 'featured services'; break;
    //         case 1: category = serviceTypes[0].serviceTypeName; break;
    //         case 2: category = serviceTypes[1].serviceTypeName; break;
    //         case 3: category = serviceTypes[2].serviceTypeName; break;
    //         case 4: category = serviceTypes[3].serviceTypeName; break;
    //         case 5: category = serviceTypes[4].serviceTypeName; break;
    //     }

    //     return(
    //         <div style={{textTransform:"uppercase"}}>
    //             <h1>{category}</h1>;
    //         </div> 
    //     )
    // }
    // <h1>Service Types</h1>
    // <ul>
    //   {serviceTypes.map(serviceType => (
    //     <li key={serviceType.serviceTypeID}>{serviceType.serviceTypeName}</li>
    //   ))}
    // </ul>

    return (
        <div>
            <SignedInHeader />
            <div className={styles['services-container']}>
                <div className={styles['services-container-row']}>
                    <div className={styles['services-container-col']}>
                        <div className={styles['searchbar']}>
                            <img src={magnifyingGlass} alt="Magnifying Glass" />
                            <input type="text" placeholder="Masseur, Pet Caretaker, and more Odd-Jobs" />
                        </div>
                    </div>
                </div>
                <div className={styles['services-container-row']}>
                    <h1>CATEGORIES</h1>
                </div>
                <div className={styles['services-container-row']}>
                    <div className={styles['categories-card']}>
                        <Link onClick={()=>chooseType(0)}  className={styles['categories']}>
                            <div className={styles['category-img']}>
                                <img src={featured} alt="Category" />
                            </div>
                            <h1>featured</h1>
                        </Link>
                        <Link onClick={()=>chooseType(1)} className={styles['categories']}>
                            <div className={styles['category-img']}>
                                <img src={house} alt="Category" />
                            </div>
                            <h1>home</h1>
                        </Link>
                        <Link onClick={()=>chooseType(2)} className={styles['categories']}>
                            <div className={styles['category-img']}>
                                <img src={event} alt="Category" />
                            </div>
                            <h1>event</h1>
                        </Link>
                        <Link onClick={()=>chooseType(3)}  className={styles['categories']}>
                            <div className={styles['category-img']}>
                                <img src={health} alt="Category" />
                            </div>
                            <h1>health</h1>
                        </Link>
                        <Link onClick={()=>chooseType(4)} className={styles['categories']}>
                            <div className={styles['category-img']}>
                                <img src={mechanical} alt="Category" />
                            </div>
                            <h1>mechanical</h1>
                        </Link>
                        <Link onClick={()=>chooseType(5)} className={styles['categories']}>
                            <div className={styles['category-img']}>
                                <img src={misc} alt="Category" />
                            </div>
                            <h1>misc</h1>
                        </Link>
                        {/* Add similar Link components for other categories */}
                    </div>
                </div>
                <div className={styles['services-container-row']}>
                    {/* {random()} */}
                </div>
                <div className={styles['services-container-row']}>
                    <div className={styles['featured-services-row']}>
                        <Link to="/Customer/services/details" className={styles['featured-services-col']}>
                            <div className={styles['featured-services-content']}>
                                <div className={styles['image']}>
                                    <img src={samplePhoto} alt="Featured Service" />
                                </div>
                                <div className={styles['space']} />
                                <div className={styles['description']}>
                                    <h1>massage therapy</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex nisi, congue sit amet varius quis,
                                        convallis et nulla. Duis ac est diam. Maecenas diam nunc, vestibulum vitae ligula </p>
                                </div>
                            </div>
                        </Link>
                        <div className={styles['featured-services-space']}></div>
                        <Link to="/Customer/services/details" className={styles['featured-services-col']}>
                            <div className={styles['featured-services-content']}>
                                <div className={styles['image']}>
                                    <img src={samplePhoto} alt="Featured Service" />
                                </div>
                                <div className={styles['space']} />
                                <div className={styles['description']}>
                                    <h1>PROFESSIONAL LINE STANDER</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex nisi, congue sit amet varius quis,
                                        convallis et nulla. Duis ac est diam. Maecenas diam nunc, vestibulum vitae ligula </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={styles['services-container-row']}>
                    <div className={styles['featured-services-row']}>
                        
                        <div className={styles['featured-services-space']}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
