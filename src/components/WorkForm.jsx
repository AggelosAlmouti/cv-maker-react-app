function WorkForm({ data, onChange }) {
  return (
    <form>
      <h2>Work Experience</h2>
      <div className="group">
        <label htmlFor="company">Company Name</label>
        <input
          id="company"
          type="text"
          name="company"
          value={data.company}
          onChange={onChange}
          placeholder="Google LLC"
        />
      </div>
      <div className="group">
        <label htmlFor="position">Position Title</label>
        <input
          id="position"
          type="text"
          name="position"
          value={data.position}
          onChange={onChange}
          placeholder="Senior Developer"
        />
      </div>
      <div className="group">
        <label htmlFor="start">Start Date</label>
        <input
          id="start"
          type="date"
          name="start"
          value={data.workStart}
          onChange={onChange}
        />

        <label htmlFor="end">End Date</label>
        <input
          id="end"
          type="date"
          name="end"
          value={data.workEnd}
          onChange={onChange}
        />
      </div>
      <div className="group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={data.description}
          onChange={onChange}
          rows="3"
          placeholder="Developed security features for the chrome browser"
        ></textarea>
      </div>
    </form>
  );
}

export default WorkForm;
