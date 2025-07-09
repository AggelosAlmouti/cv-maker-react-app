import classes from "../styles/CVpreview.module.css";

function CVpreview({ data }) {
  return (
    <div className="preview">
      <h2>Preview</h2>
      <p>Name: {data.fullName}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Location: {data.location}</p>
    </div>
  );
}

export default CVpreview;
