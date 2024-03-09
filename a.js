function getweather(){
    let city = document.getElementById("city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96469988da58e6bf7b65b58aa69be6a3`)
    .then(
        response =>{
            if(!response.ok){
                document.getElementById("displaydata").innerHTML = "Unable to Fetch Data ! ";
            }
            else{
                return response.json()
            }
        }
    )
    .then(data=>{
        document.getElementById("displaydatah1").innerText = "City = "+city;
        document.getElementById("displaydatah2").innerText = "Temperature = "+data["main"]["temp"];
        document.getElementById("displaydatah3").innerText = "Feels Like = "+data.main.feels_like;
        document.getElementById("displaydatah4").innerText = "Wind Speed = "+data.wind.speed;
        document.getElementById("displaydatah5").innerText = "Sunrise = "+data.sys.sunrise;
        document.getElementById("displaydatah6").innerText = "Sunset = "+data.sys.sunset;
    })
}
