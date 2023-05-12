let weather = {
    'apiKey' : "c436561364354447bcd01726230705",
    // fetchWeather: function(city){
    //     fetch("https://api.weatherapi.com/v1/current.json?key=c436561364354447bcd01726230705&q=London&aqi=no" )
    //  .then((response)=>response.json())
    //         .then((data)=>console.log(data));
    // },
    fetchWeather: function(city){
        // let city = prompt("enter city name for weather details")
        fetch("https://api.weatherapi.com/v1/current.json?key=c436561364354447bcd01726230705&q=" + city + "&aqi=no")
     .then((response)=>response.json())
     .then((data) => this.displayWeather(data))
     .then((data)=>console.log(data))
           
    },

    displayWeather: function(data){
        const { name, country } = data.location;
        const { icon, text } = data.current.condition;
        const { temp_c, humidity } = data.current;
        const { wind_kph } = data.current;
        const { last_updated } = data.current
        console.log(name, country, icon, text, temp_c, humidity, wind_kph, last_updated)

        document.getElementById("city").innerText = "Weather in " + name +", " + country;
        document.getElementById("icon").src = icon 
        document.getElementById("temp").innerText = temp_c+" °C";
        document.getElementById("desc").innerText = text ;
        document.getElementById("humidity").innerText = "Humidity: " + humidity+ "%";
        document.getElementById("wind").innerText ="Wind Speed: "+ wind_kph +"kph";
        document.getElementById("time").innerText = "Last Updated : " + last_updated

    },
    search: function(){
        this.fetchWeather(document.getElementById("search-bar").value)
    }

};

document.getElementById("search-bar1").addEventListener("click", function(){
    weather.search();
});
document.getElementById("search-bar").addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        weather.search();
    }
})