import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CSS/services-management.module.css';
import SignedInHeader from './Signed-In-Header';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from './icons/magnifying-glass.png';
import Back from './icons/back.png';
import Next from './icons/next.png';
import Edit from './icons/pen.png';
import Visible from './icons/isVisible.svg';
import NotVisible from './icons/notVisible.svg';
import Star from './icons/star-regular.svg';
import SolidStar from './icons/star-solid.svg';
import Delete from './icons/traffic-signal.png';

function AdminServiceManagement() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/service/')
      .then(response => {
        const activeServices = response.data.data.filter(service => service.isDeleted !== 1);
        setServices(activeServices);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  // Get current services
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services
    .filter(service => service.serviceName.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(indexOfFirstService, indexOfLastService);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Handle search input changes
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const sortServices = (sortType) => {
    let sortedServices = [...services];
    switch (sortType) {
      case 'name-asc':
        sortedServices.sort((a, b) => a.serviceName.localeCompare(b.serviceName));
        break;
      case 'name-desc':
        sortedServices.sort((a, b) => b.serviceName.localeCompare(a.serviceName));
        break;
      case 'id-asc':
        sortedServices.sort((a, b) => a.serviceID - b.serviceID);
        break;
      case 'id-desc':
        sortedServices.sort((a, b) => b.serviceID - a.serviceID);
        break;
      default:
        break;
    }
    setServices(sortedServices);
  };

  const handleDelete = (serviceID) => {
    if (window.confirm('Are you sure you want to remove this service?')) {
      // Fetch the current data of the service
      axios.get(`http://localhost:3000/service/${serviceID}`)
        .then(response => {
          // Update the isDeleted and isVisible fields
          const updatedService = {
            ...response.data.data[0],
            isDeleted: 1,
            isVisible: 0
          };

          // Send the updated service data in the PUT request
          axios.put(`http://localhost:3000/service/${serviceID}`, updatedService)
            .then(response => {
              console.log(response.data);
              // Refresh the page
              window.location.reload();
            })
            .catch(error => {
              console.error('There was an error!', error);
            });
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }
  };

  const handleVisibility = (serviceID) => {
    if (window.confirm('Are you sure you want to change the visibility of the service?')) {
      // Fetch the current data of the service
      axios.get(`http://localhost:3000/service/${serviceID}`)
        .then(response => {
          // Calculate the new value for isVisible
          const newIsVisible = response.data.data[0].isVisible === 1 ? 0 : 1;

          // Update the isVisible field
          const updatedService = {
            ...response.data.data[0],
            isVisible: newIsVisible
          };

          // Send the updated service data in the PUT request
          axios.put(`http://localhost:3000/service/${serviceID}`, updatedService)
            .then(response => {
              console.log(response.data);
              // Refresh the page
              window.location.reload();
            })
            .catch(error => {
              console.error('There was an error!', error);
            });
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }
  };

  const handleFeatured = (serviceID) => {
    if (window.confirm('Are you sure you want to change the featured status of the service?')) {
      // Fetch the current data of the service
      axios.get(`http://localhost:3000/service/${serviceID}`)
        .then(response => {
          // Calculate the new value for isFeatured
          const newIsFeatured = response.data.data[0].isFeatured === 1 ? 0 : 1;

          // Update the isFeatured field
          const updatedService = {
            ...response.data.data[0],
            isFeatured: newIsFeatured
          };

          // Send the updated service data in the PUT request
          axios.put(`http://localhost:3000/service/${serviceID}`, updatedService)
            .then(response => {
              console.log(response.data);
              // Refresh the page
              window.location.reload();
            })
            .catch(error => {
              console.error('There was an error!', error);
            });
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }
  };

  return (
    <div>
      <SignedInHeader />
      <Link className={styles["back-button"]} to="/admin/service-management/create">CREATE SERVICE</Link>
      <div className={styles["container"]}>
        <div className={styles["services-container"]}>
          <div className={styles["services-header"]}>
            <h1>SERVICES</h1>
            <div className={styles["search"]}>
              <img src={SearchIcon} alt="Search Icon" />
              <input type="text" placeholder="Search for services" onChange={handleSearchChange} />
            </div>
          </div>
          <table className={styles["services"]}>
            <tbody>
              <tr>
                <th className={styles["no-th"]}>No.</th>
                <th className={styles["services-th"]}>Services</th>
                <th className={styles["manage-th"]}>Manage</th>
                <th className={styles["th-end"]}>
                  <select name="sort" id="sort" onChange={(e) => sortServices(e.target.value)}>
                    <option value="id-asc">Sort By No. (Asc)</option>
                    <option value="id-desc">Sort By No. (Desc)</option>
                    <option value="name-asc">Sort By Name (A-Z)</option>
                    <option value="name-desc">Sort By Name (Z-A)</option>
                  </select>
                </th>
              </tr>
              {currentServices.map((service, index) => (
                <tr key={index}>
                  <td>{service.serviceID}</td>
                  <td>
                    <div className={styles["service-name-icon"]}>
                      {service.serviceName}
                    </div>
                  </td>
                  <td><Link to={`/customer/services/details?serviceID=${service.serviceID}`}>View Service</Link></td>
                  <td className={styles["button-td"]}>
                    <div className={styles["button-container"]}>
                    <button onClick={() => navigate(`/admin/service-management/edit?serviceID=${service.serviceID}`)}><img src={Edit} alt="Edit Icon" />edit</button>
                      <button onClick={() => handleFeatured(service.serviceID)}>
                        <img src={service.isFeatured === 1 ? SolidStar : Star} alt="Star Icon" />
                        Featured
                      </button>
                      <button onClick={() => handleVisibility(service.serviceID)}>
                        <img src={service.isVisible === 1 ? Visible : NotVisible} alt="Visibility Icon" />
                        Visibility
                      </button>
                      <button onClick={() => handleDelete(service.serviceID)}><img src={Delete} alt="Delete Icon" />remove</button>
                      <input type="radio" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles["navigation"]}>
            <h2>Rows per page: 10</h2>
            <div className={styles["forward-back"]}>
              <h2>{indexOfFirstService + 1}-{Math.min(indexOfLastService, services.length)} of {services.length} items</h2>
              <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}><img src={Back} alt="Back Icon" /></button>
              <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(services.length / servicesPerPage)}><img src={Next} alt="Next Icon" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminServiceManagement;
