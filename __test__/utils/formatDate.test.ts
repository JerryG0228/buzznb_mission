import { formatDate, formatOnlyDate, formatOnlyTime } from "../../utils/formatDate";

describe("날짜 포맷팅 유틸리티 테스트", () => {
  const mockTimestamp = 1748595600; // 2025-05-30 09:00:00 UTC

  test("formatDate 함수 테스트", () => {
    const result = formatDate(mockTimestamp);
    expect(result).toBe("May 30. 09:00am");
  });

  test("formatOnlyDate 함수 테스트", () => {
    const result = formatOnlyDate(mockTimestamp);
    expect(result).toBe("May 30");
  });

  test("formatOnlyTime 함수 테스트", () => {
    const result = formatOnlyTime(mockTimestamp);
    expect(result).toBe("09:00am");
  });
});
