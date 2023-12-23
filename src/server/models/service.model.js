"use strict";
const dbConn = require("../config/db.config.js");

function Service(service) {
  this.serviceID = service.serviceID;
  this.serviceName = service.serviceName;
  this.basePrice = service.basePrice;
  this.policies = service.policies;
  this.cover = service.cover;
  this.banner = service.banner;
  this.shortDesc = service.shortDesc;
  this.specifics = service.specifics;
  this.overview = service.overview;
  this.isFeatured = service.isFeatured;
  this.isVisible = service.isVisible;
  this.isDeleted = service.isDeleted;
  this.serviceCat = service.serviceCat;
  this.serviceType = service.serviceType;
}

Service.create = (newService, result) => {
  dbConn.query("INSERT INTO service set ?", newService, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertID);
      result(null, res.insertID);
    }
  });
};

Service.findById = (serviceID, result) => {
  dbConn.query(
    "SELECT * FROM service where serviceID = ?",
    serviceID,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Service.findAll = (result) => {
  dbConn.query("SELECT * FROM service", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Services: ", res);
      result(null, res);
    }
  });
};

Service.update = (id, service, result) => {
  dbConn.query(
    "UPDATE service SET serviceName = ?, basePrice = ?, policies = ?, cover = ?, banner = ?, shortDesc = ?, specifics = ?, overview = ?, isFeatured = ?, isVisible = ?, isDeleted = ?, serviceCat = ?, serviceType = ? WHERE serviceID = ?",
    [
      service.serviceName,
      service.basePrice,
      service.policies,
      service.cover,
      service.banner,
      service.shortDesc,
      service.specifics,
      service.overview,
      service.isFeatured,
      service.isVisible,
      service.isDeleted,
      service.serviceCat,
      service.serviceType,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("Updated service: ", res);
        result(null, res);
      }
    }
  );
};

Service.delete = (id, result) => {
  dbConn.query("DELETE FROM service WHERE serviceID = ?", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Deleted service: ", res);
      result(null, res);
    }
  });
};

Service.findByCategory = (category, result) => {
  dbConn.query(
    "SELECT * FROM service WHERE serviceCat = ?",
    category,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("Services: ", res);
        result(null, res);
      }
    }
  );
};

Service.findByFeatured = (result) => {
  dbConn.query("SELECT * FROM service WHERE isFeatured = 1", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Services: ", res);
      result(null, res);
    }
  });
};

Service.search = (query, result) => {
  console.log("Query sent to database:", '%' + query + '%'); // Add this line
  dbConn.query("SELECT * FROM service WHERE serviceName LIKE ?", ['%' + query + '%'], (err, res) => {
    if (err) {
      console.error("Error in Service.search:", err);
      result(err, null);
    } else {
      console.log("Services in Service.search:", res);
      result(null, res);
    }
  });
};

module.exports = Service;
