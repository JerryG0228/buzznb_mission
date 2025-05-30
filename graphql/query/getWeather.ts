import { gql } from "@apollo/client";

const GET_TODAY_WEATHER = gql`
  query GetWeather($city: String!) {
    getWeather(city: $city) {
      city {
        name
        country
        population
      }
      list {
        dt
        main {
          temp
          feels_like
          temp_min
          temp_max
          humidity
        }
        weather {
          description
          icon
        }
        wind {
          speed
        }
      }
    }
  }
`;

const GET_FIVE_DAYS_WEATHERS = gql`
  query GetWeather($city: String!) {
    getWeather(city: $city) {
      list {
        dt
        main {
          temp_min
          temp_max
        }
        weather {
          description
          icon
        }
      }
    }
  }
`;

export { GET_TODAY_WEATHER, GET_FIVE_DAYS_WEATHERS };
