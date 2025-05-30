import styles from "../../styles/component-css/weatherAccordionBox.module.css";
import { useState } from "react";
import WeatherAccordianArticle from "./weatherAccordionArticle";
import { formatOnlyDate } from "../../utils/formatDate";
import dynamic from "next/dynamic";

// react-icons를 동적 import
const DynamicIoIosArrowDown = dynamic(() =>
  import("react-icons/io").then((mod) => mod.IoIosArrowDown)
);

type Props = {
  oneDayWeather: {
    dt: number;
    main: {
      temp_min: number;
      temp_max: number;
    };
    weather: Array<{
      description: string;
      icon: string;
    }>;
  }[];
};

export default function WeatherAccordianBox({ oneDayWeather }: Props) {
  const [toggle, setToggle] = useState(false);

  const handleBtn = () => {
    setToggle(!toggle);
  };

  const day = formatOnlyDate(oneDayWeather[0].dt);

  return (
    <section>
      <header className={styles.header}>
        <time>{day}</time>
        <button
          className={`${styles.arrowBtn} ${toggle ? styles.rotated : ""}`}
          onClick={handleBtn}
        >
          <DynamicIoIosArrowDown color="#FF0045" size={24} />
        </button>
      </header>

      <div
        className={`${styles.main} ${toggle ? styles.open : ""}`}
        data-testid="accordion-content"
      >
        {oneDayWeather.map((threeHoursWeather) => (
          <WeatherAccordianArticle
            threeHoursWeather={threeHoursWeather}
            key={threeHoursWeather.dt}
          />
        ))}
      </div>
    </section>
  );
}
