import { useEffect, useState } from "react";
import { Hero } from "../src/components/Hero";
import Layout from "../src/components/Layout";

const IndexPage = () => {
  const [demoImgUrl, setDemoImgUrl] = useState("");
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setDemoImgUrl(urlParams.get("DEMO_HERO_IMG_URL") || "");
  }, []);

  return (
    <Layout title="Arcade Demo App">
      <Hero demoImgUrl={demoImgUrl} />
    </Layout>
  );
};

export default IndexPage;
