import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Results } from "./Results";
import Details from "./Details";

const Routers = () => {
  return (
    <>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Navigate from="/" to="/search" />} />

          <Route path="/search" element={<Results />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </>
  );
};

export default Routers;
