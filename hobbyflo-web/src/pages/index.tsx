import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Hero } from "../components/indexComponents/hero";
import { Testimonials } from "../components/indexComponents/testimonials";
import { Features } from "../components/indexComponents/features";
import Layout1 from "@/layout/layout1";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kalygo</title>
        <meta content="Made with love by HobbyFlo" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Layout1>
        <Hero />
        <Testimonials />
        {/* <Features /> */}
      </Layout1>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by frens in Miami © 2025
        </a>
      </footer>
    </div>
  );
};

export default Home;
