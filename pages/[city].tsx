import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import earth from "../public/earth.png";
import styles from "../styles/page-css/city.module.css";
import dynamic from "next/dynamic";
import SmallSkeleton from "../components/skeleton/smallSkeleton";
import BigSkeleton from "../components/skeleton/bigSkeleton";

type Props = {
  city: string;
};

type Params = {
  params: {
    city: string;
  };
};

// CityMainHeader와 CityMainSection을 동적 import
const CityMainHeader = dynamic(() => import("../components/cityMain/cityMainHeader"), {
  loading: () => <SmallSkeleton />,
});

const CityMainSection = dynamic(() => import("../components/cityMain/cityMainSection"), {
  loading: () => <BigSkeleton />,
});

const City: NextPage<Props> = ({ city }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{city} Weather</title>
      </Head>

      <header className={styles.header}>
        <Image src={earth} alt="earth" width={68} height={51} />
        <h1>Weather Information for {city}</h1>
      </header>

      <main className={styles.main}>
        {/* 오늘 날씨 */}
        <CityMainHeader city={city} />

        {/* 5일간 날씨 */}
        <CityMainSection city={city} />
      </main>
    </div>
  );
};

export default City;

export async function getStaticPaths() {
  const cities: string[] = ["Seoul", "Tokyo", "Paris", "London"];
  const paths: Params[] = cities.map((city: string) => ({ params: { city } }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  return {
    props: {
      city: params?.city as string,
    },
    revalidate: 86400,
  };
};
