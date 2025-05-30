// 요일, 시간 형태로 변환
const formatDate = (dt: number): string => {
  const date = new Date(dt * 1000);
  const datePart = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);

  const timePart = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC",
  }).format(date);

  const hour = parseInt(timePart.split(":")[0]);
  const period = hour < 12 ? "am" : "pm";

  return `${datePart}. ${timePart}${period}`;
};

// formatDate에서 요일만
const formatOnlyDate = (dt: number): string => {
  const date = new Date(dt * 1000);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
};

// formatDate에서 시간만
const formatOnlyTime = (dt: number): string => {
  const date = new Date(dt * 1000);
  const timePart = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC",
  }).format(date);

  const hour = parseInt(timePart.split(":")[0]);
  const period = hour < 12 ? "am" : "pm";

  return `${timePart}${period}`;
};

export { formatDate, formatOnlyDate, formatOnlyTime };
