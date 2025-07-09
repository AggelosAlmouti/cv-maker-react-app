function PersonalForm({ data, onChange }) {
  return (
    <form>
      <h2>Personal Details</h2>
      <div className="group">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          value={data.fullName}
          onChange={onChange}
          placeholder="John Doe"
        />
      </div>
      <div className="group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={data.email}
          onChange={onChange}
          placeholder="john.doe@email.com"
        />
      </div>
      <div className="group">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={data.phone}
          onChange={onChange}
          placeholder="+31 612******"
        />
      </div>
      <div className="group">
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          name="location"
          value={data.location}
          onChange={onChange}
          placeholder="Amsterdam, NL"
        />
      </div>
    </form>
  );
}

export default PersonalForm;
