import Head from "next/head";
import styles from "../styles/Home.module.css";
import Auth from "../components/auth";
import News from "../components/news";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News App</title>
      </Head>

      <header className={styles.header}>
        <h1>🗞 News App</h1>
        <Auth className={styles.auth} />
      </header>

      <main className={styles.main}>
        <News />
      </main>
    </div>
  );
}
