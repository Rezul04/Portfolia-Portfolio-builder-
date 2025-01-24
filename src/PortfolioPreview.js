import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PortfolioPDF from "./PortfolioPDF.js";

const PortfolioPreview = ({ formData }) => {
  const { name, title, education, skills, projects } = formData;

  return (
    <div className="bg-white p-5 shadow-md rounded-md w-full lg:w-1/2">
      <h2 className="text-xl font-semibold mb-4">Live Portfolio Preview</h2>
      <div>
        <h1 className="text-2xl font-bold">{name || "Your Name"}</h1>
        <h2 className="text-lg text-gray-600">{title || "Your Title"}</h2>
        <hr className="my-3" />
        <h3 className="font-semibold">Education</h3>
        <p>{education || "Your education details will appear here."}</p>
        <h3 className="font-semibold mt-4">Skills</h3>
        <p>{skills || "List your skills here."}</p>
        <h3 className="font-semibold mt-4">Projects</h3>
        <p>{projects || "Your projects will be displayed here."}</p>
      </div>
      <div className="mt-5">
        <PDFDownloadLink
          document={<PortfolioPDF formData={formData} />}
          fileName={`${name}-portfolio.pdf`}
        >
          {({ loading }) =>
            loading ? (
              <button className="bg-gray-500 text-white p-2 rounded-md">
                Preparing PDF...
              </button>
            ) : (
              <button className="bg-blue-500 text-white p-2 rounded-md">
                Download PDF
              </button>
            )
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default PortfolioPreview;
