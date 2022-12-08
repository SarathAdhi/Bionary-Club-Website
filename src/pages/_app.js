import "../styles/globals.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import configFile from "../../particle.config.json";
import { useCallback } from "react";

function MyApp({ Component, pageProps }) {
  const particlesInit = useCallback(
    async (engine) => await loadFull(engine),
    []
  );

  return (
    <>
      <Particles id="tsparticles" init={particlesInit} options={configFile} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
