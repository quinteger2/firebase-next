import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NoteOperations from './components/NoteOperations';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Evernote Clone</title>
        <meta name="description" content="This is an Evernote Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <NoteOperations />
      </main>
    </div>
  )
}