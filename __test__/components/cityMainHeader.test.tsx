import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import { GET_TODAY_WEATHER } from "../../graphql/query/getWeather";
import CityMainHeader from "../../components/cityMain/cityMainHeader";

const mockWeatherData = {
  getWeather: {
    city: {
      name: "Seoul",
      country: "KR",
      population: 10349312,
    },
    list: [
      {
        dt: 1646092800,
        main: {
          temp: 20,
          feels_like: 18,
          humidity: 65,
          temp_min: 15,
          temp_max: 25,
        },
        weather: [
          {
            icon: "01d",
            description: "맑음",
          },
        ],
        wind: {
          speed: 3.5,
        },
      },
    ],
  },
};

const mocks = [
  {
    request: {
      query: GET_TODAY_WEATHER,
      variables: { city: "Seoul" },
    },
    result: { data: mockWeatherData },
    delay: 30, // Apollo Client가 쿼리 작업을 완료할 수 있도록 시간 확보 - 메모리 누수 방지
  },
];

describe("CityMainHeader 컴포넌트 테스트", () => {
  test("로딩 상태 표시", () => {
    render(
      // MockedProvider: Apollo Client 테스트를 위한 컴포넌트
      <MockedProvider mocks={mocks} addTypename={false}>
        <CityMainHeader city="Seoul" />
      </MockedProvider>
    );

    // 스켈레톤 동작 확인 테스트
    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });

  test("날씨 정보 표시", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CityMainHeader city="Seoul" />
      </MockedProvider>
    );

    // 날씨 정보가 로드 후 화면에 잘 뜨는지 테스트
    expect(await screen.findByText("Seoul,KR")).toBeInTheDocument();
    expect(await screen.findByText("20℃")).toBeInTheDocument();
    expect(
      await screen.findByText(/Feels like 18℃ 맑음 풍속 3\.5m\/s 습도 65%/)
    ).toBeInTheDocument();
  });
});
