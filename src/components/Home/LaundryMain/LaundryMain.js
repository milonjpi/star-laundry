import React from "react";
import "./LaundryMain.css";
import washer from "../../../images/washer.png";
import waterTap from "../../../images/water-tap.png";
import machineWash from "../../../images/machine-wash.png";
import Feature from "./Feature";


const featureInfo = [
  {
    id: 1,
    photo: washer,
    title: "Get clean your cloths with",
    tag: "Best Equipments"
  },
  {
    id: 2,
    photo: waterTap,
    title: "We use products which are",
    tag: "Eco Friendly"
  },
  {
    id: 3,
    photo: machineWash,
    title: "Be sure your dress gets",
    tag: "Right Treatments"
  }
]

const LaundryMain = () => {
  return (
    <div className="main-container d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h2>
              The Best Cleaning Service <br /> with{" "}
              <span className="text-info">Star Laundry</span>
            </h2>
            {
              featureInfo.map( ft => <Feature key={ft.id} ft={ft}></Feature>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};


export default LaundryMain;
