/* open weather API config */
const apiKey = "e61aa27d22eb0b30ab346a9f6441d600";
const url = `https://api.openweathermap.org/data/2.5/weather?q=porto alegre&appid=${apiKey}&units=metric`;

/* js selectors */
let weatherIcon = document.querySelector(".weather-icon");
let weatherTemp = document.querySelector(".weather-temp");
let weatherDesc = document.querySelector(".weather-desc");

new Vue({
  el: '#app',
  data: {
      weIcon: '',
      weTemp: '',
      weDesc: ''
  },
  methods: {
    update: function(){
      fetch(url)
      .then(response => response.json())
      .then(data => {
        //console.log(data.weather[0].icon);

        // Weather Icon
        //weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        this.weIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        // Weather description
        this.weDesc = data.weather[0].description;
        // Temperature - math.round so the number isn't fractional
        this.weTemp = Math.round(data.main.temp);
          })
        }
  }
});