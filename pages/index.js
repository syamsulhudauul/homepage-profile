import Head from "next/head";
import Router from "next/router";
import { GA_TRACKING_ID } from '../lib/gtag';
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../components/Icons";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <section className={styles.site}>
      <section className={styles.container}>
        <Head>
          <title>Freddy Jimenez</title>
          <link rel="icon" href="/favicon.ico" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.name}>Hi! my name is Syamsul Huda</h1>
          <p>
            I'm a{" "}
            <strong className={`${styles.highlight} ${styles.job}`}>
              Software Engineer{" "}
            </strong>
            passionate about backend technologies.
          </p>
          <p>
            Currently connect people with inspire creativity and enrich life through
            <a
              className={`${styles.highlight} ${styles.work}`}
              target="_blank"
              href="https://www.bytedance.com/en/"
            >
              Bytedance
            </a>
          </p>
          <article className={styles.hobbies}>
            <p>I like </p>
            <ul className={styles.dynamicText}>
              <li className={styles.travel}>
                <span>gaming</span>
              </li>
              <li className={styles.running}>
                <span>running</span>
              </li>
              <li className={styles.create}>
                <span>creating cool stuff</span>
              </li>
              <li className={styles.beach}>
                <span>dating with my wife</span>
              </li>
              <li className={styles.drums}>
                <span>chat with people</span>
              </li>
              <li className={styles.videogames}>
                <span>playing football games</span>
              </li>
            </ul>
          </article>
        </main>
        <footer className={styles.footer}>
          <a
            className={styles.social}
            target="_blank"
            href="https://github.com/syamsulhudauul"
          >
            <GithubIcon />
          </a>
          <a
            className={styles.social}
            target="_blank"
            href="https://twitter.com/syamsulhudauul"
          >
            <TwitterIcon />
          </a>
          <a
            className={styles.social}
            target="_blank"
            href="https://www.linkedin.com/in/syamsulhudauul/"
          >
            <LinkedinIcon />
          </a>
          <a
            className={styles.social}
            target="_blank"
            href="https://www.instagram.com/syamsulhudauul/"
          >
            <InstagramIcon />
          </a>
        </footer>
      </section>
    </section>
  );
};

export default Home;
