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

      <section className="work">
        <h3>{data.company}</h3>
        <aside>
          <p>{data.position}</p>
          <p>{data.start}</p>
          <p>{data.end}</p>
          <p>{data.description}</p>
        </aside>
      </section>
    </div>
  );
}

export default CVpreview;
