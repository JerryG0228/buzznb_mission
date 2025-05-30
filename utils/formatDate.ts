// UTC시간을 요일, 시간 형태로 변환
const formatDate = (dt: number): string => {
  const date = new Date(dt * 1000);
  const datePart = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
  const timePart = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    hourCycle: "h12",
  })
    .format(date)
    .toLowerCase()
    .replace(/\s/g, "");

  return `${datePart}. ${timePart}`;
};

// formatDate에서 요일만
const formatOnlyDate = (dt: number): string => {
  const date = new Date(dt * 1000);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
};

// formatDate에서 시간만
const formatOnlyTime = (dt: number): string => {
  const date = new Date(dt * 1000);
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    hourCycle: "h12",
  })
    .format(date)
    .toLowerCase()
    .replace(/\s/g, "");
};

export { formatDate, formatOnlyDate, formatOnlyTime };
