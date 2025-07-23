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
    start: "",
    end: "",
    description: "",
  });

  const handleDataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="forms">
        <PersonalForm data={data} onChange={handleDataChange} />
        <WorkForm data={data} onChange={handleDataChange}></WorkForm>
        <EducationForm></EducationForm>
        <SkillsForm></SkillsForm>
      </div>
      <CVpreview data={data} />
    </>
  );
}

export default App;
