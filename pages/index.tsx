import { useEffect, useState } from "react";
import { Hero } from "../src/components/Hero";
import Layout from "../src/components/Layout";

const IndexPage = () => {
  const [demoImgUrl, setDemoImgUrl] = useState("");
  const [demoVideoUrl, setDemoVideoUrl] = useState("");
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setDemoImgUrl(urlParams.get("DEMO_HERO_IMG_URL") || "");
    setDemoVideoUrl(urlParams.get("DEMO_HERO_VIDEO_URL") || "");
  }, []);

  return (
    <Layout title="Arcade Demo App">
      <Hero demoImgUrl={demoImgUrl} demoVideoUrl={demoVideoUrl} />
    </Layout>
  );
};

export default IndexPage;
