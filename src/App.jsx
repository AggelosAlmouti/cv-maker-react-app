import { useState } from "react";
import "./styles/App.css";
import CVpreview from "./components/CVpreview";
import PersonalForm from "./components/PersonalForm";
import WorkForm from "./components/WorkForm";
import EducationForm from "./components/EducationForm";
import SkillsForm from "./components/SkillsForm";

function App() {
  const [personal, setPersonal] = useState({
    fullName: "John Doe",
    email: "john.doe@email.com",
    phone: "+31 612******",
    location: "Amsterdam, NL",
  });

  const handlePersonalChange = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="forms">
        <PersonalForm data={personal} onChange={handlePersonalChange} />
        <WorkForm></WorkForm>
        <EducationForm></EducationForm>
        <SkillsForm></SkillsForm>
      </div>
      <CVpreview data={personal} />
    </>
  );
}

export default App;
