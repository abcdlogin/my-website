import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Home Page
        </h1>

        <h2>
        This is my home page to my site.
        </h2>

        <div className={styles.grid}>
          <a href="file:///C:/Users/brend/OneDrive/Documents/GitHub/next-js/pages/About.html" className={styles.card}>
            <h3>About</h3>
            <p>This is a test.</p>
          </a>

          <a href="file:///C:/Users/brend/OneDrive/Documents/GitHub/next-js/pages/Hobbies.html" className={styles.card}>
            <h3>Hobbies</h3>
            <p>My Hobbies!</p>
          </a>

          <a href="file:///C:/Users/brend/OneDrive/Documents/GitHub/next-js/pages/Foods.html" className={styles.card}>
            <h3>Foods</h3>
            <p>Foods I Like!</p>
          </a>

          <a href="file:///C:/Users/brend/OneDrive/Documents/GitHub/next-js/pages/Skills.html" className={styles.card}>
            <h3>Skills</h3>
            <p>
              What I am good at!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
