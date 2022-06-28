import { useEffect } from "react";
import { Layout } from "../components/header";
import styles from "../styles/Dev.module.scss";

const Dev = () => {
  useEffect(() => {
    document.body.dataset.page = "code";
  }, []);
  return (
    <Layout>
      <h1>Welcome Dev !</h1>
      <div id={styles.hello}>
        <div className={styles.header}>
          Code.
          <div className={styles.buttons}>
            <button style={{ backgroundColor: "#cb3e3e" }} />
            <button style={{ backgroundColor: "#2a8a17" }} />
          </div>
        </div>
        <div className={styles.body}>oh?</div>
      </div>
    </Layout>
  );
};

export default Dev;
