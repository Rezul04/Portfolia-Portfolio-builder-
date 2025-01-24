import React, { useState } from "react";
import PortfolioPreview from "./PortfolioPreview";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    education: "",
    skills: "",
    projects: "",
  });
  const [theme, setTheme] = useState("light");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div
      className={`min-h-screen p-5 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : theme === "colorful"
          ? "bg-gradient-to-r from-blue-400 to-purple-500 text-black"
          : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-3xl font-bold text-center mb-5">Portfolio Builder</h1>
      <div className="flex justify-center gap-5 mb-5">
        <button
          onClick={() => changeTheme("light")}
          className="p-2 bg-gray-300 rounded-md"
        >
          Light Theme
        </button>
        
        <button
          onClick={() => changeTheme("colorful")}
          className="p-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-md"
        >
          Colorful Theme
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Form Section */}
        <div
          className={`p-5 shadow-md rounded-md w-full lg:w-1/2 ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className={`border p-2 rounded-md ${
                theme === "dark"
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
            />
            <input
              type="text"
              name="title"
              placeholder="Your Title (e.g., Software Engineer)"
              value={formData.title}
              onChange={handleInputChange}
              className={`border p-2 rounded-md ${
                theme === "dark"
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
            />
            <textarea
              name="education"
              placeholder="Education (e.g., B.Tech in IT, DTU)"
              value={formData.education}
              onChange={handleInputChange}
              className={`border p-2 rounded-md ${
                theme === "dark"
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
            />
            <textarea
              name="skills"
              placeholder="Skills (e.g., React, Python, etc.)"
              value={formData.skills}
              onChange={handleInputChange}
              className={`border p-2 rounded-md ${
                theme === "dark"
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
            />
            <textarea
              name="projects"
              placeholder="Projects (e.g., Weather App - React.js, etc.)"
              value={formData.projects}
              onChange={handleInputChange}
              className={`border p-2 rounded-md ${
                theme === "dark"
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
            />
          </form>
        </div>

        {/* Portfolio Preview Section */}
        <PortfolioPreview formData={formData} theme={theme} />
      </div>
    </div>
  );
};

export default App;
