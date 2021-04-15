import React from "react";

const ServiceDetail = ({ service }) => {
  return (
    <div className="col-md-4 text-center">
      <img style={{ height: "50px" }} src={service.img} alt=""></img>
      <h5 className="mt-5 mb-3">{service.name}</h5>
      <p className="text-secondary">
        this a demo paragraph from react. Dont do it on your real project. Use
        it only testing purpose. Good luck
      </p>
    </div>
  );
};

export default ServiceDetail;
