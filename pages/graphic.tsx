import { useEffect } from "react";
import { Layout } from "../components/header";

const Music = () => {
  useEffect(() => {
    document.body.dataset.page = "art";
  }, []);
  return (
    <Layout>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </Layout>
  );
};

export default Music;
