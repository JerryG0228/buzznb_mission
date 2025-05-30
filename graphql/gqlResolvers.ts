import { WeatherData } from "../types/city";

export const gqlResolvers = {
  Query: {
    getWeather: async (_: any, { city }: { city: string }) => {
      const apiKey = process.env.API_KEY;
      try {
        const weatherData: WeatherData = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&q=${city}&appid=${apiKey}`
        ).then((res) => res.json());

        return weatherData;
      } catch (error) {
        throw new Error("날씨 데이터 로드 실패");
      }
    },
  },
};
