import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './CSS/services.module.css';
import SignedInHeader from './Signed-In-Header';
import magnifyingGlass from './IMAGE/Icons/magnifying-glass.png';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ServicesSearch() {
    const navigate = useNavigate();

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            navigate(`/Customer/services/search?search=${event.target.value}`);
        }
    };

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('search');

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios({
            method: 'post',
            url: `http://localhost:3000/service/search`,
            data: {
                query: searchQuery
            }
        })
            .then(response => {
                console.log(searchQuery);
                console.log(response.data);
                setServices(response.data.data);
            })
            .catch(error => {
                console.error(`Error fetching data: ${error}`);
            });
    }, [searchQuery]);

    // Use a separate useEffect to observe changes in the 'services' state
    useEffect(() => {
        // Log the updated state
        console.log(services);
    }, [services]);

    return (
        <div>
            <SignedInHeader />
            <div className={styles['services-container']}>
                <Link className={styles['back-button-services']} onClick={() => navigate(-1)}>
                    &larr; Back
                </Link>
                <div className={styles['services-container-row']}>
                    <div className={styles['services-container-col']}>
                        <div className={styles['searchbar']}>
                            <img src={magnifyingGlass} alt="Magnifying Glass" />
                            <input
                                type="text"
                                placeholder="Masseur, Pet Caretaker, and more Odd-Jobs"
                                onKeyDown={handleSearch}
                                defaultValue={searchQuery}
                            />                        </div>
                    </div>
                </div>

                <div className={styles['services-container-row']}>
                    <h1>About {services.length} results</h1>
                </div>

                {services.map((service, index) => (
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
                ))}
            </div>
        </div>
    );
}

export default ServicesSearch;
