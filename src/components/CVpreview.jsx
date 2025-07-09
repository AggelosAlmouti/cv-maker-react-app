import styles from "../styles/CVpreview.module.css";

function CVpreview({ data }) {
  return (
    <div className={styles.preview}>
      <header>
        <h1>{data.fullName}</h1>
        <aside>
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <p>{data.location}</p>
        </aside>
      </header>
    </div>
  );
}

export default CVpreview;
