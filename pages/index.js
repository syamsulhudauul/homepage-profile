import Head from "next/head";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../components/Icons";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section className={styles.site}>
      <section className={styles.container}>
        <Head>
          <title>Freddy Jimenez</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.name}>Hi! my name is Freddy</h1>
          <p>
            I'm a{" "}
            <strong className={`${styles.highlight} ${styles.job}`}>
              Software Engineer{" "}
            </strong>
            passionate about frontend technologies.
          </p>
          <p>
            Currently helping to connect people through more meaningful
            conversations at
            <a
              className={`${styles.highlight} ${styles.work}`}
              target="_blank"
              href="https://www.typeform.com/"
            >
              Typeform
            </a>
          </p>
          <article className={styles.hobbies}>
            <p>I like </p>
            <ul className={styles.dynamicText}>
              <li className={styles.travel}>
                <span>travel</span>
              </li>
              <li className={styles.running}>
                <span>running</span>
              </li>
              <li className={styles.create}>
                <span>create cool stuff</span>
              </li>
              <li className={styles.drums}>
                <span>play the drums</span>
              </li>
              <li className={styles.beach}>
                <span>the beach</span>
              </li>
              <li className={styles.videogames}>
                <span>videogames</span>
              </li>
            </ul>
          </article>
        </main>
        <footer className={styles.footer}>
          <a
            className={styles.social}
            target="_blank"
            href="https://github.com/alfrejivi"
          >
            <GithubIcon />
          </a>
          <a
            className={styles.social}
            target="_blank"
            href="https://twitter.com/alfrejivi"
          >
            <TwitterIcon />
          </a>
          <a
            className={styles.social}
            target="_blank"
            href="https://www.linkedin.com/in/alfrejivi/"
          >
            <LinkedinIcon />
          </a>
          <a
            className={styles.social}
            target="_blank"
            href="https://www.instagram.com/alfrejivi/"
          >
            <InstagramIcon />
          </a>
        </footer>
      </section>
    </section>
  );
}
