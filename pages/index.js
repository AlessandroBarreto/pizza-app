import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar"
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Lisbon</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      homepage
    </div>
  );
}
