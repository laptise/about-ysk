import { useEffect } from "react";
import { Layout } from "../components/header";

const Dev = () => {
  useEffect(() => {
    document.body.dataset.page = "code";
  }, []);
  return (
    <Layout>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </Layout>
  );
};

export default Dev;
