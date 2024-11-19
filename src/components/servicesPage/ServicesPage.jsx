import React from "react";
import ServCard from "../servicesCard/Services_Card";
export const ServicesPage = () => {
  return (
    <div>
      <div className="serviceHome" style={{ marginBottom: "100px" }}>
        <p>الخدمات</p>
      </div>
      <ServCard />
    </div>
  );
};
