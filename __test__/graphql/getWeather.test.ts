import { GET_FIVE_DAYS_WEATHERS, GET_TODAY_WEATHER } from "../../graphql/query/getWeather";

describe("GraphQL 쿼리 테스트", () => {
  test("GET_TODAY_WEATHER 쿼리 구조", () => {
    // GET_TODAY_WEATHER 쿼리가 정의되어 있는지 확인
    expect(GET_TODAY_WEATHER).toBeDefined();
    expect(GET_TODAY_WEATHER.loc?.source.body).toContain("query GetWeather");
    expect(GET_TODAY_WEATHER.loc?.source.body).toContain("city");
    expect(GET_TODAY_WEATHER.loc?.source.body).toContain("list");
  });

  test("GET_FIVE_DAYS_WEATHERS 쿼리 구조", () => {
    // GET_FIVE_DAYS_WEATHERS 쿼리가 정의되어 있는지 확인
    expect(GET_FIVE_DAYS_WEATHERS).toBeDefined();
    expect(GET_FIVE_DAYS_WEATHERS.loc?.source.body).toContain("query GetWeather");
    expect(GET_FIVE_DAYS_WEATHERS.loc?.source.body).toContain("list");
  });
});
