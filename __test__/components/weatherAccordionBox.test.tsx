import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import WeatherAccordianBox from "../../components/weatherAccordion/weatherAccordionBox";

const mockOneDayWeather = [
  {
    dt: 1646092800,
    main: {
      temp_min: 15,
      temp_max: 25,
    },
    weather: [
      {
        description: "맑음",
        icon: "01d",
      },
    ],
  },
];

describe("WeatherAccordionBox 컴포넌트 테스트", () => {
  test("아코디언 토글 기능", async () => {
    render(<WeatherAccordianBox oneDayWeather={mockOneDayWeather} />);

    // 토글 버튼과 내용을 선택
    const toggleButton = screen.getByRole("button");
    const content = screen.getByTestId("accordion-content");

    // 초기 상태는 닫혀있어야 함
    expect(content).not.toHaveClass("open");

    // 토글 버튼 클릭
    await act(async () => {
      fireEvent.click(toggleButton);
    });

    // 열린 상태 확인
    expect(content).toHaveClass("open");

    // 다시 클릭
    await act(async () => {
      fireEvent.click(toggleButton);
    });

    // 닫힌 상태 확인
    expect(content).not.toHaveClass("open");
  });

  test("날씨 정보 표시", () => {
    render(<WeatherAccordianBox oneDayWeather={mockOneDayWeather} />);

    expect(screen.getByText("Mar 1")).toBeInTheDocument();
    expect(screen.getByText("15 / 25℃")).toBeInTheDocument();
    expect(screen.getByText("맑음")).toBeInTheDocument();
  });
});
