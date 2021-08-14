const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
   const inputBtn = document.getElementById("input-btn").value;
   fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputBtn+"&appid=a72ecc03df2513602ded401643d0732d")
   .then(response => response.json())
   .then(data => {
       const cityName = data.name;
       const tem = data.main.temp;
       const temp = tem - 273.15
       const description = data.weather[0].description

       document.getElementById("city").innerText = cityName;
       document.getElementById("temp").innerText = temp.toFixed(2);
       document.getElementById("des").innerText = description;
   })
   .catch(res => alert("Please Type Right City Name"))
})