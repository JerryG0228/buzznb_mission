import Image from "next/image";
import styles from "../../styles/component-css/weatherAccordionArticle.module.css";
import { formatOnlyTime } from "../../utils/formatDate";

type Props = {
  threeHoursWeather: {
    dt: number;
    main: {
      temp_min: number;
      temp_max: number;
    };
    weather: Array<{
      description: string;
      icon: string;
    }>;
  };
};

export default function WeatherAccordianArticle({ threeHoursWeather }: Props) {
  const {
    weather: [{ icon, description }],
    dt,
    main: { temp_min, temp_max },
  } = threeHoursWeather;

  const time = formatOnlyTime(dt);

  return (
    <article className={styles.article}>
      <div className={styles.left}>
        <Image src={`https://openweathermap.org/img/wn/${icon}@2x.png`} width={100} height={100} />
        <time>{time}</time>
      </div>
      <div className={styles.right}>
        <div className={styles.description}>{description}</div>
        <div className={styles.temperature}>
          {temp_min} / {temp_max}℃
        </div>
      </div>
    </article>
  );
}
