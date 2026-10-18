

function DisplayDate() {
  const date = new Date();

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = dayNames[date.getDay()];
  let month = monthNames[date.getMonth()];
  let monthDay = date.getDate();
  let year = date.getFullYear();

  return (
    <div>
      <span className="text-3xl xl:text-5xl font-bold xl:mt-10">{day}, {month} {monthDay}, {year}</span>
    </div>
  )
}

export default DisplayDate