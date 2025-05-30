import { gql } from "apollo-server-micro";

export const gqlSchema = gql`
  type Weather {
    description: String
    icon: String
  }

  type Main {
    temp: Float
    feels_like: Float
    temp_min: Float
    temp_max: Float
    humidity: Int
  }

  type Wind {
    speed: Float
  }

  type WeatherData {
    dt: Int
    main: Main
    weather: [Weather]
    wind: Wind
  }

  type City {
    name: String
    country: String
    population: Int
  }

  type Forecast {
    city: City
    list: [WeatherData]
  }

  type Query {
    getWeather(city: String!): Forecast
  }
`;
