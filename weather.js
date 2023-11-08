//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
fetch(
  'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9ed3bb1391f2a31bf448805336bcf313'
)
  .then((data) => (data.json())).then((parsedData) =>{
    console.log(parsedData)

    const place = document.getElementById('location');
    const date = document.getElementById('date');
    const currTemp = document.getElementById('temp');
    const weather = document.getElementById('weather');
    const minTemp = document.getElementById('min');
    const maxTemp = document.getElementById('max');
    const day = document.getElementById("day");

    currTemp.innerHTML = Math.ceil(parsedData.main.temp - 273);
    minTemp.innerHTML = Math.ceil(parsedData.main.temp_min - 273);
    maxTemp.innerHTML = Math.ceil(parsedData.main.temp_max - 273);
    weather.innerHTML = parsedData.weather[0].main;
    place.innerHTML = parsedData.name;
    var date1 = parsedData.dt;
    var date2 = new Date(date1 * 1000);
    var mainDate = date2.getDate();
    var month = date2.getMonth();
    var year = date2.getFullYear();
    var days = date2.getDay()
    date.innerHTML =( mainDate + "/" + month + "/" + year)
    var daysNames = ["Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday","Sunday"];
    day.innerHTML = daysNames[days-1];
  });
