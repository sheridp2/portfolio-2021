import React from "react";
import pdf from "../assets/images/Patrick-Sheridan-resume-2025.pdf";

export default function Resume() {
  return (
    <div>
      <object
        data={pdf}
        type="application/pdf"
        frameBorder="0"
        width="100%"
        height="1200px"
      >
        <embed src={pdf} width="100%" height="600px" />
      </object>
    </div>
  );
}
