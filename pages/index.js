import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Avast - Sergey Kolesnikov</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Антивірусна система <a href="https://www.avast.ua">Avast.</a>
        </h1>

        <div className={styles.grid}>
          <a href="/services" className={styles.card}>
            <h3>Послуги &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/benefits" className={styles.card}>
            <h3>Переваги &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="/possibilities"
            className={styles.card}
          >
            <h3>Можливості &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
