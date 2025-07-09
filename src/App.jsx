import { useState } from "react";
import "./styles/App.css";
import CVpreview from "./components/CVpreview";
import PersonalForm from "./components/PersonalForm";
import WorkForm from "./components/WorkForm";
import EducationForm from "./components/EducationForm";
import SkillsForm from "./components/SkillsForm";

function App() {
  return (
    <>
      <div className="Forms">
        <PersonalForm></PersonalForm>
        <WorkForm></WorkForm>
        <EducationForm></EducationForm>
        <SkillsForm></SkillsForm>
      </div>
      <CVpreview></CVpreview>
    </>
  );
}

export default App;
