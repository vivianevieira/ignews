import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
    <Head>
      <title>Posts | Ignews</title>
    </Head>

    <main className={styles.container}>
      <div className={styles.posts}>
        <a href="#">
          <time>April 7, 2021</time>
          <strong>Advice From a Hiring Manager to a Code Bootcamp Graduate</strong>
          <p>As a director of engineering responsible for a lot of hiring and recruiting, I often talk with folks who have recently graduated from a 3–6 month code bootcamp.</p>
        </a>
        <a href="#">
          <time>April 7, 2021</time>
          <strong>Advice From a Hiring Manager to a Code Bootcamp Graduate</strong>
          <p>As a director of engineering responsible for a lot of hiring and recruiting, I often talk with folks who have recently graduated from a 3–6 month code bootcamp.</p>
        </a>
        <a href="#">
          <time>April 7, 2021</time>
          <strong>Advice From a Hiring Manager to a Code Bootcamp Graduate</strong>
          <p>As a director of engineering responsible for a lot of hiring and recruiting, I often talk with folks who have recently graduated from a 3–6 month code bootcamp.</p>
        </a>
      </div>
    </main>
    </>
  );
}
