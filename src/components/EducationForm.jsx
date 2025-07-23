function EducationForm({ data, onChange }) {
  return (
    <form>
      <h2>Education</h2>
      <div className="group">
        <label htmlFor="school">School</label>
        <input
          id="school"
          type="text"
          name="school"
          value={data.school}
          onChange={onChange}
          placeholder="University of Cambridge"
        />
      </div>
      <div className="group">
        <label htmlFor="degree">Degree</label>
        <input
          id="degree"
          type="text"
          name="degree"
          value={data.degree}
          onChange={onChange}
          placeholder="Computer Science, BA (Hons) and MEng"
        />
      </div>
      <div className="group">
        <label htmlFor="degreeStart">Start Date</label>
        <input
          id="degreeStart"
          type="date"
          name="degreeStart"
          value={data.degreeStart}
          onChange={onChange}
        />

        <label htmlFor="degreeEnd">End Date</label>
        <input
          id="degreeEnd"
          type="date"
          name="degreeEnd"
          value={data.degreeEnd}
          onChange={onChange}
        />
      </div>
    </form>
  );
}

export default EducationForm;
