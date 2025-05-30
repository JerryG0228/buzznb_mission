import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import earth from "../public/earth.png";
import styles from "../styles/page-css/home.module.css";
import Link from "next/link";

const cities = ["Seoul", "Tokyo", "Paris", "London"];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weather Site</title>
        <meta name="description" content="Weather Informations App" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.normalHeader}>Welcome to</h1>
        <h1 className={styles.hightlightHeader}>Weather App!</h1>
      </header>

      <main>
        <p className={styles.content}>Choose a city from the list below to check the weather.</p>

        <nav aria-label="City List">
          <ul className={styles.BtnContainer}>
            {cities.map((city) => (
              <Link href={`/${city}`} key={city}>
                <li className={styles.cityBtn}>
                  {city}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </main>

      <Image src={earth} width={430} height={321} alt="earth" />
    </div>
  );
};

export default Home;
