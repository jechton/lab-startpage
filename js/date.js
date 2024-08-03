const dateElement = document.getElementById("date");

function showTime() {
  const date = new Date();

  const options = {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "long",
  };

  const formattedDate = date.toLocaleString("en-US", options);
  const [dayOfWeek, dateStr, time] = formattedDate.split(/,|\bat\b/);

  dateElement.innerHTML = `${dayOfWeek}, ${time} | ${dateStr}`;
}

setInterval(showTime, 1000);
showTime();
