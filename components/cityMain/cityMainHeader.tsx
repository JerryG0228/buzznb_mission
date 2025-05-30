import { formatDate } from "../../utils/formatDate";
import styles from "../../styles/component-css/cityMainHeader.module.css";
import { useQuery } from "@apollo/client";
import { GET_TODAY_WEATHER } from "../../graphql/query/getWeather";
import { TodayWeatherQuery } from "../../types/city";
import SmallSkeleton from "../skeleton/smallSkeleton";

type Props = {
  city: string;
};

export default function CityMainHeader({ city }: Props) {
  const { loading, error, data } = useQuery<TodayWeatherQuery>(GET_TODAY_WEATHER, {
    variables: { city },
  });

  if (loading) return <SmallSkeleton />;
  if (error) return false;
  if (!data) return false; // null 체크

  const {
    weather: [{ icon, description }],
    dt: utcTime,
    main: { temp, feels_like, humidity },
    wind: { speed },
  } = data.getWeather.list[0]; // 오늘 날씨 정보

  const { name, country, population } = data.getWeather.city; // 도시 정보

  return (
    <div>
      <header className={styles.mainHeader}>
        {/* 오늘 날씨 - 왼쪽 파트 */}
        <div className={styles.todayLeftArticle}>
          <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} width={120} height={120} />

          <div className={styles.locBox}>
            <time className={styles.date}>{formatDate(utcTime)}</time>
            <div className={styles.cityInfo}>
              <div className={styles.cityName}>
                {name},{country}
              </div>
              <div className={styles.population}>(인구수 : {population})</div>
            </div>
          </div>
        </div>

        {/* 오늘 날씨 - 오른쪽 파트 */}
        <div className={styles.todayRightArticle}>
          <div className={styles.temperature}>{temp}℃</div>
          <p className={styles.weatherInfo}>
            Feels like {feels_like}℃ {description} 풍속 {speed}m/s 습도 {humidity}%
          </p>
        </div>
      </header>
    </div>
  );
}
