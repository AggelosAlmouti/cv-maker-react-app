function PersonalForm({ data, onChange }) {
  return (
    <form>
      <h2>Personal Details</h2>
      <input
        type="text"
        name="fullName"
        value={data.fullName}
        onChange={onChange}
        placeholder="John Doe"
      />
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={onChange}
        placeholder="john.doe@email.com"
      />
      <input
        type="tel"
        name="phone"
        value={data.phone}
        onChange={onChange}
        placeholder="+31 612******"
      />
      <input
        type="text"
        name="location"
        value={data.location}
        onChange={onChange}
        placeholder="Amsterdam, NL"
      />
    </form>
  );
}

export default PersonalForm;
