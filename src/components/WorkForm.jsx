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
          value={data.start}
          onChange={onChange}
        />

        <label htmlFor="end">End Date</label>
        <input
          id="end"
          type="date"
          name="end"
          value={data.end}
          onChange={onChange}
        />
      </div>
      <div className="group">
        <label htmlFor="locadescriptiontion">Description</label>
        <textarea
          id="description"
          name="description"
          value={data.description}
          onChange={onChange}
          rows="3"
          cols="50"
          placeholder="Developed security features for the chrome browser"
        ></textarea>
      </div>
    </form>
  );
}

export default WorkForm;
