let url = 'https://api.tomorrow.io/v4/weather/forecast?location='




let temperature = document.getElementById("h1");
let humidity = document.getElementById("h2");
let windSpeed = document.getElementById("windSpd");
let weather_img = document.getElementById("weather_img");
let loc = document.getElementById("location");
const searchBox = document.getElementById("cityName");
const searchBtn = document.getElementById("cityBtn");
searchBox.value = 'Omsk';

//let options = {
    //method: 'GET',
    //headers: {
      //'Content-Type': 'application/json;charset=utf-8'
    //},
   // body: JSON.stringify(data)
 //}

let string = '';







async function WeatherDispaly (city) {
  const response = await fetch(url + city + '.0466&apikey=sKwhANlI4Hb6Mw8EnDGf3pZNNFbiqmrs');
  let data = await response.json();
  console.log(data);
  let loc_edited = data.location.name.split(',')[0];
  
  temperature.innerHTML = Math.floor(data.timelines.hourly[6].values.temperature) + '°C';
  humidity.innerHTML =  'Humidity : ' + Math.floor(data.timelines.hourly[6].values.humidity) + '%';
  windSpeed.innerHTML = 'Wind speed : ' + Math.round(data.timelines.hourly[6].values.windSpeed) + 'M/s';
  loc.innerHTML = loc_edited;


  //weather icons
  let Conditions = data.timelines.daily[0].values.uvIndexMax;

  if (Conditions = 1000) {
    weather_img.src = 'https://files.readme.io/48b265b-weather_icon_small_ic_clear3x.png'
  }
  else if (Conditions = 1001) {
    weather_img.src = 'https://files.readme.io/4042728-weather_icon_small_ic_cloudy3x.png'
  }
  else if (Conditions = 1100) {
    weather_img.src = 'https://files.readme.io/c3d2596-weather_icon_small_ic_mostly_clear3x.png'
  }

  //day and night cycle
  let time = data.timelines.hourly[6].time.substr(11)
  
  if (time = '00:00:00Z', '01:00:00Z','02:00:00Z','03:00:00Z','04:00:00Z','05:00:00Z') {
    Conditions = data.timelines.hourly[6].values.weatherCode = 1000;

  }
}



WeatherDispaly('Omsk');

searchBtn.addEventListener ('click', ()=> 
WeatherDispaly(searchBox.value));






