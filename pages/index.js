import Head from 'next/head'
import Navbar from '../components/Nav'
import Card from '../components/Card'
import styles from '../styles/App.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>
        <div className={styles.Cards}>
          <Card title="Titre" image="https://m.media-amazon.com/images/I/31sIPsH0CRL._AC_SX425_.jpg" prix="12€"/>
          <Card title="Titre" image="https://m.media-amazon.com/images/I/31sIPsH0CRL._AC_SX425_.jpg" prix="12€"/>
          <Card title="Titre" image="https://m.media-amazon.com/images/I/31sIPsH0CRL._AC_SX425_.jpg" prix="12€"/>
          <Card title="Titre" image="https://m.media-amazon.com/images/I/31sIPsH0CRL._AC_SX425_.jpg" prix="12€"/>
          <Card title="Titre" image="https://m.media-amazon.com/images/I/31sIPsH0CRL._AC_SX425_.jpg" prix="12€"/>
          <Card title="Titre" image="https://m.media-amazon.com/images/I/31sIPsH0CRL._AC_SX425_.jpg" prix="12€"/>
        </div>
      </main>
    </div>
  )
}