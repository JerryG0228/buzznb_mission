import React from "react";
import styles from "../styles/component-css/cityMainSection.module.css";
import { useQuery } from "@apollo/client";
import { GET_FIVE_DAYS_WEATHERS } from "../graphql/query/getWeather";
import dynamic from "next/dynamic";
import BigSkeleton from "./bigSkeleton";

// 동적 import - 코드 스플리팅
const WeatherAccordianBox = dynamic(() => import("./weatherAccordianBox"), {
  loading: () => <BigSkeleton />,
});

type Props = {
  city: string;
};

export default function CityMainSection({ city }: Props) {
  const { loading, error, data } = useQuery(GET_FIVE_DAYS_WEATHERS, {
    variables: { city },
  });

  if (loading) return <BigSkeleton />;
  if (error) return false;
  if (!data) return false; // null 체크

  const weatherDatas = data.getWeather.list;
  // 8개씩 나눔(5일치 날씨 데이터이기 때문에)
  const fiveDayWeathers = Array.from({ length: 5 }, (_, i) =>
    weatherDatas.slice(i * 8, (i + 1) * 8)
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>5-day Forecast</header>

      <main>
        {fiveDayWeathers.map((oneDayWeather, idx) => (
          <WeatherAccordianBox oneDayWeather={oneDayWeather} key={idx} />
        ))}
      </main>
    </div>
  );
}
