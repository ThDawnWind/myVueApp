export function formatDate(date: string | number | Date): string {
  const d = new Date(date)
  return d.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export function formatDateWeather(dateStr: string): string {
  const date = new Date(dateStr.replace(" ", "T"))
  const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short' }
  return date.toLocaleDateString('ru-RU', options)
}

export function toLocalDateFromUTC(date: string) {
  const utcDate = new Date(date.replace(" ", "T") + "Z");

  return utcDate.toLocaleString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

