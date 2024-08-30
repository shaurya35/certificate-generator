import React from "react";
import cer1 from "../assets/1.png";
import cer2 from "../assets/2.png";
import "../App.css";
import { usePDF } from "react-to-pdf";

const Certificate = () => {
  const { toPDF, targetRef } = usePDF({ filename: "prescription.pdf" });
  return (
    <div>
      <button onClick={() => toPDF()}>Download</button>
      <br />
      <div className="container" ref={targetRef}>
        <img src={cer1} alt="certificate 1" width={800} className="pres"/>

        <div className="content">
          <div className="doctorName font abs">Dr. Anil Singh</div>
          <div className="doctorSpecialization font abs">M.D (Medicine)</div>
        </div>

        <div className="content">
          <div className="patientName font abs">Shaurya Jha</div>
          <div className="patientDob font abs">11.06.2003</div>
          <div className="patientPhone font abs">9115331677</div>
          <div className="patientGender font abs">Male</div>
          <div className="patientEmail font abs">shauryajha35@gmail.com</div>
          <div className="patientAddress font abs">
            East of Kailash, New Delhi
          </div>
        </div>
      </div>
      <img src={cer2} alt="certificate 2" width={800} />
    </div>
  );
};

export default Certificate;
