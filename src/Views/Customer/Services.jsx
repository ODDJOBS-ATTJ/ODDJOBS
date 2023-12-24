import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Add this import
import styles from './CSS/services.module.css';
import SignedInHeader from './Signed-In-Header';
import magnifyingGlass from './IMAGE/Icons/magnifying-glass.png';
import featured from './IMAGE/icons/featured.png';
import house from './IMAGE/icons/home.png';
import event from './IMAGE/icons/event.png';
import health from './IMAGE/icons/health.png';
import mechanical from './IMAGE/icons/mechanical.png';
import misc from './IMAGE/icons/misc.png';
import { useNavigate } from 'react-router-dom';

function Services() {
    const navigate = useNavigate();

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            navigate(`/Customer/services/search?search=${event.target.value}`);
        }
    };

    const [type, setType] = useState(0);
    const [services, setServices] = useState([[]]);
    const [allserv, setAllServ] = useState([]);

    const chooseType = (num) => {
        setType(num);
    };

    useEffect(() => {
        axios.get(`http://localhost:3000/service`)
            .then(response => {
                setAllServ(response.data.data);
            })
            .catch(error => {
                console.error(`Error fetching data: ${error}`);
            })
    }, []);

    useEffect(() => {
        let category;

        switch (type) {
            case 0: category = 'featured services'; break;
            case 1: category = 'home'; break;
            case 2: category = 'event'; break;
            case 3: category = 'health'; break;
            case 4: category = 'mechanical'; break;
            case 5: category = 'misc'; break;
            default: category = 'featured services'; break;
        }

        axios.get(`http://localhost:3000/service/category/${category}`)
            .then(response => {
                setServices(response.data.data);
            })
            .catch(error => {
                console.error(`Error fetching data: ${error}`);
            })
    }, [type]);


    function catType() {
        let category;

        switch (type) {
            case 0: category = 'featured services'; break;
            case 1: category = 'home'; break;
            case 2: category = 'event'; break;
            case 3: category = 'health'; break;
            case 4: category = 'mechanical'; break;
            case 5: category = 'misc'; break;
        }

        return (
            <div style={{ textTransform: "uppercase" }}>
                <h1>{category}</h1>
            </div>
        )
    }
    console.log();

    function renderServicesBasedOnType() {
        const typeToCategory = ['featured', 'home', 'event', 'health', 'mechanical', 'misc'];
        const selectedCategory = typeToCategory[type];
    
        return allserv
            .filter(service => service.isVisible === 1 && service.isDeleted === 0)
            .map((service, index) => {
                if (type === 0) {
                    if (service.isFeatured === 1) {
                        return renderService(service, index);
                    }
                } else {
                    if (service.serviceCat === selectedCategory) {
                        return renderService(service, index);
                    }
                }
            });
    }

    function renderService(service, index) {
        return (
            <div key={index} className={styles['services-container-row']}>
                <Link to={`/customer/services/details?serviceID=${service.serviceID}`} className={styles['other-categories-row']}>
                    <div className={styles['other-categories-content']}>
                        <div className={styles['image']}>
                            <img src={service.cover} alt="Service" />
                        </div>
                        <div className={styles['space']}></div>
                        <div className={styles['description']}>
                            <h1>{service.serviceName}</h1>
                            <p>{service.shortDesc}</p>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }

    return (
        <div>
            <SignedInHeader />

            <div className={styles['services-container']}>
                <div className={styles['services-container-row']}>
                    <div className={styles['services-container-col']}>
                        <div className={styles['searchbar']}>
                            <img src={magnifyingGlass} alt="Magnifying Glass" />
                            <input type="text" placeholder="Masseur, Pet Caretaker, and more Odd-Jobs" onKeyDown={handleSearch} />
                        </div>
                    </div>
                </div>
                <div className={styles['services-container-row']}>
                    <h1>CATEGORIES</h1>
                </div>
                <div className={styles['services-container-row']}>
                    <div className={styles['categories-card']}>
                        <Link onClick={() => chooseType(0)} className={styles['categories']}>
                            <div className={styles['category-img']}>
                                <img src={featured} alt="Category" />
                            </div>
                            <h1>featured</h1>
                        </Link>
                        <Link onClick={() => chooseType(1)} className={styles['categories']}>
                            <div className={styles['category-img']}>
                                <img src={house} alt="Category" />
                            </div>
                            <h1>home</h1>
                        </Link>
                        <Link onClick={() => chooseType(2)} className={styles['categories']}>
                            <div className={styles['category-img']}>
                                <img src={event} alt="Category" />
                            </div>
                            <h1>event</h1>
                        </Link>
                        <Link onClick={() => chooseType(3)} className={styles['categories']}>
                            <div className={styles['category-img']}>
                                <img src={health} alt="Category" />
                            </div>
                            <h1>health</h1>
                        </Link>
                        <Link onClick={() => chooseType(4)} className={styles['categories']}>
                            <div className={styles['category-img']}>
                                <img src={mechanical} alt="Category" />
                            </div>
                            <h1>mechanical</h1>
                        </Link>
                        <Link onClick={() => chooseType(5)} className={styles['categories']}>
                            <div className={styles['category-img']}>
                                <img src={misc} alt="Category" />
                            </div>
                            <h1>misc</h1>
                        </Link>
                        {/* Add similar Link components for other categories */}
                    </div>
                </div>
                <div className={styles['services-container-row']}>
                    {catType()}
                </div>
                {renderServicesBasedOnType()}
            </div>
        </div>
    );
}

export default Services;
