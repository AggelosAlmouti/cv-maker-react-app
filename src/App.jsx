import { useState } from "react";
import "./styles/App.css";
import CVpreview from "./components/CVpreview";
import PersonalForm from "./components/PersonalForm";
import WorkForm from "./components/WorkForm";
import EducationForm from "./components/EducationForm";
import SkillsForm from "./components/SkillsForm";

function App() {
  const [data, setData] = useState({
    // personal
    fullName: "",
    email: "",
    phone: "",
    location: "",
    // work
    company: "",
    position: "",
    workStart: "",
    workEnd: "",
    description: "",
    // Education
    school: "",
    degree: "",
    degreeStart: "",
    degreeEnd: "",
    // Skills
    skill: "",
  });

  const handleDataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="forms">
        <PersonalForm data={data} onChange={handleDataChange} />
        <WorkForm data={data} onChange={handleDataChange}></WorkForm>
        <EducationForm data={data} onChange={handleDataChange}></EducationForm>
        <SkillsForm data={data} onChange={handleDataChange}></SkillsForm>
      </div>
      <CVpreview data={data} />
    </>
  );
}

export default App;
