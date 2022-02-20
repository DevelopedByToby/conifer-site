import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Conifer</title>
        <meta name="description" content="Conifer is the easiest way to program your own personal website." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/conifer.png" />
      </Head>

       <h1 className={styles.title}>
          Conifer
        </h1>
        <p className={styles.subtitle}>
          Conifer is the most efficient way to code your own personal website.
        </p>

    <div className={styles.getStarted}>
      <a href="https://conifer-docs.notion.site/60bf9d62f5924a32a0a67ca7f25b124a?v=2fd3563198484fb1a94f218a8ffec31b">
        <button>
          Get started →
        </button>
      </a>
    </div>

    <p className={styles.credit}>Conifer is a project created by <a href="http://tobyb.xyz">Toby</a> to help people create their first ever personal website. 🌲</p>

    </div>
  )
}
