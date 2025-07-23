function SkillsForm({ data, onChange }) {
  return (
    <form>
      <h2>Skills and Interests</h2>
      <div className="group">
        <label htmlFor="skill">Full Name</label>
        <input
          id="skill"
          type="text"
          name="skill"
          value={data.skill}
          onChange={onChange}
          placeholder="C2 Proficiency | Cambridge English"
        />
      </div>
    </form>
  );
}

export default SkillsForm;
